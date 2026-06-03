"use client";

import { Github, Linkedin, Mail, FileText } from "lucide-react";

import { MagneticButton } from "@/components/magnetic-button";
import { MotionReveal } from "@/components/motion-reveal";
import { siteConfig } from "@/lib/site-data";
import { openContactModal } from "@/components/contact-modal";

const contactLinks = [
  {
    label: "Email",
    href: siteConfig.links.emailDraftUrl,
    value: siteConfig.email,
    icon: Mail
  },
  {
    label: "GitHub",
    href: siteConfig.links.githubUrl,
    value: "GitHub",
    icon: Github
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedinUrl,
    value: "LinkedIn",
    icon: Linkedin
  },
  ...(siteConfig.links.resumeUrl ? [{
    label: "Resume",
    href: siteConfig.links.resumeUrl,
    value: "Download PDF",
    icon: FileText
  }] : [])
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background px-5 py-24 text-ink sm:px-8 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">
            Contact
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
            Let&apos;s build <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">something meaningful</span>.
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href={siteConfig.links.emailDraftUrl}
              onClick={(e) => {
                e.preventDefault();
                openContactModal();
              }}
            >
              Start a Conversation
            </MagneticButton>
            {siteConfig.links.resumeUrl && (
              <MagneticButton href={siteConfig.links.resumeUrl} variant="secondary">
                Resume
              </MagneticButton>
            )}
          </div>
        </MotionReveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <MotionReveal key={link.label} delay={index * 0.05} className="h-full">
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.label === "Email") {
                      e.preventDefault();
                      openContactModal();
                    }
                  }}
                  className="group block min-h-[160px] rounded-2xl border border-white/10 bg-white/[0.015] p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.03] hover:-translate-y-1"
                >
                  <Icon className="h-6 w-6 text-muted transition-colors duration-300 group-hover:text-gold" />
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-muted/50">
                    {link.label}
                  </p>
                  <p className="mt-3 break-all text-base font-semibold text-ink sm:text-lg">
                    {link.value}
                  </p>
                </a>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
