const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { Console } = require("console");


app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
        methods: ["GET", "POST"],
    },

});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID:${socket.id} joined room: ${data}`)
    });

    socket.on("send_message", (data) => {
        console.log(data);

    });

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });

    socket.on("receive_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
  
      });

});






server.listen(3000, () => {
    console.log('Server running');
});