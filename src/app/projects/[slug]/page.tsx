import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/json-ld";
import { ProjectActions } from "@/components/project/project-actions";
import { ProjectMedia } from "@/components/project/project-media";
import { getProjectBySlug, projects } from "@/data/projects";
import { absoluteUrl, createMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({ title: "Project Not Found", path: `/projects/${slug}` });
  }

  return createMetadata({
    title: project.name,
    description: project.longDescription ?? project.shortDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.longDescription ?? project.shortDescription,
    url: absoluteUrl(`/projects/${project.slug}`),
    dateCreated: project.year,
    programmingLanguage: project.technologies,
    codeRepository: project.repositoryUrl,
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <Container className="py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Project / {project.year ?? "TBA"}
              </p>
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {project.longDescription ?? project.shortDescription}
              </p>
            </div>
            <ProjectMedia media={project.coverImage} />
            {project.features?.length ? (
              <section aria-labelledby="features-title" className="border-t border-border pt-8">
                <h2 id="features-title" className="text-2xl font-semibold tracking-tight">
                  Features
                </h2>
                <ul className="mt-5 grid gap-3 text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="border-l border-border pl-4 text-sm leading-6">
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            {project.architectureNotes?.length ? (
              <section aria-labelledby="architecture-title" className="border-t border-border pt-8">
                <h2 id="architecture-title" className="text-2xl font-semibold tracking-tight">
                  Architecture Notes
                </h2>
                <ul className="mt-5 grid gap-3 text-muted-foreground">
                  {project.architectureNotes.map((note) => (
                    <li key={note} className="border-l border-border pl-4 text-sm leading-6">
                      {note}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="border border-border bg-card p-5 lg:sticky lg:top-24">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Role</dt>
                <dd className="mt-1 text-foreground">{project.role ?? "To be added"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Period</dt>
                <dd className="mt-1 text-foreground">{project.period ?? project.year ?? "To be added"}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Status</dt>
                <dd className="mt-1 capitalize text-foreground">{project.status}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.length ? (
                    project.technologies.map((technology) => (
                      <span key={technology} className="border border-border px-2 py-1 font-mono text-xs uppercase text-muted-foreground">
                        {technology}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted-foreground">To be added</span>
                  )}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <ProjectActions project={project} />
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
