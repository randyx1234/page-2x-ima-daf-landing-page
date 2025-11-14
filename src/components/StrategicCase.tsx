import { AlertCircle, Ban, MessageSquareOff, TrendingUp, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const StrategicCase = () => {
  const points = [
    {
      text: "Corporate interests control 70 percent of clinical research",
      icon: AlertCircle
    },
    {
      text: "Repurposed treatments have no funding pathway",
      icon: Ban
    },
    {
      text: "Censorship of medical voices continues to grow",
      icon: MessageSquareOff
    },
    {
      text: "Chronic illness is rising despite record healthcare spending",
      icon: TrendingUp
    },
    {
      text: "Independent physicians need structural support",
      icon: Stethoscope
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
          Your Gift Helps Fix What's Broken in American Healthcare
        </h2>
        
        <div className="h-1 w-24 bg-accent mx-auto mb-16 rounded-full"></div>
        
        <div className="grid gap-6 mb-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-fade-in border-l-4 border-l-destructive"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed pt-2">{point.text}</p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center p-8 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-2xl text-foreground font-semibold">
            Your DAF gift creates change where it's needed most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicCase;
