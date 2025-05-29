"use client";

import React, { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in-up">
            <span className="text-lg text-text-secondary font-medium">
              Hello, I'm
            </span>
          </div>

          <div>
            {/* Name */}
            <h1
              className="hero-text gradient-text mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {personalInfo.name}
            </h1>
          </div>
          <div>
            {/* Title */}
            <h2
              className="text-2xl md:text-4xl font-bold text-text-primary  animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {personalInfo.title}
            </h2>
          </div>

          {/* Animated Tagline */}
          <div
            className="text-lg md:text-xl text-text-secondary mb-12 animate-fade-in-up h-8"
            style={{ animationDelay: "0.6s" }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-4 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/25"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-4 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary-purple/25"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-button p-4 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary-cyan/25"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-primary-blue to-primary-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <Mail className="inline-block w-5 h-5 ml-2 group-hover:animate-bounce" />
            </button>

            <button
              onClick={scrollToAbout}
              className="glass-button px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              Learn More
              <ArrowDown className="inline-block w-5 h-5 ml-2 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Floating 3D Elements - Placeholder for now */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <div className="w-20 h-20 border border-primary-blue rounded-lg animate-float opacity-30 rotate-45"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2">
          <div
            className="w-16 h-16 border border-primary-purple rounded-full animate-float opacity-20"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 transform -translate-y-1/2">
          <div
            className="w-12 h-12 border border-primary-cyan rounded-lg animate-float opacity-25"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
