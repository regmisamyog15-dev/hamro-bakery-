import { useBranch } from "@/context/BranchContext";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export function Navbar() {
  const { branchData, selectedBranch, setShowSelector } = useBranch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!branchData) return;
    const checkOpen = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= branchData.hours.open && hour < branchData.hours.close);
    };
    checkOpen();
    const interval = setInterval(checkOpen, 60000);
    return () => clearInterval(interval);
  }, [branchData]);

  const scrollToTop = () => {
    if (window.scrollY === 0) {
      window.open(Math.random() > 0.5 ? "https://www.instagram.com/hamrobakerynarayangarh" : "https://www.facebook.com/share/1E8bcas3Dv/", "_blank");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
      <div className="w-full px-2 sm:px-4 h-16 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:opacity-85 transition-opacity shrink-0"
          data-testid="link-home"
        >
          <img
            src="/images/img31.jpeg"
            alt="Hamro Bakery Logo"
            className="h-12 w-12 object-contain rounded-full bg-white border border-border/40 shadow-sm"
          />
          <span className="font-serif text-lg font-bold text-primary leading-tight hidden sm:block whitespace-nowrap">
            Hamro Bakery
          </span>
        </button>

        <div className="hidden md:flex items-center gap-5 text-sm font-medium ml-4">
          <button onClick={() => scrollTo("menu")} className="hover:text-primary transition-colors">Menu</button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none">
              Contact <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {branchData && (
                <DropdownMenuItem asChild>
                  <a href={`tel:${branchData.phone}`} className="flex items-center gap-2 cursor-pointer">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <a href="https://www.instagram.com/hamrobakerynarayangarh" target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer">
                  <SiInstagram className="w-4 h-4" /> Instagram
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://www.facebook.com/share/1E8bcas3Dv/" target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer">
                  <SiFacebook className="w-4 h-4" /> Facebook
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => scrollTo("location")} className="hover:text-primary transition-colors">Location</button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-primary transition-colors">Gallery</button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 text-sm font-medium">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
            {isOpen ? 'Open' : 'Closed'}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="hidden sm:flex rounded-full px-6 shadow-sm hover:shadow">
                Order Now
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <a href="https://foodmandu.com/" target="_blank" rel="noreferrer" className="cursor-pointer font-medium">
                  Foodmandu
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://www.merokinamel.com/" target="_blank" rel="noreferrer" className="cursor-pointer font-medium">
                  Mero Kinamel
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => setShowSelector(true)}
            className="flex items-center gap-1 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ml-2 border-l pl-4"
            data-testid="btn-change-branch"
          >
            <MapPin className="w-3.5 h-3.5 hidden sm:block" />
            <span className="truncate max-w-[80px] sm:max-w-[120px]">{selectedBranch || "Branch"}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
