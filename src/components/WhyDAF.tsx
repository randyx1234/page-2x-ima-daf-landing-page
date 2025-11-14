import { Button } from "@/components/ui/button";

const WhyDAF = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          DAF Donors Are the Catalyst for Healthcare Reform
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          If you already have a Donor-Advised Fund, you've set money aside for meaningful impact. IMA channels that gift directly into restoring evidence, integrity, and patient-first care. DAF donors make immediate, lasting transformation possible.
        </p>
        
        <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
          Make a DAF Gift Today
        </Button>
      </div>
    </section>
  );
};

export default WhyDAF;
