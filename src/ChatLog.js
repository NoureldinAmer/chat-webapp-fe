import React from "react";
import { Chat_History } from "./Mock_Data";
import { Avatar, Box, Stack, Typography } from "@mui/material";

function ChatLog() {
  return (
    <Stack spacing={3} p={2}>
      {Chat_History.map((elm) => {
        return elm.incoming ? (
          <Stack direction="row" justifyContent="end" alignItems={"center"} spacing={1.5} >
            <Box
              p={1.5}
              sx={{
                bgcolor: "red",
                width: "max-content",
                borderRadius: "16px",
              }}
            >
              <Typography>{elm.message}</Typography>
            </Box>
            <Avatar />
            
          </Stack>
        ) : (
          <Stack direction="row" justifyContent="start" width="47%" minWidth={"400px"} alignItems={"center"} spacing={1.5}>
            <Avatar />
            <Box
              p={1.5}
              sx={{
                bgcolor: "red",
                width: "max-content",
                borderRadius: "16px",
              }}
            >
              <Typography>{elm.message}</Typography>
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default ChatLog;
