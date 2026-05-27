import { useBranch } from "@/context/BranchContext";
import { SiInstagram, SiFacebook, SiTiktok, SiGmail, SiWhatsapp } from "react-icons/si";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { FeedbackModal } from "@/components/FeedbackModal";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/WhatsApp_Image_2026-05-23_at_12.56.16_PM_(1)_1779613315640.jpeg";
import { motion } from "framer-motion";

const socialCards = [
  {
    icon: <SiFacebook className="w-7 h-7 text-white" />,
    bg: "bg-[#1877F2]",
    name: "Facebook",
    desc: "Like & Follow Us",
    href: "https://www.facebook.com/share/1E8bcas3Dv/",
    testId: "link-fb-card",
  },
  {
    icon: <SiInstagram className="w-7 h-7 text-white" />,
    bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    name: "Instagram",
    desc: "Visual Stories",
    href: "https://www.instagram.com/hamrobakerynarayangarh",
    testId: "link-ig-card",
  },
  {
    icon: <SiTiktok className="w-7 h-7 text-white" />,
    bg: "bg-[#010101]",
    name: "TikTok",
    desc: "Watch Our Reels",
    href: "https://www.tiktok.com/@hamro.bakery.shop",
    testId: "link-tt-card",
  },
  {
    icon: <SiWhatsapp className="w-7 h-7 text-white" />,
    bg: "bg-[#25D366]",
    name: "WhatsApp",
    desc: "Order Instantly",
    href: "https://wa.me/9779865009581",
    testId: "link-wa-card",
  },
  {
    icon: <SiGmail className="w-7 h-7 text-white" />,
    bg: "bg-[#EA4335]",
    name: "Email",
    desc: "Write To Us",
    href: "mailto:bakeryhamro1@gmail.com",
    testId: "link-mail-card",
  },
  {
    icon: <Phone className="w-7 h-7 text-white" />,
    bg: "bg-[#8B4513]",
    name: "Call Us",
    desc: "Owner: 9865009581",
    href: "tel:9865009581",
    testId: "link-phone-card",
  },
];

export function Footer() {
  const { branchData, selectedBranch } = useBranch();

  const saveContact = () => {
    const phone = branchData?.phone ?? "9865009581";
    const name = `Hamro Bakery — ${selectedBranch ?? "Narayangarh"}`;
    const vcf = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${phone}\nEND:VCARD`;
    const blob = new Blob([vcf], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hamro-bakery.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <footer id="location" className="bg-[#1C0D05]">
      {/* Get in touch hero band */}
      <div className="relative overflow-hidden px-4 pt-16 pb-12">
        {/* Subtle warm grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D2691E 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative container mx-auto max-w-5xl text-center">
          <img
            src={logoImg}
            alt="Hamro Bakery"
            className="h-20 w-20 object-contain rounded-full bg-white border-2 border-[#8B4513]/40 shadow-xl mx-auto mb-5"
          />
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            Connect &amp; Stay Updated
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-white/60 max-w-md mx-auto text-sm md:text-base leading-relaxed mb-12">
            Follow us on social media for daily specials, new arrivals,
            and behind-the-scenes moments from our kitchen.
          </p>

          {/* Social platform cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialCards.map((card, i) => (
              <motion.a
                key={card.name}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }}
                className="group bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col items-center gap-3 no-underline transition-all duration-300 cursor-pointer"
                data-testid={card.testId}
              >
                <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center shadow-md shrink-0`}>
                  {card.icon}
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">{card.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{card.desc}</p>
                </div>
                <span className="flex items-center gap-1 text-[#C9A84C] text-xs font-medium group-hover:gap-2 transition-all">
                  Connect <ArrowRight className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Location & utility band */}
      <div className="border-t border-white/10 px-4 py-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-[#C9A84C] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {selectedBranch ?? "Our Location"}
              </h4>
              {selectedBranch === "Synergy Road" || !branchData?.mapEmbed ? (
                <div className="rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center h-44 gap-3">
                  <MapPin className="w-8 h-8 text-[#C9A84C]/60" />
                  <p className="text-white/50 text-sm text-center px-4">
                    {branchData?.mapNote ?? "Select a branch to see the map"}
                  </p>
                  {branchData?.mapUrl && (
                    <a
                      href={branchData.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#C9A84C] text-sm underline hover:no-underline"
                    >
                      View on Google Maps
                    </a>
                  )}
                </div>
              ) : (
                <a
                  href={branchData.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl overflow-hidden h-44 border border-white/10 flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-white/10 transition-colors no-underline"
                  data-testid="link-open-map"
                >
                  <MapPin className="w-10 h-10 text-[#C9A84C]" />
                  <span className="text-white/80 text-sm font-medium">View on Google Maps</span>
                  <span className="text-white/40 text-xs">{selectedBranch}</span>
                </a>
              )}
            </div>

            {/* Quick info */}
            <div className="space-y-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  Delivery Partners
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-[#C9A84C] font-bold text-sm">Foodmandu</span>
                  <span className="text-white/20">·</span>
                  <span className="text-[#C9A84C] font-bold text-sm">Mero Kinamel</span>
                </div>
              </div>

              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  Branches
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
                  {["Hakim Chowk", "Bishal Chowk", "Sangam Road", "Synergy Road"].map((b) => (
                    <div key={b} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={saveContact}
                  className="rounded-full gap-2 bg-transparent border-white/20 text-white hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-colors text-xs"
                  data-testid="btn-save-contact"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Save Our Number
                </Button>
                <FeedbackModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col items-center gap-2 text-center">
          <p className="text-white/40 italic font-serif text-base">
            "We bake and shake your happiness."
          </p>
          <p className="text-white/25 text-xs">
            © 2026 Hamro Bakery, Narayangarh, Chitwan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
