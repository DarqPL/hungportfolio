export type StackGroup = {
  id: string;
  label: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Java", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Spring Boot", "Spring Framework", "Node.js", "REST APIs"],
  },
  {
    id: "database",
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "web3",
    label: "Web3",
    items: ["Web3 fundamentals"],
  },
  {
    id: "workflow",
    label: "Workflow",
    items: ["Git", "GitHub"],
  },
];
