export type StackIconKey =
  | "agent"
  | "bot"
  | "braces"
  | "cat"
  | "cloud"
  | "coffee"
  | "container"
  | "database"
  | "git"
  | "hexagon"
  | "leaf"
  | "linux"
  | "network"
  | "sparkle"
  | "terminal"
  | "triangle"
  | "waves";

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
      { name: "Java", icon: "coffee" },
      { name: "TypeScript", icon: "braces" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Spring Boot", icon: "leaf" },
      { name: "Spring Framework", icon: "leaf" },
      { name: "Node.js", icon: "hexagon" },
      { name: "REST APIs", icon: "network" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: "database" },
      { name: "MySQL", icon: "database" },
      { name: "MongoDB", icon: "leaf" },
      { name: "Redis", icon: "waves" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "Next.js", icon: "triangle" },
      { name: "React", icon: "network" },
      { name: "Tailwind CSS", icon: "waves" },
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
      { name: "Gemini", icon: "sparkle" },
      { name: "ChatGPT", icon: "bot" },
      { name: "OpenCode", icon: "terminal" },
      { name: "Agent Skills", icon: "agent" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "cat" },
      { name: "Docker", icon: "container" },
      { name: "Vercel", icon: "triangle" },
      { name: "Linux", icon: "linux" },
    ],
  },
];
