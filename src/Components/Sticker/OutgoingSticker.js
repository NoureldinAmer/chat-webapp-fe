import React from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { Avatar, Box, Slide, Stack, Typography } from "@mui/material";
import SVG from "react-inlinesvg";


export default function OutgoingSticker(props) {
  return (
    <>
    <Slide in={true} timeout={props.slideEnabled ? 300 : 0} direction={"up"}>
      <Stack direction={"column"} key={props.key}>
        <Stack
          direction="row"
          justifyContent="end"
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
        <Stack
          direction="row"
          justifyContent="end"
          alignItems={"center"}
          spacing={1.5}
        >
          <span
            style={{
              fontSize: "6rem",
              padding: 0,
              lineHeight: "1",
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            {props.elm.message}
          </span>
        </Stack>
      </Stack>
      </Slide>
      </>
  );
}