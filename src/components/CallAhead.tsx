import { useBranch } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CallAhead() {
  const { branchData } = useBranch();

  return (
    <section className="py-6 px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm"
        >
          <img
            src="/images/img9.jpeg"
            alt="Hamro Bakery — call ahead and pick up"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/90 via-[#2C1A0E]/70 to-transparent" />

          <div className="relative z-10 px-8 sm:px-14 py-14 max-w-lg">
            <span className="section-eyebrow text-white/40 mb-4 block">Call Ahead</span>
            <h3 className="font-bold text-3xl md:text-4xl text-white mb-3">
              Order by phone,<br />
              <span>pick up fresh</span>
            </h3>
            <p className="text-white/55 font-sans text-sm leading-relaxed mb-7 max-w-sm">
              Call us, tell us your order, and we'll have it ready and waiting when you arrive. No wait, no queue.
            </p>
            <a
              href={`tel:${branchData?.phone ?? "9865009581"}`}
              className="inline-flex items-center gap-2.5 bg-white text-[#2C1A0E] hover:bg-[#C4714A] hover:text-white px-6 py-3 rounded-sm text-sm font-sans font-medium transition-colors duration-200"
              data-testid="btn-call-now"
            >
              <Phone className="w-4 h-4" />
              Call {branchData?.phone ?? "9865009581"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
