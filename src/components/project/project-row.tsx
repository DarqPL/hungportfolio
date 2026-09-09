import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectActions } from "./project-actions";

type ProjectRowProps = {
  project: Project;
};

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="grid gap-6 border-t border-border py-8 md:grid-cols-[1fr_220px]">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.status} · {project.year ?? "TBA"}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.name}
            </Link>
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          {project.shortDescription}
        </p>
        {project.technologies.length ? (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {technology}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="md:justify-self-end">
        <ProjectActions project={project} />
      </div>
    </article>
  );
}
