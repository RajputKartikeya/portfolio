"use client";

import React, { useState } from "react";
import { experience } from "@/lib/data";
import {
  MapPin,
  Calendar,
  Building,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ExperienceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My journey through various roles and the impact I've made
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-purple to-primary-cyan"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                      exp.current
                        ? "bg-primary-blue border-primary-blue shadow-lg shadow-primary-blue/50"
                        : "bg-primary-purple border-primary-purple"
                    }`}
                  ></div>

                  {/* Experience Card */}
                  <div className="ml-16 glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-primary-blue font-semibold mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>

                      {exp.current && (
                        <span className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-3 py-1 rounded-full text-sm font-medium self-start sm:self-center">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center text-text-secondary text-sm mb-4 space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description Preview */}
                    <div className="mb-4">
                      <p className="text-text-secondary leading-relaxed">
                        {exp.description[0]}
                      </p>
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedCard === exp.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-glass-border">
                        <div className="space-y-3 mb-4">
                          {exp.description.slice(1).map((desc, i) => (
                            <p
                              key={i}
                              className="text-text-secondary leading-relaxed flex items-start"
                            >
                              <span className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-purple/20 text-primary-purple rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    {exp.description.length > 1 && (
                      <button
                        onClick={() => toggleCard(exp.id)}
                        className="flex items-center text-primary-blue hover:text-primary-purple transition-colors duration-300 font-medium"
                      >
                        {expandedCard === exp.id ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            Show More
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/file/d/1-w_fs6XPSaMY2dEqxBFtxBxGeW3-5R6W/view?usp=drive_link"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
