import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseGlow } from "@/components/MouseGlow";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Showcase } from "@/components/sections/Showcase";
import { CallToAction } from "@/components/sections/CallToAction";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <FloatingParticles />
      <main id="main-content" className="relative overflow-x-hidden">
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Showcase />
        <CallToAction />
        <SiteFooter />
      </main>
    </>
  );
}
