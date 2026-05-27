import { galleryImages } from "@/data";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={galleryImages[currentIndex]}
          alt="Hamro Bakery Cake"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 drop-shadow-lg"
        >
          Hamro Bakery
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl italic font-serif mb-2 drop-shadow-md"
        >
          Baking happiness since 2013
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-sm md:text-base uppercase tracking-widest text-white/80"
        >
          Narayangarh, Chitwan
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
