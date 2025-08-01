import { Rect } from "react-konva";
import { useCanvasStore } from "../store/useCanvasStore";
import { socket } from "../socket";


export const RectangleShape = ({ rect }: { rect: any }) => {
  const moveRect = useCanvasStore((s) => s.moveRect);

  return (
    <Rect
      x={rect.x}
      y={rect.y}
      width={100}
      height={100}
      fill={rect.fill}
      draggable
      onDragMove={(e) => {
        const { x, y } = e.target.position();
        moveRect(rect.id, x, y);
        socket.emit("rectangle:move", { id: rect.id, x, y });
      }}
    />
  );
};
