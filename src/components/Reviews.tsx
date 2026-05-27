import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Ramesh Puri",
    text: "Best bakery in Chitwan! The chocolate cake was absolutely perfect. Fresh, delicious, and worth every rupee.",
    stars: 5,
  },
  {
    name: "Nabin Chapai",
    text: "Ordered a custom cake for my daughter's birthday and they nailed it completely. Beautiful design and amazing taste!",
    stars: 5,
  },
  {
    name: "Bikash Risal",
    text: "Hamro Bakery has been our family's favourite since years. Quality never drops. Highly recommended!",
    stars: 5,
  },
  {
    name: "Samyog Regmi",
    text: "Visited the Hakim Chowk branch and loved it. Very clean, hygienic, and the pastries are incredible!",
    stars: 5,
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  useEffect(() => {
    timer.current = setInterval(next, 5000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const reset = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setCurrent(i);
    timer.current = setInterval(next, 5000);
  };

  return (
    <section className="py-16 px-4 bg-primary/5">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">What They Say</h2>
          <p className="text-muted-foreground">Real words from real customers</p>
        </motion.div>

        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border shadow-md p-8 text-center"
              data-testid={`card-review-${current}`}
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: reviews[current].stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-foreground/80 italic text-base leading-relaxed mb-5">
                "{reviews[current].text}"
              </p>
              <p className="font-serif font-bold text-primary">— {reviews[current].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => reset(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted-foreground/30"
              }`}
              aria-label={`Review ${i + 1}`}
              data-testid={`btn-review-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
