import {
  Activity,
  Atom,
  BarChart3,
  BookOpen,
  Bot,
  Boxes,
  Braces,
  BrainCircuit,
  CloudLightning,
  Code2,
  Database,
  GitBranch,
  GitFork,
  Github,
  Globe,
  KeyRound,
  Laptop,
  LayoutGrid,
  Library,
  Lightbulb,
  MonitorSmartphone,
  PenTool,
  Search,
  Server,
  Settings,
  Sparkles,
  Terminal,
  Webhook,
  Wind,
  Workflow
} from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { skillGroups } from "@/lib/site-data";

const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  React: Atom,
  "Next.js": Globe,
  TypeScript: Braces,
  "Tailwind CSS": Wind,
  "Responsive UI": MonitorSmartphone,
  Python: Braces,
  Django: Terminal,
  "REST APIs": Webhook,
  Authentication: KeyRound,
  "Server Logic": Server,
  MySQL: Database,
  "Schema Design": GitFork,
  Queries: Search,
  "Data Modeling": Boxes,
  Reporting: BarChart3,
  "Prompt Engineering": BrainCircuit,
  "AI Workflows": Workflow,
  "Agentic AI": Bot,
  RAG: Library,
  Automation: Settings,
  "Product Thinking": Lightbulb,
  "UX Writing": PenTool,
  "Visual Hierarchy": LayoutGrid,
  Motion: Activity,
  Storytelling: BookOpen,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": Laptop,
  Vercel: CloudLightning,
  "AI Coding Tools": Sparkles
};

export function TechEcosystem() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-gold">
                Technology Ecosystem
              </p>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.15] tracking-[-0.03em] text-ink">
                Tools chosen for <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">building, shipping, and learning</span> faster.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted lg:pb-1">
              No inflated percentages, no skill bars. Just the stack I use to create software, AI workflows, and polished digital experiences.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <MotionReveal
                key={group.title}
                delay={index * 0.04}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skillIconMap[skill] || Code2;
                    return (
                      <span
                        key={skill}
                        className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-muted transition-colors duration-300 hover:border-gold/30 hover:bg-gold/[0.02] hover:text-ink"
                      >
                        <SkillIcon className="h-3.5 w-3.5 text-gold/80" />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
