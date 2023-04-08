import io from "socket.io-client"; // Add this

let socket;

const connectSocket = (user_id) => {
  socket = io(process.env.REACT_APP_API_URL, {
    query: `user_id=${user_id}`,
  });
} // Add this -- our server will run on port 4000, so we connect to it from here

export {socket, connectSocket};