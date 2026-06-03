"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { MotionReveal } from "@/components/motion-reveal";
import { allProjects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <>
      <SiteNav />
      
      <main className="min-h-screen bg-background text-ink pt-32 pb-24 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Back link */}
          <div className="mb-10">
            <MotionReveal>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-ink transition-colors duration-300"
              >
                <ArrowLeft className="h-4.5 w-4.5" /> Back to Home
              </Link>
            </MotionReveal>
          </div>

          {/* Heading */}
          <MotionReveal delay={0.05}>
            <div className="max-w-3xl mb-16 border-b border-white/10 pb-12">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">
                Archive
              </p>
              <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Projects & <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">Engineering Case Studies</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
                A detailed archive of my production systems, freelance client applications, and custom engineering works.
              </p>
            </div>
          </MotionReveal>

          {/* Projects Stack */}
          <div className="space-y-24">
            {allProjects.map((project, index) => (
              <div
                key={project.slug}
                className="grid gap-12 lg:grid-cols-[1fr_1.15fr] items-start border-b border-white/10 pb-20 last:border-0 last:pb-0"
              >
                {/* Left Column: Metadata & High-level details */}
                <MotionReveal delay={index * 0.05}>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                      {project.type}
                    </span>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    
                    <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] text-ink font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <div className="mt-8">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-ink transition-colors duration-300"
                        >
                          Visit Live Website <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </MotionReveal>

                {/* Right Column: Bullet achievements */}
                <MotionReveal delay={index * 0.05 + 0.08} className="h-full">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.015] p-6 sm:p-8 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.02]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gold mb-6">
                      Key Highlights & Features
                    </h4>
                    
                    <ul className="space-y-4">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-xs sm:text-sm leading-relaxed text-muted">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/10 text-gold mt-0.5">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionReveal>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-28 border-t border-white/10 pt-16 text-center">
            <MotionReveal>
              <h2 className="text-2xl font-bold text-ink">Have a project idea?</h2>
              <p className="mt-3 text-sm text-muted">Let&apos;s build something together.</p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/#contact"
                  className="rounded-full bg-ink text-background hover:bg-gold h-11 px-6 text-sm font-medium inline-flex items-center justify-center transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </main>
    </>
  );
}
