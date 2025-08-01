import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" }
});

let rectangles: Record<string, any> = {};

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  socket.emit("init", rectangles);

  socket.on("rectangle:add", (data) => {
    rectangles[data.id] = data;
    socket.broadcast.emit("rectangle:add", data);
  });

  socket.on("rectangle:move", ({ id, x, y }) => {
    if (rectangles[id]) {
      rectangles[id].x = x;
      rectangles[id].y = y;
      socket.broadcast.emit("rectangle:move", { id, x, y });
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

httpServer.listen(3001, () => console.log("Socket.IO server running on port 3001"));
