import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { GithubIcon, GooglePlayIcon, AppleIcon, GlobeIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  User,
  Shield,
  Zap,
  Building2,
  Smartphone,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.tagline} | Hichem Boutalbi`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mobile Case Study`,
      description: project.description,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-sky-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan">{project.category}</Badge>
              {project.company && (
                <Badge variant="violet" className="border-violet-500/30">
                  <Building2 className="w-3 h-3 text-violet-400" />
                  <span>Company: {project.company}</span>
                </Badge>
              )}
              {project.platforms && (
                <Badge variant="emerald">
                  <Smartphone className="w-3 h-3 text-emerald-400" />
                  <span>{project.platforms.join(" · ")}</span>
                </Badge>
              )}
              {project.featured && (
                <Badge variant="amber">Featured Work</Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
              {project.tagline}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
              <div>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Role</p>
                <p className="text-sm font-semibold text-white mt-0.5">{project.role}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Timeline</p>
                <p className="text-sm font-semibold text-white mt-0.5">{project.period}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Company</p>
                <p className="text-sm font-semibold text-sky-400 mt-0.5">{project.company || "Independent"}</p>
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Status</p>
                <p className="text-sm font-semibold text-emerald-400 mt-0.5">
                  {project.status || (project.company ? "Production / Live" : (project.category === "Open Source" ? "Open Source" : "Academic Project"))}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {project.appStoreUrl && (
                <Button
                  href={project.appStoreUrl}
                  variant="secondary"
                  target="_blank"
                  icon={<AppleIcon className="w-4 h-4" />}
                >
                  App Store (iOS)
                </Button>
              )}

              {project.playStoreUrl && (
                <Button
                  href={project.playStoreUrl}
                  variant="primary"
                  target="_blank"
                  icon={<GooglePlayIcon className="w-4 h-4" />}
                >
                  Google Play (Android)
                </Button>
              )}

              {project.websiteUrl && (
                <Button
                  href={project.websiteUrl}
                  variant="outline"
                  target="_blank"
                  icon={<GlobeIcon className="w-4 h-4" />}
                >
                  Visit Official Website
                </Button>
              )}

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="secondary"
                  target="_blank"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  {project.isPrivate ? "Visit GitHub Profile" : "View Source Code"}
                </Button>
              )}
            </div>

            {project.isPrivate && !project.githubUrl?.includes("/") && (
              <p className="text-xs text-gray-400 italic">
                Note: Commercial enterprise/production application; proprietary source repository is protected.
              </p>
            )}
          </div>

          {/* Cover Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-white/[0.08]">
          {/* Main Description & Features */}
          <div className="lg:col-span-8 space-y-14">
            {/* Overview & Context */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>Project Overview & My Role</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                {project.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Role & Scope Highlights */}
            {project.roleScope && (
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-sky-500/20 space-y-4">
                <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-sky-400" />
                  <span>Key Responsibilities & Scope of Work</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                  {project.roleScope.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Major Contributions Deep Dive (e.g. YasHome Publishing, Maps, Compare) */}
            {project.majorContributions && project.majorContributions.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Major Architectural & UI/UX Contributions</span>
                </h2>

                <div className="space-y-6">
                  {project.majorContributions.map((contrib, idx) => (
                    <div
                      key={idx}
                      className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                        <div>
                          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                            Contribution 0{idx + 1}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-0.5">
                            {contrib.title}
                          </h3>
                        </div>
                        <span className="text-xs font-medium text-gray-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06] self-start sm:self-auto">
                          {contrib.subtitle}
                        </span>
                      </div>

                      <p className="text-sm text-gray-300 leading-relaxed">
                        {contrib.description}
                      </p>

                      {/* Visual Flow Steps (e.g. Property Publishing Step Wizard) */}
                      {contrib.steps && contrib.steps.length > 0 && (
                        <div className="pt-2">
                          <p className="text-xs font-mono text-gray-400 mb-2.5 uppercase tracking-wider">
                            Visual Publishing Pipeline:
                          </p>
                          <div className="flex flex-wrap items-center gap-2">
                            {contrib.steps.map((step, sIdx) => (
                              <React.Fragment key={sIdx}>
                                <div className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium flex items-center gap-1.5">
                                  <span className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 text-[10px] flex items-center justify-center font-bold">
                                    {sIdx + 1}
                                  </span>
                                  <span>{step}</span>
                                </div>
                                {sIdx < contrib.steps!.length - 1 && (
                                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Highlights checklist */}
                      {contrib.highlights && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-gray-400">
                          {contrib.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>Application Features & Capabilities</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-xl border border-white/[0.08] space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <h3 className="text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Role breakdowns if available (e.g. TeaClass) */}
            {project.adminFeatures && project.teacherFeatures && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="glass-card p-6 rounded-2xl border border-sky-500/20 space-y-3">
                  <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sky-400" />
                    <span>Admin Features</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {project.adminFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-violet-500/20 space-y-3">
                  <h3 className="text-lg font-bold text-violet-300 flex items-center gap-2">
                    <User className="w-4 h-4 text-violet-400" />
                    <span>Teacher Features</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {project.teacherFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-violet-400 font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Screenshots Gallery */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-6 pt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Mobile Interface & Screenshot Gallery</span>
                  </h2>
                  <span className="text-xs text-gray-400 font-mono">
                    {project.galleryImages.length} Screenshots
                  </span>
                </div>
                <ProjectGallery
                  images={project.galleryImages}
                  title={project.title}
                />
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
                Mobile Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architecture && (
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08] space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Architecture & Tools</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  {project.architecture.map((arch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Specifications */}
            {project.stats && (
              <div className="glass-card p-6 rounded-2xl border border-white/[0.08] space-y-4">
                <h3 className="text-base font-bold text-white uppercase tracking-wider text-xs">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.04] last:border-0"
                    >
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="font-semibold text-white font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Official Store Links Card */}
            {(project.appStoreUrl || project.playStoreUrl || project.websiteUrl) && (
              <div className="glass-card p-6 rounded-2xl border border-sky-500/20 space-y-3">
                <h3 className="text-base font-bold text-white text-xs uppercase tracking-wider">
                  Verified Official Links
                </h3>
                <div className="space-y-2">
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <AppleIcon className="w-4 h-4 text-white" />
                        <span>Apple App Store</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  )}

                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-300 text-xs transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <GooglePlayIcon className="w-4 h-4 text-emerald-400" />
                        <span>Google Play Store</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  )}

                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <GlobeIcon className="w-4 h-4 text-sky-400" />
                        <span>Official Platform Website</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Next Project Footer Switcher */}
        <div className="mt-20 pt-10 border-t border-white/[0.08]">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-sky-500/40 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1 uppercase tracking-wider">
                Next Project
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 line-clamp-1">
                {nextProject.tagline}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 group-hover:bg-sky-500/20 group-hover:text-sky-300 text-gray-400 transition-all shrink-0 ml-4">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
