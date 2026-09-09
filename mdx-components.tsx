import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="rounded-lg border bg-card px-3 py-2 text-card-foreground">
        {children}
      </li>
    ),
    ...components,
  };
}
