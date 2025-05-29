"use client";

import React, { useState, useEffect } from "react";
import { skills } from "@/lib/data";
import { Code, Database, Wrench, Smartphone, Globe } from "lucide-react";
import TechIcon from "@/components/ui/TechIcon";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories = [
    { id: "frontend", name: "Frontend", icon: Code },
    { id: "backend", name: "Backend", icon: Database },
    { id: "mobile", name: "Mobile", icon: Smartphone },
    { id: "tools", name: "Tools", icon: Wrench },
    { id: "cloud", name: "Cloud", icon: Database },
  ];

  const getAllSkills = () => {
    return [
      ...skills.languages,
      ...skills.frontend,
      ...skills.backend,
      ...skills.database,
      ...skills.tools,
    ];
  };

  const getFilteredSkills = () => {
    const categoryMap = {
      frontend: [
        ...skills.frontend.filter((s) => s.category === "frontend"),
        ...skills.languages.filter((s) => s.category === "frontend"),
      ],
      backend: [
        ...skills.backend.filter((s) => s.category === "backend"),
        ...skills.languages.filter((s) => s.category === "backend"),
      ],
      mobile: [
        ...skills.frontend.filter((s) => s.category === "mobile"),
        ...skills.languages.filter((s) => s.category === "mobile"),
      ],
      tools: [
        ...skills.tools.filter((s) => s.category === "tools"),
        ...skills.backend.filter((s) => s.category === "tools"),
      ],
      database: skills.database,
      cloud: skills.tools.filter((s) => s.category === "cloud"),
    };

    return categoryMap[activeCategory as keyof typeof categoryMap] || [];
  };

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">
          {skill.name}
        </h3>
        <span className="text-sm text-text-secondary">{skill.level}%</span>
      </div>

      <div className="w-full bg-bg-secondary rounded-full h-2 mb-3">
        <div
          className="bg-gradient-to-r from-primary-blue to-primary-purple h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            skill.category === "frontend"
              ? "bg-primary-blue/20 text-primary-blue"
              : skill.category === "backend"
              ? "bg-primary-purple/20 text-primary-purple"
              : skill.category === "database"
              ? "bg-primary-cyan/20 text-primary-cyan"
              : skill.category === "mobile"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {skill.category}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-lg"
                  : "glass-button text-text-secondary hover:text-text-primary"
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid - Detailed View with Progress Bars - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Mobile Skills Display - Polished Glass Container */}
        <div className="md:hidden mb-16">
          <div className="glass-card p-8 rounded-2xl shadow-2xl animate-fade-in">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold gradient-text mb-2">
                {categories.find((cat) => cat.id === activeCategory)?.name}{" "}
                Technologies
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-6"></div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
              {getFilteredSkills().map((skill, index) => (
                <div
                  key={`mobile-${skill.name}-${index}`}
                  className="animate-fade-in transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TechIcon skill={skill} />
                </div>
              ))}
            </div>

            {/* Subtle bottom accent */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-glass-bg border border-glass-border">
                <span className="text-xs text-text-muted">
                  {getFilteredSkills().length}{" "}
                  {getFilteredSkills().length === 1
                    ? "Technology"
                    : "Technologies"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase - Icon-Only Infinite Carousel */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Tech Stack at a Glance
            </h3>
            <p className="text-text-secondary">
              A visual overview of all technologies in my toolkit
            </p>
          </div>

          {/* First Row - Left Scroll */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...getAllSkills(), ...getAllSkills()].map((skill, index) => (
                <TechIcon
                  key={`tech-row1-${skill.name}-${index}`}
                  skill={skill}
                />
              ))}
            </div>
          </div>

          {/* Second Row - Right Scroll */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...getAllSkills().reverse(), ...getAllSkills().reverse()].map(
                (skill, index) => (
                  <TechIcon
                    key={`tech-row2-${skill.name}-${index}`}
                    skill={skill}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        /* Pause animation on hover for better UX */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
