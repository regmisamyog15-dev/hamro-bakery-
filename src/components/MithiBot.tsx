import { useState, useRef, useEffect } from "react";
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

// All keyword chips — user just taps, no typing needed
const KEYWORD_CHIPS = [
  { label: "🎂 Birthday Cake", prompt: "I want a birthday cake" },
  { label: "💍 Wedding Cake", prompt: "I want a wedding cake" },
  { label: "🎨 Custom Design", prompt: "I want a custom cake design" },
  { label: "📋 See Menu", prompt: "Show me the menu and prices" },
  { label: "📍 Locations", prompt: "Where are your branches located?" },
  { label: "🚚 Delivery", prompt: "Do you deliver?" },
  { label: "🕐 Opening Hours", prompt: "What are your opening hours?" },
  { label: "💰 Cake Prices", prompt: "How much do cakes cost?" },
  { label: "📸 Gallery", prompt: "Show me photos of your cakes" },
  { label: "📞 Contact", prompt: "How do I contact you?" },
  { label: "🛍️ Order Now", prompt: "I want to place an order now" },
  { label: "🌿 Eggless Options", prompt: "Do you have eggless cakes?" },
];

const SYSTEM_PROMPT = `You are Mithi, the AI assistant for Hamro Bakery — Narayangarh Chitwan's most loved bakery since 2013.

BAKERY FACTS:
- 4 branches: Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), Synergy Road (9821207163)
- Hours: 8 AM – 9 PM daily (Hakim/Bishal/Synergy close 8 PM)
- Payment: Cash, QR, eSewa, Khalti
- Custom cakes: order 2–3 days in advance
- Delivery: Foodmandu, Mero Kinamel, or direct WhatsApp
- Cake prices: Classic flavours Rs 600/lb, Chocolate Rs 700/lb, Red Velvet Rs 1000/lb, Fondant/design Rs 1500/lb
- Pastries: Rs 70–250 | Cookies: Rs 125–200
- Eggless options: yes available

ALWAYS end your reply with EXACTLY one JSON redirect on its own line:
{"redirect":"/menu","label":"See Full Menu"}
{"redirect":"/gallery","label":"View Gallery"}  
{"redirect":"/custom-cake","label":"Order Custom Cake"}
{"redirect":"/about","label":"Our Story"}
{"redirect":"/contact","label":"Find Our Branches"}
{"redirect":"/menu","label":"Order Now","whatsapp":true}

Rules for which redirect to use:
- menu / prices / pastry / cookies / eggless → /menu
- gallery / photos / pictures → /gallery  
- custom / birthday / wedding / anniversary / design → /custom-cake
- about / story / history / since 2013 → /about
- contact / location / address / where / phone / hours / open → /contact
- order / buy / place order / want to order → /menu with whatsapp:true
- delivery → /contact

TONE: Warm, 1–2 sentences MAX. Be direct. No fluff.`;

// Tooltip that appears after 10s, visible for 4s, then hides until next page load
function TooltipBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
      const hideTimer = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(hideTimer);
    }, 10000);
    return () => clearTimeout(showTimer);
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
          {/* Arrow pointing down-left toward button */}
          <span className="absolute -bottom-1.5 left-5 w-3 h-3 bg-[#1a0e06] rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MithiBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [usedChips, setUsedChips] = useState<Set<string>>(new Set());
  const [, navigate] = useLocation();
  const { branchData } = useBranch();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendChip = async (chip: typeof KEYWORD_CHIPS[0]) => {
    if (loading) return;
    setUsedChips((prev) => new Set([...prev, chip.label]));

    const userMsg: Message = { role: "user", content: chip.label };
    const history = [...messages, userMsg];
    setMessages(history);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 200,
          system: SYSTEM_PROMPT,
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const raw: string = data.content?.[0]?.text ?? "Please call us at 9865009581!";

      let content = raw;
      let redirect: Message["redirect"] = undefined;
      let whatsapp = false;

      const match = raw.match(/\{"redirect":"([^"]+)","label":"([^"]+)"(?:,"whatsapp":true)?\}/);
      if (match) {
        content = raw.replace(match[0], "").replace(/\n{2,}/g, "\n").trim();
        redirect = { path: match[1], label: match[2] };
        whatsapp = raw.includes('"whatsapp":true');
      }

      setMessages((prev) => [...prev, { role: "assistant", content, redirect, whatsapp }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please call us at 9865009581!" },
      ]);
    } finally {
      setLoading(false);
    }
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

  const handleReset = () => {
    setMessages([]);
    setUsedChips(new Set());
  };

  // Available chips = all chips not yet used this session
  const availableChips = KEYWORD_CHIPS.filter((c) => !usedChips.has(c.label));

  return (
    <>
      {/* Mithi trigger button — bottom-left */}
      <AnimatePresence>
        {!open && (
          <div className="fixed bottom-6 left-5 z-40 flex flex-col items-start gap-2">
            {/* Tooltip bubble — appears after 10s, lasts 4s */}
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
              <img
                src="/images/mithi-icon.png"
                alt="Mithi AI"
                className="w-full h-full object-cover bg-[#1a0e06]"
              />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat window — opens from bottom-left */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-6 left-4 z-50 w-[340px] sm:w-[380px] flex flex-col bg-[#FAF7F2] rounded-sm shadow-2xl border border-[#2C1A0E]/10 overflow-hidden"
            style={{ height: "560px" }}
          >
            {/* Header */}
            <div className="bg-[#1a0e06] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <img src="/images/mithi-icon.png" alt="Mithi" className="w-full h-full object-cover" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#1a0e06]" />
                </div>
                <div>
                  <p className="text-white text-sm font-sans font-medium">Mithi</p>
                  <p className="text-white/40 text-xs font-sans">Hamro Bakery AI · always here</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button
                    onClick={handleReset}
                    className="text-white/30 hover:text-white/60 text-xs font-sans transition-colors"
                  >
                    Reset
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            {/* Messages + chips area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">

              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-[#2C1A0E]/8 px-3.5 py-2.5 rounded-sm text-sm font-sans text-[#2C1A0E] leading-relaxed"
                >
                  Namaste! 🎂 I'm Mithi. Tap what you're looking for below.
                </motion.div>
              )}

              {/* Conversation */}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className="max-w-[90%] space-y-2">
                    <div className={`px-3.5 py-2.5 rounded-sm text-sm font-sans leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#2C1A0E] text-white"
                        : "bg-white border border-[#2C1A0E]/8 text-[#2C1A0E]"
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

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#2C1A0E]/8 px-4 py-3 rounded-sm flex gap-1.5 items-center">
                    {[0, 150, 300].map((d) => (
                      <span key={d} className="w-1.5 h-1.5 bg-[#C4714A]/60 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Keyword chips — always visible at bottom */}
            {availableChips.length > 0 && (
              <div className="px-4 py-3 border-t border-[#2C1A0E]/8 bg-white shrink-0">
                <p className="text-[#2C1A0E]/30 text-xs font-sans mb-2">
                  {messages.length === 0 ? "What are you looking for?" : "Ask more:"}
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
                  {availableChips.map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => sendChip(chip)}
                      disabled={loading}
                      className="text-xs font-sans text-[#2C1A0E]/70 border border-[#2C1A0E]/15 hover:border-[#C4714A] hover:text-[#C4714A] hover:bg-[#C4714A]/5 px-2.5 py-1.5 rounded-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {availableChips.length === 0 && (
              <div className="px-4 py-3 border-t border-[#2C1A0E]/8 bg-white shrink-0 text-center">
                <button
                  onClick={handleReset}
                  className="text-xs font-sans text-[#C4714A] hover:underline"
                >
                  Start over ↺
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
