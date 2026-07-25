import { galleryImages } from "@/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBranch } from "@/context/BranchContext";
import { SiWhatsapp } from "react-icons/si";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { branchData } = useBranch();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleOrder = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to place an order. Please help me!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a0e06]">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={galleryImages[currentIndex]}
          alt="Hamro Bakery — fresh cakes and pastries in Narayangarh Chitwan"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Layered natural overlay — not just flat black */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06]/90 via-[#1a0e06]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e06]/50 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-start justify-end px-6 sm:px-12 pb-20 sm:pb-24 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="section-eyebrow text-white/60 mb-4"
        >
          Narayangarh, Chitwan · Since 2013
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-white leading-[0.95] mb-5"
          style={{ fontStyle: "italic" }}
        >
          Hamro<br />
          <span className="font-semibold not-italic">Bakery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="text-white/75 text-base sm:text-lg font-sans font-light max-w-md leading-relaxed mb-8"
        >
          Custom cakes, fresh pastries, and baked happiness — four branches across Narayangarh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={handleOrder}
            className="flex items-center gap-2.5 bg-[#C4714A] hover:bg-[#b56540] text-white px-6 py-3 rounded-sm text-sm font-sans font-medium tracking-wide transition-colors duration-200"
          >
            <SiWhatsapp className="w-4 h-4" />
            Order Now
          </button>
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white/70 hover:text-white text-sm font-sans border-b border-white/30 hover:border-white/70 pb-0.5 transition-colors duration-200"
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Minimal dot navigation — bottom right */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-1.5">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            className={`block rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-1.5 h-4 bg-[#C4714A]" : "w-1.5 h-1.5 bg-white/30"
            }`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
