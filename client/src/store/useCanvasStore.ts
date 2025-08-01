import { create } from "zustand";

interface Rect {
  id: string;
  x: number;
  y: number;
  fill: string;
}

type State = {
  rectangles: Rect[];
  addRect: (rect: Rect) => void;
  moveRect: (id: string, x: number, y: number) => void;
};

export const useCanvasStore = create<State>((set) => ({
  rectangles: [],
  addRect: (rect) => set((state) => ({ rectangles: [...state.rectangles, rect] })),
  moveRect: (id, x, y) =>
    set((state) => ({
      rectangles: state.rectangles.map((r) =>
        r.id === id ? { ...r, x, y } : r
      ),
    })),
}));
