import { AlertCircle, Ban, MessageSquareOff, TrendingUp, Stethoscope, Heart, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import medicalTeam from "@/assets/medical-team.png";
import networkMap from "@/assets/network-map.png";

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
    <section className="pt-20 pb-0 bg-gradient-to-b from-background to-muted">
      <div className="container px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
          Your Gift Helps Fix What's Broken<br />in American Healthcare
        </h2>
        
        <div className="h-1 w-24 bg-accent mx-auto mb-16 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card hover:shadow-card transition-all duration-300 hover:scale-[1.02] animate-fade-in border-l-4 border-l-destructive"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-destructive" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">{point.text}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center p-8 rounded-lg bg-accent/10 border border-accent/20 mb-16">
          <p className="text-2xl text-foreground font-semibold">
            Your DAF gift creates change where it's needed most
          </p>
        </div>

        {/* IMA Solutions Section */}
        <div className="space-y-6">
          {/* Cancer Solutions */}
          <Card className="overflow-hidden border-2 border-primary/20 hover:shadow-elevated transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Cancer Solutions</h3>
                </div>
                <p className="text-xl text-foreground font-bold">
                  Redefining Cancer Care Through Prevention and Education
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  The IMA Cancer Resource Hub offers latest research reviews, treatment guides, patient education, community support and more, freely accessible to patients and healthcare professionals.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  Fund Cancer Solutions
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src={medicalTeam} 
                  alt="Medical team collaborating on cancer care research" 
                  className="rounded-lg shadow-card w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Trusted Network */}
          <Card className="overflow-hidden border-2 border-accent/20 hover:shadow-elevated transition-all duration-300 mb-16">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex items-center justify-center order-2 md:order-1">
                <img 
                  src={networkMap} 
                  alt="Map of trusted referral network across the United States" 
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Trusted Referral Network</h3>
                </div>
                <p className="text-xl text-foreground font-bold">
                  Connecting patients with doctors who still listen
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  IMA's Trusted Referral Network links patients to independent physicians who practice Honest Medicine™ across the U.S.
                </p>
                <p className="text-lg text-foreground">
                  Every DAF gift helps us expand this life-changing resource — one that puts the patient back at the center of care.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  Help Build the Network
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StrategicCase;
