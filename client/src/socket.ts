// src/socket.ts
import { io } from "socket.io-client";
import { useCanvasStore } from "./store/useCanvasStore";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL

export const socket = io(SOCKET_URL);

// Attach listeners once on import
export const initializeSocketListeners = () => {
  const { addRect, moveRect } = useCanvasStore.getState();

  socket.on("connect", () => console.log("✅ Connected to server"));

  socket.on("init", (rects) => {
    Object.values(rects).forEach((r: any) => addRect(r));
  });

  socket.on("rectangle:add", (rect) => addRect(rect));

  socket.on("rectangle:move", ({ id, x, y }) => moveRect(id, x, y));

  socket.on("connect_error", (err) =>
    console.error("❌ Socket connection failed:", err)
  );
};