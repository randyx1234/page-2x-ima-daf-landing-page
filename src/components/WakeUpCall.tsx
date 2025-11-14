import { Card } from "@/components/ui/card";

const WakeUpCall = () => {
  const stats = [
    {
      stat: "70%",
      description: "of doctors say they spend more time on paperwork than patients"
    },
    {
      stat: "50 years",
      description: "Public trust in healthcare is the lowest in 50 years"
    },
    {
      stat: "Almost none",
      description: "Independent research receives almost no funding"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              When Medicine Stopped Listening, We Stepped Up
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Medicine didn't fail overnight. Research was censored. Doctors were punished for speaking truth. Trust collapsed to historic lows. Patients were left without real choice or informed consent.
            </p>
          </div>
          
          <div className="relative">
            <Card className="p-6 bg-card shadow-card border-l-4 border-l-destructive">
              <div className="space-y-3 text-sm">
                <p className="font-semibold text-destructive">"Doctors Silenced"</p>
                <p className="font-semibold text-destructive">"Research Removed"</p>
                <p className="font-semibold text-destructive">"Trust at Record Lows"</p>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <Card key={index} className="p-8 text-center bg-card shadow-card hover:shadow-elevated transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {item.stat}
              </div>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WakeUpCall;
