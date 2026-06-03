"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { openContactModal } from "@/components/contact-modal";

export function SiteNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  const isProjectsPage = pathname === "/projects";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Triggers when section dominates viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ["top", "work", "about", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-center px-4 sm:px-8">
      {/* Floating pill navigation */}
      <nav
        aria-label="Main navigation"
        className={cn(
          "flex h-12 items-center justify-between gap-4 rounded-full border px-4 py-1.5 transition-all duration-500",
          scrolled
            ? "border-white/10 bg-background/60 shadow-panel backdrop-blur-xl w-full max-w-3xl"
            : "border-white/5 bg-white/[0.02] backdrop-blur-md w-full max-w-4xl"
        )}
      >
        {/* Left Logo / Initials */}
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/30 bg-gold/10 text-[10px] font-semibold text-gold transition-all duration-300 group-hover:border-gold/60 group-hover:bg-gold/20">
            IS
          </span>
          <div className="hidden flex-col sm:flex animate-fade-in">
            <span className="text-xs font-semibold text-ink leading-tight transition-colors duration-300 group-hover:text-gold">
              {siteConfig.name}
            </span>
            <span className="flex items-center gap-1 text-[8px] font-medium text-emerald-400 leading-none mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </div>
        </a>

        {/* Center Nav items */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            // Handle both exact match and logical fallback
            const isActive = !isProjectsPage && (activeSection === sectionId || (sectionId === "work" && activeSection === "projects"));
            const linkHref = isProjectsPage ? `/${item.href}` : item.href;
            
            return (
              <a
                key={item.href}
                href={linkHref}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-4 sm:text-sm z-10",
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/5 bg-white/10 shadow-[0_1px_10px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA button & Socials */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden h-7 w-7 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-muted transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-ink sm:flex"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteConfig.links.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden h-7 w-7 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-muted transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-ink sm:flex"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          
          <div className="hidden h-4 w-px bg-white/10 sm:block" />

          <a
            href={siteConfig.links.emailDraftUrl}
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
            className="flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-3 py-1.5 text-xs font-medium text-gold transition-all duration-300 hover:border-gold/50 hover:bg-gold/15 hover:scale-[1.02]"
          >
            <Mail className="h-3 w-3" />
            <span>Connect</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
