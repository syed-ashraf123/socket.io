const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const server = app.listen(4000, () => {
  console.log("Server is up & running *4000");
});

io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Connected & Socket Id is ", socket.id);
  socket.emit("Data", "first emit");

  app.use("/temperature", (req, res) => {
    socket.emit("Temperature", req.body.temp);
    res.send(200);
  });

  socket.on("Realtime", (data) => {
    console.log(data);
  });
});
