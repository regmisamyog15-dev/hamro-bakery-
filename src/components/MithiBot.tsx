import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { useBranch } from "@/context/BranchContext";

interface Message {
  role: "user" | "assistant";
  content: string;
  redirect?: { label: string; path: string };
  whatsapp?: string;
}

const SYSTEM_PROMPT = `You are Mithi, the friendly AI assistant for Hamro Bakery — Narayangarh Chitwan's most loved bakery since 2013.

BAKERY FACTS:
- 4 branches: Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), Synergy Road (9821207163)
- Hours: 8 AM – 9 PM daily (Hakim & Bishal & Synergy close at 8 PM)
- Payment: Cash, QR, eSewa, Khalti
- Custom cakes: 2–3 days advance notice needed
- Delivery via Foodmandu & Mero Kinamel, or direct WhatsApp
- Cake prices: Classic Rs 600/lb, Chocolate Rs 700/lb, Red Velvet Rs 1000/lb, Fondant Rs 1500/lb
- Pastries: Rs 70–250
- Cookies: Rs 125–200

ROUTING RULES (VERY IMPORTANT):
When the user's message relates to one of these topics, you MUST end your reply with a JSON block on its own line like this:
{"redirect": "/menu", "label": "See Full Menu"}

Routes:
- menu / cake prices / pastry / cookies / what do you have / food → {"redirect": "/menu", "label": "See Full Menu"}
- gallery / photos / see your cakes / show me / pictures → {"redirect": "/gallery", "label": "View Gallery"}
- custom cake / design cake / custom order / birthday cake / wedding cake / anniversary cake / order a cake → {"redirect": "/custom-cake", "label": "Order Custom Cake"}
- about / history / story / since 2013 / how long / branches → {"redirect": "/about", "label": "Our Story"}
- contact / location / where are you / address / phone / call / find you → {"redirect": "/contact", "label": "Contact & Branches"}
- order now / want to order / place order / buy → {"redirect": "/menu", "label": "Order Now", "whatsapp": "true"}

TONE: Warm, brief, helpful. Maximum 2 short sentences before the redirect. Write in English but if user writes in Nepali, reply in Nepali. Never make up facts. Never say you are ChatGPT or Claude.`;

export function MithiBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! 🎂 I'm Mithi, your Hamro Bakery assistant. Ask me about our cakes, menu, custom orders, locations, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const { branchData } = useBranch();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const userMsg: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 300,
          system: SYSTEM_PROMPT,
          messages: updatedMessages
            .filter((m) => m.role === "user" || m.role === "assistant")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const raw = data.content?.[0]?.text ?? "Sorry, I couldn't process that. Please call us at 9865009581.";

      // Parse redirect JSON if present
      let content = raw;
      let redirect: Message["redirect"] = undefined;
      let whatsapp: string | undefined = undefined;

      const jsonMatch = raw.match(/\{"redirect":\s*"([^"]+)"[^}]*"label":\s*"([^"]+)"(?:[^}]*"whatsapp":\s*"([^"]*)")?[^}]*\}/);
      if (jsonMatch) {
        content = raw.replace(jsonMatch[0], "").trim();
        redirect = { path: jsonMatch[1], label: jsonMatch[2] };
        whatsapp = jsonMatch[3];
      }

      setMessages((prev) => [...prev, { role: "assistant", content, redirect, whatsapp }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please call us directly at 9865009581!" },
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

  const quickPrompts = ["Show me the menu", "Custom cake order", "Where are you?", "Gallery"];

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-5 z-40 w-14 h-14 bg-[#2C1A0E] hover:bg-[#C4714A] text-white rounded-full shadow-xl flex items-center justify-center transition-colors duration-200 group"
            aria-label="Open Mithi chat assistant"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C4714A] group-hover:bg-green-500 rounded-full border-2 border-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="fixed bottom-6 right-4 z-50 w-[340px] sm:w-[380px] bg-[#FAF7F2] rounded-sm shadow-2xl border border-[#2C1A0E]/10 flex flex-col overflow-hidden"
            style={{ maxHeight: "calc(100vh - 100px)", height: "560px" }}
          >
            {/* Header */}
            <div className="bg-[#2C1A0E] px-4 py-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#C4714A]/20 flex items-center justify-center text-base">🎂</div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#2C1A0E]" />
                </div>
                <div>
                  <p className="text-white text-sm font-sans font-medium leading-tight">Mithi</p>
                  <p className="text-white/40 text-xs font-sans">Hamro Bakery AI</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] space-y-2`}>
                    <div
                      className={`px-3.5 py-2.5 rounded-sm text-sm font-sans leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#2C1A0E] text-white"
                          : "bg-white border border-[#2C1A0E]/8 text-[#2C1A0E]"
                      }`}
                    >
                      {msg.content}
                    </div>

                    {/* Redirect button */}
                    {msg.redirect && (
                      <button
                        onClick={() => handleRedirect(msg.redirect!.path, !!msg.whatsapp)}
                        className="flex items-center gap-2 bg-[#C4714A] hover:bg-[#b56540] text-white text-xs font-sans font-medium px-3.5 py-2 rounded-sm transition-colors w-full"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                        {msg.redirect.label}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#2C1A0E]/8 px-4 py-3 rounded-sm flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-[#C4714A]/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#C4714A]/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-[#C4714A]/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setInput(p); setTimeout(() => sendMessage, 0); }}
                    className="text-xs font-sans text-[#2C1A0E]/60 border border-[#2C1A0E]/15 hover:border-[#C4714A] hover:text-[#C4714A] px-2.5 py-1 rounded-sm transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#2C1A0E]/8 flex gap-2 shrink-0 bg-white">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about cakes, menu, orders..."
                className="flex-1 text-sm font-sans text-[#2C1A0E] bg-transparent placeholder:text-[#2C1A0E]/30 focus:outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-8 h-8 bg-[#2C1A0E] hover:bg-[#C4714A] text-white rounded-sm flex items-center justify-center disabled:opacity-30 transition-colors duration-200"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
