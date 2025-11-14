import Hero from "@/components/Hero";
import WakeUpCall from "@/components/WakeUpCall";
import ProgramsSection from "@/components/ProgramsSection";
import WhyDAF from "@/components/WhyDAF";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowToGive from "@/components/HowToGive";
import StrategicCase from "@/components/StrategicCase";
import CredibilitySection from "@/components/CredibilitySection";
import GivingLevels from "@/components/GivingLevels";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WakeUpCall />
      <ProgramsSection />
      <WhyDAF />
      <TestimonialsSection />
      <HowToGive />
      <StrategicCase />
      <CredibilitySection />
      <GivingLevels />
      <FinalCTA />
    </div>
  );
};

export default Index;
