const StrategicCase = () => {
  const points = [
    "Corporate interests control 70 percent of clinical research",
    "Repurposed treatments have no funding pathway",
    "Censorship of medical voices continues to grow",
    "Chronic illness is rising despite record healthcare spending",
    "Independent physicians need structural support"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
          Your Gift Helps Fix What's Broken in American Healthcare
        </h2>
        
        <div className="space-y-6 mb-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent"></div>
              <p className="text-lg text-foreground">{point}</p>
            </div>
          ))}
        </div>
        
        <p className="text-xl text-center text-muted-foreground font-medium">
          Your DAF gift creates change where it's needed most.
        </p>
      </div>
    </section>
  );
};

export default StrategicCase;
