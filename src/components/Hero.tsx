import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctor-patient.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-6 py-20 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl max-w-5xl mx-auto animate-fade-in">
          Support Honest Medicine Through Your Donor-Advised Fund
        </h1>
        
        <p className="mb-10 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Your DAF gift protects independent physicians, funds evidence-based research, and restores patient-first healthcare in America.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-elevated">
            Give Through Your DAF
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
            Learn How DAF Giving Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
