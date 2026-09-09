export type StackIconKey =
  | "agent"
  | "bot"
  | "docker"
  | "gemini"
  | "git"
  | "github"
  | "javascript"
  | "linux"
  | "mongodb"
  | "mysql"
  | "network"
  | "nextjs"
  | "nodejs"
  | "opencode"
  | "openjdk"
  | "postgresql"
  | "react"
  | "redis"
  | "spring"
  | "tailwind"
  | "typescript"
  | "vercel";

export type StackItem = {
  name: string;
  icon: StackIconKey;
};

export type StackGroup = {
  id: string;
  label: string;
  items: StackItem[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "Java", icon: "openjdk" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Spring Framework", icon: "spring" },
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "network" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    id: "web3",
    label: "Web3",
    items: [{ name: "Web3 fundamentals", icon: "network" }],
  },
  {
    id: "workflow",
    label: "Workflow",
    items: [
      { name: "Gemini", icon: "gemini" },
      { name: "ChatGPT", icon: "bot" },
      { name: "OpenCode", icon: "opencode" },
      { name: "Agent Skills", icon: "agent" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Linux", icon: "linux" },
    ],
  },
];
