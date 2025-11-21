import { Card } from "@/components/ui/card";
import { FileText, Users, BookOpen, Handshake, CheckCircle } from "lucide-react";

const CredibilitySection = () => {
  const credentials = [
    {
      icon: FileText,
      title: "Journal of Independent Medicine",
      description: "Publishing evidence-based research"
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Founded by Dr. Kory, Dr. Marik, and leading independent physicians"
    },
    {
      icon: BookOpen,
      title: "Published Research",
      description: "Peer-reviewed studies and treatment guides"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Collaborating with medical professionals nationwide"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 bg-card text-center shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
        
        <Card className="p-8 bg-accent/10 border-accent/20 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-accent" />
            <p className="text-xl font-bold text-foreground">
              100% Tax Deductible
            </p>
          </div>
          <p className="text-muted-foreground">
            Independent Medical Alliance is a registered 501(c)(3) nonprofit organization
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CredibilitySection;
