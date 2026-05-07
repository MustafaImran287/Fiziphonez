import dynamic from "next/dynamic";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseGlow } from "@/components/MouseGlow";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Hero } from "@/components/sections/Hero";

const Stats = dynamic(() =>
  import("@/components/sections/Stats").then((m) => ({ default: m.Stats })),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => ({ default: m.Services })),
);
const WhyChooseUs = dynamic(() =>
  import("@/components/sections/WhyChooseUs").then((m) => ({
    default: m.WhyChooseUs,
  })),
);
const Process = dynamic(() =>
  import("@/components/sections/Process").then((m) => ({ default: m.Process })),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  })),
);
const Showcase = dynamic(() =>
  import("@/components/sections/Showcase").then((m) => ({ default: m.Showcase })),
);
const CallToAction = dynamic(() =>
  import("@/components/sections/CallToAction").then((m) => ({
    default: m.CallToAction,
  })),
);
const SiteFooter = dynamic(() =>
  import("@/components/sections/SiteFooter").then((m) => ({
    default: m.SiteFooter,
  })),
);

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
