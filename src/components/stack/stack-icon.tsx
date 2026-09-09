import {
  siDocker,
  siGit,
  siGithub,
  siGooglegemini,
  siJavascript,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpencode,
  siOpenjdk,
  siPostgresql,
  siReact,
  siRedis,
  siSpring,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";
import type { StackIconKey } from "@/data/stack";

type SimpleIcon = {
  path: string;
  slug: string;
  title: string;
};

type StackIconProps = {
  icon: StackIconKey;
  label: string;
};

const brandIcons: Partial<Record<StackIconKey, SimpleIcon>> = {
  docker: siDocker,
  gemini: siGooglegemini,
  git: siGit,
  github: siGithub,
  javascript: siJavascript,
  linux: siLinux,
  mongodb: siMongodb,
  mysql: siMysql,
  nextjs: siNextdotjs,
  nodejs: siNodedotjs,
  opencode: siOpencode,
  openjdk: siOpenjdk,
  postgresql: siPostgresql,
  react: siReact,
  redis: siRedis,
  spring: siSpring,
  tailwind: siTailwindcss,
  typescript: siTypescript,
  vercel: siVercel,
};

export function StackIcon({ icon, label }: StackIconProps) {
  const brandIcon = brandIcons[icon];

  return (
    <span
      className="inline-grid size-5 shrink-0 place-items-center text-muted-foreground transition-colors group-hover:text-foreground"
      aria-hidden="true"
      title={label}
    >
      {brandIcon ? <BrandSvg icon={brandIcon} /> : fallbackIcons[icon]}
    </span>
  );
}

function BrandSvg({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" role="img">
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.7,
};

const fallbackIcons: Partial<Record<StackIconKey, React.ReactNode>> = {
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
  network: (
    <svg viewBox="0 0 24 24" className="size-4">
      <circle {...strokeProps} cx="12" cy="5" r="2" />
      <circle {...strokeProps} cx="6" cy="17" r="2" />
      <circle {...strokeProps} cx="18" cy="17" r="2" />
      <path {...strokeProps} d="m11 7-4 8M13 7l4 8M8 17h8" />
    </svg>
  ),
};
