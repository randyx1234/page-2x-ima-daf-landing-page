import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "Patient Story",
      quote: "IMA connected me with a doctor who actually listened. My treatment finally moved forward after years of being dismissed.",
      bgColor: "bg-accent/5"
    },
    {
      type: "Physician Story",
      quote: "IMA gave me a home after being deplatformed for speaking honestly about treatment protocols.",
      bgColor: "bg-primary/5"
    },
    {
      type: "Donor Story",
      quote: "Our DAF gift made a real difference. IMA is doing the work traditional healthcare abandoned.",
      bgColor: "bg-accent/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Real Impact From Real Donors and Physicians
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-8 ${testimonial.bgColor} border-none shadow-card hover:shadow-elevated transition-all duration-300`}>
              <Quote className="w-10 h-10 text-accent mb-4" />
              
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
                {testimonial.type}
              </p>
              
              <p className="text-lg text-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
