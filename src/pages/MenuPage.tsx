import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { Menu } from "@/components/Menu";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        {/* Page header */}
        <div className="bg-[#2C1A0E] py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow text-white/40 mb-4 block">Full Menu</span>
            <h1 className="font-serif text-6xl md:text-7xl font-light text-white">
              What we <span className="italic">bake</span>
            </h1>
            <p className="text-white/45 font-sans text-sm mt-4 max-w-md mx-auto">
              Everything baked fresh every morning. Prices in NPR per unit or per pound for cakes.
            </p>
          </motion.div>
        </div>
        <Menu />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
