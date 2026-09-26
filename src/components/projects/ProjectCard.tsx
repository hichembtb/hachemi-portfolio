import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Lock, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { GithubIcon, GooglePlayIcon, AppleIcon, GlobeIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featuredLayout = false,
}) => {
  const categoryVariantMap: Record<string, "cyan" | "emerald" | "violet" | "amber" | "neutral"> = {
    "Mobile App": "cyan",
    "Enterprise": "amber",
    "Open Source": "emerald",
    "Utility": "violet",
  };

  if (featuredLayout) {
    return (
      <div className="relative rounded-3xl overflow-hidden glass-card border border-white/[0.12] hover:border-sky-500/40 transition-all duration-500 group shadow-2xl p-6 sm:p-8 lg:p-10">
        {/* Subtle background ambient glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/15 transition-all duration-500" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-10 items-center">
          {/* Visual / Mockup Side */}
          <div className="lg:col-span-6 aspect-[16/10] w-full relative rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08] shadow-lg mb-6 lg:mb-0">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Overlaid Badges on Image */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <Badge variant={categoryVariantMap[project.category] || "cyan"}>
                {project.category}
              </Badge>
              {project.appStoreUrl && (
                <Badge variant="neutral" className="bg-black/70 backdrop-blur-md text-white border-white/20">
                  <AppleIcon className="w-3 h-3" />
                  <span>iOS</span>
                </Badge>
              )}
              {project.playStoreUrl && (
                <Badge variant="emerald" className="bg-emerald-950/80 backdrop-blur-md">
                  <GooglePlayIcon className="w-3 h-3" />
                  <span>Android</span>
                </Badge>
              )}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              {/* Eyebrow / Featured Label */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  Featured Project
                </span>
                <span className="text-xs font-mono text-gray-500">•</span>
                <span className="text-xs font-mono text-gray-400">{project.period}</span>
                {project.company && (
                  <>
                    <span className="text-xs font-mono text-gray-500">•</span>
                    <span className="text-xs font-mono text-sky-400 inline-flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-violet-400" />
                      {project.company}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                  {project.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 mt-2.5 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-300">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Technologies */}
            <div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.02] text-gray-500">
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <Button
                href={`/projects/${project.slug}`}
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore Case Study
              </Button>

              <div className="flex items-center gap-2">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Official website for ${project.title}`}
                    title="Official Website"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <GlobeIcon className="w-4 h-4" />
                  </a>
                )}

                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`App Store link for ${project.title}`}
                    title="Apple App Store"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <AppleIcon className="w-4 h-4" />
                  </a>
                )}

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Google Play Store link for ${project.title}`}
                    title="Google Play Store"
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 transition-colors"
                  >
                    <GooglePlayIcon className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub Repository for ${project.title}`}
                    title="GitHub Repository"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Card Layout
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group p-5 sm:p-6">
      <div>
        {/* Visual / Screenshot Area */}
        <div className="relative overflow-hidden rounded-xl bg-black/40 border border-white/[0.06] aspect-[16/10] w-full mb-5">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f]/80 via-transparent to-transparent opacity-60" />

          {/* Badges on image overlay */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <Badge variant={categoryVariantMap[project.category] || "neutral"}>
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="amber" className="bg-amber-950/80 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Featured</span>
              </Badge>
            )}
            {project.appStoreUrl && (
              <Badge variant="neutral" className="bg-black/70 backdrop-blur-md text-white border-white/20">
                <AppleIcon className="w-3 h-3" />
                <span>iOS</span>
              </Badge>
            )}
            {project.playStoreUrl && (
              <Badge variant="emerald" className="bg-emerald-950/80 backdrop-blur-md">
                <GooglePlayIcon className="w-3 h-3" />
                <span>Android</span>
              </Badge>
            )}
          </div>
        </div>

        {/* Period, Role & Company */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400 mb-1.5">
          <span>{project.period}</span>
          <span>•</span>
          <span className="text-sky-400 font-medium">{project.role}</span>
          {project.company && (
            <>
              <span>•</span>
              <span className="text-gray-400 inline-flex items-center gap-1">
                <Building2 className="w-3 h-3 text-violet-400" />
                {project.company}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Tagline / Description */}
        <p className="text-sm text-gray-300 mt-2 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-1 rounded-lg bg-white/[0.02] text-gray-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Actions Bar */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 mt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-2">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Official website for ${project.title}`}
              title="Official Website"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <GlobeIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`App Store link for ${project.title}`}
              title="Apple App Store"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <AppleIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Google Play Store link for ${project.title}`}
              title="Google Play Store"
              className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 transition-colors"
            >
              <GooglePlayIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              title="GitHub Repository"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.isPrivate && !project.githubUrl && !project.appStoreUrl && !project.playStoreUrl && (
            <span
              title="Private Client Project"
              className="p-2 rounded-lg bg-white/[0.03] text-gray-500 border border-white/[0.04] cursor-help"
            >
              <Lock className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
