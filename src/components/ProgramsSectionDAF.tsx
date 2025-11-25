import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Network } from "lucide-react";

const ProgramsSectionDAF = () => {
  const programs = [
    {
      icon: Shield,
      title: "Protect Independent Physicians",
      items: [
        "Support doctors who put patients first",
        "Provide network, research, and legal resources"
      ]
    },
    {
      icon: FileText,
      title: "Restore Evidence and Truth",
      items: [
        "Fund the Journal of Independent Medicine",
        "Publish research big pharma won't touch",
        "Build evidence-based treatment guides"
      ]
    },
    {
      icon: Network,
      title: "Build the Trusted Referral Network",
      items: [
        "Grow a nationwide network of vetted physicians",
        "Give patients access to Honest Medicine clinicians"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          IMA's Approach: Honest Medicine<sup className="text-lg font-normal relative -top-6 ml-0.5">™</sup>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="p-8 bg-card shadow-card hover:shadow-elevated transition-all duration-300 border-t-4 border-t-accent">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-accent/10">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                  {program.title}
                </h3>
                
                <ul className="space-y-3">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
            Support These Programs With Your DAF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSectionDAF;
