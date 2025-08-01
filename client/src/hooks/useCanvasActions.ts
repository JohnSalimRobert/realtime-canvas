import { v4 as uuid } from "uuid";
import { useCanvasStore } from "../store/useCanvasStore";
import { getRandomColor } from "../utils/colors";
import { socket } from "../socket";

export const useCanvasActions = () => {
  const { addRect } = useCanvasStore();

  const createRect = (x: number, y: number) => {
    const rect = {
      id: uuid(),
      x,
      y,
      fill: getRandomColor(),
    };
    addRect(rect);
    socket.emit("rectangle:add", rect);
  };

  return { createRect };
};
