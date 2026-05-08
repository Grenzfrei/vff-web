interface DividerLeafProps {
  direction: "horizontal" | "vertical";
  color: "primary" | "secondary" | "secondary-light" | "accent" | "gold";
  opacity: "30" | "50" | "75" | "100";
}

const colorMap = {
  primary: "#A03020",
  secondary: "#506020",
  "secondary-light": "#607030",
  accent: "#D08040",
  gold: "#D0A050",
};

const opacityMap = {
  "30": 0.3,
  "50": 0.5,
  "75": 0.75,
  "100": 1,
};

export default function DividerLeaf({
  direction,
  color,
  opacity,
}: DividerLeafProps) {
  const opacityValue = opacityMap[opacity];
  const colorValue = colorMap[color];

  if (direction === "horizontal") {
    return (
      <svg
        className="w-full h-8"
        viewBox="0 0 200 32"
        preserveAspectRatio="none"
        style={{ opacity: opacityValue }}
        aria-hidden="true"
      >
        <path
          d="M 0 16 Q 50 8 100 16 T 200 16"
          stroke={colorValue}
          strokeWidth="2"
          fill="none"
        />
        <circle cx="30" cy="16" r="3" fill={colorValue} />
        <circle cx="170" cy="16" r="3" fill={colorValue} />
      </svg>
    );
  }

  return (
    <svg
      className="h-full w-8"
      viewBox="0 0 32 200"
      preserveAspectRatio="none"
      style={{ opacity: opacityValue }}
      aria-hidden="true"
    >
      <path
        d="M 16 0 Q 8 50 16 100 T 16 200"
        stroke={colorValue}
        strokeWidth="2"
        fill="none"
      />
      <circle cy="30" cx="16" r="3" fill={colorValue} />
      <circle cy="170" cx="16" r="3" fill={colorValue} />
    </svg>
  );
}
