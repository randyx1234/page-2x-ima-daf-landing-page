import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowToGive = () => {
  const steps = [
    {
      number: "1",
      title: "Recommend a grant",
      description: "Recommend a grant through your DAF provider: Fidelity, Schwab, Vanguard, or others."
    },
    {
      number: "2",
      title: "Use this information",
      details: [
        "Independent Medical Alliance",
        "EIN: [Insert EIN]",
        "Address: [Insert Address]",
        "Purpose: Support for Independent Medical Alliance mission"
      ]
    },
    {
      number: "3",
      title: "Notify IMA",
      description: "Notify IMA so we can confirm and designate your gift."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Give in Three Simple Steps
        </h2>
        
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 bg-card shadow-card">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  {step.description && (
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                  
                  {step.details && (
                    <div className="mt-4 p-4 bg-muted rounded-lg space-y-2">
                      {step.details.map((detail, i) => (
                        <p key={i} className="text-foreground font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Give Through Your DAF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToGive;
