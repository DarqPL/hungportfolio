import { Section } from "@/components/layout/section";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <Section id="experience" eyebrow="04 / Experience" title="Experience">
      <div className="divide-y divide-border border-y border-border">
        {experiences.map((item) => (
          <article key={`${item.organization}-${item.period}`} className="grid gap-3 py-6 md:grid-cols-[1fr_180px]">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-1 text-muted-foreground">{item.organization}</p>
              {item.summary ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p> : null}
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-right">
              {item.period}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
