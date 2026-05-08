interface CornerFlourishProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color: "primary" | "secondary" | "secondary-light" | "accent" | "gold";
  size: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const colorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  "secondary-light": "text-secondary-light",
  accent: "text-accent",
  gold: "text-accent-gold",
};

const positionMap = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

export default function CornerFlourish({
  position,
  color,
  size,
}: CornerFlourishProps) {
  return (
    <div className={`absolute ${positionMap[position]} pointer-events-none`}>
      <svg
        className={`${sizeMap[size]} ${colorMap[color]} fill-current`}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 3h2v2H3V3zm8 0h2v2h-2V3zm8 0h2v2h-2V3zM3 11h2v2H3v-2zm8 0h2v2h-2v-2zm8 0h2v2h-2v-2zM3 19h2v2H3v-2zm8 0h2v2h-2v-2zm8 0h2v2h-2v-2z" />
      </svg>
    </div>
  );
}
