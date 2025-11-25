import { DollarSign, AlertCircle, UserX, TrendingDown } from "lucide-react";

const WakeUpCall = () => {
  const problems = [
    {
      icon: DollarSign,
      text: "Corporate interest drives standardized treatment protocols"
    },
    {
      icon: AlertCircle,
      text: "Pharmaceutical money distorts medical truth"
    },
    {
      icon: UserX,
      text: "Patients feel unheard—and trust has collapsed"
    },
    {
      icon: TrendingDown,
      text: "Trust in doctors since COVID has dropped 45%"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-16">
            Corporate Medicine is Collapsing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const isLastCard = index === problems.length - 1;
              
              return (
                <div key={index} className="relative flex flex-col">
                  <div 
                    className="p-8 flex flex-col items-center text-center gap-6 h-full animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-20 h-20 text-destructive" strokeWidth={1.5} />
                    <p className="text-lg text-foreground leading-relaxed">
                      {problem.text}
                    </p>
                  </div>
                  
                  {isLastCard && (
                    <div className="flex flex-col items-center mt-4">
                      <svg 
                        className="w-full h-12" 
                        viewBox="0 0 200 48" 
                        preserveAspectRatio="none"
                      >
                        <path 
                          d="M 10 0 L 10 24 L 190 24 L 190 0" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"
                          className="text-destructive"
                        />
                      </svg>
                      <p className="text-xl font-bold text-destructive mt-2">
                        Outcome
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WakeUpCall;
