import React from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { Avatar, Box, Slide, Stack, Typography } from "@mui/material";
import SVG from "react-inlinesvg";

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
};

export default function OutgoingText(props) {
  return (
    <>
    <Slide in={true} timeout={props.slideEnabled ? 300 : 0} direction={"up"}>
      <Stack direction={"column"} key={props.key}>
        <Stack
          direction="row"
          justifyContent="end"
          alignItems={"center"}
          spacing={0.4}
          display={props.shouldHide ? "none" : null}
          marginTop={2}
        >
          <Avatar
            sx={{
              m: 1,
              width: "20px",
              height: "20px",
              bgcolor: "rgba(256,256,256, 1)",
            }}
          >
            <SVG src={props.avatarSVG} />
          </Avatar>
          <Typography variant="caption" fontWeight={550}>
            {props.elm.msgOwner}
          </Typography>
          <Typography variant="caption" fontSize={21} fontWeight={900}>
            &#183;
          </Typography>
          <Typography variant="caption" color={"#8A898E"}>
            {Date.now() - props.date < 60
              ? "now"
              : formatDistanceToNowStrict(props.date, {
                  addSuffix: true,
                })}
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
            p={1}
            paddingLeft={1.5}
            paddingRight={1.5}
            bgcolor="#5B96F7"
            sx={{
              width: "max-content",
              borderRadius: "16px",
              maxWidth: isMobileDevice() ? "70%" : "55%",
            }}
          >
            <Typography
              sx={{
                color: "white",
                whiteSpace: "pre-wrap", 
                wordWrap: "break-word", 
              }}
              fontFamily={"SF pro"}
            >
              {props.elm.message}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Slide>
    </>
  );
}
