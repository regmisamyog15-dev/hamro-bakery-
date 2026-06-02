import { motion } from "framer-motion";
import { Link } from "wouter";

const facts = [
  {
    emoji: "🎂",
    title: "Birthday Cakes Start at Rs 600/pound",
    fact: "Our classic Blackforest, Whiteforest, Butterscotch, Pineapple, Blueberry, Vanilla and Strawberry cakes all start at just Rs 600 per pound. Our premium Redvelvet goes for Rs 1000/pound!",
  },
  {
    emoji: "🍰",
    title: "1 kg Cake Feeds About 15 People",
    fact: "A 1 kg (2.2 pound) cake is perfect for 12-15 people. For a party of 20-25, go for a 1.5 kg cake. Our bakers can help you pick the right size!",
  },
  {
    emoji: "📏",
    title: "We Measure Cakes in Pounds",
    fact: "In Nepal, cake is traditionally priced per pound. 1 pound = 450 grams. So a 2 pound cake = about 900 grams — perfect for 8-10 people.",
  },
  {
    emoji: "✨",
    title: "Fondant vs Simple Design",
    fact: "Simple design cakes start at Rs 1000/pound and feature beautiful cream decorations. Fondant design cakes start at Rs 1500/pound with detailed sculpted decorations.",
  },
  {
    emoji: "🧁",
    title: "Our Pastries Are Just Rs 70-250",
    fact: "Fresh pastries start at just Rs 70 for a classic Blackforest. Our premium Cheese Pastries (Blueberry, Oreo, Strawberry) are Rs 250 each — a true indulgence!",
  },
  {
    emoji: "🍪",
    title: "11 Types of Cookies!",
    fact: "We bake 11 different cookies including Spicy, Coconut, Cherry, Chocochips, Peanuts, Vanilla and more — all starting from Rs 125 per pack.",
  },
  {
    emoji: "🌅",
    title: "Baked Fresh Every Single Day",
    fact: "Everything at Hamro Bakery is baked fresh daily. We never serve day-old products. Our bakers start early every morning so you always get the freshest baked goods in Chitwan.",
  },
  {
    emoji: "📅",
    title: "Order 2-3 Days in Advance",
    fact: "For custom designed cakes, we recommend ordering at least 2-3 days in advance. This gives our skilled bakers enough time to craft your perfect cake with attention to every detail.",
  },
  {
    emoji: "🏪",
    title: "4 Branches Across Narayangarh",
    fact: "We have 4 convenient branches: Hakim Chowk (our original!), Bishal Chowk, Sangam Road and Synergy Road. All open 8 AM to 8-9 PM daily.",
  },
  {
    emoji: "📆",
    title: "Baking Happiness Since 2013",
    fact: "Hamro Bakery started in 2013 at Hakim Chowk with a simple dream — to bring happiness through freshly baked goods. Over 10 years later, we serve thousands of happy customers daily!",
  },
  {
    emoji: "🚚",
    title: "We Deliver to Your Door",
    fact: "Order through Foodmandu or Mero Kinamel for fast delivery across Chitwan. Or WhatsApp us directly for personal delivery service straight to your home!",
  },
  {
    emoji: "💳",
    title: "Pay with eSewa or Khalti",
    fact: "We accept Cash, QR Payment, eSewa and Khalti. Order your cake, pay digitally, and pick it up at any branch or get it delivered!",
  },
  {
    emoji: "👨‍🍳",
    title: "17 Skilled Bakers & Staff",
    fact: "Hamro Bakery proudly employs 17 skilled bakers and staff members, generating local employment and sharing the art of baking across Chitwan.",
  },
  {
    emoji: "🏆",
    title: "Star of Bharatpur",
    fact: "Hamro Bakery is known as the Star of Bharatpur — the most loved and trusted bakery in the Chitwan district, serving families for over a decade.",
  },
  {
    emoji: "🧼",
    title: "Highest Hygiene Standards",
    fact: "Our kitchen follows strict hygiene protocols. All equipment is sanitized daily, ingredients are always fresh, and our staff maintains the highest cleanliness standards — every bite is safe and delicious!",
  },
];

export default function BakeryFacts() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary/10 py-16 px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Logo — click to go home */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 mx-auto mb-6 cursor-pointer"
            >
              <img
                src="/images/logo.jpeg"
                alt="Hamro Bakery — Go Home"
                className="w-full h-full object-contain rounded-full border-4 border-primary/30 shadow-xl bg-white"
              />
            </motion.div>
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-3">
            Fun Bakery Facts 🎉
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you ever wanted to know about cakes, pastries and Hamro Bakery!
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Facts Grid */}
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(92,51,23,0.12)" }}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-serif text-lg font-bold text-primary mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.fact}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <img
            src="/images/logo.jpeg"
            alt="Hamro Bakery"
            className="w-20 h-20 object-contain rounded-full border-4 border-primary/20 shadow-lg bg-white mx-auto mb-4"
          />
          <h2 className="text-3xl font-serif text-primary mb-3">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground mb-6">
            Visit any of our 4 branches in Narayangarh or order via WhatsApp!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/9779865009581"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold shadow-md hover:opacity-90 transition-opacity"
            >
              WhatsApp Order 🍰
            </a>
            <Link href="/">
              <span className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:opacity-90 transition-opacity cursor-pointer">
                View Full Menu
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
