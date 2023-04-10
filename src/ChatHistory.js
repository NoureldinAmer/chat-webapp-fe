import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
//import { chat_log } from "./Mock_Data";
import ChatLog from "./ChatLog";
import { useHistory } from "react-router-dom";

function ChatHistory({addNavbarHeader}) {
  const [chatLog, setChatLog] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("userID")) {
      history.push("./login");
    } else {
      addNavbarHeader("Chat history")
      const getChatHistory = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "authorization",
          `Bearer ${localStorage.getItem("userID")}`
        );

        let requestOptions = {
          url: `${process.env.REACT_APP_API_URL}/user/chat_log`,
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/user/chat_log`,
          requestOptions
        );
        if (response.status === 200) {
          const result = await response.json();

          const transformedData = result.chat_log.map((item, index) => {
            const date = item.created_at;
            return {
              id: item._id,
              type: item.type,
              message: item.text,
              msgOwner: localStorage.getItem("name"),
              msgOwnerID: item.from,
              date,
            };
          });

          setChatLog(transformedData);
        }
      };

      getChatHistory();
    }
  }, []);

  return (
    <Box
      width={"100%"}
      maxWidth="100%"
      height={"100vh"}
      sx={{
        overflowY: "scroll",
        backdropFilter: "brightness(1.2)",
      }}
    >
      <ChatLog chatHistory={chatLog} slideEnabled={false} />
    </Box>
  );
}

export default ChatHistory;
