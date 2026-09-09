import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProjectRow } from "@/components/project/project-row";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Projects by Huynh Anh Hung, a backend developer focused on Java, Spring Boot, backend systems, and Web3.",
  path: "/projects",
});

const githubLink = socialLinks.find((link) => link.kind === "github");

export default function ProjectsPage() {
  return (
    <main>
      <Container className="py-14 sm:py-18">
        <div className="max-w-3xl space-y-5">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">02 / Work</p>
          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Projects
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            A project archive prepared for backend systems, Java/Spring Boot work,
            and Web3 experiments. Entries will appear here as case studies are added.
          </p>
        </div>

        <div className="mt-12">
          {projects.length > 0 ? (
            <div>
              {projects.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-border bg-card/40 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Project case studies are being written.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                The data model is ready for project summaries, repositories, demos,
                screenshots, architecture notes, and MDX case studies. No fake projects
                are shown before real project details are added.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex min-h-10 items-center border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Back home
                </Link>
                {githubLink ? (
                  <a
                    href={githubLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    View GitHub
                  </a>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
