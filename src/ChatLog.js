import React, { useRef, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";
import Connection from "./Components/Connection";
import OutgoingText from "./Components/Text/Outgoing";
import IncomingText from "./Components/Text/Incoming";
import IncomingSticker from "./Components/Sticker/IncomingSticker";
import OutgoingSticker from "./Components/Sticker/OutgoingSticker";
import { IncomingLink } from "./Components/Link/Incoming";
import { OutgoingLink } from "./Components/Link/Outgoing";

function getProfilePic(name) {
  return createAvatar(style, {
    seed: name,
    style: "transparent",
    scale: 100,
  });
}

function ChatLog({ chatHistory, slideEnabled }) {
  let userID = localStorage.getItem("userID");

  const scrollRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBottomAuto = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 1000);
  };

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
              <OutgoingSticker
                key={index}
                slideEnabled={slideEnabled}
                date={date}
                avatarSVG={avatarSVG}
                shouldHide={shouldHide}
                elm={elm}
              />
            ) : (
              <IncomingSticker
                key={index}
                slideEnabled={slideEnabled}
                date={date}
                avatarSVG={avatarSVG}
                shouldHide={shouldHide}
                elm={elm}
              />
            );
          } else if (elm.type === "text") {
            return elm.msgOwnerID === userID ? (
              <OutgoingText
                key={index}
                slideEnabled={slideEnabled}
                date={date}
                avatarSVG={avatarSVG}
                shouldHide={shouldHide}
                elm={elm}
              />
            ) : (
              <IncomingText
                key={index}
                slideEnabled={slideEnabled}
                date={date}
                avatarSVG={avatarSVG}
                shouldHide={shouldHide}
                elm={elm}
              />
            );
          } else if (elm.type === "link") {
            return elm.msgOwnerID === userID ? (
              <OutgoingLink
                key={index}
                slideEnabled={slideEnabled}
                elm={elm}
                date={date}
                avatarSVG={avatarSVG}
                shouldHide={shouldHide}
              />
            ) : (
              <IncomingLink
                key={index}
                elm={elm}
                slideEnabled={slideEnabled}
                date={date}
                avatarSVG={avatarSVG}
                shouldHide={shouldHide}
              />
            );
          } else if (elm.type === "connection") {
            return <Connection key={index} scrollRef={scrollRef} elm={elm} />;
          }
        })}
      </Stack>
    </Box>
  );
}

export default ChatLog;
