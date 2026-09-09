import type { StackIconKey } from "@/data/stack";

type StackIconProps = {
  icon: StackIconKey;
  label: string;
};

export function StackIcon({ icon, label }: StackIconProps) {
  return (
    <span
      className="inline-grid size-5 shrink-0 place-items-center text-muted-foreground transition-colors group-hover:text-foreground"
      aria-hidden="true"
      title={label}
    >
      {icons[icon]}
    </span>
  );
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.7,
};

const icons: Record<StackIconKey, React.ReactNode> = {
  agent: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path {...strokeProps} d="M8.5 8.5h7v7h-7z" />
      <path {...strokeProps} d="m8.5 8.5-3-3M15.5 8.5l3-3M8.5 15.5l-3 3M15.5 15.5l3 3" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M12 3v3M7 8h10a3 3 0 0 1 3 3v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a3 3 0 0 1 3-3Z" />
      <path {...strokeProps} d="M9 13h.01M15 13h.01M9.5 17h5" />
    </svg>
  ),
  braces: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M8 4c-2 0-3 1-3 3v2c0 1.2-.8 2-2 2 1.2 0 2 .8 2 2v4c0 2 1 3 3 3" />
      <path {...strokeProps} d="M16 4c2 0 3 1 3 3v2c0 1.2.8 2 2 2-1.2 0-2 .8-2 2v4c0 2-1 3-3 3" />
    </svg>
  ),
  cat: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M7 8 5.5 4.5 9 6a8 8 0 0 1 6 0l3.5-1.5L17 8a7 7 0 0 1 1 3.5c0 4-2.7 6.5-6 6.5s-6-2.5-6-6.5A7 7 0 0 1 7 8Z" />
      <path {...strokeProps} d="M9 12h.01M15 12h.01M10 16c1 .7 3 .7 4 0" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M7 18h10a4 4 0 0 0 .6-8 6 6 0 0 0-11.3 1.6A3.5 3.5 0 0 0 7 18Z" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M7 9h9v5a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4V9Z" />
      <path {...strokeProps} d="M16 10h1.5a2 2 0 0 1 0 4H16M9 4c-.8 1-.8 2 0 3M13 4c-.8 1-.8 2 0 3" />
    </svg>
  ),
  container: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M4 14h16v4H4zM6 10h4v4H6zM10 10h4v4h-4zM14 10h4v4h-4zM8 6h4v4H8zM12 6h4v4h-4z" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M5 7c0-2 14-2 14 0v10c0 2-14 2-14 0V7Z" />
      <path {...strokeProps} d="M5 7c0 2 14 2 14 0M5 12c0 2 14 2 14 0" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M7 7h4a4 4 0 0 1 4 4v6" />
      <path {...strokeProps} d="M7 17h8" />
      <circle {...strokeProps} cx="7" cy="7" r="2" />
      <circle {...strokeProps} cx="7" cy="17" r="2" />
      <circle {...strokeProps} cx="15" cy="17" r="2" />
    </svg>
  ),
  hexagon: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path {...strokeProps} d="M9 15V9l6 6V9" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M5 19c9 0 14-5 14-14C10 5 5 10 5 19Z" />
      <path {...strokeProps} d="M5 19c3.5-5 7-8 12-10" />
    </svg>
  ),
  linux: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M8 10c0-4 1.5-7 4-7s4 3 4 7l2 5c1 2-.5 5-3 5H9c-2.5 0-4-3-3-5l2-5Z" />
      <path {...strokeProps} d="M10 9h.01M14 9h.01M9 16h6" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" className="size-4">
      <circle {...strokeProps} cx="12" cy="5" r="2" />
      <circle {...strokeProps} cx="6" cy="17" r="2" />
      <circle {...strokeProps} cx="18" cy="17" r="2" />
      <path {...strokeProps} d="m11 7-4 8M13 7l4 8M8 17h8" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M12 3 14.5 9.5 21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M4 5h16v14H4zM7 9l3 3-3 3M12 15h5" />
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M12 4 21 20H3L12 4Z" />
    </svg>
  ),
  waves: (
    <svg viewBox="0 0 24 24" className="size-4">
      <path {...strokeProps} d="M4 8c2 2 4 2 6 0s4-2 6 0 4 2 4 0M4 14c2 2 4 2 6 0s4-2 6 0 4 2 4 0" />
    </svg>
  ),
};
