import type { Project } from "@/data/projects";

type ProjectActionsProps = {
  project: Project;
};

export function ProjectActions({ project }: ProjectActionsProps) {
  const links = [
    project.repositoryUrl ? { label: "Repository", href: project.repositoryUrl } : null,
    project.liveDemoUrl ? { label: "Live Demo", href: project.liveDemoUrl } : null,
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
