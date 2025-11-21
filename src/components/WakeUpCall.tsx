import { Card } from "@/components/ui/card";
import { DollarSign, AlertCircle, UserX } from "lucide-react";

const WakeUpCall = () => {
  const issues = [
    {
      icon: DollarSign,
      description: "Corporate interests drive treatment protocols"
    },
    {
      icon: AlertCircle,
      description: "Pharmaceutical influence shapes public messaging"
    },
    {
      icon: UserX,
      description: "Patients feel unheard—and trust has collapsed"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Corporate Medicine is Collapsing
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {issues.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-8 text-center bg-card shadow-card hover:shadow-elevated transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-destructive" strokeWidth={2} />
                </div>
                <p className="text-foreground text-lg">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WakeUpCall;
