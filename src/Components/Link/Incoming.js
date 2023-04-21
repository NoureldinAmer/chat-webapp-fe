import React from "react";
import { Avatar, Box, Slide, Stack, Typography } from "@mui/material";
import Embed from "react-embed";
import SVG from "react-inlinesvg";
import { formatDistanceToNowStrict } from "date-fns";

const isMobileDevice = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
};

export function IncomingLink(props) {
  //console.log(props.elm);
  return (
    <>
    <Slide in={true} timeout={props.slideEnabled ? 300 : 0} direction={"up"}>
    <Stack direction={"column"} key={props.key}>
      <Stack
          direction="row"
          justifyContent="start"
          alignItems={"center"}
          display={props.shouldHide ? "none" : null}
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

      <Stack direction="row" justifyContent="start">
        <Box
          px={1.5}
          py={1.5}
          sx={{
            bgcolor: "lightgrey",
            borderRadius: 1.5,
            width: "max-content",
            maxWidth: isMobileDevice() ? "90%" : "60%",
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="column"
              alignItems="center"
              sx={{
                borderRadius: 1,
              }}
            >
              <Embed isDark url={props.elm.link} />
            </Stack>
            <Typography
              sx={{
                color: "black",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
              fontFamily={"SF pro"}
            >
              {props.elm.message}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Stack>
    </Slide>
    </>
  );
}
