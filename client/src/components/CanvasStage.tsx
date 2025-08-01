import { Stage, Layer } from "react-konva";
import { useCanvasStore } from "../store/useCanvasStore";
import { RectangleShape } from "./RectangleShape";
import { useCanvasActions } from "../hooks/useCanvasActions";

export const CanvasStage = () => {
  const { rectangles } = useCanvasStore();
  const { createRect } = useCanvasActions();

  return (
    <div className="w-full max-w-5xl mx-auto mt-6 aspect-[4/3] border rounded overflow-hidden shadow">
      <Stage
        width={800} 
        height={600}
        onMouseDown={(e) => {
          // ✅ Only create when clicking on blank canvas
          const stage = e.target.getStage();
          if (e.target === stage) {
            const pointerPosition = stage?.getPointerPosition();
            if (pointerPosition) {
              createRect(pointerPosition.x, pointerPosition.y);
            }
          }
        }}
        >
        <Layer>
          {rectangles.map((r) => (
            <RectangleShape key={r.id} rect={r} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
