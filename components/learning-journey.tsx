import { cn } from "@/lib/utils";
import { MotionReveal } from "@/components/motion-reveal";

const phases = [
  {
    phase: "Phase 01",
    title: "Data & ML Foundations",
    status: "Completed",
    statusColor: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
    dotColor: "bg-emerald-400 shadow-emerald-400/50",
    description: "Building the numerical and structured data foundation: model exploration, database schema design, and interactive analytics dashboards.",
    skills: ["Machine Learning", "Data Engineering", "Analytics", "Power BI"]
  },
  {
    phase: "Phase 02",
    title: "Cognitive Integration & RAG",
    status: "In Progress",
    statusColor: "border-gold/20 text-gold bg-gold/5",
    dotColor: "bg-gold shadow-gold/50 animate-pulse",
    description: "Connecting intelligence to software: context injection pipelines (RAG), vector databases, and custom LLM agent integrations.",
    skills: ["LangChain", "RAG", "Agentic AI"]
  },
  {
    phase: "Phase 03",
    title: "Autonomous Agent Networks",
    status: "Up Next",
    statusColor: "border-white/10 text-muted bg-white/5",
    dotColor: "bg-zinc-600 shadow-transparent",
    description: "Developing cooperative intelligence: multi-agent coordination frameworks where tasks are executed autonomously by collaborating agents.",
    skills: ["CrewAI", "AutoGen"]
  }
];

export function LearningJourney() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-surface px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div className="sticky top-28">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">
                Learning Journey
              </p>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                A roadmap for <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">AI-native product</span> engineering.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                The next layer of product development is not just learning more tools. It is combining machine learning, agents, analytics, and data systems into cohesive products that reason, adapt, and respond.
              </p>
            </div>
          </MotionReveal>

          <div className="relative pl-8 sm:pl-10">
            {/* The vertical timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-emerald-500 via-gold to-white/10" />

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <MotionReveal key={phase.phase} delay={index * 0.08} className="relative">
                  {/* Timeline dot marker */}
                  <div className="absolute left-[-32px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-[#0d0d0d] z-10">
                    <span className={cn("h-1.5 w-1.5 rounded-full", phase.dotColor)} />
                  </div>

                  {/* Phase content card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.01] p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.02]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                        {phase.phase}
                      </span>
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
                          phase.statusColor
                        )}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-ink">{phase.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{phase.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {phase.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] text-ink font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
