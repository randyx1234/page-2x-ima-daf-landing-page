import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GivingLevels = () => {
  const levels = [
    {
      amount: "$5,000",
      impact: "Funds development of one treatment guide",
      color: "border-t-accent"
    },
    {
      amount: "$10,000",
      impact: "Supports 3 physicians joining TRN",
      color: "border-t-primary"
    },
    {
      amount: "$25,000",
      impact: "Funds a major research initiative",
      color: "border-t-accent"
    },
    {
      amount: "$50,000+",
      impact: "Underwrites a Journal of Independent Medicine volume",
      color: "border-t-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          See the Impact of Your DAF Gift
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <Card key={index} className={`p-8 text-center shadow-card hover:shadow-elevated transition-all duration-300 border-t-4 ${level.color} hover:scale-105`}>
              <div className="text-4xl font-bold text-primary mb-4">
                {level.amount}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {level.impact}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Choose Your Impact Level
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GivingLevels;
