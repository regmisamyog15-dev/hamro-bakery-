import { useState } from "react";
import { menuCategories } from "@/data";
import { useBranch } from "@/context/BranchContext";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

type Quantities = Record<string, number>;

const CATEGORIES = [
  { key: "Cakes (Price per Pound)", label: "Cakes", sub: "per pound" },
  { key: "Pastry",                  label: "Pastries", sub: "per piece" },
  { key: "Dry Items",               label: "Dry Items", sub: "per piece" },
  { key: "Cookies",                 label: "Cookies", sub: "per pack" },
];

export function Menu() {
  const { branchData } = useBranch();
  const [quantities, setQuantities] = useState<Quantities>({});
  const [activeIdx, setActiveIdx] = useState(0);

  const setQty = (key: string, delta: number) => {
    setQuantities((prev) => {
      const next = Math.max(0, Math.min(10, (prev[key] ?? 0) + delta));
      if (next === 0) { const u = { ...prev }; delete u[key]; return u; }
      return { ...prev, [key]: next };
    });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(quantities)
    .filter(([, q]) => q > 0)
    .reduce((sum, [key, q]) => {
      const [catName, itemName] = key.split("__");
      const item = menuCategories.find(c => c.name === catName)?.items.find(i => i.name === itemName);
      return sum + (item?.price ?? 0) * q;
    }, 0);

  const handleOrder = () => {
    const lines = Object.entries(quantities)
      .filter(([, q]) => q > 0)
      .map(([key, q]) => `${key.split("__")[1]} x${q}`)
      .join(", ");
    if (!lines) { alert("Select at least one item."); return; }
    const phone = branchData?.whatsapp ?? "9865009581";
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(`Hello Hamro Bakery! I'd like to order: ${lines}. Please confirm. Thank you!`)}`, "_blank");
  };

  const activeCat = menuCategories.find(c => c.name === CATEGORIES[activeIdx].key)!;
  const activeMeta = CATEGORIES[activeIdx];

  return (
    <section id="menu" className="bg-[#FAF7F2]">

      {/* Top header — full bleed dark */}
      <div className="bg-[#2C1A0E] px-6 pt-16 pb-0">
        <div className="container mx-auto max-w-4xl">
          <p className="section-eyebrow text-white/40 mb-3 block">Our Menu</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-1">
            Baked fresh every morning
          </h2>
          <p className="text-white/40 text-sm mb-8">
            Pick your items · We confirm · Delivered or ready for pickup
          </p>

          {/* Category tabs — flush bottom, connected to content */}
          <div className="flex gap-1 mt-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.key}
                onClick={() => setActiveIdx(i)}
                className={`px-4 sm:px-6 py-2.5 text-sm font-semibold tracking-wide transition-all rounded-t-lg ${
                  i === activeIdx
                    ? "bg-[#FAF7F2] text-[#2C1A0E]"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-8">

        {/* Category subtitle + note */}
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <h3 className="text-lg font-bold text-[#2C1A0E]">{activeMeta.label}</h3>
            <p className="text-xs text-[#2C1A0E]/40 mt-0.5">Price {activeMeta.sub}</p>
          </div>
          {activeMeta.key.includes("Pound") && (
            <p className="text-xs text-[#C4714A] bg-[#C4714A]/8 border border-[#C4714A]/20 px-3 py-1.5 rounded-md max-w-[200px] text-right leading-tight">
              1 lb feeds 8–10 people<br/>2 lb feeds 15–20
            </p>
          )}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {/* Group items by price tier for cakes */}
            {activeMeta.key.includes("Pound") ? (
              <div className="space-y-6">
                {[
                  { tier: "Classic — रु 600 / lb", items: activeCat.items.filter(i => i.price === 600) },
                  { tier: "Premium — रु 700 / lb", items: activeCat.items.filter(i => i.price === 700) },
                  { tier: "Special — रु 1,000 / lb", items: activeCat.items.filter(i => i.price === 1000) },
                  { tier: "Designer — रु 1,500 / lb", items: activeCat.items.filter(i => i.price === 1500) },
                ].filter(g => g.items.length > 0).map(group => (
                  <div key={group.tier}>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-xs font-bold text-[#2C1A0E]/40 uppercase tracking-widest whitespace-nowrap">{group.tier}</p>
                      <div className="flex-1 h-px bg-[#2C1A0E]/8" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {group.items.map(item => {
                        const key = `${activeCat.name}__${item.name}`;
                        const qty = quantities[key] ?? 0;
                        return <MenuItem key={item.name} name={item.name} price={item.price} qty={qty} onChange={(d) => setQty(key, d)} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activeCat.items.map(item => {
                  const key = `${activeCat.name}__${item.name}`;
                  const qty = quantities[key] ?? 0;
                  return <MenuItem key={item.name} name={item.name} price={item.price} qty={qty} onChange={(d) => setQty(key, d)} />;
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* WhatsApp help line */}
        <div className="mt-8 flex items-center gap-3 border-t border-[#2C1A0E]/8 pt-6">
          <SiWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
          <p className="text-sm text-[#2C1A0E]/50">
            Not sure what to order?{" "}
            <button
              onClick={() => window.open(`https://wa.me/977${branchData?.whatsapp ?? "9865009581"}?text=${encodeURIComponent("Hello! Can you help me choose a cake?")}`, "_blank")}
              className="text-[#2C1A0E] font-semibold hover:text-[#C4714A] transition-colors"
            >
              Chat with us
            </button>
            {" "}— we reply fast.
          </p>
        </div>
      </div>

      {/* Sticky order bar — only when items selected */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C1A0E] border-t border-white/10"
          >
            <div className="container mx-auto max-w-4xl px-4 py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C4714A] text-white text-sm font-black flex items-center justify-center">
                  {totalItems}
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">{totalItems} item{totalItems > 1 ? "s" : ""}</p>
                  <p className="text-white/45 text-xs">रु {totalPrice.toLocaleString()}</p>
                </div>
              </div>
              <button
                onClick={handleOrder}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] active:scale-95 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Order on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function MenuItem({ name, price, qty, onChange }: {
  name: string; price: number; qty: number; onChange: (delta: number) => void;
}) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-150 ${
      qty > 0 ? "bg-white border-[#2C1A0E]/20 shadow-sm" : "bg-white border-[#2C1A0E]/8 hover:border-[#2C1A0E]/18"
    }`}>
      <div className="min-w-0 mr-3">
        <p className={`text-sm leading-snug truncate ${qty > 0 ? "font-semibold text-[#2C1A0E]" : "font-medium text-[#2C1A0E]/80"}`}>
          {name}
        </p>
        {qty === 0 && (
          <p className="text-xs text-[#C4714A] mt-0.5">रु {price}</p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {qty > 0 ? (
          <>
            <button
              onClick={() => onChange(-1)}
              className="w-7 h-7 rounded-full border border-[#2C1A0E]/20 text-[#2C1A0E] flex items-center justify-center hover:bg-[#2C1A0E] hover:text-white hover:border-[#2C1A0E] transition-all"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-sm font-black text-[#2C1A0E] w-4 text-center">{qty}</span>
            <button
              onClick={() => onChange(1)}
              className="w-7 h-7 rounded-full bg-[#2C1A0E] text-white flex items-center justify-center hover:bg-[#C4714A] transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </>
        ) : (
          <button
            onClick={() => onChange(1)}
            className="w-7 h-7 rounded-full border border-[#2C1A0E]/20 text-[#2C1A0E]/40 flex items-center justify-center hover:bg-[#2C1A0E] hover:text-white hover:border-[#2C1A0E] transition-all"
          >
            <Plus className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}
