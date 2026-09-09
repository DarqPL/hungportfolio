import { profile } from "./profile";

export type SocialLink = {
  label: string;
  href: string;
  kind: "github" | "linkedin" | "resume" | "email";
  external: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/DarqPL",
    kind: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/darqpl/",
    kind: "linkedin",
    external: true,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1GgJFJgQYiB_-rEruVj3VHNMNgf0QybfJ/view?usp=sharing",
    kind: "resume",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    kind: "email",
    external: false,
  },
];

export const sameAsLinks = socialLinks
  .filter((link) => link.kind === "github" || link.kind === "linkedin")
  .map((link) => link.href);
