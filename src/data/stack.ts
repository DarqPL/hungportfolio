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
    items: ["Spring Boot", "REST APIs"],
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
