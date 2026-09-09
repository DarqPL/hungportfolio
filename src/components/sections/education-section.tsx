import { Section } from "@/components/layout/section";
import { education } from "@/data/education";

export function EducationSection() {
  if (education.length === 0) {
    return null;
  }

  return (
    <Section id="education" eyebrow="05 / Education" title="Education">
      <div className="divide-y divide-border border-y border-border">
        {education.map((item) => (
          <article key={`${item.school}-${item.period ?? "education"}`} className="grid gap-3 py-6 md:grid-cols-[1fr_180px]">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{item.school}</h3>
              <p className="mt-1 text-muted-foreground">
                {[item.degree, item.field].filter(Boolean).join(" · ")}
              </p>
              {item.relevantAreas?.length ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.relevantAreas.join(" / ")}
                </p>
              ) : null}
            </div>
            {item.period ? (
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                {item.period}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
