import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I give through my DAF?",
      answer: "Simply log into your DAF provider's portal (such as Fidelity Charitable, Schwab Charitable, or Vanguard Charitable), search for Independent Medical Alliance by name or EIN, and recommend a grant amount. The process typically takes just a few minutes."
    },
    {
      question: "Is my DAF gift tax-deductible?",
      answer: "Yes! When you contribute to your DAF, you receive an immediate tax deduction. When you recommend a grant from your DAF to IMA, those funds have already been tax-deducted, making it a seamless way to support our mission."
    },
    {
      question: "Can I designate my gift to a specific program?",
      answer: "Absolutely. You can designate your DAF gift to support Cancer Solutions, the Trusted Referral Network, or other specific IMA programs. Simply include a note with your grant recommendation."
    },
    {
      question: "What is IMA's EIN for DAF giving?",
      answer: "Our EIN (Employer Identification Number) is available upon request. Most DAF providers can also locate us by searching for 'Independent Medical Alliance' in their grant recommendation system."
    },
    {
      question: "How will my gift make an impact?",
      answer: "Your DAF gift directly funds independent physicians, evidence-based research, patient education programs, and the expansion of our Trusted Referral Network. Every dollar helps restore patient-first care in America."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        
        <div className="h-1 w-24 bg-accent mx-auto mb-12 rounded-full"></div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
