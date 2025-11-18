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
          A Few Things to Know
        </h2>
        
        <div className="space-y-8 mb-12">
          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Flexible Giving
              </h3>
              <p className="text-muted-foreground">
                You can use your DAF to make a one-time or a recurring gift.
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Tax Benefits
              </h3>
              <p className="text-muted-foreground">
                You will receive an acknowledgment for your gift, but not a charitable receipt for tax purposes. This is because it is your contribution to your donor-advised fund that is tax-deductible, not your distribution to Independent Medical Alliance, Inc.
              </p>
            </Card>
            
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Anonymous Option
              </h3>
              <p className="text-muted-foreground">
                You can give anonymously to Independent Medical Alliance via your DAF.
              </p>
            </Card>
          </div>

          {/* DAF Institutions */}
          <Card className="p-8 bg-card shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              A Few Institutions Providing DAF's
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {dafInstitutions.map((institution, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="font-semibold text-foreground">{institution.name}</span>
                  <span className="text-muted-foreground">{institution.phone}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* How to Recommend */}
          <Card className="p-8 bg-card shadow-card border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              How to Recommend a DAF Gift
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-6">
                Contact your DAF sponsor to request a grant distribution to Independent Medical Alliance, Inc.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">EIN</p>
                  <p className="text-xl font-bold text-foreground">85-2270146</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Mailing Address</p>
                  <p className="font-semibold text-foreground">2001 L Street NW, Suite 500</p>
                  <p className="font-semibold text-foreground">Washington, DC 20036</p>
                </div>
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
