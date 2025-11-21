import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctor-patient.jpg";

const HeroDAF = () => {
  return (
    <section className="relative min-h-[84.375vh] flex items-center justify-center overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-6 py-20 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl max-w-5xl mx-auto animate-fade-in">
          Support Medical Freedom Through Your Donor-Advised Fund
        </h1>
        
        <p className="mb-10 text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Your DAF gift empowers independent physicians and restores patient-first healthcare in America.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-elevated">
            Give Through Your DAF
          </Button>
          <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
            Learn How DAF Giving Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroDAF;
