interface StarOrnamentProps {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary" | "accent" | "gold";
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const colorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  gold: "text-accent-gold",
};

export default function StarOrnament({ size, color }: StarOrnamentProps) {
  return (
    <svg
      className={`${sizeMap[size]} ${colorMap[color]} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
