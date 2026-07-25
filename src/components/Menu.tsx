import { useState } from "react";
import { menuCategories } from "@/data";
import { useBranch } from "@/context/BranchContext";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, MessageCircle, ShoppingBag, UtensilsCrossed, PlayCircle, X } from "lucide-react";

type Quantities = Record<string, number>;

export function Menu() {
  const { branchData } = useBranch();
  const [quantities, setQuantities] = useState<Quantities>({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

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
  const currentCat = menuCategories[activeCategory];

  return (
    <section id="menu" className="py-24 px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-eyebrow mb-3 block">Our Menu</span>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-[#2C1A0E] leading-tight">
              Made fresh,<br />
              <span className="italic">every morning</span>
            </h2>
          </div>
          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 text-sm font-sans text-[#C4714A] border border-[#C4714A]/40 hover:border-[#C4714A] px-4 py-2.5 rounded-sm transition-colors self-start sm:self-auto"
          >
            <PlayCircle className="w-4 h-4" />
            Watch us bake
          </button>
        </div>

        {/* Category tabs — understated pill row */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`shrink-0 px-4 py-2 text-sm font-sans font-medium rounded-sm transition-all duration-200 ${
                i === activeCategory
                  ? "bg-[#2C1A0E] text-white"
                  : "bg-transparent text-[#2C1A0E]/50 hover:text-[#2C1A0E] border border-[#2C1A0E]/15 hover:border-[#2C1A0E]/40"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2C1A0E]/8 border border-[#2C1A0E]/8"
          >
            {currentCat.items.map((item) => {
              const key = `${currentCat.name}__${item.name}`;
              const qty = quantities[key] ?? 0;
              return (
                <div
                  key={item.name}
                  className="bg-white px-5 py-4 flex items-center justify-between group hover:bg-[#FAF7F2] transition-colors"
                >
                  <div>
                    <p className="font-sans text-sm font-medium text-[#2C1A0E]">{item.name}</p>
                    <p className="font-sans text-xs text-[#2C1A0E]/45 mt-0.5">रु {item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {qty > 0 ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(key, -1)}
                          className="w-7 h-7 rounded-full border border-[#2C1A0E]/20 flex items-center justify-center hover:border-[#C4714A] hover:text-[#C4714A] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm font-medium text-[#2C1A0E] w-4 text-center">{qty}</span>
                        <button
                          onClick={() => setQty(key, 1)}
                          className="w-7 h-7 rounded-full border border-[#2C1A0E]/20 flex items-center justify-center hover:border-[#C4714A] hover:text-[#C4714A] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setQty(key, 1)}
                        className="w-7 h-7 rounded-full border border-[#2C1A0E]/15 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-[#C4714A] hover:text-[#C4714A] transition-all"
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

        {/* Floating order bar */}
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
              <button
                onClick={handleOrder}
                className="flex items-center gap-3 bg-[#2C1A0E] text-white px-6 py-3.5 rounded-sm shadow-xl hover:bg-[#C4714A] transition-colors duration-200 font-sans text-sm font-medium"
              >
                <ShoppingBag className="w-4 h-4" />
                Order {totalItems} item{totalItems > 1 ? "s" : ""} via WhatsApp
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mithi chatbot prompt */}
        <div className="mt-10 flex items-center gap-3 p-4 bg-[#2C1A0E]/4 border border-[#2C1A0E]/8 rounded-sm">
          <MessageCircle className="w-5 h-5 text-[#C4714A] shrink-0" />
          <p className="text-sm font-sans text-[#2C1A0E]/60">
            Not sure what to order?{" "}
            <button
              onClick={() => {
                const phone = branchData?.whatsapp ?? "9865009581";
                window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello! Can you help me choose a cake for my occasion?")}`, "_blank");
              }}
              className="text-[#C4714A] underline underline-offset-2 hover:no-underline"
            >
              Chat with us
            </button>{" "}
            and we'll suggest the perfect cake for your occasion.
          </p>
        </div>

        {/* Video modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative w-full max-w-2xl rounded-sm overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80"
                >
                  <X className="w-4 h-4" />
                </button>
                <video
                  src="/images/bakery-video.mp4"
                  autoPlay
                  controls
                  className="w-full"
                  style={{ maxHeight: "70vh" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
