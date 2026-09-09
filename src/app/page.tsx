import { Container } from "@/components/layout/container";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { StackSection } from "@/components/sections/stack-section";

export default function Home() {
  return (
    <main>
      <Container>
        <HeroSection />
        <SelectedWorkSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <StackSection />
        <ContactSection />
      </Container>
    </main>
  );
}
