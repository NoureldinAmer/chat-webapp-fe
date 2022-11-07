import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Chat";
import Settings from "./Settings";
import Navbar from "./NavBar";
import Login from "./Login";
import ChatHistory from "./ChatHistory";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/system";
import { Paper } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    //router
      <Router>
        <Paper sx={{ boxShadow: "none", border: 'none', borderRadius: 0 }}>
          <Switch>
            <Route path="/login" component={Login} />
            <Paper sx={{ boxShadow: "none", border: 'none',  borderRadius: 0 }}>
              <Navbar>
                <Switch>
                  <Route exact path="/" component={Chat} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/history" component={ChatHistory} />
                </Switch>
              </Navbar>
            </Paper>
          </Switch>
        </Paper>
      </Router>
  );
}

export default App;
