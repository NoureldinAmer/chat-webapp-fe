import React from "react";
import { Chat_History } from "./Mock_Data";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";
import SVG from "react-inlinesvg";

function ChatLog() {
  function getProfilePic(name) {
    return createAvatar(style, {
      seed: name,
      style: "transparent",
      scale: 100,
    });
  }

  return (
    <Stack spacing={3} p={2}>
      {Chat_History.map((elm) => {
        console.log(elm.msgOwner);
        const avatarSVG = getProfilePic(elm.msgOwner);
        return elm.incoming ? (
          <Stack direction={"column"}>
            <Stack
              direction="row"
              justifyContent="end"
              alignItems={"center"}
              spacing={0.4}
            >
              <Avatar
                sx={{
                  m: 1,
                  width: "20px",
                  height: "20px",
                  bgcolor: "rgba(256,256,256, 1)",
                }}
              >
                <SVG src={avatarSVG} />
              </Avatar>
              <Typography variant="caption" fontWeight={550}>
                {elm.msgOwner}
              </Typography>
              <Typography variant="caption" fontSize={21} fontWeight={900}>
                &#183;
              </Typography>
              <Typography variant="caption" color={"#8A898E"}>
                1 min ago
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="end"
              alignItems={"center"}
              spacing={1.5}
            >
              <Box
                justifyContent="end"
                p={1.5}
                bgcolor="#5B96F7"
                sx={{
                  width: "max-content",
                  borderRadius: "16px",
                  maxWidth: "50%",
                }}
              >
                <Typography sx={{ color: "white" }} fontFamily={"SF pro"}>
                  {elm.message}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        ) : (
          <Stack direction={"column"}>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems={"center"}
              spacing={0.5}
            >
              <Avatar
                sx={{
                  m: 1,
                  width: "20px",
                  height: "20px",
                  bgcolor: "rgba(256,256,256, 1)",
                }}
              >
                <SVG src={avatarSVG} />
              </Avatar>
              <Typography variant="caption" fontWeight={550}>
                {elm.msgOwner}
              </Typography>
              <Typography variant="caption" fontSize={21} fontWeight={900}>
                &#183;
              </Typography>
              <Typography variant="caption" color={"#8A898E"}>
                1 min ago
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems={"center"}
              spacing={1.5}
            >
              <Box
                justifyContent="start"
                p={1.5}
                sx={{
                  bgcolor: "lightgrey",
                  width: "max-content",
                  borderRadius: "16px",
                  maxWidth: "60%",
                }}
              >
                <Typography sx={{ color: "black" }} fontFamily={"SF pro"}>
                  {elm.message}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default ChatLog;
