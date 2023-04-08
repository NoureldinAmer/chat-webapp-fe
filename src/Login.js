import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import { Alert } from "@mui/material";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';
import SVG from 'react-inlinesvg';


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/NoureldinAmer">
        Nour Amer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [name, setName] = useState("Enter your name");
  const [alert, setAlert] = useState(true)
  
  const avatarSVG = createAvatar(style, {
    seed: name,
    style: 'transparent',
    scale: 100
  });

  useEffect(() => {
    //document.title = "Login | JobMatch";
    const handleLogout = () => {
      localStorage.removeItem("name");
      localStorage.removeItem("userID");;
    }

    handleLogout()
  }, []);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(avatarSVG);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const data = {
      name: name,
      avatar: avatarSVG
    }
    const raw = JSON.stringify(data);

    let requestOptions = {
			url: `${process.env.REACT_APP_API_URL}/auth/login`,
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login` , requestOptions);
    if(response.status === 200) {
      let result = await response.json();
      localStorage.setItem('name', name);
      //TODO => set userID
      //localStorage.setItem('userID', result.login_details.ID);
      history.push(history.push("/"));
      //TODO => successful login snackbar
    } else {
      //TODO=>set error in snackbar
    }
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              width: "160px",
              height: "160px",
              bgcolor: "white"
            }}
          >
            <SVG src={avatarSVG} />
          </Avatar>
          <Typography component="h1" variant="h5">
            {name ? name : "Enter your name"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
