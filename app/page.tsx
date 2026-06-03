import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";
import { LearningJourney } from "@/components/learning-journey";
import { Pillars } from "@/components/pillars";
import { SiteNav } from "@/components/site-nav";
import { TechEcosystem } from "@/components/tech-ecosystem";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <FeaturedWork />
        <Pillars />
        <About />
        <TechEcosystem />
        <LearningJourney />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
