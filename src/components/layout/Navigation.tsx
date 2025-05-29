"use client";

import React, { useState, useEffect, useCallback } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // Debounce function for scroll events
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Handle scroll events with debouncing
  const handleScroll = useCallback(
    debounce(() => {
      if (isNavigating) return; // Don't update active section while navigating

      setIsScrolled(window.scrollY > 50);

      // Find the section that's most visible in the viewport
      const sections = navItems.map((item) => item.href.slice(1));
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      let maxVisibleArea = 0;
      let mostVisibleSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;

          // Calculate visible area of this section
          const visibleTop = Math.max(elementTop, scrollPosition);
          const visibleBottom = Math.min(
            elementBottom,
            scrollPosition + viewportHeight
          );
          const visibleArea = Math.max(0, visibleBottom - visibleTop);

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisibleSection = section;
          }
        }
      });

      setActiveSection(mostVisibleSection);
    }, 100),
    [isNavigating, debounce]
  );

  // Set up scroll listener
  useEffect(() => {
    // Initial call with delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Handle navigation clicks
  const scrollToSection = useCallback(
    (href: string, event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);

      if (element) {
        setIsNavigating(true);
        setActiveSection(sectionId); // Immediate feedback

        // Calculate proper scroll position
        const navHeight = 80; // Approximate navigation height
        const elementPosition = element.offsetTop - navHeight;

        // Smooth scroll to section
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });

        // Reset navigation flag after animation
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000); // Enough time for smooth scroll to complete
      }
    },
    []
  );

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
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer relative z-10",
              activeSection === item.href.slice(1)
                ? "bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-lg scale-105"
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
