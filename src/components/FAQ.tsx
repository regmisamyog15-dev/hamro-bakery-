import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you make custom cakes?",
    a: "Yes! We specialize in custom cake designs. Contact us on WhatsApp with your requirements and our team will make it happen.",
  },
  {
    q: "How far in advance should I order a custom cake?",
    a: "We recommend ordering at least 2–3 days in advance for custom designs to ensure we deliver perfection.",
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes! We deliver through Foodmandu and Mero Kinamel. Order from our delivery section above.",
  },
  {
    q: "Can I pick up my order?",
    a: "Absolutely! Call us ahead, tell us your order, and it will be fresh and ready when you arrive.",
  },
  {
    q: "Are your products fresh daily?",
    a: "Yes! Everything is baked fresh every single day. We never compromise on freshness.",
  },
  {
    q: "Where are your branches located?",
    a: "We have 4 branches in Chitwan: Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road — all in Narayangarh.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-4 shadow-sm"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="font-serif text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
