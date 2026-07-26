import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { CustomCake } from "@/components/CustomCake";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { galleryImages } from "@/data";

export default function CustomCakePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={galleryImages[2]}
            alt="Custom cake design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/80 to-[#2C1A0E]/20" />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow text-white/50 mb-3 block">Custom Cakes</span>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-white">
              Your vision, <span className="italic">our craft</span>
            </h1>
          </motion.div>
        </div>

        <CustomCake />

        {/* Process steps */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="section-eyebrow mb-3 block">How it works</span>
              <h2 className="font-serif text-4xl font-light text-[#2C1A0E]">From idea to cake</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Tell us your idea", desc: "Send a WhatsApp with your occasion, flavour preference, design inspiration or reference photo." },
                { step: "02", title: "We confirm details", desc: "Our baker will discuss size, design, price and confirm your order within a few hours." },
                { step: "03", title: "Advance payment", desc: "A small advance is required to start baking your custom design." },
                { step: "04", title: "Collect or receive", desc: "Pick up from your nearest branch or we arrange delivery. Fresh, packaged, perfect." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <p className="font-serif text-4xl text-[#C4714A]/30 font-light mb-3">{s.step}</p>
                  <p className="font-sans text-sm font-semibold text-[#2C1A0E] mb-2">{s.title}</p>
                  <p className="font-sans text-xs text-[#2C1A0E]/45 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
