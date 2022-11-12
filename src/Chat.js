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
import SendIcon from "@mui/icons-material/Send";
import { GrSend } from "react-icons/gr";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const MyFab = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#B2BAC2" : "#E0E0E0",
}));

const ChatTextField = ({ setEmojiPicker }) => {
  return (
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

function Chat() {
  const [emojiPicker, setEmojiPicker] = useState(false);


  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
      }}
    >
      <Stack minWidth="0" maxHeight={"calc(100vh - 64px)"} maxWidth="100%">
        <Box
          width={"100%"}
          maxWidth="100%"
          height={"100vh"}
          sx={{
            overflowY: "scroll",
            backdropFilter: "brightness(1.2)",
          }}
        >
          <ChatLog />
        </Box>

        <Box
          sx={{
            width: "100%",
            boxShadow: 4,
          }}
          maxWidth="100%"
          p={2}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Box
              sx={{
                display: emojiPicker ? "inline" : "none",
                zIndex: 10,
                position: "fixed",
                bottom: 81,
                right: 90,
              }}
            >
              <Picker data={data} onEmojiSelect={console.log} theme="light" perLine="8" />
            </Box>
            <ChatTextField setEmojiPicker={setEmojiPicker} />
            <MyFab
              sx={{
                height: 48,
                width: 48,
                borderRadius: 2.5,
              }}
            >
              <GrSend size={"25px"} />
            </MyFab>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chat;
