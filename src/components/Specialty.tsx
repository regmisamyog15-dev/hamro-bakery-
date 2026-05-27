import { motion } from "framer-motion";
import { Award, Smile, Star, Heart, Utensils, Cake, ShieldCheck, Users, Briefcase } from "lucide-react";

const specialties = [
  { icon: Cake, label: "Perfection in custom cake design" },
  { icon: Award, label: "Great experience since 2013" },
  { icon: Smile, label: "Happy customers always" },
  { icon: Star, label: "Star of Bharatpur" },
  { icon: Utensils, label: "Excellent taste in every bite" },
  { icon: Heart, label: "Best cakes for celebrations" },
  { icon: ShieldCheck, label: "Hygienic & clean environment" },
  { icon: Users, label: "17 skilled employees" },
  { icon: Briefcase, label: "Generating jobs & skills" },
];

export function Specialty() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center text-primary mb-10"
        >
          Why Hamro Bakery?
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {specialties.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center text-center gap-3 bg-secondary/40 rounded-2xl p-5 border border-border transition-all duration-300 hover:bg-secondary/70 hover:shadow-md cursor-default"
              data-testid={`badge-specialty-${i}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground/90 leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
