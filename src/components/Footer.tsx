import imaLogo from "@/assets/ima-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container px-6">
        <div className="flex flex-col items-center space-y-6">
          <img src={imaLogo} alt="Independent Medical Alliance" className="h-12 md:h-16" />
          
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-foreground">
              501(c)(3) Nonprofit
            </p>
            <p className="text-sm text-muted-foreground">
              All gifts are tax-deductible
            </p>
          </div>
          
          <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border w-full max-w-md">
            <p>&copy; {currentYear} Independent Medical Alliance. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
