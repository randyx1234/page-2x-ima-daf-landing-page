import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Network } from "lucide-react";
import medicalTeamImage from "@/assets/medical-team-discussion.jpg";
import networkMapImage from "@/assets/network-map.png";

const IMAProgramsShowcase = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          IMA Programs Empowering Honest Medicine
        </h2>
        
        {/* Cancer Care Section */}
        <Card className="mb-12 overflow-hidden bg-card shadow-card">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Cancer Care</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                The IMA Cancer Resource Hub offers clinician-developed treatment guides, patient education, community support and more, freely accessible to patients and healthcare professionals.
              </p>
              
              <div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Cancer Resource Hub
                </Button>
              </div>
            </div>
            
            <div className="h-full min-h-[400px]">
              <img 
                src={medicalTeamImage} 
                alt="Medical team collaborating on patient care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Trusted Referral Network Section */}
        <Card className="overflow-hidden bg-card shadow-card">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-full min-h-[400px] order-2 md:order-1">
              <img 
                src={networkMapImage} 
                alt="United States network map showing IMA's reach"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-12 flex flex-col justify-center order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Network className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Trusted Referral Network</h3>
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Connecting patients with doctors who still listen.
              </h4>
              
              <p className="text-lg text-muted-foreground mb-6">
                IMA is building the Trusted Referral Network, a verified directory of independent, like-minded healthcare clinicians and providers committed to ethical, patient-first care.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                The network represents a major milestone IMA supporters have been waiting for; a tangible way to connect trust, transparency, and action in medicine.
              </p>
              
              <div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Help Build the Network
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default IMAProgramsShowcase;
