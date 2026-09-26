"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Send,
  Check,
  Copy,
  MapPin,
  Clock,
  Sparkles,
  Smartphone,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    "bot-field": "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Spam honeypot check (if bot filled hidden field)
    if (formData["bot-field"]) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          "There was an issue delivering your message via Netlify Forms. Please try again or reach out directly by email."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please check your internet connection or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Info Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Feel free to reach out directly via email or the contact form for inquiries, freelance projects, or mobile development consulting.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 truncate">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[11px] font-mono text-gray-400">Email Address</p>
                <p className="text-sm font-medium text-white truncate">
                  {siteConfig.email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location & Availability */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-400">Location</p>
                <p className="font-medium text-white">{siteConfig.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-gray-400">Status</p>
                <p className="font-medium text-white">{siteConfig.status}</p>
              </div>
            </div>
          </div>

          {/* Social Connect */}
          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Profiles & Repositories
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={siteConfig.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/20 transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Play Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="lg:col-span-7">
        <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-white/[0.08] relative overflow-hidden">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || "friend"}! Your message has been delivered through Netlify Forms and I will get back to you shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setErrorMessage(null);
                    setFormData({ name: "", email: "", subject: "", message: "", "bot-field": "" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  Send another message
                </button>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject || "Project Inquiry")}&body=${encodeURIComponent(formData.message)}`}
                  className="px-5 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-medium border border-sky-500/30 transition-colors"
                >
                  Open in Email Client
                </a>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              action="/__forms.html"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Hidden inputs required for Netlify Forms & Honeypot */}
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden" aria-hidden="true">
                <label>
                  Don’t fill this out if you are human:{" "}
                  <input
                    name="bot-field"
                    tabIndex={-1}
                    value={formData["bot-field"]}
                    onChange={(e) =>
                      setFormData({ ...formData, "bot-field": e.target.value })
                    }
                  />
                </label>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-gray-400">
                  Fill in the details below and I will respond as soon as possible.
                </p>
              </div>

              {/* Error Message Alert */}
              {errorMessage && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-rose-200">Unable to send message</p>
                    <p className="mt-0.5 text-rose-300/90">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-gray-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-sky-500 text-white placeholder-gray-500 text-sm transition-colors outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-gray-300">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-sky-500 text-white placeholder-gray-500 text-sm transition-colors outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-gray-300">
                  Subject / Project Type
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Flutter Mobile App Development"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-sky-500 text-white placeholder-gray-500 text-sm transition-colors outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-gray-300">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your project, timeline, or any questions you have..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-sky-500 text-white placeholder-gray-500 text-sm transition-colors outline-none resize-y"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
                icon={
                  isSubmitting ? (
                    <Sparkles className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
