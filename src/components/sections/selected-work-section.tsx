import Link from "next/link";
import { Section } from "@/components/layout/section";
import { featuredProjects } from "@/data/projects";
import { socialLinks } from "@/data/social";

const githubLink = socialLinks.find((link) => link.kind === "github");

export function SelectedWorkSection() {
  return (
    <Section
      id="work"
      eyebrow="02 / Work"
      title="Selected Work"
      description="Project details are data-driven and ready for case studies."
    >
      {featuredProjects.length > 0 ? (
        <div className="divide-y divide-border border-y border-border">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="grid gap-5 py-6 md:grid-cols-[1fr_220px]">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight">
                  <Link href={`/projects/${project.slug}`} className="hover:underline">
                    {project.name}
                  </Link>
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="font-mono text-xs uppercase text-muted-foreground">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                {project.year ?? "TBA"}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border bg-card/40 p-6">
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Case studies are being prepared. The project system already supports repositories,
            live demos, screenshots, architecture notes, and MDX write-ups without changing the UI.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex min-h-10 items-center border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Project index
            </Link>
            {githubLink ? (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      )}
    </Section>
  );
}
