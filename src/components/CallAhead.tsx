import { useBranch } from "@/context/BranchContext";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CallAhead() {
  const { branchData } = useBranch();

  return (
    <section className="py-14 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-2xl"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Background photo */}
          <img
            src="/images/img9.jpeg"
            alt="Hamro Bakery customer pickup"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/30" />

          {/* Content */}
          <div className="relative z-10 px-8 py-12 text-center text-white">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
              Call Ahead &amp; Pick Up
            </h3>
            <p className="text-white/85 mb-7 text-sm md:text-base leading-relaxed max-w-md mx-auto drop-shadow">
              Want it fresh and ready when you arrive? Call us, tell us your order,
              and we'll have it waiting for you.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 gap-2 bg-white text-primary hover:bg-white/90 shadow-lg font-semibold"
              data-testid="btn-call-now"
            >
              <a href={`tel:${branchData?.phone ?? "9865009581"}`}>
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
