import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { useEffect } from "react";

const posts = [
  {
    id: 1,
    slug: "best-birthday-cakes-chitwan",
    title: "Best Birthday Cakes in Chitwan — Hamro Bakery Narayangarh",
    date: "July 20, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Looking for the best birthday cake in Chitwan or Narayangarh? Hamro Bakery has been making people smile since 2013.",
    faq: [
      { q: "Where can I get the best birthday cake in Chitwan?", a: "Hamro Bakery in Narayangarh — 4 branches, 4.8-star rating. Call 9865009581." },
      { q: "How much does a birthday cake cost in Chitwan?", a: "Classic flavours from Rs 600/lb, Red Velvet Rs 1000/lb, Fondant Rs 1500/lb." },
      { q: "How do I order a custom birthday cake in Chitwan?", a: "WhatsApp 9865009581 with occasion, flavour, size and design. Order 2 days ahead for custom cakes." }
    ],
    content: "<p>Hamro Bakery has been Narayangarh's most loved bakery since 2013, crafting hundreds of birthday cakes every month.</p><h2>Birthday Cake Flavours</h2><ul><li><strong>Blackforest</strong> — Rs 600/lb</li><li><strong>Butterscotch</strong> — Rs 600/lb</li><li><strong>Red Velvet</strong> — Rs 1,000/lb</li><li><strong>Fondant Design</strong> — Rs 1,500/lb</li></ul><h2>Cake Sizes</h2><ul><li>1 lb — 8–10 people</li><li>2 lb — 15–20 people</li><li>3 lb+ — 25+ people</li></ul><h2>How to Order</h2><p>WhatsApp <strong>9865009581</strong>. Order 2–3 days ahead for custom designs. Walk into any of 4 branches in Narayangarh — all open 8 AM daily.</p>"
  },
  {
    id: 2,
    slug: "custom-cakes-narayangarh",
    title: "How to Order Custom Cakes in Narayangarh — Step by Step",
    date: "July 22, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Want a custom cake in Narayangarh? Here's exactly how to order from Hamro Bakery.",
    faq: [
      { q: "How do I order a custom cake in Narayangarh?", a: "WhatsApp 9865009581 with your occasion, size, flavour and design. Fondant cakes: 2–3 days. Wedding cakes: 5–7 days." },
      { q: "Can I get an eggless custom cake in Narayangarh?", a: "Yes. All flavours available eggless, baked with separate utensils. Mention it when ordering." },
      { q: "What is the price of a custom cake in Narayangarh?", a: "From Rs 600/lb for standard flavours, Rs 1500/lb for fondant designs. Cash, eSewa, Khalti or QR." }
    ],
    content: "<p>Ordering a <strong>custom cake in Narayangarh</strong> is easy with Hamro Bakery.</p><h2>Step 1 — Choose Your Design</h2><p>Save reference photos and share on WhatsApp. We can recreate almost any design.</p><h2>Step 2 — Choose Flavour</h2><ul><li>Blackforest Rs 600/lb</li><li>Red Velvet Rs 1,000/lb</li><li>Fondant Rs 1,500/lb</li></ul><h2>Step 3 — Order</h2><p>WhatsApp <strong>9865009581</strong>. Standard: 1 day ahead. Custom: 2–3 days. Wedding: 5–7 days.</p><h2>Step 4 — Payment</h2><p>Cash, eSewa, Khalti or QR. Delivery to Bharatpur available.</p>"
  },
  {
    id: 3,
    slug: "hamro-bakery-chitwan-since-2013",
    title: "Hamro Bakery — 10+ Years of Baking Happiness in Chitwan",
    date: "May 20, 2026",
    image: "/images/img23.jpeg",
    excerpt: "From one shop at Hakim Chowk in 2013 to four branches serving Narayangarh, Bharatpur and all of Chitwan.",
    faq: [
      { q: "When did Hamro Bakery open?", a: "First branch at Hakim Chowk, Narayangarh in 2013. Now 4 branches across Narayangarh, Chitwan." },
      { q: "How many branches does Hamro Bakery have?", a: "4 branches: Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road — all in Narayangarh, Chitwan." },
      { q: "What is Hamro Bakery's Google rating?", a: "4.8-star Google rating across 92+ reviews — highest-rated bakery in Narayangarh and Chitwan." }
    ],
    content: "<p><strong>Hamro Bakery</strong> has served thousands of families in Narayangarh, Bharatpur and across Chitwan since 2013.</p><h2>4 Branches in Narayangarh</h2><ul><li>Hakim Chowk — original since 2013</li><li>Bishal Chowk</li><li>Sangam Road — busiest branch</li><li>Synergy Road — newest location</li></ul><h2>Why Hamro Bakery?</h2><p>Every item baked fresh every morning. 17 local bakers. 4.8-star Google rating. 92+ reviews. The most trusted bakery in Chitwan.</p>"
  },
  {
    id: 4,
    slug: "best-bakery-bharatpur-nepal",
    title: "Best Bakery Near Bharatpur Nepal — Hamro Bakery Narayangarh",
    date: "May 15, 2026",
    image: "/images/img38.png",
    excerpt: "Searching for the best bakery in Bharatpur Nepal? Hamro Bakery delivers custom cakes and pastries across Chitwan.",
    faq: [
      { q: "What is the best bakery in Bharatpur Nepal?", a: "Hamro Bakery in Narayangarh — 4.8-star rating, 92+ reviews. Delivers to Bharatpur. Call 9865009581." },
      { q: "Does Hamro Bakery deliver to Bharatpur?", a: "Yes — via Foodmandu, Mero Kinamel, or WhatsApp 9865009581." },
      { q: "Is Hamro Bakery close to Bharatpur?", a: "Yes. Sangam Road and Hakim Chowk branches are minutes from Bharatpur city centre." }
    ],
    content: "<p><strong>Hamro Bakery in Narayangarh</strong> is the top-rated bakery serving Bharatpur and all of Chitwan.</p><h2>Delivery to Bharatpur</h2><ul><li>Foodmandu — order via app</li><li>Mero Kinamel — local delivery</li><li>WhatsApp 9865009581 — arrange direct delivery</li></ul><h2>What We Bake</h2><ul><li>Custom birthday cakes from Rs 600/lb</li><li>Wedding and anniversary cakes</li><li>Fondant design cakes from Rs 1,500/lb</li><li>Fresh pastries, cookies, breads</li><li>Eggless options for all products</li></ul>"
  },
  {
    id: 5,
    slug: "wedding-cake-chitwan-nepal",
    title: "Wedding Cakes in Chitwan Nepal — Hamro Bakery Narayangarh",
    date: "July 27, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Planning a wedding in Chitwan? Hamro Bakery creates stunning multi-tier wedding cakes with fresh flowers and custom fondant designs.",
    faq: [
      { q: "Where can I order a wedding cake in Chitwan Nepal?", a: "Hamro Bakery Narayangarh — multi-tier fondant wedding cakes from Rs 1500/lb. Order 7 days ahead: 9865009581." },
      { q: "How much does a wedding cake cost in Chitwan?", a: "From Rs 1500/lb. A 3lb cake for 50 guests is around Rs 4500+. WhatsApp for a custom quote." },
      { q: "What are the most popular wedding cake flavours in Nepal?", a: "Red Velvet with Cream Cheese, Chocolate Fudge Truffle, and White Forest. Eggless options available." }
    ],
    content: "<p>Hamro Bakery has been creating <strong>wedding cakes in Chitwan</strong> since 2013.</p><h2>Wedding Cake Styles</h2><ul><li>Multi-tier fondant wedding cakes</li><li>Fresh flower cakes — roses, baby's breath</li><li>Ombre and gradient cakes</li><li>Naked cakes — rustic, semi-frosted</li><li>Gold and silver leaf decoration</li></ul><h2>Pricing</h2><ul><li>Up to 50 guests — 3 lb (from Rs 4,500)</li><li>50–100 guests — 4–5 lb</li><li>100+ guests — 6 lb or multi-tier</li></ul><h2>Order</h2><p>WhatsApp <strong>9865009581</strong> at least 7 days before your wedding. Eggless available on request.</p>"
  },
  {
    id: 6,
    slug: "fresh-pastries-narayangarh",
    title: "Fresh Pastries in Narayangarh — Baked Every Morning at Hamro Bakery",
    date: "July 28, 2026",
    image: "/images/img18.jpeg",
    excerpt: "The best fresh pastries in Narayangarh Chitwan — baked from scratch every morning from Rs 70.",
    faq: [
      { q: "Where can I get fresh pastries in Narayangarh?", a: "Hamro Bakery — bakes fresh every morning. 4 branches open 8 AM daily." },
      { q: "What pastries does Hamro Bakery sell?", a: "Veg puff Rs 70, chicken puff Rs 90, croissants Rs 120, cheese croissants Rs 150, muffins Rs 120, donuts Rs 90, cookies Rs 125–200." },
      { q: "What time does Hamro Bakery open?", a: "All 4 branches open 8 AM daily. Best time for fresh pastries: 8–11 AM." }
    ],
    content: "<p>Every morning at 7 AM our bakers begin. By 8 AM everything is fresh out of the oven.</p><h2>Fresh Pastries Daily</h2><ul><li>Veg Puff — Rs 70</li><li>Chicken Puff — Rs 90</li><li>Croissant — Rs 120</li><li>Cheese Croissant — Rs 150</li><li>Danish Pastry — Rs 140</li><li>Muffins — Rs 120</li><li>Donuts — Rs 90</li><li>Cookies — Rs 125–200</li></ul><p>Visit between <strong>8–11 AM</strong> for best selection. 4 branches in Narayangarh, all open daily at 8 AM.</p>"
  },
  {
    id: 7,
    slug: "bakery-narainghat-chitwan",
    title: "Best Bakery in Narainghat — Hamro Bakery Narayangarh Chitwan",
    date: "August 19, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Narainghat's best bakery — 4 branches, fresh cakes daily, 4.8-star rating.",
    faq: [
      { q: "Which is the best bakery in Narainghat?", a: "Hamro Bakery — 4.8-star rating, 4 branches in Narainghat/Narayangarh. Call 9865009581." },
      { q: "Is Narainghat and Narayangarh the same place?", a: "Yes. Narainghat and Narayangarh are two names for the same city in Chitwan, Nepal." },
      { q: "Where is Hamro Bakery in Narainghat?", a: "Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), Synergy Road (9821207163). Open 8 AM daily." }
    ],
    content: "<p>Searching for the <strong>best bakery in Narainghat</strong>? Hamro Bakery has been Narainghat's most trusted bakery since 2013.</p><h2>Narainghat = Narayangarh</h2><p>Narainghat and Narayangarh are two names for the same city in Chitwan. Hamro Bakery serves the entire area including Bharatpur.</p><h2>4 Branches in Narainghat</h2><ul><li>Hakim Chowk — 9865009581</li><li>Bishal Chowk — 9702663750</li><li>Sangam Road — 9855070143</li><li>Synergy Road — 9821207163</li></ul><p>All open 8 AM daily. Custom cakes, pastries, wedding cakes, eggless options.</p>"
  },
  {
    id: 8,
    slug: "cake-shop-chitwan-comparison",
    title: "Best Cake Shops in Chitwan Nepal — Complete Guide 2026",
    date: "August 19, 2026",
    image: "/images/img38.png",
    excerpt: "Complete guide to cake shops in Chitwan — Narayangarh, Bharatpur and beyond.",
    faq: [
      { q: "Which is the best cake shop in Chitwan Nepal?", a: "Hamro Bakery — 4.8-star Google rating, 4 branches in Narayangarh, 10+ years experience." },
      { q: "How do I find a good bakery in Chitwan?", a: "Look for 4.5+ Google ratings and daily fresh baking. Hamro Bakery has 92+ reviews at 4.8 stars." },
      { q: "Can I order a cake online in Chitwan Nepal?", a: "Yes. Hamro Bakery accepts orders via WhatsApp 9865009581. Delivery across Chitwan and Bharatpur." }
    ],
    content: "<p><strong>Hamro Bakery</strong> is the best cake shop in Chitwan Nepal — 4.8-star Google rating, 92+ reviews, 4 branches in Narayangarh.</p><h2>What Makes Hamro Bakery the Best?</h2><ul><li>Fresh daily baking — nothing frozen</li><li>Custom design capability — any design</li><li>Transparent pricing: Rs 600/lb standard, Rs 1500/lb fondant</li><li>4 branches across Narayangarh</li><li>Eggless options for all products</li></ul><p>Order: WhatsApp <strong>9865009581</strong> or visit any branch from 8 AM daily.</p>"
  },
  {
    id: 9,
    slug: "send-cake-chitwan-from-uk-us",
    title: "Send Cake to Chitwan & Narayangarh from UK, US and Australia",
    date: "August 27, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Living in London, the US or Australia? Order a birthday or anniversary cake for your family in Chitwan online. Hamro Bakery offers reliable delivery across Narayangarh and Bharatpur.",
    faq: [
      { q: "How do I send a birthday cake to Bharatpur or Chitwan from the UK?", a: "WhatsApp +977-9865009581 with recipient name, address in Chitwan, cake design and delivery date. We deliver across Narayangarh and Bharatpur. International customers welcome." },
      { q: "Can I order a cake for my family in Narayangarh from abroad?", a: "Yes. WhatsApp +977-9865009581 with recipient name, address, cake design and delivery date. We can send a photo confirming delivery." },
      { q: "Does Hamro Bakery offer same-day cake delivery in Chitwan?", a: "Yes — same-day and 2–3 hour express delivery in Narayangarh and Bharatpur for standard flavours. Custom cakes: 24 hours ahead." }
    ],
    content: "<p>If your family is in <strong>Chitwan, Narayangarh or Bharatpur</strong> and you're living in the UK, US, or Australia — Hamro Bakery makes it easy to send a fresh custom cake to their doorstep.</p><h2>How to Order from Abroad</h2><ol><li><strong>WhatsApp</strong> +977-9865009581 with the recipient's name, address in Chitwan, and phone number.</li><li><strong>Choose your cake</strong> — flavour, design, size, eggless if required.</li><li><strong>Add a message</strong> — we include it with the delivery.</li><li><strong>Confirm delivery date</strong> — same-day available for standard cakes.</li><li><strong>We deliver</strong> — and can send a photo of your family receiving the cake.</li></ol><h2>Popular Gifting Flavours</h2><ul><li>Chocolate Truffle — Rs 700/lb</li><li>Red Velvet — Rs 1,000/lb</li><li>White Forest — Rs 600/lb</li><li>Blackforest — Rs 600/lb</li><li>All available eggless</li></ul><h2>Eggless Options</h2><p>Many families prefer eggless for religious or dietary reasons. We bake 100% eggless cakes with separate utensils. Just mention it when ordering.</p><h2>Same-Day Delivery</h2><p><strong>2–3 hour express delivery</strong> in Narayangarh and Bharatpur for standard flavours. Custom designs: 24 hours ahead. WhatsApp: <strong>+977-9865009581</strong></p>"
  },
  {
    id: 10,
    slug: "trending-cake-designs-nepal-2026",
    title: "Top 7 Trending Cake Designs in Nepal 2026 — With Prices",
    date: "August 27, 2026",
    image: "/images/img38.png",
    excerpt: "Korean bento cakes, burn-away cakes, Lambeth vintage, 3D character cakes — the top 7 trending birthday cake designs in Nepal 2026 with prices from Hamro Bakery Chitwan.",
    faq: [
      { q: "What are the trending cake designs in Nepal in 2026?", a: "Korean bento cakes, burn-away cakes, retro Lambeth vintage cakes, 3D character cakes (Spiderman, Elsa), minimalist naked cakes, multi-tier wedding cakes, and photo cakes. All available at Hamro Bakery Narayangarh." },
      { q: "What is a bento cake and how much does it cost in Chitwan?", a: "A small Korean-style minimalist cake. At Hamro Bakery Narayangarh, bento cakes start from Rs 400–600 depending on design." },
      { q: "Can I get a burn-away cake in Narayangarh Chitwan?", a: "Yes. Hamro Bakery can create burn-away cakes in Narayangarh. WhatsApp 9865009581 with your design idea." }
    ],
    content: "<p>Here are the <strong>top 7 trending cake designs in Nepal 2026</strong> — all available at Hamro Bakery in Narayangarh, Chitwan.</p><h2>1. Korean Bento Cakes</h2><p>Small, minimalist single-serve cakes. Perfect for couples and intimate birthdays. From <strong>Rs 400–600</strong>.</p><h2>2. Burn-Away Cakes</h2><p>A printed outer layer burns away to reveal a hidden message or photo. One of the most viral cake trends in Nepal. Contact us for pricing.</p><h2>3. Vintage Lambeth Cakes</h2><p>Retro-piped scrolls, shells and ruffles — perfect for anniversary photoshoots. Our decorators match any Instagram or Pinterest reference.</p><h2>4. 3D Character Cakes</h2><p>Spiderman, Cocomelon, Elsa, BTS, Doraemon — any character. Share a reference image on WhatsApp. From <strong>Rs 1,500/lb</strong> fondant.</p><h2>5. Minimalist Naked Cakes</h2><p>Semi-frosted rustic style with fresh flowers or fruit. Popular for weddings and photoshoots. From <strong>Rs 800/lb</strong>.</p><h2>6. Multi-Tier Wedding Cakes</h2><p>2–3 tier with edible gold flakes, fresh flowers, or custom toppers. From <strong>Rs 1,500/lb</strong>.</p><h2>7. Photo Cakes</h2><p>Edible photo prints of any memory or photo. From <strong>Rs 800–1,000</strong>.</p><h2>Order Any Design</h2><p>WhatsApp <strong>9865009581</strong> with your reference photo. Order at least 3 days ahead for complex designs.</p>"
  },
  {
    id: 11,
    slug: "eggless-cakes-chitwan-nepal",
    title: "Eggless Cakes in Chitwan — 100% Vegetarian Cakes at Hamro Bakery",
    date: "August 27, 2026",
    image: "/images/img23.jpeg",
    excerpt: "Need an eggless cake in Chitwan or Narayangarh? Hamro Bakery bakes 100% vegetarian eggless cakes with separate utensils — perfect for religious occasions and vegetarian families.",
    faq: [
      { q: "Can I get an eggless cake in Narayangarh?", a: "Yes. Hamro Bakery offers 100% eggless cakes in all flavours — Blackforest, Butterscotch, Red Velvet, Chocolate Truffle and Fondant. Baked with completely separate utensils and pans." },
      { q: "Are eggless cakes available for custom designs in Chitwan?", a: "Yes. All custom designs — fondant, character, and wedding cakes — available eggless. Mention it when WhatsApping 9865009581." },
      { q: "Is there a sugar-free or vegan cake option in Chitwan?", a: "Hamro Bakery offers eggless options for all products. For sugar-free or vegan needs, WhatsApp 9865009581 and our team will advise." }
    ],
    content: "<p>Looking for an <strong>eggless cake in Chitwan or Narayangarh</strong>? Hamro Bakery has been Chitwan's most trusted source for 100% vegetarian eggless baked goods since 2013.</p><h2>Why Eggless Matters in Nepal</h2><p>Many families prefer eggless for religious observances, vegetarian diets, or elder family members. We use completely separate utensils, baking pans, and preparation surfaces — no cross-contamination.</p><h2>Eggless Flavours Available</h2><ul><li>Blackforest Eggless — Rs 600/lb</li><li>Butterscotch Eggless — Rs 600/lb</li><li>Chocolate Truffle Eggless — Rs 700/lb</li><li>Red Velvet Eggless — Rs 1,000/lb</li><li>Fondant Design Eggless — Rs 1,500/lb</li></ul><h2>Eggless for Religious & Cultural Occasions</h2><p>For Teej, Dashain, Tihar, puja celebrations — Hamro Bakery is the reliable choice in Narayangarh and across Chitwan.</p><h2>How to Order</h2><p>WhatsApp <strong>9865009581</strong> and mention eggless with your order. Standard eggless: same-day. Custom eggless: 2–3 days ahead.</p>"
  }
];

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    const existing = document.getElementById("blog-post-schema");
    if (existing) existing.remove();

    const schemas: object[] = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt || post.title,
        "image": `https://hamrobakery1.com${post.image}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Organization",
          "name": "Hamro Bakery",
          "url": "https://hamrobakery1.com",
          "logo": {"@type": "ImageObject","url": "https://hamrobakery1.com/images/logo.jpeg"},
          "sameAs": ["https://www.facebook.com/hamrobakery1","https://www.instagram.com/hamrobakery_official"]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hamro Bakery Narayangarh",
          "logo": {"@type": "ImageObject","url": "https://hamrobakery1.com/images/logo.jpeg"},
          "address": {"@type": "PostalAddress","streetAddress": "Hakim Chowk","addressLocality": "Narayangarh","addressRegion": "Chitwan","addressCountry": "NP"}
        },
        "mainEntityOfPage": {"@type": "WebPage","@id": `https://hamrobakery1.com/blog/${post.slug}`},
        "url": `https://hamrobakery1.com/blog/${post.slug}`,
        "keywords": `Hamro Bakery, ${post.title}, best bakery Chitwan, best bakery Narayangarh, best bakery Bharatpur`,
        "about": {"@type": "Bakery","@id": "https://hamrobakery1.com/#bakery","name": "Hamro Bakery","telephone": "+977-9865009581"},
        "speakable": {"@type": "SpeakableSpecification","cssSelector": ["h1","h2","p:first-of-type"]}
      }
    ];

    if (post.faq && post.faq.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map((item: {q: string; a: string}) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {"@type": "Answer","text": item.a}
        }))
      });
    }

    const script = document.createElement("script");
    script.id = "blog-post-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    document.head.appendChild(script);

    document.title = post.title + " — Hamro Bakery";
    const canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (canonical) canonical.href = `https://hamrobakery1.com/blog/${post.slug}`;
    return () => { const s = document.getElementById("blog-post-schema"); if (s) s.remove(); };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAF7F2]">
        <BranchSelector />
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <p className="text-6xl mb-4">🎂</p>
          <h2 className="text-3xl font-bold text-[#2C1A0E] mb-3">Post not found</h2>
          <Link href="/blog"><span className="text-[#C4714A] hover:underline cursor-pointer text-sm">← Back to Blog</span></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto max-w-3xl px-6 py-12">
          <div className="flex items-center gap-2 text-xs font-sans text-[#2C1A0E]/40 mb-8 flex-wrap">
            <Link href="/"><span className="hover:text-[#C4714A] cursor-pointer transition-colors">Home</span></Link>
            <span>/</span>
            <Link href="/blog"><span className="hover:text-[#C4714A] cursor-pointer transition-colors">Blog</span></Link>
            <span>/</span>
            <span className="text-[#2C1A0E]/60 truncate max-w-[200px]">{post.title}</span>
          </div>
          <img src={post.image} alt={post.title} loading="lazy" className="w-full h-64 object-cover rounded-sm mb-8" />
          <p className="text-[#2C1A0E]/35 text-xs font-sans mb-3">{post.date}</p>
          <h1 className="font-bold text-3xl md:text-4xl text-[#2C1A0E] mb-8 leading-tight">{post.title}</h1>
          <div
            className="prose max-w-none text-[#2C1A0E]/70 font-sans [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-sm [&>h2]:font-bold [&>h2]:text-xl [&>h2]:text-[#2C1A0E] [&>h2]:mt-8 [&>h2]:mb-3 [&>ul]:mb-4 [&>ul]:pl-5 [&>ul>li]:mb-1.5 [&>ul>li]:text-sm [&>ul>li]:leading-relaxed [&>ol]:mb-4 [&>ol]:pl-5 [&>ol>li]:mb-1.5 [&>ol>li]:text-sm [&>strong]:text-[#2C1A0E] [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 p-7 bg-[#2C1A0E] rounded-sm text-center">
            <h3 className="font-bold text-xl text-white mb-2">Order from Hamro Bakery</h3>
            <p className="text-white/45 text-sm font-sans mb-5">WhatsApp any branch — we reply fast and confirm your order the same day.</p>
            <a href="https://wa.me/9779865009581" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors">WhatsApp: 9865009581</a>
          </div>
          <div className="mt-6 text-center">
            <Link href="/blog"><span className="text-[#2C1A0E]/40 hover:text-[#C4714A] text-sm font-sans cursor-pointer transition-colors">← More articles</span></Link>
          </div>
        </motion.div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
