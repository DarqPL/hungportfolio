export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
