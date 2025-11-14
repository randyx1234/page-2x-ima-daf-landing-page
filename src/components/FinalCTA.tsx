import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-accent">
      <div className="container px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Your DAF Can Help Rebuild Honest Medicine in America
        </h2>
        
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Your gift is tax-deductible and directly supports independent physicians, evidence-based research, and patient-first care.
        </p>
        
        <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 shadow-elevated">
          Recommend a Grant Through Your DAF
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
