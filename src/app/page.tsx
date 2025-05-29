import React from "react";
import Navigation from "@/components/layout/Navigation";
import MobileNavigation from "@/components/layout/MobileNavigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import BackgroundElements from "@/components/layout/BackgroundElements";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden w-full max-w-full">
      <BackgroundElements />
      <Navigation />
      <MobileNavigation />

      <div id="home" className="w-full max-w-full">
        <HeroSection />
      </div>

      <div id="about" className="w-full max-w-full">
        <AboutSection />
      </div>

      <div id="skills" className="w-full max-w-full">
        <SkillsSection />
      </div>

      <div id="projects" className="w-full max-w-full">
        <ProjectsSection />
      </div>

      <div id="experience" className="w-full max-w-full">
        <ExperienceSection />
      </div>

      <div id="contact" className="w-full max-w-full">
        <ContactSection />
      </div>
    </main>
  );
}
