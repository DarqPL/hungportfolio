import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="07 / Contact"
      title="Contact"
      description="Open to Java, Spring Boot, Backend, and Web3 opportunities."
    >
      <div className="border border-border bg-card p-6 sm:p-8">
        <p className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Interested in backend engineering work, especially Java / Spring Boot / Web3.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 items-center justify-center border border-foreground bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {profile.email}
          </a>
          {socialLinks
            .filter((link) => link.kind !== "email")
            .map((link) => (
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
    </Section>
  );
}
