import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mike",
      quote: "Thank you for becoming a source of medical science I can trust, and for bringing on talented and brave people who deserve to be on your team.",
      bgColor: "bg-accent/5"
    },
    {
      name: "Tania M.",
      quote: "Thank you to all the great doctors who stood up and stood for truth in medicine. Praying your work continues to enlighten many more people.",
      bgColor: "bg-primary/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Statements From IMA Donors
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-8 ${testimonial.bgColor} border-none shadow-card hover:shadow-elevated transition-all duration-300`}>
              <Quote className="w-10 h-10 text-accent mb-4" />
              
              <p className="text-lg text-foreground italic leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                — {testimonial.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
