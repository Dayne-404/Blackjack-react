const express = require('express');
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const cors = require('cors');

app.use(cors());
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io", "http://localhost:5173"],
    credentials: true
  }
});

instrument(io, {
  auth: false,
  mode: "development",
});

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');

  socket.on('send_message', (data) => {
    console.log(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});