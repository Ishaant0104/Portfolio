import { MotionReveal } from "@/components/motion-reveal";
import { siteConfig } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-surface px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal>
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">About</p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
            I started building because software felt like <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">leverage for imagination</span>.
          </h2>
        </MotionReveal>

        <div className="space-y-6">
          <MotionReveal>
            <p className="text-base sm:text-lg leading-relaxed text-muted">
              I am pursuing {siteConfig.education} at {siteConfig.college}. My work sits between engineering and creativity: full stack systems, AI workflows, prompt engineering, video editing, motion graphics, and product storytelling.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p className="text-base sm:text-lg leading-relaxed text-muted">
              What excites me most is turning messy real-world workflows into simple digital products. I like the moment where a spreadsheet, a manual process, or a scattered idea becomes a clean interface that helps someone move faster.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.16}>
            <p className="text-base sm:text-lg leading-relaxed text-muted">
              Right now I am deepening my skills in machine learning, agentic AI, analytics, and scalable product engineering. Long term, I want to build tools that feel intelligent, useful, and human at the same time.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.22}>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                ["College", "GEC Bharatpur"],
                ["CGPA", siteConfig.cgpa],
                ["Graduation", siteConfig.graduation]
              ].map(([label, value]) => (
                <div key={label} className="bg-surface p-6 transition-colors duration-300 hover:bg-white/[0.02]">
                  <dt className="text-xs uppercase tracking-[0.28em] text-muted">{label}</dt>
                  <dd className="mt-2 text-lg font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
