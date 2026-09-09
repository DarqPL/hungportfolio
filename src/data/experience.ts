export type Experience = {
  organization: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [];
