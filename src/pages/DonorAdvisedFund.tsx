import Navbar from "@/components/Navbar";
import HeroDAF from "@/components/HeroDAF";
import WakeUpCall from "@/components/WakeUpCall";
import ProgramsSectionDAF from "@/components/ProgramsSectionDAF";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowToGive from "@/components/HowToGive";
import CredibilitySection from "@/components/CredibilitySection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const DonorAdvisedFund = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroDAF />
      <WakeUpCall />
      <ProgramsSectionDAF />
      <TestimonialsSection />
      <HowToGive />
      <CredibilitySection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default DonorAdvisedFund;
