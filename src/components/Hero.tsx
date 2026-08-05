import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBranch } from "@/context/BranchContext";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";

// Curated hero images — picked for visual impact
const HERO_IMAGES = [
  "/images/img38.png",   // fruit drip cake — photoshoot
  "/images/img27.jpeg",  // white wedding cake with roses — stunning
  "/images/img23.jpeg",  // from original set
  "/images/img25.jpeg",  // chocolate glaze close-up
  "/images/img18.jpeg",  // original branch shot
  "/images/img24.jpeg",  // original set
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { branchData } = useBranch();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleOrder = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello Hamro Bakery! I'd like to place an order. Please help me!")}`, "_blank");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a0e06]">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={HERO_IMAGES[currentIndex]}
          alt="Hamro Bakery — fresh cakes and pastries in Narayangarh Chitwan"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e06]/85 via-[#1a0e06]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e06]/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end px-6 sm:px-12 pb-20 sm:pb-24 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-eyebrow text-white/50 mb-5"
        >
          Narayangarh, Chitwan · Since 2013
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
        >
          Hamro<br />
          <span className="text-[#C4714A]">Bakery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-white/70 text-base sm:text-lg max-w-sm leading-relaxed mb-8"
        >
          Custom cakes, fresh pastries, and baked happiness — four branches across Narayangarh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <button
            onClick={handleOrder}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors duration-200 shadow-lg"
          >
            <SiWhatsapp className="w-4 h-4" />
            Order Now
          </button>
          <Link href="/menu">
            <span className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer border border-white/20">
              View Menu
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Slide counter — bottom right, minimal */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 h-2 bg-[#C4714A]" : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
