import { MotionReveal } from "@/components/motion-reveal";
import { pillars } from "@/lib/site-data";

export function Pillars() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">What I Do</p>
            <h2 className="mt-5 text-balance text-[clamp(2.3rem,5vw,5.4rem)] font-semibold leading-none tracking-[-0.04em] text-ink">
              Engineering, AI, and creative systems in one operating range.
            </h2>
          </div>
        </MotionReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <MotionReveal key={pillar.title} delay={index * 0.08} className="bg-background p-8">
                <Icon
                  className={pillar.accent === "sky" ? "h-7 w-7 text-sky" : "h-7 w-7 text-gold"}
                  aria-hidden="true"
                />
                <h3 className="mt-10 text-3xl font-semibold tracking-[-0.03em] text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-muted">{pillar.copy}</p>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
