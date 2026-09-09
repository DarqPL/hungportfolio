import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ExternalLink({ children, className = "", ...props }: ExternalLinkProps) {
  return (
    <a
      className={`inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
