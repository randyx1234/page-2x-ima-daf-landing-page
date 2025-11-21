import { Card } from "@/components/ui/card";
import MajorGiftForm from "@/components/MajorGiftForm";

const HowToGive = () => {

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
                  Log into your DAF portal
                </h3>
                <p className="text-lg text-muted-foreground">
                  Access your donor-advised fund account through your provider's website.
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
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Search "Independent Medical Alliance"
                </h3>
                <p className="text-lg text-muted-foreground">
                  Use the search function to find Independent Medical Alliance as your grant recipient.
                </p>
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
                  Submit your grant
                </h3>
                <p className="text-lg text-muted-foreground">
                  Complete and submit your grant recommendation to Independent Medical Alliance.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center space-y-2 mb-16">
          <p className="text-lg text-foreground font-semibold">Independent Medical Alliance, Inc.</p>
          <p className="text-muted-foreground">IMA's EIN is 85-2270146</p>
          <p className="text-muted-foreground">Our mailing address is: 2001 L Street NW, Suite 500 Washington, DC 20036</p>
        </div>

        <MajorGiftForm />
      </div>
    </section>
  );
};

export default HowToGive;
