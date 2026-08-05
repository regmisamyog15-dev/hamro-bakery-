import { useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { Sparkles } from "lucide-react";

const occasions = ["Birthday", "Wedding", "Anniversary", "Baby Shower", "Corporate", "Other"];

export function CustomCake() {
  const { branchData } = useBranch();
  const [description, setDescription] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const handleOrder = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const occasion = selectedOccasion ? `Occasion: ${selectedOccasion}. ` : "";
    const msg = `Hello Hamro Bakery! I'd like to order a custom cake. ${occasion}Details: ${description || "(will discuss)"}. Please get back to me. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/images/img26.jpeg"
                alt="Custom cake design by Hamro Bakery Chitwan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#C4714A] text-white px-5 py-4 rounded-sm shadow-lg">
              <p className="font-semibold text-xl leading-none">2–3 days</p>
              <p className="font-sans text-xs mt-1 text-white/80">advance order</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="section-eyebrow mb-4 block">Custom Cakes</span>
            <h2 className="font-bold text-3xl md:text-4xl text-[#2C1A0E] leading-tight mb-4">
              Your dream cake,<br />
              <span>brought to life</span>
            </h2>
            <p className="text-[#2C1A0E]/55 font-sans text-sm leading-relaxed mb-8">
              Describe your vision — flavour, design, colours, message, occasion. Our bakers will craft it exactly to your specification.
            </p>

            {/* Occasion selector */}
            <div className="flex flex-wrap gap-2 mb-5">
              {occasions.map((o) => (
                <button
                  key={o}
                  onClick={() => setSelectedOccasion(o === selectedOccasion ? "" : o)}
                  className={`px-3 py-1.5 text-xs font-sans font-medium rounded-sm border transition-all duration-150 ${
                    selectedOccasion === o
                      ? "bg-[#2C1A0E] text-white border-[#2C1A0E]"
                      : "border-[#2C1A0E]/20 text-[#2C1A0E]/60 hover:border-[#2C1A0E]/50 hover:text-[#2C1A0E]"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>

            <textarea
              placeholder="Describe your cake... flavour, design theme, size, colours, message on top..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full border border-[#2C1A0E]/15 bg-white rounded-sm px-4 py-3 text-sm font-sans text-[#2C1A0E] placeholder:text-[#2C1A0E]/35 focus:outline-none focus:border-[#C4714A] resize-none transition-colors mb-4"
              data-testid="textarea-custom-cake"
            />

            <button
              onClick={handleOrder}
              className="w-full flex items-center justify-center gap-2.5 bg-[#2C1A0E] hover:bg-[#C4714A] text-white py-3.5 rounded-sm text-sm font-sans font-medium transition-colors duration-200"
              data-testid="btn-custom-cake-order"
            >
              <SiWhatsapp className="w-4 h-4" />
              Send Order via WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
