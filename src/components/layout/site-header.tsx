import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { socialLinks } from "@/data/social";

const resumeLink = socialLinks.find((link) => link.kind === "resume");
const githubLink = socialLinks.find((link) => link.kind === "github");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Huynh Anh Hung home"
        >
          <span className="grid size-8 place-items-center border border-border bg-card font-mono text-xs font-semibold text-foreground transition-colors group-hover:border-accent">
            H/A
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground sm:inline">
            DarqPL
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {githubLink ? (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noreferrer"
              className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
            >
              GitHub
            </a>
          ) : null}
          {resumeLink ? (
            <a
              href={resumeLink.href}
              target="_blank"
              rel="noreferrer"
              className="border border-border bg-foreground px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Resume
            </a>
          ) : null}
        </div>
      </div>
    </header>
  );
}
