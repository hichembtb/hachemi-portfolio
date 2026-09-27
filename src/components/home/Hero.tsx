"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background mesh lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              <span>Available for Mobile & Web Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-mono text-gray-400">
                Hi, I am{" "}
                <span className="text-white font-semibold">{siteConfig.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building high-performance{" "}
                <span className="text-gradient-flutter">mobile applications</span>{" "}
                & clean systems.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Specialized in <strong className="text-white font-semibold">Flutter</strong>, <strong className="text-white font-semibold">Dart</strong>, and <strong className="text-white font-semibold">Firebase</strong>. I engineer intuitive, 60fps cross-platform mobile apps, enterprise management tools, and offline-first architectures.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <Badge variant="cyan">Flutter & Dart</Badge>
              <Badge variant="emerald">Firebase Cloud</Badge>
              <Badge variant="violet">Bloc & Cubit</Badge>
              <Badge variant="amber">Local DB</Badge>
              <Badge variant="neutral">Next.js & TypeScript</Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Sparkles className="w-4 h-4 text-sky-400" />}
              >
                Contact Me
              </Button>

              <Button
                href={siteConfig.links.github}
                variant="outline"
                size="lg"
                target="_blank"
                icon={<Code2 className="w-4 h-4" />}
              >
                GitHub
              </Button>
            </div>
          </div>

          {/* Right Column: Code & Mobile Preview Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/30 to-violet-500/30 rounded-2xl blur-lg opacity-75" />

              {/* IDE / Architecture Card */}
              <div className="relative rounded-2xl bg-[#0b0f19]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>hachemi_portfolio.dart</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 space-y-3 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-violet-400">class</span>{" "}
                    <span className="text-sky-300">DeveloperProfile</span>{" "}
                    <span className="text-violet-400">extends</span>{" "}
                    <span className="text-amber-300">GetxController</span> &#123;
                  </div>

                  <div className="pl-4 space-y-1.5 border-l border-white/10 ml-2">
                    <div>
                      <span className="text-gray-500">&#47;&#47; Core Identity</span>
                    </div>
                    <div>
                      <span className="text-sky-400">final</span> name ={" "}
                      <span className="text-emerald-300">&quot;Hachemi Boutalbi&quot;</span>;
                    </div>
                    <div>
                      <span className="text-sky-400">final</span> handle ={" "}
                      <span className="text-emerald-300">&quot;hechcode&quot;</span>;
                    </div>
                    <div>
                      <span className="text-sky-400">final</span> primaryDomain ={" "}
                      <span className="text-emerald-300">&quot;Mobile & Cross-Platform&quot;</span>;
                    </div>

                    <div className="pt-2">
                      <span className="text-gray-500">&#47;&#47; Core Stack</span>
                    </div>
                    <div>
                      <span className="text-sky-400">List&lt;String&gt;</span> stack = [
                    </div>
                    <div className="pl-4 text-emerald-300">
                      &quot;Flutter&quot;, &quot;Dart&quot;, &quot;Firebase&quot;,<br />
                      &quot;GetX&quot;, &quot;Hive DB&quot;, &quot;Next.js&quot;
                    </div>
                    <div>];</div>

                    <div className="pt-2">
                      <span className="text-sky-400">bool</span> isReadyToShip() =&gt;{" "}
                      <span className="text-amber-400">true</span>;
                    </div>
                  </div>

                  <div>&#125;</div>
                </div>

                {/* Card Footer Badge */}
                <div className="px-5 py-3 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Reactive state ready</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>60 FPS Target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
