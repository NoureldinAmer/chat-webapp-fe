import React, { useMemo, useState } from "react";
import { createTheme, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  Avatar,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChatLog from "./ChatLog";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SendIcon from '@mui/icons-material/Send';
import { GrSend } from "react-icons/gr";

const CustomInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `4px 0 0 4px`,
      },
    },
  },
}));

function Chat() {
  const [darkMode, setDarkMode] = useState(false);
  
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
          light: "#F8FAFF",
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
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
      }}
    >
      <Stack
        minWidth= "0"
        maxHeight={"calc(100vh - 64px)"}
        maxWidth="100%"
      >
        <Box
          width={"100%"}
          maxWidth="100%"
          height={"1000px"}
          sx={{
            overflowY: "scroll",
            backdropFilter: "brightness(1.2)"
          }}
        >
          <ChatLog />
        </Box>

        <Box
          sx={{
            width: "100%",
            boxShadow: 4,
            backgroundColor: theme.palette.mode == "light"
            ? "sideBarText.light"
            : "sideBarText.dark",
            
          }}
          maxWidth="100%"
          p={2}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <TextField
              fullWidth
              placeholder="something"
              variant="filled"
              sx={{
                "& .MuiInputBase-input": {
                  paddingTop: "12px",
                  paddingBottom: "12px",
                },
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment>
                    <IconButton aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <AddCircleOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <EmojiEmotionsOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Fab
              sx={{
                height: 48,
                width: 48,
                borderRadius: 2.5,
              }}
            >
              <GrSend size={"25px"}/>
            </Fab>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chat;
