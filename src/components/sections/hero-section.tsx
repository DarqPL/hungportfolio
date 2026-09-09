import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const primaryActions = socialLinks.filter((link) =>
  ["github", "linkedin", "resume"].includes(link.kind),
);

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24" aria-labelledby="hero-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-emerald-200">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {profile.status}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              HCM · Java · Backend · Web3
            </span>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground">
              01 / Intro
            </p>
            <h1
              id="hero-title"
              className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl"
            >
              {profile.asciiName} — Backend Developer
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center justify-center border border-foreground bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Projects
            </a>
            {primaryActions.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="border border-border bg-card/60 p-5" aria-label="Profile facts">
          <dl className="grid gap-5 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</dt>
              <dd className="mt-1 text-foreground">{profile.name}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Focus</dt>
              <dd className="mt-1 text-foreground">{profile.preferredOpportunities.join(" / ")}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Location</dt>
              <dd className="mt-1 text-foreground">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
