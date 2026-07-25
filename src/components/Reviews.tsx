import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Ramesh Puri",
    handle: "Hakim Chowk",
    text: "Best bakery in Chitwan! The chocolate cake was absolutely perfect. Fresh, delicious, and worth every rupee.",
    stars: 5,
  },
  {
    name: "Nabin Chapai",
    handle: "Sangam Road",
    text: "Ordered a custom cake for my daughter's birthday and they nailed it completely. Beautiful design and amazing taste!",
    stars: 5,
  },
  {
    name: "Bikash Risal",
    handle: "Bishal Chowk",
    text: "Hamro Bakery has been our family's favourite for years. Quality never drops. Highly recommended!",
    stars: 5,
  },
  {
    name: "Samyog Regmi",
    handle: "Hakim Chowk",
    text: "Visited the Hakim Chowk branch and loved it. Very clean, hygienic, and the pastries are incredible!",
    stars: 5,
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  useEffect(() => {
    timer.current = setInterval(next, 5500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const reset = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setCurrent(i);
    timer.current = setInterval(next, 5500);
  };

  return (
    <section className="py-24 px-6 bg-[#2C1A0E] overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — heading */}
          <div>
            <span className="section-eyebrow text-white/40 mb-4 block">Reviews</span>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white leading-tight">
              Loved by<br />
              <span className="italic text-[#C4714A]">Chitwan</span>
            </h2>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#C4714A] text-lg">★</span>
                ))}
              </div>
              <p className="text-white/50 text-sm font-sans">4.8 · 92 Google reviews</p>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => reset(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-1.5 bg-[#C4714A]"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Review ${i + 1}`}
                  data-testid={`btn-review-dot-${i}`}
                />
              ))}
            </div>
          </div>

          {/* Right — review card */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="border border-white/10 bg-white/5 p-8 rounded-sm"
                data-testid={`card-review-${current}`}
              >
                {/* Quote mark */}
                <p className="font-serif text-6xl text-[#C4714A]/30 leading-none mb-4 select-none">"</p>
                <p className="text-white/75 font-sans text-base leading-relaxed mb-6 font-light">
                  {reviews[current].text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C4714A]/20 flex items-center justify-center text-[#C4714A] font-serif font-medium text-sm">
                    {reviews[current].name[0]}
                  </div>
                  <div>
                    <p className="text-white font-sans text-sm font-medium">{reviews[current].name}</p>
                    <p className="text-white/35 font-sans text-xs">{reviews[current].handle} branch</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
