import { useState } from "react";
import { menuCategories } from "@/data";
import { useBranch } from "@/context/BranchContext";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingBag, MessageCircle } from "lucide-react";

type Quantities = Record<string, number>;

const CATEGORY_ICONS: Record<string, string> = {
  "Cakes (Price per Pound)": "🎂",
  "Pastry": "🥐",
  "Dry Items": "🍞",
  "Cookies": "🍪",
};

export function Menu() {
  const { branchData } = useBranch();
  const [quantities, setQuantities] = useState<Quantities>({});
  const [activeCategory, setActiveCategory] = useState(0);

  const setQty = (key: string, delta: number) => {
    setQuantities((prev) => {
      const cur = prev[key] ?? 0;
      const next = Math.max(0, Math.min(10, cur + delta));
      if (next === 0) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return { ...prev, [key]: next };
    });
  };

  const handleOrder = () => {
    const ordered = Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([key, qty]) => `${key.split("__")[1]} x${qty}`)
      .join(", ");
    if (!ordered) { alert("Please select at least one item."); return; }
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to order: ${ordered}. Please confirm. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(quantities)
    .filter(([, qty]) => qty > 0)
    .reduce((sum, [key, qty]) => {
      const catName = key.split("__")[0];
      const itemName = key.split("__")[1];
      const cat = menuCategories.find((c) => c.name === catName);
      const item = cat?.items.find((i) => i.name === itemName);
      return sum + (item?.price ?? 0) * qty;
    }, 0);

  const currentCat = menuCategories[activeCategory];

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow mb-3 block">Menu</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1A0E] mb-2">
            Fresh every morning 🌅
          </h2>
          <p className="text-[#2C1A0E]/50 text-sm">
            Tap items to add them — then send your order via WhatsApp
          </p>
        </div>

        {/* Category tabs — big, obvious, icon + label */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {menuCategories.map((cat, i) => {
            const icon = CATEGORY_ICONS[cat.name] ?? "🍰";
            const shortName = cat.name.replace(" (Price per Pound)", "");
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`flex flex-col items-center gap-1 py-3 px-2 rounded-lg border-2 transition-all duration-150 ${
                  i === activeCategory
                    ? "bg-[#2C1A0E] border-[#2C1A0E] text-white shadow-md"
                    : "bg-white border-[#2C1A0E]/12 text-[#2C1A0E]/60 hover:border-[#2C1A0E]/30 hover:text-[#2C1A0E]"
                }`}
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-semibold tracking-wide">{shortName}</span>
                <span className={`text-[10px] ${i === activeCategory ? "text-white/60" : "text-[#2C1A0E]/35"}`}>
                  {cat.items.length} items
                </span>
              </button>
            );
          })}
        </div>

        {/* Price note for cakes */}
        {currentCat.name.includes("Pound") && (
          <div className="bg-[#C4714A]/10 border border-[#C4714A]/20 rounded-lg px-4 py-2.5 mb-5 flex items-center gap-2">
            <span className="text-base">ℹ️</span>
            <p className="text-xs text-[#2C1A0E]/70">
              <strong>Cake prices are per pound.</strong> A 1lb cake serves 8–10 people, 2lb serves 15–20.
            </p>
          </div>
        )}

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            {currentCat.items.map((item) => {
              const key = `${currentCat.name}__${item.name}`;
              const qty = quantities[key] ?? 0;
              return (
                <div
                  key={item.name}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-lg border transition-all ${
                    qty > 0
                      ? "bg-[#2C1A0E]/5 border-[#2C1A0E]/25"
                      : "bg-white border-[#2C1A0E]/8 hover:border-[#2C1A0E]/20"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-[#2C1A0E]">{item.name}</p>
                    <p className="text-xs text-[#C4714A] font-medium mt-0.5">रु {item.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {qty > 0 ? (
                      <>
                        <button
                          onClick={() => setQty(key, -1)}
                          className="w-7 h-7 rounded-full bg-[#2C1A0E] text-white flex items-center justify-center hover:bg-[#C4714A] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold text-[#2C1A0E] w-5 text-center">{qty}</span>
                        <button
                          onClick={() => setQty(key, 1)}
                          className="w-7 h-7 rounded-full bg-[#2C1A0E] text-white flex items-center justify-center hover:bg-[#C4714A] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setQty(key, 1)}
                        className="w-7 h-7 rounded-full border-2 border-[#2C1A0E]/20 flex items-center justify-center hover:bg-[#2C1A0E] hover:text-white hover:border-[#2C1A0E] transition-all text-[#2C1A0E]/40"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Chat CTA */}
        <div className="mt-6 flex items-center gap-3 p-4 bg-white border border-[#2C1A0E]/8 rounded-lg">
          <MessageCircle className="w-5 h-5 text-[#C4714A] shrink-0" />
          <p className="text-sm text-[#2C1A0E]/60">
            Not sure what to get?{" "}
            <button
              onClick={() => {
                const phone = branchData?.whatsapp ?? "9865009581";
                window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello! Can you help me choose something?")}`, "_blank");
              }}
              className="text-[#C4714A] font-semibold underline underline-offset-2 hover:no-underline"
            >
              Ask us on WhatsApp
            </button>
          </p>
        </div>
      </div>

      {/* Sticky order bar */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C1A0E] px-4 py-4 shadow-2xl"
          >
            <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
              <div>
                <p className="text-white text-sm font-bold">
                  {totalItems} item{totalItems > 1 ? "s" : ""} selected
                </p>
                <p className="text-white/50 text-xs">Total: रु {totalPrice.toLocaleString()}</p>
              </div>
              <button
                onClick={handleOrder}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Order via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
