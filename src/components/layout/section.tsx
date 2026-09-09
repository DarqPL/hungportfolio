import type { ComponentPropsWithoutRef, ReactNode } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children, className = "", ...props }: SectionProps) {
  return (
    <section className={`border-t border-border/70 py-14 sm:py-18 ${className}`} {...props}>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          {description ? <p className="max-w-xs text-sm leading-6 text-muted-foreground">{description}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
