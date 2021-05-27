const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const server = app.listen(4000, () => {
  console.log("listening on *:4000");
});

io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Connected & Socketid is ", socket.id);
  app.use("/post", (req, res) => {
    socket.emit("Data", req.body.id);
    res.send(200);
  });
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});
