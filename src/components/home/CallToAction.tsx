import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 text-center relative overflow-hidden">
          {/* Subtle top border highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Have a project in mind?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Let&apos;s build something <br className="hidden sm:block" />
            <span className="text-gradient-flutter">exceptional together</span>.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a full cross-platform mobile application, client management suite, or architecture consultation, I&apos;m ready to turn your ideas into polished software.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Conversation
            </Button>

            <Button
              href={siteConfig.links.github}
              variant="secondary"
              size="lg"
              target="_blank"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              Check GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
