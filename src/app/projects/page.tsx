"use client";

import React, { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Layers } from "lucide-react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Mobile App", "Enterprise", "Open Source"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="Portfolio Catalog"
            badgeVariant="cyan"
            title="Projects & Applications"
            subtitle="Explore detailed case studies of production mobile apps, enterprise suites, and open-source tools built with Flutter, Firebase, and GetX."
            className="mb-6"
          />
        </div>

        {/* Search & Filter Bar */}
        <div className="glass-panel p-4 rounded-2xl mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, tech (Flutter, Firebase, Hive)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-sky-500 text-white placeholder-gray-400 text-sm outline-none transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 font-mono">
          <span>Showing {filteredProjects.length} of {projects.length} projects</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-sky-400 hover:underline cursor-pointer"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Projects Display */}
        {filteredProjects.length > 0 ? (
          <div>
            {/* If on default view (All + no search query), show structured hierarchy */}
            {selectedCategory === "All" && searchQuery === "" ? (
              <div className="space-y-16">
                {/* Featured Projects (YasHome & POPO) */}
                <div className="space-y-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Featured Work & Flagship Projects
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {filteredProjects
                      .filter((p) => p.featured)
                      .map((project) => (
                        <ProjectCard
                          key={project.slug}
                          project={project}
                          featuredLayout={true}
                        />
                      ))}
                  </div>
                </div>

                {/* More Projects Section */}
                <div className="space-y-6 pt-10 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-sky-400" />
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      More Projects & Applications
                    </h2>
                  </div>
                  <p className="text-sm text-gray-400">
                    Enterprise tools, client accounting suites, and open-source applications.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
                    {filteredProjects
                      .filter((p) => !p.featured)
                      .map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Filtered / Searched Grid */
              <div className="space-y-8">
                {filteredProjects.some((p) => p.featured) && (
                  <div className="space-y-6 mb-8">
                    {filteredProjects
                      .filter((p) => p.featured)
                      .map((project) => (
                        <ProjectCard
                          key={project.slug}
                          project={project}
                          featuredLayout={true}
                        />
                      ))}
                  </div>
                )}

                {filteredProjects.some((p) => !p.featured) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProjects
                      .filter((p) => !p.featured)
                      .map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                      ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/[0.08]">
            <Layers className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching projects found</h3>
            <p className="text-sm text-gray-400 mb-4">
              Try adjusting your search query or selecting &quot;All&quot; categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 text-xs font-medium border border-sky-500/30 hover:bg-sky-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
