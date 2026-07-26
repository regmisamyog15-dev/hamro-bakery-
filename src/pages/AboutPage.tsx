import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Highlights } from "@/components/Highlights";
import { motion } from "framer-motion";
import { galleryImages } from "@/data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        {/* Hero */}
        <div className="bg-[#2C1A0E] py-24 px-6">
          <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="section-eyebrow text-white/40 mb-4 block">Our Story</span>
              <h1 className="font-serif text-6xl md:text-7xl font-light text-white leading-tight">
                Baking<br />
                <span className="italic text-[#C4714A]">happiness</span><br />
                since 2013
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <p className="text-white/55 font-sans text-base leading-relaxed mb-5">
                Hamro Bakery started at a single shop in Hakim Chowk, Narayangarh with one mission — to bring freshly baked happiness to the people of Chitwan. What began as a small family effort has grown into four branches, 17 dedicated staff, and thousands of smiling customers.
              </p>
              <p className="text-white/55 font-sans text-base leading-relaxed">
                Every cake we bake, every pastry we craft, carries the same care we started with. We never compromise on freshness — everything is baked from scratch every single morning.
              </p>
            </motion.div>
          </div>
        </div>

        <Highlights />

        {/* Values */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <span className="section-eyebrow mb-3 block">What drives us</span>
              <h2 className="font-serif text-5xl font-light text-[#2C1A0E]">Our <span className="italic">values</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2C1A0E]/8">
              {[
                { title: "Freshness first", desc: "Nothing leaves our kitchen stale. Every batch is baked the morning it is sold. This has been our rule since day one.", icon: "🌅" },
                { title: "Locally rooted", desc: "We employ local bakers, source locally where possible, and serve the Chitwan community that has supported us from the beginning.", icon: "🌿" },
                { title: "Every occasion", desc: "From birthdays to weddings to corporate events — we treat every order as a celebration worth getting right.", icon: "🎂" },
              ].map((v) => (
                <div key={v.title} className="bg-white p-10">
                  <p className="text-3xl mb-5">{v.icon}</p>
                  <p className="font-serif text-xl text-[#2C1A0E] mb-3">{v.title}</p>
                  <p className="font-sans text-sm text-[#2C1A0E]/50 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo grid — original Narayangarh shots */}
        <section className="py-24 px-6 bg-[#FAF7F2]">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-3">
              <span className="section-eyebrow mb-3 block">Real. Local. Ours.</span>
              <h2 className="font-serif text-4xl font-light text-[#2C1A0E]">From our <span className="italic">kitchen in Narayangarh</span></h2>
            </div>
            <p className="text-[#2C1A0E]/40 text-sm font-sans mb-10 max-w-lg">
              These are actual photos from our branches — not studio shots. Real cakes made by our bakers, for our customers.
            </p>

            {/* Large feature + grid */}
            <div className="grid grid-cols-3 gap-2">
              {/* Big one */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-sm relative group"
              >
                <img src="/images/img18.jpeg" alt="Hamro Bakery Narayangarh — original" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" />
                <div className="absolute bottom-3 left-3 bg-[#2C1A0E]/70 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                  <p className="text-white text-xs font-sans">Sangam Road branch</p>
                </div>
              </motion.div>

              {["/images/img23.jpeg", "/images/img24.jpeg"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square overflow-hidden rounded-sm"
                >
                  <img src={src} alt={`Hamro Bakery Narayangarh ${i + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}

              {["/images/img26.jpeg", "/images/img14.jpeg", "/images/img27.jpeg", "/images/img25.jpeg"].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="aspect-square overflow-hidden rounded-sm"
                >
                  <img src={src} alt={`Hamro Bakery product ${i + 4}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              ))}
            </div>

            <p className="text-[#2C1A0E]/30 text-xs font-sans text-center mt-5 italic">
              Taken at our Narayangarh branches — no filters, no studio.
            </p>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
