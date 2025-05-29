import React from "react";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import BackgroundElements from "@/components/layout/BackgroundElements";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundElements />
      <Navigation />

      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
