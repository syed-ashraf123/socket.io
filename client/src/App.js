import io from "socket.io-client";
function App() {
  const socket = io.connect("http://localhost:4000");
  socket.on("Data", (data) => {
    console.log(data);
  });
  socket.on("Temperature", (data) => {
    console.log(data);
  });
  socket.emit("Realtime", "Realll");
  return <div className="App">Hello World</div>;
}

export default App;
