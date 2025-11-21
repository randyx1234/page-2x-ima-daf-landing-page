import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

const MajorGiftForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.state) {
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

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      state: "",
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
    <section id="major-gift-form" className="py-16 bg-gradient-to-br from-primary to-accent scroll-mt-16">
      <div className="px-6 max-w-2xl mx-auto">
        <Card className="p-8 bg-card shadow-elevated">
          <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
            Considering a Major Gift?
          </h3>
          
          <p className="text-center text-muted-foreground mb-6">
            Let's discuss how your gift can make a lasting impact. Call us at{" "}
            <a href="tel:+12029875660" className="text-primary font-semibold hover:underline">
              (202) 987-5660
            </a>
            {" "}or submit the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="mt-1.5"
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
                className="mt-1.5"
              />
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
                className="mt-1.5"
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
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="state" className="text-foreground font-semibold">
                State <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                rows={3}
                className="mt-1.5"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Inquiry
            </Button>

            <p className="text-center text-sm text-muted-foreground pt-2">
              Your information is protected and will only be used to discuss major gift opportunities.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default MajorGiftForm;
