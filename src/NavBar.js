import React, { useEffect, useMemo, useState } from "react";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CallIcon from "@mui/icons-material/Call";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";
import { routes } from "./routes";
import LogoutIcon from "@mui/icons-material/Logout";
import { socket, connectSocket } from "./socket";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeProvider } from "@emotion/react";
import IncomingCall from "./Components/IncomingCall";
import { Paper } from "@mui/material";

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navbar(props) {
  const [toolbarHeader, setToolbarHeader] = useState("Chat");
  const [openModal, setOpenModal] = useState(false);
  const [modalName, setModalName] = useState(null);
  const [incomingCall, setIncomingCall] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "true" ? true : false
  );

  const history = useHistory();

  const [open, setOpen] = useState(isMobileDevice() ? false : true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const user_id = localStorage.getItem("userID");
    connectSocket(user_id);

    socket.on("user_connection", (data) => {
      props.addMessage(data);
    });

    socket.on("incoming_message", (data) => {
      props.addMessage(data);
    });

    socket.on("incoming_call", (data) => {
      console.log(data);
      if (data.userID === localStorage.getItem("userID")) {
        setIncomingCall(false);
        setModalName("Me");
      } else {
        setIncomingCall(true);
        setModalName(data.name);
      }
      setOpenModal(true);
    });

    socket.on("chat_log", (data) => {
      const transformedData = data.map((item, index) => {
        const date = item.created_at;
        const message = {
          id: item._id,
          type: item.type,
          message: item.text,
          msgOwner: item.from.name,
          msgOwnerID: item.from._id,
          date,
        };
        if (item.link) {
          message.link = item.link;
        }
        return message;
      });
      props.addChatLog(transformedData);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setToolbarHeader(props.navbarHeader);
  }, [props.navbarHeader]);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        primary: {
          main: "#001E3D",
          light: "#F0F4FA",
          dark: "#001E3D",
        },
        secondary: {
          main: "#65B2FF",
          light: "#e6e9ed",
          dark: "#0A1929",
        },
        sideBarText: {
          main: "black",
          light: "#6f7e86",
          dark: "rgb(178, 186, 194)",
          selectedLight: "#5B96F7",
          selectedDark: "#132f4c",
          hoverLight: "#5B96F7",
          hoverDark: "F0F7FF",
          selectedTextLight: "#FFFFFF",
          selectedTextDark: "#63aefb",
        },
        sideBarIcons: {
          main: "black",
          light: "#6f7e86",
          dark: "rgb(178, 186, 194)",
          selectedLight: "#FFFFFF",
          selectedDark: "#63aefb",
        },
      },
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <IncomingCall
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        modalName={modalName}
        incomingCall={incomingCall}
      />
      <Box sx={{ display: "flex", minWidth: "400px" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            height: "64px",
            boxShadow: 2,
            bgcolor:
              theme.palette.mode === "light"
                ? "secondary.light"
                : "secondary.dark",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                display: isMobileDevice() ? "none" : null,
                marginRight: 5,
                ...(open && { display: "none" }),
                color:
                  theme.palette.mode === "light"
                    ? "sideBarIcons.light"
                    : "sideBarIcons.dark",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                color:
                  theme.palette.mode === "light"
                    ? "sideBarText.light"
                    : "sideBarText.dark",
              }}
              fontFamily={"IBM Plex Sans"}
              fontWeight="500"
            >
              {toolbarHeader}
            </Typography>
            {toolbarHeader === "Chat" && (
              <IconButton
                onClick={() => {
                  socket.emit("new_call", {
                    from: localStorage.getItem("userID"),
                  });
                }}
              >
                <CallIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              bgcolor:
                theme.palette.mode === "light"
                  ? "secondary.light"
                  : "secondary.dark",
              color:
                theme.palette.mode === "light"
                  ? "sideBarText.light"
                  : "sideBarText.dark",
            },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {routes.map((route) => (
              <ListItem
                key={route.title}
                sx={{
                  display: "block",
                }}
                onClick={() => {
                  history.push(route.link);
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    borderRadius: "10px",
                    backgroundColor:
                      route.title === toolbarHeader
                        ? theme.palette.mode === "light"
                          ? "sideBarText.selectedLight"
                          : "sideBarText.selectedDark"
                        : null,
                    color:
                      route.title === toolbarHeader
                        ? theme.palette.mode === "light"
                          ? "sideBarText.selectedTextLight"
                          : "sideBarText.selectedTextDark"
                        : null,
                    "&:hover": {
                      backgroundColor:
                        route.title === toolbarHeader
                          ? theme.palette.mode === "light"
                            ? "sideBarText.hoverLight"
                            : "sideBarText.hoverDark"
                          : null,
                    },
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color:
                        route.title === toolbarHeader
                          ? theme.palette.mode === "light"
                            ? "sideBarIcons.selectedLight"
                            : "sideBarIcons.selectedDark"
                          : theme.palette.mode === "light"
                          ? "sideBarIcons.light"
                          : "sideBarIcons.dark",
                    }}
                  >
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={route.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontFamily: "IBM Plex Sans",
                      fontWeight: "650",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem key="darkmode" sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "10px",
                }}
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      theme.palette.mode === "light"
                        ? "sideBarIcons.light"
                        : "sideBarIcons.dark",
                  }}
                >
                  {darkMode ? <DarkModeOutlinedIcon /> : <LightModeIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={darkMode ? "Dark mode" : "Light mode"}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "650",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem key="signout" sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "10px",
                }}
                onClick={() => {
                  history.push("./login");
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      theme.palette.mode === "light"
                        ? "sideBarIcons.light"
                        : "sideBarIcons.dark",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Sign Out"}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: "650",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 0, minWidth: 0 }}>
          <DrawerHeader />
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              margin: 0,
              borderRadius: 0,
              backgroundColor:
                theme.palette.mode === "light" ? "color" : "#0B1929",
            }}
          >
            {props.children}
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
