import { Section } from "@/components/layout/section";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="03 / About" title="About">
      <div className="max-w-3xl space-y-5">
        <p className="text-xl leading-9 text-foreground">{profile.tagline}</p>
        <p className="text-base leading-8 text-muted-foreground">{profile.about}</p>
      </div>
    </Section>
  );
}
