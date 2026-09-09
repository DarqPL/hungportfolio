export type ProjectStatus = "planned" | "in-progress" | "shipped" | "archived";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  year?: string;
  period?: string;
  status: ProjectStatus;
  role?: string;
  technologies: string[];
  features?: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  coverImage?: ProjectMedia;
  gallery?: ProjectMedia[];
  featured: boolean;
  caseStudy?: string;
  architectureNotes?: string[];
};

export const projects: Project[] = [];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
