import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            IMA
          </h1>
          <span className="ml-2 text-sm text-muted-foreground hidden sm:inline">
            Independent Medical Alliance
          </span>
        </div>
        
        <Button size="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Give Through Your DAF
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
