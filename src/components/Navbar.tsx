import { useBranch } from "@/context/BranchContext";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Menu", path: "/menu" },
  { label: "Gallery", path: "/gallery" },
  { label: "Custom Cakes", path: "/custom-cake" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];

export function Navbar() {
  const { branchData, selectedBranch, setShowSelector } = useBranch();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!branchData) return;
    const check = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= branchData.hours.open && hour < branchData.hours.close);
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, [branchData]);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const transparent = isHome && !scrolled;
  const textColor = transparent ? "text-white/75" : "text-[#2C1A0E]/65";
  const textHover = "hover:text-[#C4714A]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      transparent ? "bg-transparent" : "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#2C1A0E]/10 shadow-sm"
    }`}>
      <div className="w-full px-4 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <button className="flex items-center gap-3 hover:opacity-80 transition-opacity shrink-0" data-testid="link-home">
            <img src="/images/logo.jpeg" alt="Hamro Bakery Logo" className="h-9 w-9 object-contain rounded-full border border-[#2C1A0E]/15" />
            <span className={`font-serif text-base font-semibold leading-tight hidden sm:block transition-colors ${transparent ? "text-white" : "text-[#2C1A0E]"}`}>
              Hamro Bakery
            </span>
          </button>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-sans font-medium">
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={path} href={path}>
              <span className={`cursor-pointer transition-colors ${textColor} ${textHover} ${location === path ? "text-[#C4714A]" : ""}`}>
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-sans">
            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-500" : "bg-red-400"}`} />
            <span className={transparent ? "text-white/60" : "text-[#2C1A0E]/50"}>
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>

          <button
            onClick={() => {
              const phone = branchData?.whatsapp ?? "9865009581";
              window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello Hamro Bakery! I'd like to place an order.")}`, "_blank");
            }}
            className="hidden sm:block bg-[#2C1A0E] text-white text-xs font-sans font-medium px-4 py-2 rounded-sm hover:bg-[#C4714A] transition-colors duration-200"
          >
            Order Now
          </button>

          <button
            onClick={() => setShowSelector(true)}
            className={`flex items-center gap-1 text-xs font-sans font-medium transition-colors border-l pl-3 ${
              transparent
                ? "text-white/60 border-white/20 hover:text-white"
                : "text-[#2C1A0E]/60 border-[#2C1A0E]/15 hover:text-[#2C1A0E]"
            }`}
            data-testid="btn-change-branch"
          >
            <MapPin className="w-3 h-3 hidden sm:block" />
            <span className="truncate max-w-[80px] sm:max-w-[110px]">{selectedBranch || "Branch"}</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden w-8 h-8 flex items-center justify-center transition-colors ${transparent ? "text-white/70" : "text-[#2C1A0E]/60"}`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF7F2] border-t border-[#2C1A0E]/8 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map(({ label, path }) => (
                <Link key={path} href={path}>
                  <span className={`block py-2.5 text-sm font-sans font-medium cursor-pointer transition-colors ${
                    location === path ? "text-[#C4714A]" : "text-[#2C1A0E]/65 hover:text-[#C4714A]"
                  }`}>
                    {label}
                  </span>
                </Link>
              ))}
              <div className="pt-3 border-t border-[#2C1A0E]/8">
                <button
                  onClick={() => {
                    const phone = branchData?.whatsapp ?? "9865009581";
                    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello! I'd like to order.")}`, "_blank");
                  }}
                  className="w-full bg-[#2C1A0E] text-white text-sm font-sans py-3 rounded-sm hover:bg-[#C4714A] transition-colors"
                >
                  Order Now via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Need these for mobile menu animation
import { AnimatePresence, motion } from "framer-motion";
