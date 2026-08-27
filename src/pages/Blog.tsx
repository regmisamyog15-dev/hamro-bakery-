import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Link } from "wouter";

const posts = [
  { id: 1, slug: "best-birthday-cakes-chitwan", title: "Best Birthday Cakes in Chitwan — Hamro Bakery Narayangarh", date: "July 20, 2026", image: "/images/img27.jpeg", excerpt: "Looking for the best birthday cake in Chitwan or Narayangarh? Hamro Bakery has been making people smile since 2013." },
  { id: 2, slug: "custom-cakes-narayangarh", title: "How to Order Custom Cakes in Narayangarh — Step by Step", date: "July 22, 2026", image: "/images/img13.jpeg", excerpt: "Want a custom cake in Narayangarh? Here's exactly how to order from Hamro Bakery — step by step." },
  { id: 3, slug: "hamro-bakery-chitwan-since-2013", title: "Hamro Bakery — 10+ Years of Baking Happiness in Chitwan", date: "July 24, 2026", image: "/images/img23.jpeg", excerpt: "From one shop at Hakim Chowk in 2013 to four branches serving Narayangarh, Bharatpur and all of Chitwan." },
  { id: 4, slug: "best-bakery-bharatpur-nepal", title: "Best Bakery Near Bharatpur Nepal — Hamro Bakery Narayangarh", date: "July 26, 2026", image: "/images/img38.png", excerpt: "Searching for the best bakery in Bharatpur Nepal? Hamro Bakery delivers custom cakes and pastries across all of Chitwan." },
  { id: 5, slug: "wedding-cake-chitwan-nepal", title: "Wedding Cakes in Chitwan Nepal — Hamro Bakery", date: "July 27, 2026", image: "/images/img27.jpeg", excerpt: "Planning a wedding in Chitwan? Hamro Bakery creates stunning multi-tier fondant wedding cakes with fresh flowers." },
  { id: 6, slug: "fresh-pastries-narayangarh", title: "Fresh Pastries in Narayangarh — Baked Every Morning", date: "July 28, 2026", image: "/images/img18.jpeg", excerpt: "The best fresh pastries in Narayangarh Chitwan — baked from scratch every morning. Puffs, croissants, muffins from Rs 70." },
  { id: 7, slug: "bakery-narainghat-chitwan", title: "Best Bakery in Narainghat — Hamro Bakery Narayangarh Chitwan", date: "August 19, 2026", image: "/images/img13.jpeg", excerpt: "Narainghat's best bakery — 4 branches, fresh cakes and pastries daily, 4.8-star Google rating." },
  { id: 8, slug: "cake-shop-chitwan-comparison", title: "Best Cake Shops in Chitwan Nepal — Complete Guide 2026", date: "August 19, 2026", image: "/images/img38.png", excerpt: "Complete guide to cake shops in Chitwan — Narayangarh, Bharatpur and beyond. Pricing, ratings and where to order." },
  { id: 9, slug: "send-cake-chitwan-from-uk-us", title: "Send Cake to Chitwan & Narayangarh from UK, US and Australia", date: "August 27, 2026", image: "/images/img27.jpeg", excerpt: "Living in London, the US or Australia? Order a birthday cake for your family in Chitwan online. Reliable delivery across Narayangarh and Bharatpur." },
  { id: 10, slug: "trending-cake-designs-nepal-2026", title: "Top 7 Trending Cake Designs in Nepal 2026 — With Prices", date: "August 27, 2026", image: "/images/img38.png", excerpt: "Korean bento cakes, burn-away cakes, Lambeth vintage, 3D character cakes — trending birthday cake designs in Nepal 2026 with prices." },
  { id: 11, slug: "eggless-cakes-chitwan-nepal", title: "Eggless Cakes in Chitwan — 100% Vegetarian Cakes at Hamro Bakery", date: "August 27, 2026", image: "/images/img23.jpeg", excerpt: "Need an eggless cake in Chitwan? Hamro Bakery bakes 100% vegetarian eggless cakes with separate utensils — perfect for religious occasions." },
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
            <p className="text-white/40 font-sans text-sm">Tips, news and sweet reads from Chitwan's favourite bakery</p>
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
                transition={{ delay: i * 0.1 }}
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
