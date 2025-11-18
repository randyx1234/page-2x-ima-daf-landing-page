import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowToGive = () => {
  const dafInstitutions = [
    { name: "Donors Trust", phone: "(703) 535-3563" },
    { name: "National Philanthropic Trust", phone: "(888) 878-7900" },
    { name: "Fidelity", phone: "(800) 262-6039" },
    { name: "Vanguard", phone: "(888) 383-4483" },
    { name: "Charles Schwab", phone: "(800) 746-6216" },
    { name: "BNY Mellon", phone: "(888) 213-7605" }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Give in Three Simple Steps
        </h2>
        
        <div className="space-y-6 mb-12">
          {/* Step 1 */}
          <Card className="p-8 bg-card shadow-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Recommend a grant
                </h3>
                <p className="text-lg text-muted-foreground">
                  Recommend a grant through your DAF provider: Fidelity, Schwab, Vanguard, or others.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-8 bg-card shadow-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Use this information
                </h3>
                <div className="p-6 bg-muted rounded-lg space-y-2">
                  <p className="text-foreground font-semibold">Independent Medical Alliance</p>
                  <p className="text-foreground">EIN: 85-2270146</p>
                  <p className="text-foreground">Address: 2001 L Street NW, Suite 500 Washington, DC 20036</p>
                  <p className="text-foreground">Purpose: Support for Independent Medical Alliance mission</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-8 bg-card shadow-card">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Notify IMA
                </h3>
                <p className="text-lg text-muted-foreground">
                  Notify IMA so we can confirm and designate your gift.
                </p>
              </div>
            </div>
          </Card>
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
