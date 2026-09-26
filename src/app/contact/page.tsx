import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Inquiries",
  description: `Get in touch with ${siteConfig.name} (${siteConfig.handle}) for mobile app development, client solutions, or engineering collaborations.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="Get In Touch"
            badgeVariant="cyan"
            title="Let's build your next digital product."
            subtitle="Have a question, a project brief, or want to discuss mobile application engineering? Reach out and I'll get back to you promptly."
          />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
