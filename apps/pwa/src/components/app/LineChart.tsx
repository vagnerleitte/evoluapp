import { cn } from "@/lib/utils";

export function NeonLineChart({
  points,
  className,
  height = 170,
}: {
  points: number[];
  className?: string;
  height?: number;
}) {
  const width = 300;
  const padding = 12;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;

  const coords = points.map((p, i) => {
    const x = padding + (i * (width - padding * 2)) / (points.length - 1);
    const y = padding + (1 - (p - min) / span) * (height - padding * 2);
    return { x, y };
  });

  const line = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x},${c.y}`).join(" ");
  const area = `${line} L${coords[coords.length - 1]!.x},${height} L${coords[0]!.x},${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="neon-fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.87 0.21 126)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="oklch(0.87 0.21 126)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((r) => (
        <line
          key={r}
          x1={padding}
          x2={width - padding}
          y1={height * r}
          y2={height * r}
          stroke="oklch(0.29 0.012 250)"
          strokeDasharray="2 3"
        />
      ))}
      <path d={area} fill="url(#neon-fade)" />
      <path
        d={line}
        fill="none"
        stroke="oklch(0.87 0.21 126)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {coords.map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={i === coords.length - 1 ? 4 : 2.5}
          fill="oklch(0.87 0.21 126)"
        />
      ))}
    </svg>
  );
}
