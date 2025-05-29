"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial call to set active section on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const sectionId = href.slice(1);
    const element = document.getElementById(sectionId);

    if (element) {
      // Temporarily set active section for immediate feedback
      setActiveSection(sectionId);

      // Smooth scroll to section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={cn(
        "glass-nav px-6 py-3 rounded-full transition-all duration-300 hidden md:flex z-50",
        isScrolled ? "top-4 backdrop-blur-xl" : "top-8 backdrop-blur-lg"
      )}
    >
      <div className="flex items-center space-x-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={(e) => scrollToSection(item.href, e)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer relative z-10",
              activeSection === item.href.slice(1)
                ? "bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-lg"
                : "text-text-secondary hover:text-text-primary hover:bg-glass-bg"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
