import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { OpeningHours } from "@/components/OpeningHours";
import { useBranch, branches, BranchName } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { SiWhatsapp, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const { branchData, selectedBranch } = useBranch();

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello Hamro Bakery! I'd like to get in touch.")}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="py-20 px-6 bg-[#2C1A0E]">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-eyebrow text-white/40 mb-4 block">Contact</span>
              <h1 className="font-bold text-5xl md:text-6xl text-white">
                Let's <span>talk</span>
              </h1>
              <p className="text-white/40 font-sans text-sm mt-4 max-w-sm">
                Four branches. One WhatsApp away.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Branch contacts grid */}
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-10">
              <span className="section-eyebrow mb-3 block">All Branches</span>
              <h2 className="font-bold text-3xl text-[#2C1A0E]">Find your nearest <span>branch</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(Object.entries(branches) as [BranchName, typeof branches[BranchName]][]).map(([name, data], i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border border-[#2C1A0E]/8 bg-[#FAF7F2] p-6 rounded-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-semibold text-[#2C1A0E]">{name}</p>
                      <p className="text-[#2C1A0E]/40 text-xs font-sans mt-0.5">Narayangarh, Chitwan</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                  </div>
                  <div className="space-y-2 mb-5">
                    <a href={`tel:${data.phone}`} className="flex items-center gap-2.5 text-[#2C1A0E]/60 hover:text-[#2C1A0E] text-sm font-sans transition-colors">
                      <Phone className="w-3.5 h-3.5 text-[#C4714A]" /> {data.phone}
                    </a>
                    <p className="flex items-center gap-2.5 text-[#2C1A0E]/40 text-xs font-sans">
                      <MapPin className="w-3.5 h-3.5" /> {data.hoursText}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWhatsApp(data.whatsapp)}
                      className="flex items-center gap-1.5 bg-[#2C1A0E] text-white text-xs font-sans px-3 py-2 rounded-sm hover:bg-[#C4714A] transition-colors"
                    >
                      <SiWhatsapp className="w-3 h-3" /> WhatsApp
                    </button>
                    {data.mapUrl && (
                      <a
                        href={data.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 border border-[#2C1A0E]/15 text-[#2C1A0E]/60 text-xs font-sans px-3 py-2 rounded-sm hover:border-[#2C1A0E]/40 transition-colors"
                      >
                        <MapPin className="w-3 h-3" /> Map
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <OpeningHours />

        {/* Social + email */}
        <section className="py-20 px-6 bg-[#FAF7F2]">
          <div className="container mx-auto max-w-3xl text-center">
            <span className="section-eyebrow mb-4 block">Social</span>
            <h2 className="font-bold text-3xl text-[#2C1A0E] mb-10">Follow along</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { Icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/share/1E8bcas3Dv/", color: "hover:text-blue-600" },
                { Icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/hamrobakerynarayangarh", color: "hover:text-pink-500" },
                { Icon: SiTiktok, label: "TikTok", href: branchData?.tiktok ?? "https://www.tiktok.com/@hamro.bakery.shop", color: "hover:text-black" },
                { Icon: Mail, label: "Email", href: "mailto:bakeryhamro1@gmail.com", color: "hover:text-[#C4714A]" },
              ].map(({ Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 border border-[#2C1A0E]/12 px-5 py-3 rounded-sm text-sm font-sans text-[#2C1A0E]/60 ${color} hover:border-current transition-all`}
                >
                  <Icon className="w-4 h-4" /> {label}
                </a>
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
