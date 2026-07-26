import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBranch } from "@/context/BranchContext";
import { X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppFloat() {
  const { branchData, selectedBranch } = useBranch();
  const [open, setOpen] = useState(false);

  // Always visible — fallback to main number before branch is chosen
  const phone = branchData?.whatsapp ?? "9865009581";
  const branchLabel = selectedBranch ?? "Hamro Bakery";

  const quickMessages = [
    { label: "🛍️ Place an order", text: `Hello Hamro Bakery (${branchLabel})! I'd like to place an order.` },
    { label: "🎂 Custom cake enquiry", text: `Hello Hamro Bakery (${branchLabel})! I'd like to ask about a custom cake.` },
    { label: "🚚 Check delivery", text: `Hello Hamro Bakery (${branchLabel})! Can you deliver to my area?` },
  ];

  const openChat = (text: string) => {
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(text)}`, "_blank");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="bg-[#FAF7F2] border border-[#2C1A0E]/10 rounded-sm shadow-2xl w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#2C1A0E] px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C4714A]/20 flex items-center justify-center">
                  <SiWhatsapp className="w-4 h-4 text-[#C4714A]" />
                </div>
                <div>
                  <p className="text-white text-sm font-sans font-medium leading-tight">Hamro Bakery</p>
                  <p className="text-white/40 text-xs font-sans">{branchLabel} · replies fast</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick messages */}
            <div className="p-4 space-y-2">
              {quickMessages.map((m) => (
                <button
                  key={m.label}
                  onClick={() => openChat(m.text)}
                  className="w-full text-left px-4 py-2.5 border border-[#2C1A0E]/10 hover:border-[#C4714A]/40 hover:bg-[#C4714A]/5 text-sm font-sans text-[#2C1A0E]/70 hover:text-[#2C1A0E] rounded-sm transition-colors"
                >
                  {m.label}
                </button>
              ))}
              <button
                onClick={() => openChat(`Hello Hamro Bakery (${branchLabel})! I'd like to get in touch.`)}
                className="w-full mt-1 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-sans font-medium py-2.5 rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <SiWhatsapp className="w-4 h-4" />
                Open WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button — always visible */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        animate={open ? {} : {
          boxShadow: [
            "0 0 0 0 rgba(37,211,102,0.4)",
            "0 0 0 12px rgba(37,211,102,0)",
            "0 0 0 0 rgba(37,211,102,0)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <SiWhatsapp className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
