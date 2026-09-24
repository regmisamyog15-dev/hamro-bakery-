import { motion } from "framer-motion";
import { Link } from "wouter";

const facts = [
  {
    emoji: "🎂",
    title: "Birthday Cakes Start at Rs 600/lb",
    fact: "Classic flavours — Blackforest, Whiteforest, Butterscotch, Pineapple, Blueberry, Vanilla and Strawberry — all start at Rs 600 per pound. Red Velvet is Rs 1,000/lb. Fondant Design cakes start at Rs 1,500/lb.",
  },
  {
    emoji: "📏",
    title: "We Measure Cakes in Pounds",
    fact: "In Nepal, cakes are priced per pound. 1 pound = approximately 450 grams. So a 2 lb cake is about 900 grams — enough for 15–20 people.",
  },
  {
    emoji: "🍰",
    title: "Size Guide — How Much Cake You Need",
    fact: "1 lb feeds 8–10 people. 2 lb feeds 15–20 people. 3 lb feeds 25+ people. Our team can help you pick the right size for your event.",
  },
  {
    emoji: "✨",
    title: "Simple Design vs Fondant Design",
    fact: "Simple design cakes start at Rs 1,000/lb — cream decorations, clean finish. Fondant design cakes start at Rs 1,500/lb — sculpted, detailed decorations made from fondant.",
  },
  {
    emoji: "🧁",
    title: "Pastries from Rs 70",
    fact: "Fresh pastries baked every morning. Blackforest pastry Rs 70, most standard pastries Rs 80–100. Premium Cheese Pastries (Blueberry, Oreo, Strawberry) are Rs 250 each.",
  },
  {
    emoji: "🍪",
    title: "11 Types of Cookies",
    fact: "We bake 11 cookie varieties daily: Spicy, Salt & Sweet, Cherry, Coconut, Macaroni, Sweet Puff, Chocochips, Puff, Chocolate, Peanuts, and Vanilla. From Rs 125 per pack.",
  },
  {
    emoji: "🌅",
    title: "Baked Fresh Every Single Day",
    fact: "Our bakers start at 7 AM every morning. Everything is baked fresh daily. We do not serve day-old products. Best selection of pastries is between 8–11 AM.",
  },
  {
    emoji: "📅",
    title: "How Far Ahead to Order",
    fact: "Standard cakes: 1 day ahead. Custom design cakes: 2–3 days ahead. Fondant and character cakes: 3–5 days. Wedding cakes: 7 days minimum.",
  },
  {
    emoji: "🏪",
    title: "4 Branches in Narayangarh, Bharatpur",
    fact: "Hakim Chowk (9855070143), Bishal Chowk (9702663750), Sangam Road — open until 9 PM (9855070143), and Synergy Road (9821207163). All open from 8 AM daily.",
  },
  {
    emoji: "📆",
    title: "Baking Since 2013",
    fact: "Hamro Bakery started at Hakim Chowk, Narayangarh in 2013. Over 10 years later, we have 4 branches across Narayangarh, Bharatpur and serve thousands of customers every month.",
  },
  {
    emoji: "🚚",
    title: "Delivery: Bharatpur & Gaidakot",
    fact: "We deliver within Bharatpur and to Gaidakot. Order via WhatsApp 9855070143, or through Foodmandu and Mero Kinamel.",
  },
  {
    emoji: "💳",
    title: "Pay with eSewa, Khalti or Cash",
    fact: "We accept Cash, QR Payment, eSewa and Khalti at all branches. Pick up in-store or get delivery within Bharatpur and Gaidakot.",
  },
  {
    emoji: "👨‍🍳",
    title: "17 Local Bakers & Staff",
    fact: "Hamro Bakery employs 17 skilled bakers and staff — all local. We take pride in creating local employment and sharing the craft of baking in our community.",
  },
  {
    emoji: "🥚",
    title: "Eggless Options for All Products",
    fact: "Every cake and pastry is available eggless at no extra charge. Eggless orders are baked with completely separate utensils and pans. Just mention it when you order.",
  },
  {
    emoji: "🧼",
    title: "Fresh Ingredients, Clean Kitchen",
    fact: "Ingredients are sourced fresh daily. All equipment is cleaned daily. Our kitchen maintains strict hygiene standards so every bite is safe and consistent.",
  },
];

export default function BakeryFacts() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <div className="bg-[#2C1A0E] py-20 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
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

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Hamro Bakery Facts 🎉
          </h1>
          <p className="text-white/50 text-base max-w-xl mx-auto font-sans">
            Everything you need to know about our cakes, pastries, prices and branches in Bharatpur.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 px-6 py-2 rounded-sm bg-[#C4714A] text-white font-semibold text-sm hover:bg-[#b56540] transition-colors"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Facts Grid */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(92,51,23,0.12)" }}
              className="bg-white rounded-lg border border-[#2C1A0E]/8 p-6 shadow-sm transition-all duration-300"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h2 className="text-base font-bold text-[#2C1A0E] mb-2 leading-tight">
                {item.title}
              </h2>
              <p className="text-[#2C1A0E]/55 text-sm leading-relaxed">
                {item.fact}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
          <h3 className="text-3xl font-black text-[#2C1A0E] mb-3">
            Ready to Order?
          </h3>
          <p className="text-[#2C1A0E]/50 text-sm mb-6">
            4 branches in Narayangarh, Bharatpur — or order via WhatsApp for delivery.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/9779855070143"
              className="px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5a] transition-colors"
            >
              WhatsApp Order 🍰
            </a>
            <Link href="/">
              <span className="px-6 py-3 rounded-lg bg-[#2C1A0E] text-white font-semibold hover:bg-[#C4714A] transition-colors cursor-pointer">
                View Full Menu
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
