import { useBranch } from "@/context/BranchContext";
import { SiInstagram, SiFacebook, SiTiktok, SiWhatsapp } from "react-icons/si";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { FeedbackModal } from "@/components/FeedbackModal";
import { motion } from "framer-motion";

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
    a.download = "hamro-bakery.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const socials = [
    { Icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/share/1E8bcas3Dv/", testId: "link-fb-card" },
    { Icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/hamrobakerynarayangarh", testId: "link-ig-card" },
    { Icon: SiTiktok, label: "TikTok", href: branchData?.tiktok ?? "https://www.tiktok.com/@hamro.bakery.shop", testId: "link-tt-card" },
    { Icon: SiWhatsapp, label: "WhatsApp", href: `https://wa.me/977${branchData?.whatsapp ?? "9865009581"}`, testId: "link-wa-card" },
  ];

  return (
    <footer id="location" className="bg-[#1a0e06]">

      {/* Main footer grid */}
      <div className="px-6 pt-20 pb-12 border-b border-white/8">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <img
              src="/images/logo.jpeg"
              alt="Hamro Bakery"
              className="h-12 w-12 object-contain rounded-full border border-white/10 mb-5"
            />
            <p className="font-serif text-2xl text-white font-light mb-2">Hamro Bakery</p>
            <p className="text-white/35 text-xs font-sans leading-relaxed mb-6">
              Narayangarh, Chitwan · Since 2013<br />
              "We bake and shake your happiness."
            </p>
            {/* Social row */}
            <div className="flex gap-3">
              {socials.map(({ Icon, label, href, testId }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={testId}
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 rounded-sm border border-white/10 hover:border-white/30 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Branches column */}
          <div>
            <p className="text-white/30 text-xs font-sans uppercase tracking-widest mb-5">Our Branches</p>
            <div className="space-y-4">
              {[
                { name: "Hakim Chowk", phone: "9865009581" },
                { name: "Bishal Chowk", phone: "9702663750" },
                { name: "Sangam Road", phone: "9855070143" },
                { name: "Synergy Road", phone: "9821207163" },
              ].map((branch) => (
                <div key={branch.name} className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C4714A] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-xs font-sans font-medium">{branch.name}</p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-white/30 text-xs font-sans hover:text-white/60 transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map + actions column */}
          <div>
            <p className="text-white/30 text-xs font-sans uppercase tracking-widest mb-5">Find Us</p>

            {/* Map button */}
            {branchData?.mapUrl ? (
              <a
                href={branchData.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-white/10 hover:border-white/25 p-4 rounded-sm mb-4 group transition-colors no-underline"
                data-testid="link-open-map"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C4714A]" />
                  <div>
                    <p className="text-white/70 text-xs font-sans">Open in Google Maps</p>
                    <p className="text-white/30 text-xs font-sans">{selectedBranch}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
              </a>
            ) : (
              <div className="border border-white/8 p-4 rounded-sm mb-4 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white/20" />
                <p className="text-white/30 text-xs font-sans">Select a branch to see map</p>
              </div>
            )}

            {/* Contact actions */}
            <div className="space-y-2">
              <a
                href="mailto:bakeryhamro1@gmail.com"
                className="flex items-center gap-2.5 text-white/35 hover:text-white/65 text-xs font-sans transition-colors"
                data-testid="link-mail-card"
              >
                <Mail className="w-3.5 h-3.5" />
                bakeryhamro1@gmail.com
              </a>
              <button
                onClick={saveContact}
                className="flex items-center gap-2.5 text-white/35 hover:text-white/65 text-xs font-sans transition-colors"
                data-testid="btn-save-contact"
              >
                <Phone className="w-3.5 h-3.5" />
                Save contact
              </button>
              <div className="pt-1">
                <FeedbackModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Twisters promo bar */}
      <div className="px-6 py-3.5 border-b border-white/5">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <p className="text-white/25 text-xs font-sans">
            Website by{" "}
            <a href="tel:9768530353" className="text-[#C4714A]/60 hover:text-[#C4714A] transition-colors">
              Twisters Agency — 9768530353
            </a>
          </p>
          <p className="text-white/15 text-xs font-sans hidden sm:block">We build websites like this for local businesses.</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-5">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs font-sans">
            © 2026 Hamro Bakery, Narayangarh, Chitwan. All rights reserved.
          </p>
          <p className="text-white/12 text-xs font-sans">
            <a href="https://hamrobakery1.com/blog" className="hover:text-white/30 transition-colors">Blog</a>
            {" · "}
            <a href="/sitemap.xml" className="hover:text-white/30 transition-colors">Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
