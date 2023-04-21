import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";

const CustomBox = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.mode === "dark" ? "#303C48" : "#D3D3D3",
}));

export default function Connection(props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" key={props.key}>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        position="relative"
        marginTop={1.5}
        marginBottom={1.5}
      >
        <CustomBox flexGrow={1} borderBottom="1px solid" marginRight={1} />
        <Typography variant="caption" textAlign="center">
          <strong>{props.elm.user}</strong>{" "}
          {props.elm.connection === "connection"
            ? "joined the chat"
            : "left the chat"}
        </Typography>
        <CustomBox flexGrow={1} borderBottom="1px solid" marginLeft={1} />
      </Box>
      <div ref={props.scrollRef}></div>
    </Stack>
  );
}