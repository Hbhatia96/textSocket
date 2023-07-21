import { Server } from 'socket.io'

const SocketHandler = (req, res) => {
  console.log('Socket check-----')
  let io;
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    io = new Server(res.socket.server,{
      path: "/api/socket",
      addTrailingSlash: false
    })
    res.socket.server.io = io
  }

  io?.on("connection", (socket) => {
    socket.on("input-change", (arg) => {
      console.log(arg,"abc----"); // world
      socket.emit('input-received', arg);
    });
  });

  res.end()
}

export default SocketHandler