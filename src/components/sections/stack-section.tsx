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
      <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, index) => (
          <article key={group.id} className="bg-card p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {group.label}
            </p>
            <ul className="mt-5 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-foreground">
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
