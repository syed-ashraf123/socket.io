import io from "socket.io-client";

function App() {
  const socket = io.connect("http://localhost:4000");
  socket.on("Data", (data) => {
    console.log("Recieved data from post api is ", data);
  });
  return <div className="App">Syed</div>;
}

export default App;
