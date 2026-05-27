import { useState } from "react";
import { menuCategories } from "@/data";
import { useBranch } from "@/context/BranchContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, MessageCircle, ShoppingBag, ChevronDown, UtensilsCrossed, PlayCircle, X } from "lucide-react";
import bakeryVideo from "@assets/WhatsApp_Video_2026-05-24_at_1.39.08_PM_1779614102932.mp4";

type Quantities = Record<string, number>;

export function Menu() {
  const { branchData } = useBranch();
  const [quantities, setQuantities] = useState<Quantities>({});
  const [showMenu, setShowMenu] = useState(false);
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

  const handleBuyItem = (itemName: string, qty: number, price: number) => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to order: ${itemName} x${qty} (रु ${price * qty}). Please confirm. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleOrder = () => {
    const ordered = Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([key, qty]) => `${key.split("__")[1]} x${qty}`)
      .join(", ");

    if (!ordered) {
      alert("Please select at least one item to order.");
      return;
    }

    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to order: ${ordered}. Please confirm. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <section id="menu" className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-3">Our Menu</h2>
          <p className="text-muted-foreground">Fresh baked daily — order directly via WhatsApp</p>
        </motion.div>

        {/* ── Menu reveal button ── */}
        <AnimatePresence mode="wait">
          {!showMenu && (
            <motion.div
              key="reveal-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center mb-4"
            >
              <motion.button
                onClick={() => setShowMenu(true)}
                animate={{
                  background: [
                    "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
                    "linear-gradient(135deg, #C0392B 0%, #E67E22 100%)",
                    "linear-gradient(135deg, #7B3F00 0%, #C9A84C 100%)",
                    "linear-gradient(135deg, #A0522D 0%, #DAA520 100%)",
                    "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
                  ],
                  boxShadow: [
                    "0 4px 20px rgba(139,69,19,0.4)",
                    "0 8px 30px rgba(192,57,43,0.5)",
                    "0 4px 20px rgba(123,63,0,0.4)",
                    "0 8px 30px rgba(160,82,45,0.5)",
                    "0 4px 20px rgba(139,69,19,0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center gap-3 px-12 py-8 rounded-3xl text-white cursor-pointer border-0 outline-none"
                data-testid="btn-reveal-menu"
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <UtensilsCrossed className="w-10 h-10" />
                </motion.div>
                <span className="font-serif text-2xl font-bold tracking-wide">Click to View Menu</span>
                <span className="text-white/75 text-sm">See our full selection of fresh baked goods</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Full menu ── */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              key="menu-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-10">
                {menuCategories.map((cat, ci) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ci * 0.06 }}
                  >
                    <h3 className="text-xl font-serif font-bold text-accent-foreground bg-accent/50 px-5 py-3 rounded-xl mb-3">
                      {cat.name}
                    </h3>
                    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
                      {cat.items.map((item, ii) => {
                        const key = `${cat.name}__${item.name}`;
                        const qty = quantities[key] ?? 0;
                        return (
                          <div
                            key={item.name}
                            className={`transition-colors ${
                              ii < cat.items.length - 1 ? "border-b border-border" : ""
                            } ${qty > 0 ? "bg-primary/5" : "hover:bg-secondary/30"}`}
                            data-testid={`menu-item-${ii}-${ci}`}
                          >
                            <div className="flex items-center justify-between px-5 py-3.5">
                              <div className="flex-1 min-w-0">
                                <span className="font-medium text-sm md:text-base truncate block">{item.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  रु {item.price}
                                  {cat.name.includes("Cake") ? "/pound" : ""}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 ml-4 shrink-0">
                                <button
                                  onClick={() => setQty(key, -1)}
                                  className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:border-primary/40 transition-colors disabled:opacity-40"
                                  disabled={qty === 0}
                                  data-testid={`btn-dec-${ii}-${ci}`}
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className={`w-6 text-center text-sm font-semibold ${qty > 0 ? "text-primary" : "text-muted-foreground"}`}>
                                  {qty}
                                </span>
                                <button
                                  onClick={() => setQty(key, 1)}
                                  className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary hover:border-primary/40 transition-colors disabled:opacity-40"
                                  disabled={qty >= 10}
                                  data-testid={`btn-inc-${ii}-${ci}`}
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <AnimatePresence>
                              {qty > 0 && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-3.5 flex items-center justify-between gap-3 border-t border-primary/10 pt-2.5">
                                    <span className="text-xs text-primary font-medium">
                                      Total: रु {item.price * qty}
                                    </span>
                                    <Button
                                      size="sm"
                                      onClick={() => handleBuyItem(item.name, qty, item.price)}
                                      className="rounded-full px-4 gap-1.5 h-8 text-xs shadow-sm"
                                      data-testid={`btn-buy-${ii}-${ci}`}
                                    >
                                      <ShoppingBag className="w-3.5 h-3.5" />
                                      Buy via WhatsApp
                                    </Button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                {totalItems > 0 && (
                  <p className="text-sm text-muted-foreground">
                    {totalItems} item{totalItems !== 1 ? "s" : ""} selected
                  </p>
                )}
                <Button
                  size="lg"
                  onClick={handleOrder}
                  className="rounded-full px-8 gap-2 text-base shadow-md"
                  data-testid="btn-confirm-order"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order All via WhatsApp
                </Button>
                <button
                  onClick={() => setShowMenu(false)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors mt-1 underline underline-offset-2"
                  data-testid="btn-hide-menu"
                >
                  Hide menu
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bakery Tour Video button ── */}
        <div className="mt-6 flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            {!showVideo ? (
              <motion.div
                key="video-reveal-btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-center"
              >
                <motion.button
                  onClick={() => setShowVideo(true)}
                  animate={{
                    background: [
                      "linear-gradient(135deg, #1C0D05 0%, #5C3317 100%)",
                      "linear-gradient(135deg, #3B1F0A 0%, #8B4513 100%)",
                      "linear-gradient(135deg, #2C1810 0%, #C9A84C 100%)",
                      "linear-gradient(135deg, #4A2010 0%, #A0522D 100%)",
                      "linear-gradient(135deg, #1C0D05 0%, #5C3317 100%)",
                    ],
                    boxShadow: [
                      "0 4px 20px rgba(28,13,5,0.5)",
                      "0 8px 30px rgba(139,69,19,0.4)",
                      "0 4px 20px rgba(201,168,76,0.3)",
                      "0 8px 30px rgba(160,82,45,0.4)",
                      "0 4px 20px rgba(28,13,5,0.5)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex flex-col items-center gap-3 px-12 py-8 rounded-3xl text-white cursor-pointer border-0 outline-none"
                  data-testid="btn-reveal-video"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <PlayCircle className="w-12 h-12" />
                  </motion.div>
                  <span className="font-serif text-2xl font-bold tracking-wide">Watch Our Bakery Tour</span>
                  <span className="text-white/75 text-sm">See the heart of Hamro Bakery in action</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="video-player"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden w-full"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-black">
                  <video
                    src={bakeryVideo}
                    controls
                    autoPlay
                    className="w-full max-h-[480px] object-contain"
                    data-testid="bakery-tour-video"
                  />
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                    data-testid="btn-close-video"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-center mt-3">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                  >
                    Hide video
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
