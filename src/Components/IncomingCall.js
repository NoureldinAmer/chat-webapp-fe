import React, {useEffect} from "react";
import { Avatar, Box, Fab, Modal, Stack, Typography } from "@mui/material";
import { createAvatar } from "@dicebear/avatars";
import { PhoneCall, PhoneX } from "@phosphor-icons/react";
import styled from "@emotion/styled";
import * as style from "@dicebear/avatars-avataaars-sprites";
import SVG from "react-inlinesvg";
import { keyframes } from '@mui/system';
import useSound from 'use-sound';
import callTune from '../assets/ringtone.mp3';



const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#18385C" : "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "85%",
  borderRadius: 10,
}));

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const wave = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;


function getProfilePic(name) {
  let localName = name;
  if (name === "Me") {
    localName = localStorage.getItem("name");
  }
  return createAvatar(style, {
    seed: localName,
    style: "transparent",
    scale: 100,
  });
}

export default function IncomingCall(props) {
  const [play, { stop }] = useSound(callTune, { volume: 0.5, interrupt: true, loop: true });

  useEffect(() => {
    if (props.openModal) {
      play();
    } else {
      stop();
    }
  }, [props.openModal, play, stop]);
  

  return (
    <Modal
      open={props.openModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <CustomBox
        sx={{
          width: 400,
        }}
      >
        <Stack
          direction={"column"}
          alignItems={"center"}
          padding={3}
          spacing={2}
        >
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              boxShadow: 10,
              animation: `${pulse} 2s infinite`,
            }}
          >
            <SVG src={getProfilePic(props.modalName)} />
          </Avatar>

          <Stack direction={"column"} alignItems={"center"} spacing={0}>
            <Typography
              variant="h4"
              noWrap
              component="div"
              fontFamily={"IBM Plex Sans"}
              fontWeight="500"
            >
              {props.modalName}
            </Typography>

            <Typography
              variant="subtitle1"
              noWrap
              component="div"
              fontFamily={"IBM Plex Sans"}
              fontWeight="400"
            >
              {props.incomingCall ? "Incoming Call" : "Outgoing call"}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={props.incomingCall ? "space-between" : "center"}
            sx={{ width: "80%", p: 1 }}
          >
            {props.incomingCall && (
              <Stack direction={"column"} alignItems={"center"} spacing={1.2}>
                <Fab color="success"
                  sx={{
                    position: 'relative',
                    overflow: 'visible',
                    '&::before, &::after': {
                      content: '""',
                      position: 'absolute',
                      borderRadius: '50%',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      background: 'rgba(0, 200, 83, 0.2)', // Adjust the color and opacity to make the effect subtle
                      animation: `${wave} 2s infinite`,
                    },
                    '&::after': {
                      animationDelay: '1s',
                    },
                  }}
                >
                  <PhoneCall size={32} />
                </Fab>
                <Typography
                  variant="subtitle1"
                  noWrap
                  component="div"
                  fontFamily={"IBM Plex Sans"}
                  fontWeight="350"
                >
                  Join Call
                </Typography>
              </Stack>
            )}

            <Stack direction={"column"} alignItems={"center"} spacing={1.2}>
              <Fab 
                color="error" 
                onClick={props.handleCloseModal}
              >
                <PhoneX size={32} />
              </Fab>
              <Typography
                variant="subtitle1"
                noWrap
                component="div"
                fontFamily={"IBM Plex Sans"}
                fontWeight="350"
              >
                {props.incomingCall ? "Decline" : "End Call"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CustomBox>
    </Modal>
  );
}
