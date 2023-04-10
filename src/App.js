import React, { createContext, useEffect, useMemo, useState } from "react";
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
import { Chat_History } from "./Mock_Data";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [navbarHeader, setNavbarHeader] = useState(null);
  const addNavbarHeader = (title) => {
    setNavbarHeader(title);
  }

  const addMessage = (message) => {
    setChatHistory((prevMessages) => [...prevMessages, message]);
  }

  const addChatLog = (messages) => {
    setChatHistory(messages)
  }

  return (
    //router
    <Router>
      <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
        <Switch>
          <Route path="/login" component={Login} />
          <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
            <Navbar addMessage={addMessage} addChatLog={addChatLog} navbarHeader={navbarHeader} >
              <Switch>
                <Route
                  exact path="/"
                  render={(props) => (
                    <Chat chatHistory={chatHistory} addNavbarHeader={addNavbarHeader} {...props} />
                  )}
                />
                {/* <Route exact path="/settings" component={Settings} /> */}
                {/* <Route exact path="/history" component={ChatHistory} /> */}
                <Route
                  exact path="/history"
                  render={(props) => (
                    <ChatHistory addNavbarHeader={addNavbarHeader} {...props} />
                  )}
                />
              </Switch>
            </Navbar>
          </Paper>
        </Switch>
      </Paper>
    </Router>
  );
}

export default App;
