"use client";

import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

import { MagneticButton } from "@/components/magnetic-button";
import { MotionReveal } from "@/components/motion-reveal";
import { siteConfig, statusBadges } from "@/lib/site-data";
import { openContactModal } from "@/components/contact-modal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-5 pb-16 pt-28 sm:px-8 lg:pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="z-10">
          <MotionReveal>
            <div className="mb-6 flex flex-wrap gap-2.5">
              {statusBadges.map((badge) => {
                const isOpen = badge.toLowerCase().includes("open");
                return (
                  <span
                    key={badge}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.02] hover:text-ink"
                  >
                    {isOpen && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold/60 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                      </span>
                    )}
                    {badge}
                  </span>
                );
              })}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-muted/80">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              {siteConfig.location}
            </p>
            <h1 className="max-w-3xl text-balance text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
              Building <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">intelligent products</span>, digital experiences, and AI-powered solutions.
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Full Stack Developer, AI Generalist, and Creative Technologist focused on building scalable software, AI workflows, and meaningful digital products.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#work">View Work</MagneticButton>
              <MagneticButton
                href={siteConfig.links.emailDraftUrl}
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  openContactModal();
                }}
              >
                Let&apos;s Connect
              </MagneticButton>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.18} className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] w-full">
          <div className="absolute inset-x-0 bottom-0 mx-auto h-[90%] w-full max-w-[440px] group">
            {/* The background glassmorphic box */}
            <div className="absolute inset-x-0 bottom-0 h-[85%] rounded-3xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-white/[0.01] shadow-glow backdrop-blur-2xl transition-all duration-500 group-hover:border-gold/20" />

            {/* Inner radial gradient backdrop behind the person */}
            <div className="absolute inset-x-4 bottom-4 h-[75%] rounded-2xl bg-radial-gold opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

            {/* The portrait image popping out of the box */}
            <div className="absolute inset-x-0 bottom-0 h-[108%] w-full overflow-hidden rounded-b-3xl pointer-events-none">
              <Image
                src="/toon-avatar.png"
                alt="Toon Avatar of Ishant Sharma"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain object-bottom transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-y-[-6px]"
              />
            </div>

            {/* Roles card overlaid on top at the bottom */}
            <div className="absolute bottom-6 left-1/2 w-[min(90%,360px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-background/80 p-4 shadow-panel backdrop-blur-xl transition-all duration-300 hover:border-gold/30 z-30">
              <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Ishant Sharma</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {siteConfig.roles.slice(0, 3).map((role) => (
                  <span key={role} className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] text-ink font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>

      <a
        href="#work"
        aria-label="Scroll to featured work"
        className="absolute bottom-6 right-6 hidden h-12 w-12 place-items-center rounded-full border border-white/12 text-muted transition hover:border-gold/50 hover:text-gold lg:grid"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
