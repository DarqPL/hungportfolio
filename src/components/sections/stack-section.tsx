import { Section } from "@/components/layout/section";
import { StackIcon } from "@/components/stack/stack-icon";
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
      <div className="overflow-hidden border border-border bg-card/30">
        {stackGroups.map((group, index) => (
          <article
            key={group.id}
            className="grid gap-4 border-b border-border px-4 py-5 transition-colors last:border-b-0 hover:bg-secondary/35 sm:grid-cols-[180px_1fr] sm:items-start sm:px-5"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-7 shrink-0 place-items-center border border-border bg-background font-mono text-[10px] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {group.label}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group inline-flex min-h-9 items-center gap-2 border border-border bg-background/70 px-3 text-sm leading-6 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors hover:border-muted-foreground hover:bg-secondary"
                >
                  <StackIcon icon={item.icon} label={item.name} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
