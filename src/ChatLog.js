import React, { useRef, useEffect } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { Avatar, Box, Slide, Stack, Typography } from "@mui/material";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";
import SVG from "react-inlinesvg";
import styled from "@emotion/styled";

function getProfilePic(name) {
  return createAvatar(style, {
    seed: name,
    style: "transparent",
    scale: 100,
  });
}

const CustomBox = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.mode === "dark" ? "#303C48" : "#D3D3D3",
}));

function ChatLog({ chatHistory, slideEnabled }) {
  let userID = localStorage.getItem("userID");

  const scrollRef = useRef(null);
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBottomAuto = () => {
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  };

  // useEffect(() => {
  //   scrollToBottomAuto();
  // }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  useEffect(() => {
    if (chatHistory.length > 0) {
      scrollToBottomAuto();
    }
  }, [chatHistory.length]);

  return (
    <Box
      ref={scrollRef}
      width={"100%"}
      maxWidth="100%"
      height={"100vh"}
      sx={{
        overflowY: "scroll",
        backdropFilter: "brightness(1.2)",
      }}
    >
      <Stack spacing={1} p={2} ref={scrollRef}>
        {chatHistory.map((elm, index) => {
          const date = new Date(elm.date);
          const avatarSVG = getProfilePic(elm.msgOwner);
          const prevElm = index > 0 ? chatHistory[index - 1] : null;
          let timeDifference;
          if (!prevElm) {
            timeDifference = 100000000;
          } else {
            timeDifference = elm.date - prevElm.date;
          }
          const shouldHide =
            prevElm &&
            prevElm.msgOwner === elm.msgOwner && //messages are owned by the same user
            timeDifference < 300000; //difference between messages is < 5 mins
          if (elm.type === "sticker") {
            return elm.msgOwnerID === userID ? (
              <Slide
                key={index}
                in={true}
                timeout={slideEnabled ? 300 : 0}
                direction={"up"}
              >
                <Stack direction={"column"} key={`${elm.id}`}>
                  <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems={"center"}
                    spacing={0.4}
                    display={shouldHide ? "none" : null}
                    marginTop={2}
                    p={0}
                  >
                    <Avatar
                      sx={{
                        mr: 1,
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
                    <Typography
                      variant="caption"
                      fontSize={21}
                      fontWeight={900}
                    >
                      &#183;
                    </Typography>
                    <Typography variant="caption" color={"#8A898E"}>
                      {Date.now() - date < 60
                        ? "now"
                        : formatDistanceToNowStrict(date, { addSuffix: true })}
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
                      {elm.message}
                    </span>
                  </Stack>
                </Stack>
              </Slide>
            ) : (
              <Slide
                key={index}
                in={true}
                timeout={slideEnabled ? 300 : 0}
                direction={"up"}
              >
                <Stack direction={"column"} key={elm.id}>
                  <Stack
                    direction="row"
                    justifyContent="start"
                    alignItems={"center"}
                    display={shouldHide ? "none" : null}
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
                    <Typography
                      variant="caption"
                      fontSize={21}
                      fontWeight={900}
                    >
                      &#183;
                    </Typography>
                    <Typography variant="caption" color={"#8A898E"}>
                      {Date.now() - date < 60
                        ? "now"
                        : formatDistanceToNowStrict(date, { addSuffix: true })}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="start"
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
                      {elm.message}
                    </span>
                  </Stack>
                </Stack>
              </Slide>
            );
          } else if (elm.type === "text") {
            return elm.msgOwnerID === userID ? (
              <Slide
                key={index}
                in={true}
                timeout={slideEnabled ? 300 : 0}
                direction={"up"}
              >
                <Stack direction={"column"} key={`${elm.id}`}>
                  <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems={"center"}
                    spacing={0.4}
                    display={shouldHide ? "none" : null}
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
                      <SVG src={avatarSVG} />
                    </Avatar>
                    <Typography variant="caption" fontWeight={550}>
                      {elm.msgOwner}
                    </Typography>
                    <Typography
                      variant="caption"
                      fontSize={21}
                      fontWeight={900}
                    >
                      &#183;
                    </Typography>
                    <Typography variant="caption" color={"#8A898E"}>
                      {Date.now() - date < 60
                        ? "now"
                        : formatDistanceToNowStrict(date, { addSuffix: true })}
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
                        maxWidth: "50%",
                      }}
                    >
                      <Typography sx={{ color: "white" }} fontFamily={"SF pro"}>
                        {elm.message}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Slide>
            ) : (
              <Slide
                key={index}
                in={true}
                timeout={slideEnabled ? 300 : 0}
                direction={"up"}
              >
                <Stack direction={"column"} key={elm.id}>
                  <Stack
                    direction="row"
                    justifyContent="start"
                    alignItems={"center"}
                    display={shouldHide ? "none" : null}
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
                    <Typography
                      variant="caption"
                      fontSize={21}
                      fontWeight={900}
                    >
                      &#183;
                    </Typography>
                    <Typography variant="caption" color={"#8A898E"}>
                      {Date.now() - date < 60
                        ? "now"
                        : formatDistanceToNowStrict(date, { addSuffix: true })}
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
                      p={1}
                      paddingLeft={1.5}
                      paddingRight={1.5}
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
              </Slide>
            );
          } else if (elm.type === "connection") {
            return (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                key={elm.id}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  width="100%"
                  position="relative"
                  marginTop={1.5}
                  marginBottom={1.5}
                >
                  <CustomBox
                    flexGrow={1}
                    borderBottom="1px solid"
                    marginRight={1}
                  />
                  <Typography variant="caption" textAlign="center">
                    <strong>{elm.user}</strong>{" "}
                    {elm.connection === "connection"
                      ? "joined the chat"
                      : "left the chat"}
                  </Typography>
                  <CustomBox
                    flexGrow={1}
                    borderBottom="1px solid"
                    marginLeft={1}
                  />
                </Box>
                <div ref={scrollRef}></div>
              </Stack>
            );
          }
          // return elm.msgOwnerID === userID ? (
          //   <Slide
          //     key={index}
          //     in={true}
          //     timeout={slideEnabled ? 300 : 0}
          //     direction={"up"}
          //   >
          //     <Stack direction={"column"} key={`${elm.id}`}>
          //       <Stack
          //         direction="row"
          //         justifyContent="end"
          //         alignItems={"center"}
          //         spacing={0.4}
          //         display={shouldHide ? "none" : null}
          //         marginTop={2}
          //       >
          //         <Avatar
          //           sx={{
          //             m: 1,
          //             width: "20px",
          //             height: "20px",
          //             bgcolor: "rgba(256,256,256, 1)",
          //           }}
          //         >
          //           <SVG src={avatarSVG} />
          //         </Avatar>
          //         <Typography variant="caption" fontWeight={550}>
          //           {elm.msgOwner}
          //         </Typography>
          //         <Typography variant="caption" fontSize={21} fontWeight={900}>
          //           &#183;
          //         </Typography>
          //         <Typography variant="caption" color={"#8A898E"}>
          //           {Date.now() - date < 60
          //             ? "now"
          //             : formatDistanceToNowStrict(date, { addSuffix: true })}
          //         </Typography>
          //       </Stack>
          //       <Stack
          //         direction="row"
          //         justifyContent="end"
          //         alignItems={"center"}
          //         spacing={1.5}
          //       >
          //         <Box
          //           justifyContent="end"
          //           p={1}
          //           paddingLeft={1.5}
          //           paddingRight={1.5}
          //           bgcolor="#5B96F7"
          //           sx={{
          //             width: "max-content",
          //             borderRadius: "16px",
          //             maxWidth: "50%",
          //           }}
          //         >
          //           <Typography sx={{ color: "white" }} fontFamily={"SF pro"}>
          //             {elm.from}
          //           </Typography>
          //         </Box>
          //       </Stack>
          //     </Stack>
          //   </Slide>
          // ) : (
          //   <Slide
          //     key={index}
          //     in={true}
          //     timeout={slideEnabled ? 300 : 0}
          //     direction={"up"}
          //   >
          //     <Stack direction={"column"} key={elm.id}>
          //       <Stack
          //         direction="row"
          //         justifyContent="start"
          //         alignItems={"center"}
          //         display={shouldHide ? "none" : null}
          //         spacing={0.5}
          //       >
          //         <Avatar
          //           sx={{
          //             m: 1,
          //             width: "20px",
          //             height: "20px",
          //             bgcolor: "rgba(256,256,256, 1)",
          //           }}
          //         >
          //           <SVG src={avatarSVG} />
          //         </Avatar>
          //         <Typography variant="caption" fontWeight={550}>
          //           {elm.msgOwner}
          //         </Typography>
          //         <Typography variant="caption" fontSize={21} fontWeight={900}>
          //           &#183;
          //         </Typography>
          //         <Typography variant="caption" color={"#8A898E"}>
          //           {Date.now() - date < 60
          //             ? "now"
          //             : formatDistanceToNowStrict(date, { addSuffix: true })}
          //         </Typography>
          //       </Stack>
          //       <Stack
          //         direction="row"
          //         justifyContent="start"
          //         alignItems={"center"}
          //         spacing={1.5}
          //       >
          //         <Box
          //           justifyContent="start"
          //           p={1}
          //           paddingLeft={1.5}
          //           paddingRight={1.5}
          //           sx={{
          //             bgcolor: "lightgrey",
          //             width: "max-content",
          //             borderRadius: "16px",
          //             maxWidth: "60%",
          //           }}
          //         >
          //           <Typography sx={{ color: "black" }} fontFamily={"SF pro"}>
          //             {elm.from}
          //           </Typography>
          //         </Box>
          //       </Stack>
          //     </Stack>
          //   </Slide>
          // );
        })}
      </Stack>
    </Box>
  );
}

export default ChatLog;
