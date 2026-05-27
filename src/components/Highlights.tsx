import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    emoji: "🎂",
    title: "Custom Cake Perfection",
    description: "Handcrafted to your dream design",
    detail:
      "Every custom cake is personally crafted by our skilled bakers. From themed birthday cakes to elegant wedding tiers — we bring your vision to life with premium ingredients and artistic finishes.",
  },
  {
    emoji: "⭐",
    title: "12 Years of Trust",
    description: "Serving Narayangarh since 2013",
    detail:
      "Since 2013, thousands of families across Chitwan have celebrated their happiest moments with Hamro Bakery. Our reputation is built on consistency, quality, and genuine care for every customer.",
  },
  {
    emoji: "🧼",
    title: "Hygienic & Clean",
    description: "Highest cleanliness standards always",
    detail:
      "Our kitchen follows strict hygiene protocols. All ingredients are fresh, all equipment is sanitized daily, and our staff maintains the highest standards — so every bite is safe, clean, and delicious.",
  },
  {
    emoji: "😊",
    title: "Happy Customers",
    description: "The star of Bharatpur",
    detail:
      "We take pride in being Narayangarh's most loved bakery. Our customers keep coming back not just for the taste, but for the warm smiles and personal service that make every visit special.",
  },
];

export function Highlights() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => setExpanded((prev) => (prev === i ? null : i));

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onHoverStart={() => setExpanded(i)}
                onHoverEnd={() => setExpanded(null)}
                onClick={() => toggle(i)}
                animate={
                  isOpen
                    ? { y: -8, boxShadow: "0 20px 40px rgba(92,51,23,0.18)" }
                    : { y: 0, boxShadow: "0 2px 8px rgba(92,51,23,0.06)" }
                }
                transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                className={`bg-card rounded-2xl p-6 text-center border cursor-pointer select-none transition-colors duration-300 ${
                  isOpen ? "border-primary/40 bg-primary/5" : "border-border"
                }`}
                data-testid={`card-highlight-${i}`}
              >
                <motion.div
                  animate={{ scale: isOpen ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl mb-3"
                >
                  {h.emoji}
                </motion.div>

                <h3 className="font-serif text-primary text-lg font-bold mb-1">{h.title}</h3>
                <p className="text-muted-foreground text-sm">{h.description}</p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-primary/20 pt-3">
                        <p className="text-xs text-foreground/70 leading-relaxed text-left">
                          {h.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
