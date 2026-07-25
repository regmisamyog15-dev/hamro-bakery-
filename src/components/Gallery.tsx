import { galleryImages } from "@/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const featured = galleryImages.slice(0, 7);

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="section-eyebrow mb-3 block">Gallery</span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#2C1A0E]">
            From our <span className="italic">kitchen</span>
          </h2>
        </div>

        {/* Masonry-style grid with intentional sizing */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Big feature image */}
          <motion.div
            className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer group aspect-[4/3]"
            whileHover="hovered"
            onClick={() => setLightbox(0)}
          >
            <img
              src={featured[0]}
              alt="Hamro Bakery signature cake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
              initial="initial"
              className="absolute inset-0 bg-[#2C1A0E]/30 flex items-center justify-center"
            >
              <ZoomIn className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Right column — two portrait images */}
          {[1, 2].map((idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden cursor-pointer group aspect-square"
              whileHover="hovered"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={featured[idx]}
                alt={`Hamro Bakery product ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
                initial="initial"
                className="absolute inset-0 bg-[#2C1A0E]/30 flex items-center justify-center"
              >
                <ZoomIn className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          ))}

          {/* Bottom row — four squares */}
          {[3, 4, 5, 6].map((idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden cursor-pointer group aspect-square"
              whileHover="hovered"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={featured[idx]}
                alt={`Hamro Bakery product ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                variants={{ hovered: { opacity: 1 }, initial: { opacity: 0 } }}
                initial="initial"
                className="absolute inset-0 bg-[#2C1A0E]/30 flex items-center justify-center"
              >
                <ZoomIn className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          ))}

          {/* Last slot — "view all" teaser */}
          <motion.div
            className="relative overflow-hidden cursor-pointer group aspect-square col-span-1"
            onClick={() => setLightbox(7 % galleryImages.length)}
          >
            <img
              src={galleryImages[7]}
              alt="More from Hamro Bakery"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="font-serif text-2xl font-light">+{galleryImages.length - 7}</p>
                <p className="font-sans text-xs tracking-wider">more</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={galleryImages[lightbox]}
              alt="Hamro Bakery"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/25 text-white text-sm font-sans rounded-sm transition-colors"
              >← Prev</button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/25 text-white text-sm font-sans rounded-sm transition-colors"
              >Next →</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
