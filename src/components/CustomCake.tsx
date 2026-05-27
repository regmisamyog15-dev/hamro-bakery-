import { useState } from "react";
import { useBranch } from "@/context/BranchContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export function CustomCake() {
  const { branchData } = useBranch();
  const [description, setDescription] = useState("");

  const handleOrder = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to order a custom cake. Details: ${description || "(no description provided)"}. Please get back to me. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-3">Order Your Custom Cake</h2>
          <p className="text-muted-foreground">Have a dream cake in mind? Tell us and we'll make it happen.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl border border-border shadow-md p-6 md:p-8 space-y-5"
        >
          <Textarea
            placeholder="Describe your dream cake... (flavour, design, occasion, size, message on cake, colours, theme...)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="resize-none focus-visible:ring-primary"
            data-testid="textarea-custom-cake"
          />
          <Button
            onClick={handleOrder}
            size="lg"
            className="w-full rounded-full gap-2 text-base shadow-sm"
            data-testid="btn-custom-cake-order"
          >
            <SiWhatsapp className="w-5 h-5" />
            Order via WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
