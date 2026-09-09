import { Section } from "@/components/layout/section";
import { stackGroups } from "@/data/stack";

export function StackSection() {
  if (stackGroups.length === 0) {
    return null;
  }

  return (
    <Section
      id="stack"
      eyebrow="06 / Stack"
      title="Technology Stack"
      description="Grouped without artificial proficiency scores."
    >
      <div className="divide-y divide-border border-y border-border">
        {stackGroups.map((group, index) => (
          <article key={group.id} className="grid gap-4 py-5 sm:grid-cols-[180px_1fr] sm:items-start">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {group.label}
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
