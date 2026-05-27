import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBranch } from "@/context/BranchContext";
import { X, MessageCircle } from "lucide-react";

const WA_ICON = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.882l6.198-1.627A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.007-1.368l-.36-.213-3.68.965.981-3.595-.234-.369A9.787 9.787 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
  </svg>
);

export function WhatsAppFloat() {
  const { branchData, selectedBranch } = useBranch();
  const [open, setOpen] = useState(false);

  if (!selectedBranch || !branchData) return null;

  const phone = branchData.whatsapp;
  const greet = `Hello Hamro Bakery (${selectedBranch})! I'd like to place an order. Could you help me?`;

  const quickMessages = [
    { label: "Place an order 🛍️", text: `Hello Hamro Bakery (${selectedBranch})! I'd like to place an order.` },
    { label: "Ask about cakes 🎂", text: `Hello Hamro Bakery (${selectedBranch})! I'd like to ask about custom cakes.` },
    { label: "Check delivery 🚚", text: `Hello Hamro Bakery (${selectedBranch})! Can you deliver to my area?` },
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
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <WA_ICON />
                </div>
                <div>
                  <p className="font-semibold text-sm leading-tight">Hamro Bakery</p>
                  <p className="text-white/80 text-xs">{selectedBranch} • Typically replies fast</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-2">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-3">Quick messages</p>
              {quickMessages.map((m) => (
                <button
                  key={m.label}
                  onClick={() => openChat(m.text)}
                  className="w-full text-left px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#25D366] hover:bg-[#f0fdf4] text-sm text-gray-700 font-medium transition-colors"
                >
                  {m.label}
                </button>
              ))}
              <button
                onClick={() => openChat(greet)}
                className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        animate={open ? {} : {
          boxShadow: [
            "0 0 0 0 rgba(37,211,102,0.5)",
            "0 0 0 14px rgba(37,211,102,0)",
            "0 0 0 0 rgba(37,211,102,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg cursor-pointer border-0 outline-none"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <WA_ICON />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
