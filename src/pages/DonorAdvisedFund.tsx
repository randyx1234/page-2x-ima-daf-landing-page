import Navbar from "@/components/Navbar";
import HeroDAF from "@/components/HeroDAF";
import WakeUpCall from "@/components/WakeUpCall";
import ProgramsSectionDAF from "@/components/ProgramsSectionDAF";
import IMAProgramsShowcase from "@/components/IMAProgramsShowcase";
import CredibilitySection from "@/components/CredibilitySection";
import HowToGive from "@/components/HowToGive";
import GivingLevels from "@/components/GivingLevels";
import FAQ from "@/components/FAQ";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const DonorAdvisedFund = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroDAF />
      <WakeUpCall />
      <ProgramsSectionDAF />
      <IMAProgramsShowcase />
      <CredibilitySection />
      <HowToGive />
      <GivingLevels />
      <FAQ />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default DonorAdvisedFund;
