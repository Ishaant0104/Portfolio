import { ProjectMockup } from "@/components/project-mockup";
import { MotionReveal } from "@/components/motion-reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { featuredProject } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function FeaturedWork() {
  return (
    <section id="work" className="relative overflow-hidden px-5 py-28 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">
            {featuredProject.eyebrow}
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-3xl text-balance text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
              A <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">tour packages & transport platform</span> shaped like a product launch.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-muted lg:ml-auto lg:pb-1">
              A custom-engineered platform automating tour package distribution, custom holiday inquiries, and luxury fleet management for a major Rajasthan travel brand.
            </p>
          </div>
        </MotionReveal>

        <div id="projects" className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <MotionReveal>
            <ProjectMockup />
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="lg:pl-8">
              <p className="text-sm uppercase tracking-[0.28em] text-muted">Case Study</p>
              <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                {featuredProject.title}
              </h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-medium text-gold">Problem</p>
                  <p className="mt-2 text-lg leading-8 text-muted">{featuredProject.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-sky">Solution</p>
                  <p className="mt-2 text-lg leading-8 text-muted">{featuredProject.solution}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {featuredProject.link && (
                <div className="mt-8">
                  <a
                    href={featuredProject.link}
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
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
          {featuredProject.highlights.map((item, index) => (
            <MotionReveal key={item.label} delay={index * 0.05} className="bg-background p-6 sm:p-8">
              <p className="text-sm font-semibold text-gold">{item.label}</p>
              <p className="mt-4 leading-7 text-muted">{item.copy}</p>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MotionReveal delay={0.2}>
            <MagneticButton href="/projects">
              View All Projects
            </MagneticButton>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
