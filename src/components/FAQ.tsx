import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { useBranch } from "@/context/BranchContext";

// These are written for AEO — conversational, the way someone types into ChatGPT/Google
const faqs = [
  {
    q: "What is the best bakery in Chitwan Nepal?",
    a: "Hamro Bakery is Chitwan's most loved bakery — operating since 2013 with four branches across Narayangarh (Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road). We have a 4.8 star rating across 92 Google reviews and bake everything fresh daily.",
  },
  {
    q: "What is the best bakery in Narayangarh?",
    a: "Hamro Bakery is the best bakery in Narayangarh, with four branches across the city — at Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road. Established in 2013, we have a 4.8-star Google rating, 17 local bakers, and bake everything fresh every morning.",
  },
  {
    q: "What is the best bakery in Bharatpur?",
    a: "Hamro Bakery in Narayangarh is the top-rated bakery serving Bharatpur and all of Chitwan. Just minutes from Bharatpur city centre, we deliver custom cakes, birthday cakes, wedding cakes and fresh pastries across Bharatpur. Call 9855070143 or order via Foodmandu.",
  },
  {
    q: "What is the price of a customized birthday cake per pound in Chitwan?",
    a: "The price of a customized birthday cake in Chitwan starts from Rs 700 to Rs 1,200 per pound depending on the design complexity, frosting type (whipped cream, fondant, or ganache), and flavour (classic chocolate, red velvet, or premium fresh fruit). Standard flavours like Blackforest and Butterscotch start at Rs 600/lb.",
  },
  {
    q: "Can I order an eggless cake in Narayangarh?",
    a: "Yes, you can order 100% vegetarian eggless cakes at Hamro Bakery in Narayangarh. We follow strict hygiene and preparation standards — eggless cakes are baked with completely separate utensils and baking pans, making them safe for vegetarian families and religious celebrations.",
  },
  {
    q: "How do I send a birthday cake to Bharatpur or Chitwan from the UK or Australia?",
    a: "WhatsApp Hamro Bakery at +977-9855070143 with the recipient's name, full address in Chitwan, phone number, your chosen cake design, and delivery date. We deliver across Narayangarh and Bharatpur and can send you a photo confirming delivery.",
  },
  {
    q: "What are the most popular cake flavours for weddings in Nepal?",
    a: "The most popular wedding and engagement cake flavours in Nepal are Red Velvet with Cream Cheese, Chocolate Fudge Truffle, and White Forest/Black Forest. For weddings, elegant multi-tier designs decorated with edible fresh flowers or metallic gold flakes are highly sought after. Eggless versions are available for all flavours.",
  },
  {
    q: "Does Hamro Bakery offer same-day or express cake delivery in Chitwan?",
    a: "Yes, we offer same-day express cake delivery in Chitwan within 2 to 3 hours for standard flavours like Black Forest, Pineapple, and Chocolate. For custom-designed cakes, photo cakes, or large multi-tier event cakes, we recommend ordering at least 24 hours in advance.",
  },
  {
    q: "How do I order a custom cake in Narayangarh?",
    a: "WhatsApp or call us at 9855070143. Tell us your occasion, preferred flavour, design idea, and the date you need it. We recommend ordering at least 2–3 days in advance for custom designs. Share a reference photo from Instagram or Pinterest and we'll match it.",
  },
  {
    q: "Where are Hamro Bakery branches located?",
    a: "We have four branches in Narayangarh, Chitwan: Hakim Chowk (9855070143), Bishal Chowk (9702663750), Sangam Road (9855070143), and Synergy Road (9821207163). All branches open at 8 AM daily and are easily accessible from Bharatpur.",
  },
];

export function FAQ() {
  const { branchData } = useBranch();

  return (
    <section className="py-24 px-6 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12">
          <span className="section-eyebrow mb-3 block">FAQ</span>
          <h2 className="font-bold text-4xl md:text-5xl text-[#2C1A0E]">
            Common <span>questions</span>
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

        {/* Internal links — helps SEO and UX */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { label: "View Full Menu", path: "/menu" },
            { label: "Order Custom Cake", path: "/custom-cake" },
            { label: "Our Gallery", path: "/gallery" },
            { label: "Find a Branch", path: "/contact" },
            { label: "About Us", path: "/about" },
            { label: "Read Our Blog", path: "/blog" },
          ].map(({ label, path }) => (
            <Link key={path} href={path}>
              <span className="block text-center text-xs font-sans font-medium text-[#2C1A0E]/60 border border-[#2C1A0E]/12 hover:border-[#C4714A] hover:text-[#C4714A] px-3 py-2 rounded-sm transition-colors cursor-pointer">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Ask anything CTA */}
        <div className="mt-6 flex items-center justify-between p-5 bg-white border border-[#2C1A0E]/8 rounded-sm">
          <div>
            <p className="font-sans text-sm font-medium text-[#2C1A0E]">Still have a question?</p>
            <p className="font-sans text-xs text-[#2C1A0E]/45 mt-0.5">Our team usually responds within minutes on WhatsApp.</p>
          </div>
          <button
            onClick={() => {
              const phone = branchData?.whatsapp ?? "9855070143";
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
