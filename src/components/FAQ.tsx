import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { useBranch } from "@/context/BranchContext";

// These are written for AEO — conversational, the way someone types into ChatGPT/Google
const faqs = [
  {
    q: "What is the best bakery in Chitwan Nepal?",
    a: "Hamro Bakery is Chitwan's most loved bakery — operating since 2013 with four branches across Narayangarh (Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road). We have a 4.8 star rating across 92 Google reviews and bake everything fresh daily.",
  },
  {
    q: "How do I order a custom cake in Narayangarh?",
    a: "WhatsApp or call us at 9865009581. Tell us your occasion, preferred flavour, design idea, and the date you need it. We recommend ordering at least 2–3 days in advance for custom designs. You can also use the custom cake form on this page.",
  },
  {
    q: "How much does a birthday cake cost at Hamro Bakery?",
    a: "Classic flavours (Blackforest, Butterscotch, Vanilla, Strawberry) start at Rs 600 per pound. Red Velvet is Rs 1,000 per pound. Fondant design cakes start at Rs 1,500 per pound. For 15–20 people, a 2 pound cake is ideal.",
  },
  {
    q: "Does Hamro Bakery deliver in Chitwan?",
    a: "Yes. You can order through Foodmandu or Mero Kinamel for app-based delivery, or WhatsApp us directly at 9865009581 to arrange home delivery across Narayangarh and Bharatpur.",
  },
  {
    q: "Are the products baked fresh every day?",
    a: "Everything at Hamro Bakery is baked fresh every morning. We never sell day-old goods and we don't compromise on freshness — that's been our standard since 2013.",
  },
  {
    q: "What payment methods does Hamro Bakery accept?",
    a: "We accept cash, QR payment, eSewa, and Khalti at all four branches.",
  },
  {
    q: "Where are Hamro Bakery branches located?",
    a: "We have four branches in Narayangarh, Chitwan: Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), and Synergy Road (9821207163). All branches open at 8 AM daily.",
  },
];

export function FAQ() {
  const { branchData } = useBranch();

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12">
          <span className="section-eyebrow mb-3 block">FAQ</span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#2C1A0E]">
            Common <span className="italic">questions</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="divide-y divide-[#2C1A0E]/8 border-t border-[#2C1A0E]/8">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-none"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="font-sans text-left text-sm font-medium text-[#2C1A0E] hover:text-[#C4714A] hover:no-underline py-5 gap-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#2C1A0E]/55 text-sm pb-5 leading-relaxed font-sans font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Ask anything CTA */}
        <div className="mt-10 flex items-center justify-between p-5 bg-white border border-[#2C1A0E]/8 rounded-sm">
          <div>
            <p className="font-sans text-sm font-medium text-[#2C1A0E]">Still have a question?</p>
            <p className="font-sans text-xs text-[#2C1A0E]/45 mt-0.5">Our team usually responds within minutes on WhatsApp.</p>
          </div>
          <button
            onClick={() => {
              const phone = branchData?.whatsapp ?? "9865009581";
              window.open(`https://wa.me/977${phone}?text=${encodeURIComponent("Hello Hamro Bakery! I have a question.")}`, "_blank");
            }}
            className="flex items-center gap-2 bg-[#2C1A0E] text-white text-xs font-sans font-medium px-4 py-2.5 rounded-sm hover:bg-[#C4714A] transition-colors duration-200 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Ask us
          </button>
        </div>
      </div>
    </section>
  );
}
