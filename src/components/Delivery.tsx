import { useBranch } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { ExternalLink, Zap } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const platforms = [
  {
    name: "Foodmandu",
    url: "https://foodmandu.com/",
    img: "/images/img34.webp",
    description: "App-based delivery across Chitwan",
    time: "30–45 min",
  },
  {
    name: "Mero Kinamel",
    url: "https://www.merokinamel.com/",
    img: "/images/img32.jpg",
    description: "Local delivery partner, Narayangarh",
    time: "20–40 min",
  },
];

export function Delivery() {
  const { branchData } = useBranch();

  const handleDirectDelivery = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to request a home delivery. Please share available delivery areas and timing. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="section-eyebrow mb-3 block">Delivery</span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#2C1A0E]">
            Fresh to your<br />
            <span className="italic">doorstep</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Direct delivery card — featured */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-[#2C1A0E] p-7 rounded-sm flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <div className="w-9 h-9 rounded-full bg-[#C4714A]/20 flex items-center justify-center mb-5">
                <Zap className="w-4.5 h-4.5 text-[#C4714A]" />
              </div>
              <p className="font-serif text-2xl font-light text-white leading-snug mb-2">
                Order directly via WhatsApp
              </p>
              <p className="text-white/45 text-xs font-sans leading-relaxed">
                Skip the app. Message us and we'll arrange delivery straight to you.
              </p>
            </div>
            <button
              onClick={handleDirectDelivery}
              className="mt-6 flex items-center gap-2 bg-[#C4714A] hover:bg-[#b56540] text-white text-xs font-sans font-medium px-4 py-2.5 rounded-sm transition-colors duration-200 self-start"
              data-testid="btn-direct-delivery"
            >
              <SiWhatsapp className="w-3.5 h-3.5" />
              Chat to order
            </button>
          </motion.div>

          {/* Platform cards */}
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border border-[#2C1A0E]/8 p-7 rounded-sm flex flex-col justify-between hover:border-[#2C1A0E]/25 transition-colors no-underline"
              data-testid={`link-delivery-${i}`}
            >
              <div>
                <div className="w-12 h-12 rounded-sm overflow-hidden border border-[#2C1A0E]/8 bg-white flex items-center justify-center mb-5">
                  <img src={p.img} alt={p.name} className="w-full h-full object-contain" />
                </div>
                <p className="font-sans text-sm font-medium text-[#2C1A0E] mb-1">{p.name}</p>
                <p className="text-[#2C1A0E]/45 text-xs font-sans">{p.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-sans text-[#C4714A]">{p.time}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2C1A0E]/25 group-hover:text-[#2C1A0E]/60 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
