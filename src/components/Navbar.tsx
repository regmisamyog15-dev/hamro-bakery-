import { useBranch } from "@/context/BranchContext";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export function Navbar() {
  const { branchData, selectedBranch, setShowSelector } = useBranch();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const handleOrderNow = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery${selectedBranch ? ` (${selectedBranch})` : ""}! I'd like to place an order. Please help me!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled
        ? "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#2C1A0E]/10 shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="w-full px-4 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0"
          data-testid="link-home"
        >
          <img
            src="/images/logo.jpeg"
            alt="Hamro Bakery Logo"
            className="h-9 w-9 object-contain rounded-full border border-[#2C1A0E]/15"
          />
          <span className={`font-serif text-base font-semibold leading-tight hidden sm:block transition-colors ${
            scrolled ? "text-[#2C1A0E]" : "text-white"
          }`}>
            Hamro Bakery
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm font-sans font-medium">
          {["menu", "gallery", "location"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`capitalize transition-colors hover:text-[#C4714A] ${
                scrolled ? "text-[#2C1A0E]/70" : "text-white/80"
              }`}
            >
              {id}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 transition-colors hover:text-[#C4714A] outline-none ${
              scrolled ? "text-[#2C1A0E]/70" : "text-white/80"
            }`}>
              Contact <ChevronDown className="w-3.5 h-3.5" />
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
          <Link href="/blog">
            <span className={`cursor-pointer transition-colors hover:text-[#C4714A] ${
              scrolled ? "text-[#2C1A0E]/70" : "text-white/80"
            }`}>Blog</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans">
            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-500" : "bg-red-400"}`} />
            <span className={scrolled ? "text-[#2C1A0E]/60" : "text-white/60"}>
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>

          <button
            onClick={handleOrderNow}
            className="hidden sm:block bg-[#2C1A0E] text-white text-xs font-sans font-medium px-4 py-2 rounded-sm hover:bg-[#C4714A] transition-colors duration-200"
          >
            Order Now
          </button>

          <button
            onClick={() => setShowSelector(true)}
            className={`flex items-center gap-1 text-xs font-sans font-medium transition-colors border-l pl-3 ${
              scrolled
                ? "text-[#2C1A0E]/60 border-[#2C1A0E]/15 hover:text-[#2C1A0E]"
                : "text-white/60 border-white/20 hover:text-white"
            }`}
            data-testid="btn-change-branch"
          >
            <MapPin className="w-3 h-3 hidden sm:block" />
            <span className="truncate max-w-[80px] sm:max-w-[120px]">{selectedBranch || "Branch"}</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </nav>
  );
}
