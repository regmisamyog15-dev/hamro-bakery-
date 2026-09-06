import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Link } from "wouter";

const posts = [
  { id: 1, slug: "best-birthday-cakes-bharatpur", title: "Best Birthday Cakes in Bharatpur — Hamro Bakery Narayangarh", date: "July 20, 2026", image: "/images/img27.jpeg", excerpt: "Looking for the best birthday cake in Bharatpur or Narayangarh? Hamro Bakery has been making people smile since 2013 with 4 branches across the city." },
  { id: 2, slug: "custom-cakes-narayangarh", title: "How to Order Custom Cakes in Narayangarh — Step by Step", date: "July 22, 2026", image: "/images/img13.jpeg", excerpt: "Want a custom cake in Narayangarh, Bharatpur? Here's exactly how to order from Hamro Bakery — step by step." },
  { id: 3, slug: "hamro-bakery-since-2013", title: "Hamro Bakery — 10+ Years of Baking in Bharatpur, Nepal", date: "May 20, 2026", image: "/images/img23.jpeg", excerpt: "From one shop at Hakim Chowk in 2013 to four branches across Narayangarh, Bharatpur — the story of Hamro Bakery." },
  { id: 4, slug: "best-bakery-bharatpur-nepal", title: "Best Bakery in Bharatpur Nepal — Hamro Bakery Narayangarh", date: "May 15, 2026", image: "/images/img38.png", excerpt: "Looking for the best bakery in Bharatpur? Hamro Bakery has 4 branches in Narayangarh with custom cakes, fresh pastries and delivery to Gaidakot." },
  { id: 5, slug: "wedding-cake-bharatpur-nepal", title: "Wedding Cakes in Bharatpur Nepal — Hamro Bakery Narayangarh", date: "July 27, 2026", image: "/images/img27.jpeg", excerpt: "Planning a wedding in Bharatpur? Hamro Bakery creates multi-tier fondant wedding cakes with fresh flowers. Order 7 days in advance." },
  { id: 6, slug: "fresh-pastries-narayangarh", title: "Fresh Pastries in Narayangarh — Baked Every Morning at Hamro Bakery", date: "July 28, 2026", image: "/images/img18.jpeg", excerpt: "Fresh pastries baked every morning at Hamro Bakery in Narayangarh, Bharatpur. Blackforest pastry from Rs 70, cheese pastry Rs 250." },
  { id: 7, slug: "bakery-narainghat-bharatpur", title: "Best Bakery in Narainghat — Hamro Bakery, Bharatpur", date: "August 19, 2026", image: "/images/img13.jpeg", excerpt: "Looking for a bakery in Narainghat? Hamro Bakery has 4 branches in the Narayangarh area of Bharatpur — fresh cakes daily, 4.8-star rating." },
  { id: 8, slug: "cake-shop-bharatpur-guide", title: "Best Cake Shops in Bharatpur Nepal — 2026 Guide", date: "August 19, 2026", image: "/images/img38.png", excerpt: "Looking for a cake shop in Bharatpur? Complete guide to finding the best bakery in Narayangarh with pricing, ratings and how to order." },
  { id: 9, slug: "send-cake-bharatpur-from-abroad", title: "Send a Cake to Bharatpur from UK, US or Australia — Hamro Bakery", date: "August 27, 2026", image: "/images/img27.jpeg", excerpt: "Living abroad? Send a fresh birthday or anniversary cake to your family in Bharatpur or Narayangarh. Delivery within Bharatpur and to Gaidakot." },
  { id: 10, slug: "trending-cake-designs-nepal-2026", title: "Top 7 Trending Cake Designs in Nepal 2026 — With Prices", date: "August 27, 2026", image: "/images/img38.png", excerpt: "Korean bento cakes, burn-away cakes, Lambeth vintage, 3D character cakes — trending birthday cake designs in Nepal 2026 with prices from Hamro Bakery Bharatpur." },
  { id: 11, slug: "eggless-cakes-bharatpur-nepal", title: "Eggless Cakes in Bharatpur — 100% Vegetarian Cakes at Hamro Bakery", date: "August 27, 2026", image: "/images/img23.jpeg", excerpt: "Need an eggless cake in Bharatpur or Narayangarh? Hamro Bakery bakes 100% eggless cakes with separate utensils — all flavours, no extra charge." },
  { id: 12, slug: "cookies-dry-items-hamro-bakery", title: "Cookies & Dry Baked Items at Hamro Bakery — Prices & Varieties", date: "September 1, 2026", image: "/images/img18.jpeg", excerpt: "11 cookie varieties and a full range of dry baked items from Rs 20. Available daily at all 4 branches in Narayangarh, Bharatpur." },
  { id: 13, slug: "hamro-bakery-delivery-bharatpur-gaidakot", title: "Cake Delivery in Bharatpur & Gaidakot — Hamro Bakery", date: "September 2, 2026", image: "/images/img13.jpeg", excerpt: "Hamro Bakery delivers fresh cakes and pastries within Bharatpur and to Gaidakot. Order by WhatsApp, Foodmandu or Mero Kinamel." },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        <div className="bg-[#2C1A0E] py-20 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-eyebrow text-white/40 mb-4 block">Blog</span>
            <h1 className="font-bold text-5xl font-light text-white mb-3">Our <span>stories</span></h1>
            <p className="text-white/40 font-sans text-sm">Tips, news and sweet reads from Bharatpur's favourite bakery</p>
          </motion.div>
        </div>
        <div className="container mx-auto max-w-5xl px-6 pt-8">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-sm font-sans text-[#2C1A0E]/50 hover:text-[#C4714A] transition-colors cursor-pointer">← Back to Home</span>
          </Link>
        </div>
        <div className="container mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-[#2C1A0E]/8 rounded-sm overflow-hidden hover:border-[#2C1A0E]/20 transition-colors"
              >
                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-xs text-[#2C1A0E]/35 font-sans mb-2">{post.date}</p>
                  <h2 className="font-bold text-xl text-[#2C1A0E] mb-3 leading-snug">{post.title}</h2>
                  <p className="text-[#2C1A0E]/50 text-sm font-sans leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <span className="text-[#C4714A] font-sans text-sm font-medium hover:underline cursor-pointer">Read More →</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
