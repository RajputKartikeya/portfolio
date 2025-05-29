"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close menu after navigation
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  // Close menu with smooth animation
  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200); // Match the fade-out duration
  };

  return (
    <div className="md:hidden">
      {/* Floating Menu Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "fixed bottom-6 right-6 z-[60] p-4 rounded-full transition-all duration-300",
          "bg-gradient-to-br from-glass-bg to-transparent backdrop-blur-xl",
          "border border-glass-border shadow-2xl",
          "hover:scale-110 active:scale-95",
          isOpen ? "bg-primary-blue/20 shadow-primary-blue/25" : "bg-glass-bg"
        )}
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={cn(
              "w-6 h-6 text-text-primary absolute inset-0 transition-all duration-200",
              isOpen
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            )}
          />
          <X
            className={cn(
              "w-6 h-6 text-white absolute inset-0 transition-all duration-200",
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            )}
          />
        </div>
      </button>

      {/* Navigation Menu Overlay */}
      {(isOpen || isClosing) && (
        <>
          {/* Backdrop */}
          <div
            className={cn(
              "fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm transition-opacity duration-200",
              isClosing ? "opacity-0" : "opacity-100"
            )}
            onClick={closeMenu}
          />

          {/* Menu Content */}
          <div
            className={cn(
              "fixed left-4 right-4 bottom-24 z-[55] transition-all duration-200",
              isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
            )}
          >
            <div className="bg-gradient-to-br from-glass-bg to-transparent backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-2xl">
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-lg font-medium",
                      "transition-all duration-200 flex items-center space-x-3",
                      "hover:bg-white/10 hover:scale-[1.02]",
                      isClosing ? "opacity-0" : "opacity-0 animate-fade-in",
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-lg"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                    style={{
                      animationDelay: isClosing ? "0ms" : `${index * 80}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <span className="text-xl opacity-60">•</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>

              {/* Decorative line */}
              <div
                className={cn(
                  "mt-6 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent transition-opacity duration-200",
                  isClosing ? "opacity-0" : "opacity-0 animate-fade-in"
                )}
                style={{
                  animationDelay: isClosing ? "0ms" : "300ms",
                  animationFillMode: "forwards",
                }}
              />

              {/* Footer */}
              <div
                className={cn(
                  "mt-4 text-center transition-opacity duration-200",
                  isClosing ? "opacity-0" : "opacity-0 animate-fade-in"
                )}
                style={{
                  animationDelay: isClosing ? "0ms" : "350ms",
                  animationFillMode: "forwards",
                }}
              >
                <p className="text-xs text-text-muted">
                  Navigate through sections
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
