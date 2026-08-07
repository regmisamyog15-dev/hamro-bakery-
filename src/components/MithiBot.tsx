import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { useBranch } from "@/context/BranchContext";

interface Message {
  role: "user" | "assistant";
  content: string;
  redirect?: { label: string; path: string };
  whatsapp?: boolean;
}

const KEYWORD_CHIPS = [
  { label: "🎂 Birthday Cake", response: "We make stunning birthday cakes in Blackforest, Butterscotch, Chocolate, Red Velvet and more — starting Rs 600/lb. Order 2–3 days in advance for custom designs!", redirect: { label: "Order Custom Cake", path: "/custom-cake" } },
  { label: "💍 Wedding Cake", response: "Our wedding cakes are crafted to your exact vision — multi-tier, fondant designs, flowers. Starting Rs 1500/lb. Please order at least 5–7 days ahead.", redirect: { label: "Order Custom Cake", path: "/custom-cake" } },
  { label: "🎨 Custom Design", response: "Describe your dream cake — occasion, flavour, colours, message — and our bakers will bring it to life. 2–3 days advance notice needed.", redirect: { label: "Design Your Cake", path: "/custom-cake" } },
  { label: "📋 See Menu", response: "We have cakes (Rs 600–1500/lb), pastries (Rs 70–250), cookies (Rs 125–200), dry items, breads and more — all baked fresh every morning!", redirect: { label: "View Full Menu", path: "/menu" } },
  { label: "📍 Locations", response: "We have 4 branches in Narayangarh:\n• Hakim Chowk — 9865009581\n• Bishal Chowk — 9702663750\n• Sangam Road — 9855070143\n• Synergy Road — 9821207163", redirect: { label: "Contact & Map", path: "/contact" } },
  { label: "🚚 Delivery", response: "Yes! We deliver via Foodmandu and Mero Kinamel apps, or WhatsApp us directly for home delivery across Narayangarh and Bharatpur.", redirect: { label: "Contact Us", path: "/contact" }, whatsapp: true },
  { label: "🕐 Opening Hours", response: "All 4 branches open at 8:00 AM daily.\n• Sangam Road closes 9 PM\n• Hakim, Bishal & Synergy close 8 PM\nOpen 7 days a week including public holidays.", redirect: { label: "See All Hours", path: "/contact" } },
  { label: "💰 Cake Prices", response: "Cake prices (per pound):\n• Classic flavours — Rs 600\n• Chocolate — Rs 700\n• Red Velvet — Rs 1000\n• Simple Design — Rs 1000\n• Fondant Design — Rs 1500\nPastries from Rs 70.", redirect: { label: "Full Menu & Prices", path: "/menu" } },
  { label: "📸 Gallery", response: "Check out our gallery — real cakes made by our bakers at our Narayangarh branches. No studio shots!", redirect: { label: "View Gallery", path: "/gallery" } },
  { label: "📞 Contact", response: "Call or WhatsApp any branch:\n• Hakim Chowk — 9865009581\n• Bishal Chowk — 9702663750\n• Sangam Road — 9855070143\n• Synergy Road — 9821207163\nEmail: bakeryhamro1@gmail.com", redirect: { label: "All Contacts", path: "/contact" } },
  { label: "🛍️ Order Now", response: "Ready to order? WhatsApp us your items and we'll confirm quickly. For custom cakes, order 2–3 days ahead!", redirect: { label: "Order via WhatsApp", path: "/menu" }, whatsapp: true },
  { label: "🌿 Eggless Options", response: "Yes, we have eggless cake options available! Mention it when ordering and our bakers will prepare accordingly.", redirect: { label: "Order Custom Cake", path: "/custom-cake" } },
];

function TooltipBubble() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // Show after 3s, then toggle every 4s so it pulses on/off
    const start = setTimeout(() => {
      setVisible(true);
      const interval = setInterval(() => {
        setVisible((v) => !v);
      }, 4000);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(start);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -8, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -8, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="bg-[#1a0e06] text-white text-xs font-sans px-3 py-2 rounded-sm shadow-lg whitespace-nowrap relative"
        >
          Chat with Mithi AI 🎂
          <span className="absolute -bottom-1.5 left-5 w-3 h-3 bg-[#1a0e06] rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MithiBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [usedChips, setUsedChips] = useState<Set<string>>(new Set());
  const [, navigate] = useLocation();
  const { branchData } = useBranch();

  const sendChip = (chip: typeof KEYWORD_CHIPS[0]) => {
    setUsedChips((prev) => new Set([...prev, chip.label]));
    const userMsg: Message = { role: "user", content: chip.label };
    const botMsg: Message = {
      role: "assistant",
      content: chip.response,
      redirect: chip.redirect,
      whatsapp: chip.whatsapp,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleRedirect = (path: string, isWhatsapp?: boolean) => {
    setOpen(false);
    if (isWhatsapp) {
      const phone = branchData?.whatsapp ?? "9865009581";
      window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello! I'd like to place an order.")}`, "_blank");
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const availableChips = KEYWORD_CHIPS.filter((c) => !usedChips.has(c.label));

  return (
    <>
      <AnimatePresence>
        {!open && (
          <div className="fixed bottom-6 left-5 z-40 flex flex-col items-start gap-2">
            <TooltipBubble />
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => setOpen(true)}
              className="w-16 h-16 rounded-full shadow-xl overflow-hidden border-2 border-[#2C1A0E]/20 hover:border-[#C4714A] hover:scale-105 transition-all"
              aria-label="Open Mithi AI assistant"
            >
              <img loading="lazy" src="/images/mithi-icon.png" alt="Mithi AI" className="w-full h-full object-cover bg-[#1a0e06]" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-6 left-4 z-50 w-[340px] sm:w-[380px] flex flex-col bg-[#FAF7F2] rounded-sm shadow-2xl border border-[#2C1A0E]/10 overflow-hidden"
            style={{ height: "540px" }}
          >
            {/* Header */}
            <div className="bg-[#1a0e06] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img loading="lazy" src="/images/mithi-icon.png" alt="Mithi" className="w-full h-full object-cover" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#1a0e06]" />
                </div>
                <div>
                  <p className="text-white text-sm font-sans font-medium">Mithi</p>
                  <p className="text-white/40 text-xs font-sans">Hamro Bakery AI · always here</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {messages.length > 0 && (
                  <button onClick={() => { setMessages([]); setUsedChips(new Set()); }} className="text-white/30 hover:text-white/60 text-xs font-sans transition-colors">
                    Reset
                  </button>
                )}
                <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                  <X className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-[#2C1A0E]/8 px-3.5 py-2.5 rounded-sm text-sm font-sans text-[#2C1A0E] leading-relaxed">
                  Namaste! 🎂 I'm Mithi. Tap what you're looking for below.
                </motion.div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[90%] space-y-2">
                    <div className={`px-3.5 py-2.5 rounded-sm text-sm font-sans leading-relaxed whitespace-pre-line ${
                      msg.role === "user" ? "bg-[#2C1A0E] text-white" : "bg-white border border-[#2C1A0E]/8 text-[#2C1A0E]"
                    }`}>
                      {msg.content}
                    </div>
                    {msg.redirect && (
                      <button
                        onClick={() => handleRedirect(msg.redirect!.path, msg.whatsapp)}
                        className="w-full flex items-center gap-2 bg-[#C4714A] hover:bg-[#b56540] text-white text-xs font-sans font-medium px-3.5 py-2.5 rounded-sm transition-colors"
                      >
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        {msg.redirect.label}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div className="px-4 py-3 border-t border-[#2C1A0E]/8 bg-white shrink-0">
              {availableChips.length > 0 ? (
                <>
                  <p className="text-[#2C1A0E]/30 text-xs font-sans mb-2">
                    {messages.length === 0 ? "What are you looking for?" : "Ask more:"}
                  </p>
                  <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
                    {availableChips.map((chip) => (
                      <button
                        key={chip.label}
                        onClick={() => sendChip(chip)}
                        className="text-xs font-sans text-[#2C1A0E]/70 border border-[#2C1A0E]/15 hover:border-[#C4714A] hover:text-[#C4714A] hover:bg-[#C4714A]/5 px-2.5 py-1.5 rounded-sm transition-colors"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-[#2C1A0E]/30 text-xs font-sans mb-1">All questions answered!</p>
                  <button onClick={() => { setMessages([]); setUsedChips(new Set()); }} className="text-xs font-sans text-[#C4714A] hover:underline">
                    Start over ↺
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
