"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Eye, Code } from "lucide-react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[5/3] bg-gradient-to-br from-primary-blue/20 to-primary-purple/20 overflow-hidden">
                {project.image && !imageErrors[project.id] ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary-blue opacity-50" />
                  </div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-blue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Long Description - Show on Hover */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredProject === project.id ? "max-h-32 mb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-blue/20 text-primary-blue rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Moved from overlay to bottom */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 glass-button rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/RajputKartikeya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 glass-button rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-3" />
            View All Projects
            <ExternalLink className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
