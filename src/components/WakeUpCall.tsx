import { ArrowRight } from "lucide-react";

const WakeUpCall = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Trust in Doctors Has Dropped
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-16">
            45% Since COVID
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4">
                71.5%
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground">
                2020
              </p>
            </div>
            
            <ArrowRight className="w-12 h-12 text-muted-foreground rotate-90 md:rotate-0" />
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4">
                40.1%
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WakeUpCall;
