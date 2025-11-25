import { DollarSign, AlertCircle, UserX, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const WakeUpCall = () => {
  const problems = [
    {
      icon: DollarSign,
      text: "Corporate interests drive treatment protocols"
    },
    {
      icon: AlertCircle,
      text: "Pharmaceutical influence shapes public messaging"
    },
    {
      icon: UserX,
      text: "Patients feel unheard—and trust has collapsed"
    },
    {
      icon: TrendingDown,
      text: "Trust in doctors since COVID has dropped 45%"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-16">
            Corporate Medicine is Collapsing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card flex flex-col items-center text-center gap-6 hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {problem.text}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-end items-center gap-4 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/4 h-0.5 bg-destructive"></div>
            <div className="flex-shrink-0 px-6 py-3 bg-destructive/10 border-2 border-destructive rounded-lg">
              <p className="text-xl font-bold text-destructive whitespace-nowrap">
                Outcome
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WakeUpCall;
