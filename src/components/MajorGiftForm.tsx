import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MajorGiftForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Form submitted successfully",
      description: "Our philanthropy team will contact you soon."
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
        Considering a Major Gift?
      </h2>
      
      <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
        Our dedicated philanthropy advisors will help you structure a meaningful, tax-efficient major gift that advances medical freedom nationwide.
      </p>

      <Card className="p-8 bg-card shadow-card mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Call Our Major Gifts Team
          </h3>
          <a 
            href="tel:+12029875660"
            className="inline-flex items-center gap-2 text-3xl font-bold text-accent hover:text-accent/80 transition-colors"
          >
            <Phone className="w-8 h-8" />
            (202) 987-5660
          </a>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground">Or fill out the form below:</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-semibold">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="lastName" className="text-foreground font-semibold">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground font-semibold">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground font-semibold">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground font-semibold">
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your philanthropic interests..."
              rows={5}
              className="mt-2"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
          >
            Submit
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Your information is protected and will only be used to discuss major gift opportunities.
          </p>
        </form>
      </Card>
    </div>
  );
};

export default MajorGiftForm;
