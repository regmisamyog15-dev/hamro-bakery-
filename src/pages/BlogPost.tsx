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
    slug: "best-birthday-cakes-bharatpur",
    title: "Best Birthday Cakes in Bharatpur — Hamro Bakery Narayangarh",
    date: "July 20, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Looking for the best birthday cake in Bharatpur or Narayangarh? Hamro Bakery has been making people smile since 2013 with 4 branches across the city.",
    faq: [
      { q: "Where can I get the best birthday cake in Bharatpur?", a: "Hamro Bakery — 4 branches in Narayangarh, Bharatpur. 4.8-star Google rating. Call 9855070143." },
      { q: "How much does a birthday cake cost at Hamro Bakery?", a: "Classic flavours from Rs 600/lb, Red Velvet Rs 1000/lb, Fondant Design Rs 1500/lb. All prices are per pound." },
      { q: "How do I order a custom birthday cake in Bharatpur?", a: "WhatsApp 9855070143 with occasion, flavour, size and design reference. Order 2–3 days ahead for custom cakes, 1 day for standard." }
    ],
    content: "<p>Hamro Bakery has been Bharatpur's most loved bakery since 2013, with 4 branches in Narayangarh to serve you. Whether you need a simple birthday cake or a detailed fondant design, we bake it fresh every day.</p><h2>Birthday Cake Flavours & Prices</h2><ul><li><strong>Blackforest</strong> — Rs 600/lb</li><li><strong>Butterscotch</strong> — Rs 600/lb</li><li><strong>Chocolate</strong> — Rs 700/lb</li><li><strong>Red Velvet</strong> — Rs 1,000/lb</li><li><strong>Simple Design</strong> — Rs 1,000/lb</li><li><strong>Fondant Design</strong> — Rs 1,500/lb</li></ul><h2>Cake Size Guide</h2><ul><li>1 lb — 8–10 people</li><li>2 lb — 15–20 people</li><li>3 lb+ — 25+ people</li></ul><h2>How to Order</h2><p>WhatsApp <strong>9855070143</strong>. For custom designs, order 2–3 days ahead. For standard cakes, 1 day is enough. All 4 branches open daily from 8 AM.</p>"
  },
  {
    id: 2,
    slug: "custom-cakes-narayangarh",
    title: "How to Order Custom Cakes in Narayangarh — Step by Step",
    date: "July 22, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Want a custom cake in Narayangarh, Bharatpur? Here's exactly how to order from Hamro Bakery — step by step.",
    faq: [
      { q: "How do I order a custom cake in Narayangarh?", a: "WhatsApp 9855070143 with your occasion, size, flavour and a design reference photo. Fondant cakes need 2–3 days. Wedding cakes need 5–7 days." },
      { q: "Can I get an eggless custom cake in Bharatpur?", a: "Yes. All flavours are available eggless, baked with separate utensils. Just mention it when ordering." },
      { q: "What is the price of a custom cake at Hamro Bakery?", a: "Standard flavours from Rs 600/lb. Simple designs Rs 1000/lb. Fondant designs Rs 1500/lb. Pay by cash, eSewa, Khalti or QR." }
    ],
    content: "<p>Ordering a <strong>custom cake in Narayangarh</strong> is easy at Hamro Bakery. We have 4 branches in Bharatpur and deliver to Gaidakot too.</p><h2>Step 1 — Save a Design Reference</h2><p>Find a photo on Instagram or Pinterest that matches what you want. Share it on WhatsApp. Our bakers can recreate most designs.</p><h2>Step 2 — Choose Your Flavour</h2><ul><li>Blackforest / Butterscotch / Vanilla — Rs 600/lb</li><li>Chocolate — Rs 700/lb</li><li>Red Velvet — Rs 1,000/lb</li><li>Simple Design — Rs 1,000/lb</li><li>Fondant Design — Rs 1,500/lb</li></ul><h2>Step 3 — Send Your Order</h2><p>WhatsApp <strong>9855070143</strong>. Tell us: size, flavour, design, date needed, and whether eggless. Standard: 1 day. Custom: 2–3 days. Wedding: 5–7 days.</p><h2>Step 4 — Pay & Collect</h2><p>Pay by cash, eSewa, Khalti or QR scan at any of our 4 branches. We also deliver within Bharatpur and Gaidakot.</p>"
  },
  {
    id: 3,
    slug: "hamro-bakery-since-2013",
    title: "Hamro Bakery — 10+ Years of Baking in Bharatpur, Nepal",
    date: "May 20, 2026",
    image: "/images/img23.jpeg",
    excerpt: "From one shop at Hakim Chowk in 2013 to four branches across Narayangarh, Bharatpur — the story of Hamro Bakery.",
    faq: [
      { q: "When did Hamro Bakery open?", a: "The first branch opened at Hakim Chowk, Narayangarh in 2013. We now have 4 branches across Bharatpur." },
      { q: "How many branches does Hamro Bakery have?", a: "4 branches: Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road — all in Narayangarh, Bharatpur." },
      { q: "What is Hamro Bakery's Google rating?", a: "4.8-star Google rating across 92+ reviews — one of the highest-rated bakeries in Bharatpur." }
    ],
    content: "<p><strong>Hamro Bakery</strong> started with one small shop at Hakim Chowk, Narayangarh in 2013. Over 10 years later, we have grown to 4 branches across Bharatpur and serve thousands of customers every month.</p><h2>Our 4 Branches in Narayangarh, Bharatpur</h2><ul><li><strong>Hakim Chowk</strong> — our original branch, open since 2013 (9855070143)</li><li><strong>Bishal Chowk</strong> — (9702663750)</li><li><strong>Sangam Road</strong> — open until 9 PM (9855070143)</li><li><strong>Synergy Road</strong> — our newest branch (9821207163)</li></ul><h2>What We Stand For</h2><p>Every item baked fresh daily. Nothing is frozen or day-old. 17 local bakers and staff. 4.8-star Google rating from 92+ real customers. We also deliver to Gaidakot.</p>"
  },
  {
    id: 4,
    slug: "best-bakery-bharatpur-nepal",
    title: "Best Bakery in Bharatpur Nepal — Hamro Bakery Narayangarh",
    date: "May 15, 2026",
    image: "/images/img38.png",
    excerpt: "Looking for the best bakery in Bharatpur? Hamro Bakery has 4 branches in Narayangarh with custom cakes, fresh pastries and delivery to Gaidakot.",
    faq: [
      { q: "What is the best bakery in Bharatpur Nepal?", a: "Hamro Bakery in Narayangarh, Bharatpur — 4.8-star Google rating, 92+ reviews, 4 branches. Call 9855070143." },
      { q: "Does Hamro Bakery deliver in Bharatpur?", a: "Yes — we deliver within Bharatpur. Order via WhatsApp 9855070143 or through Foodmandu and Mero Kinamel." },
      { q: "Do you deliver to Gaidakot?", a: "Yes. Hamro Bakery delivers to Gaidakot. WhatsApp 9855070143 to arrange." }
    ],
    content: "<p><strong>Hamro Bakery</strong> is one of the top-rated bakeries in Bharatpur, Nepal — with 4 branches in Narayangarh and delivery across Bharatpur and Gaidakot.</p><h2>Delivery Areas</h2><ul><li><strong>Bharatpur</strong> — via Foodmandu, Mero Kinamel, or WhatsApp 9855070143</li><li><strong>Gaidakot</strong> — WhatsApp 9855070143 to arrange</li></ul><h2>What We Bake</h2><ul><li>Custom birthday cakes from Rs 600/lb</li><li>Wedding and anniversary cakes</li><li>Fondant design cakes from Rs 1,500/lb</li><li>Fresh pastries, cookies, breads — daily</li><li>Eggless options for all products</li></ul><h2>Our 4 Branches</h2><p>Hakim Chowk · Bishal Chowk · Sangam Road · Synergy Road — all open from 8 AM daily in Narayangarh, Bharatpur.</p>"
  },
  {
    id: 5,
    slug: "wedding-cake-bharatpur-nepal",
    title: "Wedding Cakes in Bharatpur Nepal — Hamro Bakery Narayangarh",
    date: "July 27, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Planning a wedding in Bharatpur? Hamro Bakery creates multi-tier fondant wedding cakes with fresh flowers. Order 7 days in advance.",
    faq: [
      { q: "Where can I order a wedding cake in Bharatpur Nepal?", a: "Hamro Bakery Narayangarh — fondant wedding cakes from Rs 1500/lb. Order 7 days ahead: 9855070143." },
      { q: "How much does a wedding cake cost at Hamro Bakery?", a: "From Rs 1500/lb for fondant. A 3 lb cake for around 25–30 guests is Rs 4,500+. WhatsApp for a custom quote." },
      { q: "What are popular wedding cake flavours at Hamro Bakery?", a: "Red Velvet, Chocolate, Butterscotch, and Blackforest. All available in eggless. Fondant designs available on request." }
    ],
    content: "<p>Hamro Bakery has been making <strong>wedding cakes in Bharatpur</strong> since 2013. We handle everything from simple 2-tier cakes to detailed fondant designs with fresh flowers.</p><h2>Wedding Cake Styles We Offer</h2><ul><li>Multi-tier fondant cakes</li><li>Fresh flower decoration</li><li>Ombre and gradient cakes</li><li>Naked / rustic cakes</li><li>Gold and silver leaf decoration</li><li>Photo cakes with edible print</li></ul><h2>Size & Pricing Guide</h2><ul><li>25–30 guests — 3 lb (from Rs 4,500)</li><li>50–60 guests — 4–5 lb</li><li>100+ guests — 6 lb or multi-tier</li></ul><h2>How to Order</h2><p>WhatsApp <strong>9855070143</strong> at least 7 days before your wedding. Share your design reference photo. Eggless available on request. We deliver in Bharatpur and Gaidakot.</p>"
  },
  {
    id: 6,
    slug: "fresh-pastries-narayangarh",
    title: "Fresh Pastries in Narayangarh — Baked Every Morning at Hamro Bakery",
    date: "July 28, 2026",
    image: "/images/img18.jpeg",
    excerpt: "Fresh pastries baked every morning at Hamro Bakery in Narayangarh, Bharatpur. Blackforest pastry from Rs 70, cheese pastry Rs 250.",
    faq: [
      { q: "Where can I get fresh pastries in Narayangarh?", a: "Hamro Bakery — baked fresh every morning. 4 branches in Narayangarh, Bharatpur, open from 8 AM daily." },
      { q: "What pastries does Hamro Bakery sell?", a: "Blackforest Rs 70, Butterscotch Rs 80, Chocolate Rs 90, Red Velvet Rs 100, Cheese Pastries (Blueberry/Oreo/Strawberry) Rs 250 each." },
      { q: "What time does Hamro Bakery open?", a: "All 4 branches open at 8 AM daily. Best time for fresh pastries is 8–11 AM." }
    ],
    content: "<p>Our bakers start at 7 AM every morning. By 8 AM everything is fresh out of the oven — nothing is held over from the day before.</p><h2>Pastry Menu & Prices</h2><ul><li>Blackforest Pastry — Rs 70</li><li>Whiteforest Pastry — Rs 80</li><li>Butterscotch Pastry — Rs 80</li><li>Pineapple / Blueberry / Strawberry / Vanilla — Rs 80</li><li>Red Velvet Pastry — Rs 100</li><li>Chocolate Pastry — Rs 90</li><li>Blueberry Cheese Pastry — Rs 250</li><li>Oreo Cheese Pastry — Rs 250</li><li>Strawberry Cheese Pastry — Rs 250</li><li>Swiss Roll — Rs 100</li></ul><p>Visit between <strong>8–11 AM</strong> for the best selection. 4 branches in Narayangarh, Bharatpur — all open daily from 8 AM.</p>"
  },
  {
    id: 7,
    slug: "bakery-narainghat-bharatpur",
    title: "Best Bakery in Narainghat — Hamro Bakery, Bharatpur",
    date: "August 19, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Looking for a bakery in Narainghat? Hamro Bakery has 4 branches in the Narayangarh area of Bharatpur — fresh cakes daily, 4.8-star rating.",
    faq: [
      { q: "Which is the best bakery in Narainghat?", a: "Hamro Bakery — 4.8-star rating, 4 branches in Narayangarh, Bharatpur. Call 9855070143." },
      { q: "Where is Narainghat?", a: "Narainghat is a locality within Bharatpur municipality in Chitwan district, Nepal. Hamro Bakery's branches are in this area." },
      { q: "Where are Hamro Bakery's branches in Narainghat / Narayangarh?", a: "Hakim Chowk (9855070143), Bishal Chowk (9702663750), Sangam Road (9855070143), Synergy Road (9821207163). All open 8 AM daily." }
    ],
    content: "<p>Looking for the <strong>best bakery in Narainghat</strong>? Hamro Bakery has 4 branches across the Narayangarh area of Bharatpur and has been baking fresh daily since 2013.</p><h2>Our 4 Branches in Narayangarh, Bharatpur</h2><ul><li><strong>Hakim Chowk</strong> — 9855070143 (8 AM – 8 PM)</li><li><strong>Bishal Chowk</strong> — 9702663750 (8 AM – 8 PM)</li><li><strong>Sangam Road</strong> — 9855070143 (8 AM – 9 PM)</li><li><strong>Synergy Road</strong> — 9821207163 (8 AM – 8 PM)</li></ul><h2>Delivery</h2><p>We deliver within Bharatpur and also to Gaidakot. WhatsApp 9855070143 to arrange delivery.</p><p>Custom cakes, fresh pastries, wedding cakes, eggless options — all available. Order in advance for custom designs.</p>"
  },
  {
    id: 8,
    slug: "cake-shop-bharatpur-guide",
    title: "Best Cake Shops in Bharatpur Nepal — 2026 Guide",
    date: "August 19, 2026",
    image: "/images/img38.png",
    excerpt: "Looking for a cake shop in Bharatpur? Complete guide to finding the best bakery in Narayangarh with pricing, ratings and how to order.",
    faq: [
      { q: "Which is the best cake shop in Bharatpur Nepal?", a: "Hamro Bakery — 4.8-star Google rating, 4 branches in Narayangarh, Bharatpur, over 10 years in business." },
      { q: "How do I find a reliable bakery in Bharatpur?", a: "Look for 4.5+ Google ratings and confirmed fresh daily baking. Hamro Bakery has 92+ reviews at 4.8 stars." },
      { q: "Can I order a cake online in Bharatpur Nepal?", a: "Yes. Hamro Bakery accepts orders via WhatsApp 9855070143. Delivery within Bharatpur and to Gaidakot." }
    ],
    content: "<p><strong>Hamro Bakery</strong> is one of the most trusted cake shops in Bharatpur — 4.8-star Google rating, 92+ reviews, 4 branches in Narayangarh, and over 10 years of daily fresh baking.</p><h2>What Sets Hamro Bakery Apart</h2><ul><li>Fresh daily baking — nothing frozen or from the day before</li><li>Custom design cakes — any design from a reference photo</li><li>Clear pricing: Rs 600/lb standard, Rs 1,500/lb fondant</li><li>4 branches in Narayangarh, Bharatpur</li><li>Eggless options for all products</li><li>Delivery within Bharatpur and to Gaidakot</li></ul><p>Order on WhatsApp: <strong>9855070143</strong>. Visit any branch from 8 AM daily.</p>"
  },
  {
    id: 9,
    slug: "send-cake-bharatpur-from-abroad",
    title: "Send a Cake to Bharatpur from UK, US or Australia — Hamro Bakery",
    date: "August 27, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Living abroad? Send a fresh birthday or anniversary cake to your family in Bharatpur or Narayangarh. Hamro Bakery delivers within Bharatpur and to Gaidakot.",
    faq: [
      { q: "How do I send a birthday cake to Bharatpur from the UK or US?", a: "WhatsApp +977-9855070143 with the recipient's name, address in Bharatpur, cake design and delivery date. We deliver in Bharatpur and Gaidakot." },
      { q: "Can I order a cake for my family in Narayangarh from abroad?", a: "Yes. WhatsApp +977-9855070143 with recipient name, address, design and date. We can send a delivery confirmation photo." },
      { q: "Does Hamro Bakery offer same-day cake delivery in Bharatpur?", a: "Yes — same-day delivery available in Bharatpur for standard flavours. Custom cakes need at least 24 hours notice." }
    ],
    content: "<p>If your family is in <strong>Bharatpur or Narayangarh</strong> and you're in the UK, US, or Australia — Hamro Bakery makes it easy to send a fresh custom cake to their door.</p><h2>How to Order from Abroad</h2><ol><li><strong>WhatsApp</strong> +977-9855070143 with the recipient's name and address in Bharatpur.</li><li><strong>Choose your cake</strong> — flavour, size, design, eggless if needed.</li><li><strong>Add a message</strong> — we include it with the cake.</li><li><strong>Confirm the date</strong> — same-day available for standard cakes.</li><li><strong>We deliver</strong> within Bharatpur and to Gaidakot, and can send you a photo.</li></ol><h2>Popular Gifting Flavours</h2><ul><li>Blackforest — Rs 600/lb</li><li>Butterscotch — Rs 600/lb</li><li>Chocolate — Rs 700/lb</li><li>Red Velvet — Rs 1,000/lb</li><li>All available eggless</li></ul><h2>Eggless Options</h2><p>We bake 100% eggless cakes with completely separate utensils and pans. Just mention it when ordering.</p>"
  },
  {
    id: 10,
    slug: "trending-cake-designs-nepal-2026",
    title: "Top 7 Trending Cake Designs in Nepal 2026 — With Prices",
    date: "August 27, 2026",
    image: "/images/img38.png",
    excerpt: "Korean bento cakes, burn-away cakes, Lambeth vintage, 3D character cakes — trending birthday cake designs in Nepal 2026 with prices from Hamro Bakery Bharatpur.",
    faq: [
      { q: "What are the trending cake designs in Nepal in 2026?", a: "Korean bento cakes, burn-away cakes, retro Lambeth vintage cakes, 3D character cakes, minimalist naked cakes, multi-tier wedding cakes, and photo cakes. All available at Hamro Bakery, Bharatpur." },
      { q: "What is a bento cake and how much does it cost in Bharatpur?", a: "A small Korean-style single-serve cake. At Hamro Bakery, bento cakes start from Rs 400–600 depending on design. WhatsApp 9855070143." },
      { q: "Can I get a burn-away cake in Bharatpur?", a: "Yes. Hamro Bakery can create burn-away cakes. WhatsApp 9855070143 with your design idea. Order 3–5 days ahead." }
    ],
    content: "<p>Here are the <strong>top 7 trending cake designs in Nepal in 2026</strong> — all available at Hamro Bakery's 4 branches in Narayangarh, Bharatpur.</p><h2>1. Korean Bento Cakes</h2><p>Small, minimalist single-serve cakes — perfect for couples and intimate birthdays. From <strong>Rs 400–600</strong>.</p><h2>2. Burn-Away Cakes</h2><p>A printed outer layer that burns to reveal a hidden message or photo underneath. WhatsApp us for pricing and availability.</p><h2>3. Vintage Lambeth Cakes</h2><p>Retro-piped scrolls and ruffles — popular for anniversary and milestone birthdays. Share a Pinterest reference with us.</p><h2>4. 3D Character Cakes</h2><p>Spiderman, Cocomelon, Elsa, Doraemon — any character. Share a reference image. From <strong>Rs 1,500/lb</strong> fondant. Order 3–5 days ahead.</p><h2>5. Minimalist Naked Cakes</h2><p>Semi-frosted rustic style with fresh flowers. Popular for weddings. From <strong>Rs 800/lb</strong>.</p><h2>6. Multi-Tier Wedding Cakes</h2><p>2–3 tier with edible gold, fresh flowers, or custom toppers. From <strong>Rs 1,500/lb</strong>. Order 7 days ahead.</p><h2>7. Photo Cakes</h2><p>Edible photo print of any memory. From <strong>Rs 800–1,000</strong>. Order 1–2 days ahead.</p><h2>Order Any Design</h2><p>WhatsApp <strong>9855070143</strong> with your reference photo. We deliver in Bharatpur and to Gaidakot.</p>"
  },
  {
    id: 11,
    slug: "eggless-cakes-bharatpur-nepal",
    title: "Eggless Cakes in Bharatpur — 100% Vegetarian Cakes at Hamro Bakery",
    date: "August 27, 2026",
    image: "/images/img23.jpeg",
    excerpt: "Need an eggless cake in Bharatpur or Narayangarh? Hamro Bakery bakes 100% eggless cakes with separate utensils — all flavours available.",
    faq: [
      { q: "Can I get an eggless cake in Bharatpur?", a: "Yes. Hamro Bakery bakes 100% eggless cakes in all flavours — Blackforest, Butterscotch, Red Velvet, Chocolate and Fondant. Separate utensils used. WhatsApp 9855070143." },
      { q: "Are eggless custom design cakes available in Bharatpur?", a: "Yes. Fondant, character, and wedding cakes all available eggless. Just mention it when WhatsApping 9855070143." },
      { q: "Is there a price difference for eggless cakes?", a: "No extra charge for eggless at Hamro Bakery. Same prices as regular cakes. Mention eggless when ordering." }
    ],
    content: "<p>Looking for an <strong>eggless cake in Bharatpur or Narayangarh</strong>? Hamro Bakery has been baking 100% vegetarian eggless goods since 2013. Every eggless order is made with completely separate utensils and baking pans.</p><h2>Why Eggless Matters</h2><p>Many families prefer eggless for religious observances, vegetarian diets, or personal choice. We treat eggless orders with the same care as all our products — no cross-contamination.</p><h2>Eggless Flavours & Prices</h2><ul><li>Blackforest Eggless — Rs 600/lb</li><li>Butterscotch Eggless — Rs 600/lb</li><li>Chocolate Eggless — Rs 700/lb</li><li>Red Velvet Eggless — Rs 1,000/lb</li><li>Simple Design Eggless — Rs 1,000/lb</li><li>Fondant Design Eggless — Rs 1,500/lb</li></ul><h2>Good for Religious Occasions</h2><p>For Teej, Dashain, Tihar and puja celebrations — just tell us eggless when ordering. No extra charge.</p><h2>How to Order</h2><p>WhatsApp <strong>9855070143</strong> and mention eggless. Standard eggless: same day. Custom eggless: 2–3 days. Wedding eggless: 5–7 days. We deliver in Bharatpur and Gaidakot.</p>"
  },
  {
    id: 12,
    slug: "cookies-dry-items-hamro-bakery",
    title: "Cookies & Dry Baked Items at Hamro Bakery — Prices & Varieties",
    date: "September 1, 2026",
    image: "/images/img18.jpeg",
    excerpt: "Hamro Bakery stocks 11 cookie varieties and a full range of dry baked items — from Rs 20. Available at all 4 branches in Narayangarh, Bharatpur.",
    faq: [
      { q: "What cookies does Hamro Bakery sell?", a: "11 varieties: Spicy, Salt & Sweet, Cherry, Coconut, Macaroni, Sweet Puff, Chocochips, Puff, Chocolate, Peanuts, and Vanilla. From Rs 125 per pack." },
      { q: "What dry baked items does Hamro Bakery have?", a: "Banana Cake (Rs 40), Brownie (Rs 70), Muffin (Rs 25), Doughnut (Rs 20), Chocolate Doughnut (Rs 50), Breads (Rs 60), Swiss Roll (Rs 100) and more." },
      { q: "Can I buy cookies in bulk from Hamro Bakery?", a: "Yes. WhatsApp 9855070143 for bulk orders. Good for office snacks, events and gifting." }
    ],
    content: "<p>Hamro Bakery bakes far more than cakes and pastries. Our daily fresh lineup includes 11 cookie varieties and a full range of dry baked items — all at honest prices.</p><h2>Cookies — 11 Varieties</h2><ul><li>Spicy Cookies — Rs 150</li><li>Salt and Sweet Cookies — Rs 150</li><li>Cherry Cookies — Rs 150</li><li>Coconut Cookies — Rs 150</li><li>Macaroni — Rs 200</li><li>Sweet Puff — Rs 125</li><li>Chocochips Cookies — Rs 130</li><li>Puff — Rs 70</li><li>Chocolate Cookies — Rs 130</li><li>Peanuts Cookies — Rs 150</li><li>Vanilla Cookies — Rs 130</li></ul><h2>Dry Baked Items</h2><ul><li>Banana Cake — Rs 40</li><li>Banana Ring — Rs 75</li><li>Banana Family — Rs 150</li><li>Brownie — Rs 70</li><li>Muffin — Rs 25</li><li>Doughnut — Rs 20</li><li>Chocolate Doughnut — Rs 50</li><li>Cream Doughnut — Rs 25</li><li>European Cake — Rs 60</li><li>Fruits Cake — Rs 50</li><li>Nuts Cake — Rs 50</li><li>Breads — Rs 60</li><li>Butter Slice Bread — Rs 350</li><li>Butter Slice — Rs 40</li><li>Swiss Roll — Rs 100</li><li>Hot Roll — Rs 40</li></ul><p>All available at our 4 branches in Narayangarh, Bharatpur from 8 AM daily. Bulk orders: WhatsApp <strong>9855070143</strong>.</p>"
  },
  {
    id: 13,
    slug: "hamro-bakery-delivery-bharatpur-gaidakot",
    title: "Cake Delivery in Bharatpur & Gaidakot — Hamro Bakery",
    date: "September 2, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Hamro Bakery delivers fresh cakes and pastries within Bharatpur and to Gaidakot. Order by WhatsApp, Foodmandu or Mero Kinamel.",
    faq: [
      { q: "Where does Hamro Bakery deliver?", a: "Hamro Bakery delivers within Bharatpur and to Gaidakot. WhatsApp 9855070143 or order via Foodmandu and Mero Kinamel." },
      { q: "How do I order cake delivery in Bharatpur?", a: "WhatsApp 9855070143, or download Foodmandu or Mero Kinamel and search for Hamro Bakery." },
      { q: "Is there same-day cake delivery in Bharatpur?", a: "Yes — same-day delivery in Bharatpur for standard flavours. Custom cakes need 2–3 days. Wedding cakes need 7 days." }
    ],
    content: "<p>Hamro Bakery offers cake and pastry delivery within <strong>Bharatpur</strong> and to <strong>Gaidakot</strong>. We don't deliver outside these areas — so what you get is always fast, always fresh.</p><h2>How to Order Delivery</h2><ul><li><strong>WhatsApp</strong> 9855070143 — direct order, fastest response</li><li><strong>Foodmandu</strong> — order through the app</li><li><strong>Mero Kinamel</strong> — local delivery platform</li></ul><h2>Delivery Timelines</h2><ul><li>Standard flavour cakes — same day in Bharatpur</li><li>Custom design cakes — 2–3 days ahead</li><li>Wedding cakes — 7 days ahead</li><li>Pastries and dry items — same day</li></ul><h2>4 Branches in Narayangarh, Bharatpur</h2><p>If you're nearby, pick up directly from any branch — all open 8 AM daily.</p><ul><li>Hakim Chowk — 9855070143</li><li>Bishal Chowk — 9702663750</li><li>Sangam Road — 9855070143 (open until 9 PM)</li><li>Synergy Road — 9821207163</li></ul>"
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
          "sameAs": ["https://www.facebook.com/hamrobakery1","https://www.instagram.com/hamrobakerynarayangarh"]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hamro Bakery Narayangarh",
          "logo": {"@type": "ImageObject","url": "https://hamrobakery1.com/images/logo.jpeg"},
          "address": {"@type": "PostalAddress","streetAddress": "Hakim Chowk","addressLocality": "Narayangarh","addressRegion": "Bharatpur, Bagmati Province","addressCountry": "NP"}
        },
        "mainEntityOfPage": {"@type": "WebPage","@id": `https://hamrobakery1.com/blog/${post.slug}`},
        "url": `https://hamrobakery1.com/blog/${post.slug}`,
        "keywords": `Hamro Bakery, ${post.title}, best bakery Bharatpur, best bakery Narayangarh, cake delivery Bharatpur`,
        "about": {"@type": "Bakery","@id": "https://hamrobakery1.com/#bakery","name": "Hamro Bakery","telephone": "+977-9855070143"},
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
          {post.faq && post.faq.length > 0 && (
            <div className="mt-10 border-t border-[#2C1A0E]/8 pt-8">
              <h2 className="font-bold text-xl text-[#2C1A0E] mb-5">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {post.faq.map((item, i) => (
                  <div key={i}>
                    <p className="font-semibold text-sm text-[#2C1A0E] mb-1">{item.q}</p>
                    <p className="text-sm text-[#2C1A0E]/60 font-sans leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-12 p-7 bg-[#2C1A0E] rounded-sm text-center">
            <h3 className="font-bold text-xl text-white mb-2">Order from Hamro Bakery</h3>
            <p className="text-white/45 text-sm font-sans mb-5">4 branches in Narayangarh, Bharatpur. Delivery in Bharatpur & Gaidakot.</p>
            <a href="https://wa.me/9779855070143" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors">WhatsApp: 9855070143</a>
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
