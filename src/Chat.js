import React, { useEffect, useMemo, useRef, useState } from "react";
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
import SendIcon from "@mui/icons-material/Send";
import { GrSend } from "react-icons/gr";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { socket } from "./socket";
import { useHistory } from "react-router-dom";

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
};

const MyFab = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#B2BAC2" : "#E0E0E0",
}));

const ChatTextField = ({ setEmojiPicker, setText, inputText }) => {
  return (
    <TextField
      fullWidth
      value={inputText}
      onChange={(event) => {
        setText(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          socket.emit("new_message", {
            message: inputText,
            from: localStorage.getItem("userID"),
            type: "text",
          });
          setText("");
        }
      }}
      placeholder="type your message here"
      variant="filled"
      autoComplete="off"
      sx={{
        "& .MuiInputBase-input": {
          paddingTop: "12px",
          paddingBottom: "12px",
        },
      }}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setEmojiPicker((prev) => !prev);
              }}
            >
              <EmojiEmotionsOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

function Chat({ chatHistory, addNavbarHeader }) {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [inputText, setInputText] = useState("");
  const [slideEnabled, setSlideEnabled] = useState(false);
  const history = useHistory();



  useEffect(() => {
    if(!localStorage.getItem('userID')) {
      history.push('./login');
    }
    addNavbarHeader("Chat");
  }, [])

  const setText = (text) => {
    setInputText(text);
  };

  const handleEmojiSelect = (event) => {
    setEmojiPicker(false);
    socket.emit("new_message", {
      message: event.native,
      from: localStorage.getItem("userID"),
      type: "sticker",
    });
  }
  

  

  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: isMobileDevice() ? "87vh" : "calc(100vh - 64px)",
        maxHeight: isMobileDevice() ? "87vh" : "calc(100vh - 64px)",
        overflow: "hidden",
        "@media (max-width: 600px)": {
          height: "calc(100vh - 160px)",
          maxHeight: "calc(100vh - 160px)",
          overflow: "hidden",
        },
      }}
    >
      <Stack minWidth="0" maxHeight={"100%"} maxWidth="100%">
        <ChatLog chatHistory={chatHistory} slideEnabled={slideEnabled} />
        

        <Box
          sx={{
            width: "100%",
            boxShadow: 4,
          }}
          maxWidth="100%"
          p={2}
          paddingBottom={isMobileDevice() ? 3 : null}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={3} sx={{}}>
            <Box
              sx={{
                display: emojiPicker ? "inline" : "none",
                zIndex: 10,
                position: "fixed",
                bottom: 81,
                right: 90,
              }}
            >
              <Picker
                data={data}
                theme="light"
                perLine={isMobileDevice() ? 4 : 8}
                searchPosition="none"
                previewPosition="none"
                navPosition="none"
                emojiButtonSize={40}
                onEmojiSelect={handleEmojiSelect}
              />
            </Box>
            <ChatTextField
              setEmojiPicker={setEmojiPicker}
              setText={setText}
              inputText={inputText}
            />

            <MyFab
              disabled={inputText ? false : true}
              sx={{
                height: 48,
                width: 48,
                borderRadius: 2.5,
              }}
              onClick={() => {
                socket.emit("new_message", {
                  message: inputText,
                  from: localStorage.getItem("userID"),
                  type: "text",
                });
                setInputText("");
                setSlideEnabled(true);
              }}
            >
              <GrSend size={"25px"} />
            </MyFab>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Chat;
