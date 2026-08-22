import { motion } from "framer-motion";

const stats = [
  { number: "12+", label: "Years baking in Chitwan", sub: "Since 2013", href: "/about" },
  { number: "4", label: "Branches in Narayangarh", sub: "Serving Bharatpur & Chitwan", href: "/contact" },
  { number: "17", label: "Skilled bakers & staff", sub: "Locally employed", href: "/facts" },
  { number: "4.8★", label: "Google rating", sub: "92 reviews", href: "/about" },
];

export function Highlights() {
  return (
    <section className="py-20 px-6 bg-[#2C1A0E]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#2C1A0E] px-8 py-10 text-center hover:bg-[#3a2415] transition-colors duration-200"
            >
              <p className="font-bold text-4xl text-[#C4714A] mb-2 leading-none">{s.number}</p>
              <p className="text-white/80 text-sm font-sans font-medium leading-snug mb-1">{s.label}</p>
              <p className="text-white/35 text-xs font-sans">{s.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
