import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { Gallery } from "@/components/Gallery";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        <div className="bg-[#FAF7F2] py-20 px-6 text-center border-b border-[#2C1A0E]/8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow mb-4 block">Gallery</span>
            <h1 className="font-serif text-6xl md:text-7xl font-light text-[#2C1A0E]">
              From our <span className="italic">kitchen</span>
            </h1>
            <p className="text-[#2C1A0E]/45 font-sans text-sm mt-4 max-w-md mx-auto">
              Real cakes, real people, real happiness — captured from our branches across Narayangarh.
            </p>
          </motion.div>
        </div>
        <Gallery />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
