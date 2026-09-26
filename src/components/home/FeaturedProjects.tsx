"use client";

import React, { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Layers } from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Mobile App", "Enterprise", "Open Source"];

  const { featuredList, standardList } = useMemo(() => {
    const list =
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    const featured = list.filter((p) => p.featured);
    const standard = list.filter((p) => !p.featured);

    return { featuredList: featured, standardList: standard };
  }, [selectedCategory]);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Selected Works"
            badgeVariant="cyan"
            title="Featured Projects & Case Studies"
            subtitle="Explore real-world mobile applications and enterprise platforms engineered with Flutter, Firebase, and clean architecture."
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Highlight (YasHome & POPO) */}
        {featuredList.length > 0 && (
          <div className="space-y-8 mb-16">
            {featuredList.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featuredLayout={true}
              />
            ))}
          </div>
        )}

        {/* More Projects Section */}
        {standardList.length > 0 && (
          <div className="space-y-6">
            {featuredList.length > 0 && (
              <div className="flex items-center justify-between pt-8 border-t border-white/[0.08] mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-sky-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      More Projects & Applications
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    Enterprise tools, academic prototypes, and open-source applications.
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {standardList.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* View All Projects Action */}
        <div className="mt-14 text-center">
          <Button
            href="/projects"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 text-sky-400" />}
          >
            Explore All Project Details
          </Button>
        </div>
      </div>
    </section>
  );
};
