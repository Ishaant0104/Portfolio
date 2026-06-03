import { Award, Code2, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { MotionReveal } from "@/components/motion-reveal";

const achievementDetails = [
  {
    label: "Projects Built",
    value: "5+",
    sub: "Full-stack apps & AI systems",
    icon: Code2,
    color: "from-emerald-500/10 via-transparent to-transparent",
    borderColor: "hover:border-emerald-500/30",
    textGradient: "from-emerald-400 via-emerald-200 to-white"
  },
  {
    label: "Hackathons",
    value: "2+",
    sub: "Prototype builds & competitions",
    icon: Award,
    color: "from-gold/15 via-transparent to-transparent",
    borderColor: "hover:border-gold/30",
    textGradient: "from-gold via-gold/80 to-white"
  },
  {
    label: "Graduation",
    value: "2027",
    sub: "B.Tech in AI & Data Science",
    icon: GraduationCap,
    color: "from-sky/15 via-transparent to-transparent",
    borderColor: "hover:border-sky/30",
    textGradient: "from-sky via-sky/80 to-white"
  }
];

export function Achievements() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <MotionReveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">
                Achievements
              </p>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Early proof, <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">growing ambition</span>.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                Demonstrating execution and technical focus through personal project launches, hackathon builds, and academic milestones.
              </p>
            </div>
          </MotionReveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {achievementDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.label} delay={index * 0.08} className="h-full">
                  <div className={cn(
                    "relative group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-6 shadow-glow backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03]",
                    item.borderColor
                  )}>
                    {/* Soft glowing background element on hover */}
                    <div className={cn("absolute inset-0 -z-10 bg-gradient-to-tr opacity-0 transition-opacity duration-700 group-hover:opacity-100", item.color)} />
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                        {item.label}
                      </span>
                      <Icon className="h-5 w-5 text-muted/60 transition-colors duration-300 group-hover:text-ink" />
                    </div>

                    <div className="mt-6">
                      <span className={cn("text-4xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent", item.textGradient)}>
                        {item.value}
                      </span>
                      <p className="mt-3 text-xs leading-relaxed text-muted/70">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
