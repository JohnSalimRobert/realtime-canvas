export const COLORS = [
  "#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA", "#F472B6", "#FACC15"
];

export const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];
