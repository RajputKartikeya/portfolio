"use client";

import React from "react";
import { personalInfo, education, leadership } from "@/lib/data";
import { MapPin, GraduationCap, Award, Users } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "2+", icon: Award },
    { label: "Projects Completed", value: "10+", icon: GraduationCap },
    { label: "Students Mentored", value: "10+", icon: Users },
    { label: "Technologies", value: "15+", icon: Award },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text mb-6">About Me</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building scalable
            applications
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description & Stats */}
          <div className="space-y-8">
            {/* Description */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Who I Am
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {personalInfo.description}
              </p>

              <div className="flex items-center text-text-secondary">
                <MapPin className="w-5 h-5 mr-2 text-primary-blue" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-blue" />
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Leadership */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-purple" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative">
                    {index !== education.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-16 bg-gradient-to-b from-primary-blue to-primary-purple opacity-30"></div>
                    )}

                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          edu.current ? "bg-primary-blue" : "bg-primary-purple"
                        }`}
                      >
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary">
                          {edu.degree}
                        </h4>
                        <p className="text-primary-blue font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {edu.duration} • {edu.location}
                        </p>
                        {edu.cgpa && (
                          <p className="text-text-secondary text-sm mt-1">
                            CGPA: {edu.cgpa}
                          </p>
                        )}
                        {edu.percentage && (
                          <p className="text-text-secondary text-sm mt-1">
                            Percentage: {edu.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary-cyan" />
                Leadership
              </h3>

              {leadership.map((role) => (
                <div key={role.id} className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {role.position}
                    </h4>
                    <p className="text-primary-cyan font-medium">
                      {role.organization}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {role.duration}
                    </p>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
