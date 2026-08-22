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
      { q: "Where can I get the best birthday cake in Chitwan?", a: "Hamro Bakery in Narayangarh is widely considered the best birthday cake shop in Chitwan. They have 4 branches and a 4.8-star Google rating. Call 9865009581 to order." },
      { q: "How much does a birthday cake cost in Chitwan?", a: "At Hamro Bakery: classic flavours start at Rs 600/lb, Red Velvet is Rs 1000/lb, Fondant design cakes are Rs 1500/lb. A 1lb cake serves 8–10 people." },
      { q: "How do I order a custom birthday cake in Chitwan?", a: "WhatsApp Hamro Bakery at 9865009581 with your occasion, flavour, size and design idea. Order at least 2 days in advance for custom cakes." }
    ],
    content: `
      <p>If you're searching for the <strong>best birthday cake in Chitwan</strong>, you've found it. Hamro Bakery has been Narayangarh's most loved bakery since 2013, crafting hundreds of birthday cakes every month for families across Chitwan, Bharatpur and Narayangarh.</p>

      <h2>Why Hamro Bakery Makes the Best Birthday Cakes in Narayangarh</h2>
      <p>Our bakers have over a decade of experience. Every cake is baked fresh from scratch on the day of your order — we never use frozen ingredients or pre-made bases. When you order a birthday cake from Hamro Bakery, you're getting a cake made specifically for your occasion.</p>

      <h2>Birthday Cake Flavours Available</h2>
      <p>We offer a wide range of flavours to suit every taste:</p>
      <ul>
        <li><strong>Blackforest</strong> — Rs 600/lb — rich chocolate with cherries</li>
        <li><strong>Butterscotch</strong> — Rs 600/lb — creamy caramel classic</li>
        <li><strong>Vanilla</strong> — Rs 600/lb — timeless favourite</li>
        <li><strong>Strawberry</strong> — Rs 600/lb — fruity and fresh</li>
        <li><strong>Chocolate</strong> — Rs 700/lb — deep, rich chocolate</li>
        <li><strong>Red Velvet</strong> — Rs 1,000/lb — premium and stunning</li>
        <li><strong>Fondant Design Cakes</strong> — Rs 1,500/lb — fully custom</li>
      </ul>

      <h2>What Size Cake Do I Need?</h2>
      <p>Choosing the right size is important. Here's our guide for birthday cakes in Chitwan:</p>
      <ul>
        <li><strong>0.5 lb</strong> — serves 4–5 people (small family celebration)</li>
        <li><strong>1 lb</strong> — serves 8–10 people (small birthday party)</li>
        <li><strong>1.5 lb</strong> — serves 12–15 people (medium group)</li>
        <li><strong>2 lb</strong> — serves 15–20 people (larger birthday)</li>
        <li><strong>3 lb+</strong> — serves 25+ people (big celebration)</li>
      </ul>

      <h2>Custom Birthday Cake Designs in Narayangarh</h2>
      <p>Want something truly special? Our bakers can create theme cakes based on your ideas — cartoon characters, sports themes, floral designs, photo cakes, number cakes, and more. Share a reference photo on WhatsApp and we'll bring your vision to life.</p>
      <p>Eggless birthday cakes are also available — just mention it when you order.</p>

      <h2>How to Order a Birthday Cake in Chitwan</h2>
      <p>Ordering is simple. WhatsApp us at <strong>9865009581</strong> with your occasion, cake size, flavour and preferred design. We recommend ordering <strong>2–3 days in advance</strong> for custom designs and at least 1 day for standard cakes.</p>
      <p>You can also walk into any of our 4 branches in Narayangarh — Hakim Chowk, Bishal Chowk, Sangam Road, or Synergy Road. All branches open at 8 AM daily.</p>
    `
  },
  {
    id: 2,
    slug: "custom-cakes-narayangarh",
    title: "How to Order Custom Cakes in Narayangarh — Step by Step Guide",
    date: "July 22, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Want a custom cake in Narayangarh? Here's exactly how to order from Hamro Bakery — step by step.",
    faq: [
      { q: "How do I order a custom cake in Narayangarh?", a: "WhatsApp Hamro Bakery at 9865009581 with your occasion, size, flavour and design idea. For custom fondant cakes, order 2–3 days in advance. For wedding cakes, 5–7 days." },
      { q: "Can I get an eggless custom cake in Narayangarh?", a: "Yes. All custom cake flavours at Hamro Bakery are available eggless. Just mention it when you place your order on WhatsApp." },
      { q: "What is the price of a custom cake in Narayangarh?", a: "Custom cakes at Hamro Bakery Narayangarh start at Rs 600/lb for standard flavours. Fondant design cakes start at Rs 1500/lb. Payment via cash, eSewa, Khalti or QR." }
    ],
    content: `
      <p>Ordering a <strong>custom cake in Narayangarh</strong> is easy with Hamro Bakery. We've been creating personalized cakes for every occasion since 2013 — from simple birthday designs to elaborate wedding masterpieces.</p>

      <h2>Step 1: Decide Your Occasion and Design</h2>
      <p>Before ordering, think about what you need. Is it a birthday cake, wedding cake, anniversary cake, or baby shower cake? Do you have a theme in mind — flowers, cartoon characters, a sports team, a favourite colour? The more details you share, the better we can deliver.</p>
      <p>Tip: Save reference photos on your phone and share them on WhatsApp. Our bakers can recreate almost any design.</p>

      <h2>Step 2: Choose Your Flavour</h2>
      <p>Popular custom cake flavours at Hamro Bakery Narayangarh:</p>
      <ul>
        <li>Blackforest (Rs 600/lb) — most popular</li>
        <li>Butterscotch (Rs 600/lb)</li>
        <li>Red Velvet (Rs 1,000/lb) — premium</li>
        <li>Chocolate Truffle (Rs 700/lb)</li>
        <li>Fondant Design (Rs 1,500/lb) — any design possible</li>
      </ul>
      <p>Eggless options are available for all flavours — just request it.</p>

      <h2>Step 3: Choose the Right Size</h2>
      <p>For a party of 20 people, order 2 pounds. For 10 people, 1 pound is enough. Not sure? WhatsApp us and we'll help you decide based on your guest count and budget.</p>

      <h2>Step 4: Place Your Order</h2>
      <p>WhatsApp <strong>9865009581</strong> with: your name, occasion, cake size, flavour, design idea, and the date/time you need it. We'll confirm within a few hours.</p>
      <p>For standard cakes: order at least 1 day ahead. For custom fondant designs: order 2–3 days ahead. For large wedding cakes: 5–7 days ahead.</p>

      <h2>Step 5: Advance Payment</h2>
      <p>A small advance payment is required to start your custom cake. We accept cash, eSewa, Khalti and QR payment at all branches.</p>

      <h2>Step 6: Collect or Get Delivery</h2>
      <p>Pick up your cake from any of our 4 Narayangarh branches, or arrange delivery via WhatsApp. We deliver across Narayangarh and Bharatpur.</p>

      <h2>Hamro Bakery Branch Locations in Narayangarh</h2>
      <ul>
        <li>Hakim Chowk — 9865009581</li>
        <li>Bishal Chowk — 9702663750</li>
        <li>Sangam Road — 9855070143</li>
        <li>Synergy Road — 9821207163</li>
      </ul>
    `
  },
  {
    id: 3,
    slug: "hamro-bakery-chitwan-since-2013",
    title: "Hamro Bakery — 10+ Years of Baking Happiness in Chitwan",
    date: "May 20, 2026",
    image: "/images/img23.jpeg",
    faq: [
      { q: "When did Hamro Bakery open?", a: "Hamro Bakery opened its first branch at Hakim Chowk, Narayangarh in 2013. It now has 4 branches across Narayangarh, Chitwan." },
      { q: "How many branches does Hamro Bakery have?", a: "Hamro Bakery has 4 branches in Narayangarh, Chitwan: Hakim Chowk, Bishal Chowk, Sangam Road, and Synergy Road." },
      { q: "What is Hamro Bakery's Google rating?", a: "Hamro Bakery has a 4.8-star Google rating across 92+ reviews, making it the highest-rated bakery in Narayangarh and Chitwan." }
    ],
    content: `
      <p><strong>Hamro Bakery</strong> is Chitwan's most trusted bakery — and the story behind it is one of hard work, community, and a genuine love for baking. Since 2013, we have served thousands of families in Narayangarh, Bharatpur and across Chitwan.</p>

      <h2>How It Started</h2>
      <p>Hamro Bakery opened its first branch at Hakim Chowk, Narayangarh in 2013. From day one, the mission was simple: bake everything fresh every morning, never compromise on quality, and make every customer feel like family. That mission hasn't changed.</p>

      <h2>Growing to 4 Branches</h2>
      <p>The trust of Chitwan's community helped Hamro Bakery grow. Today we operate four branches across Narayangarh:</p>
      <ul>
        <li><strong>Hakim Chowk</strong> — our original branch since 2013</li>
        <li><strong>Bishal Chowk</strong> — serving central Narayangarh</li>
        <li><strong>Sangam Road</strong> — our busiest branch</li>
        <li><strong>Synergy Road</strong> — our newest location</li>
      </ul>

      <h2>What Makes Us Different</h2>
      <p>Many bakeries in Nepal use frozen or pre-made bases. At Hamro Bakery, every item is made from scratch every single morning. Our 17 local bakers report to work at 7 AM so that fresh cakes, pastries and baked goods are ready when the doors open at 8 AM.</p>
      <p>We also employ locally. Every person at Hamro Bakery is from Chitwan. The money stays in the community.</p>

      <h2>Our Ratings and Reviews</h2>
      <p>With a 4.8-star Google rating across 92+ reviews, Hamro Bakery is consistently rated as the best bakery in Chitwan and Narayangarh. Customers highlight our fresh ingredients, beautiful custom cake designs, and friendly service.</p>

      <h2>Visit Us</h2>
      <p>All branches open daily at 8 AM. No reservation needed for standard items. For custom cakes, WhatsApp 9865009581 at least 2 days in advance. We'd love to bake your next celebration.</p>
    `
  },
  {
    id: 4,
    slug: "best-bakery-bharatpur-nepal",
    title: "Best Bakery in Bharatpur Nepal — Hamro Bakery Review",
    date: "May 15, 2026",
    image: "/images/img38.png",
    faq: [
      { q: "What is the best bakery in Bharatpur Nepal?", a: "Hamro Bakery in Narayangarh is the top-rated bakery serving Bharatpur and all of Chitwan. 4.8-star Google rating, 92+ reviews. They deliver to Bharatpur via WhatsApp at 9865009581." },
      { q: "Does Hamro Bakery deliver to Bharatpur?", a: "Yes. Hamro Bakery delivers custom cakes and bakery items to Bharatpur via Foodmandu, Mero Kinamel, or direct WhatsApp order at 9865009581." },
      { q: "Is Hamro Bakery close to Bharatpur?", a: "Yes. Hamro Bakery's Sangam Road and Hakim Chowk branches are just minutes from Bharatpur city centre. Many Bharatpur residents visit daily." }
    ],
    content: `
      <p>If you're looking for the <strong>best bakery in Bharatpur Nepal</strong>, Hamro Bakery in Narayangarh is your answer. Just minutes from Bharatpur city, we deliver fresh cakes, custom birthday cakes and pastries across the entire Chitwan district.</p>

      <h2>Why People from Bharatpur Choose Hamro Bakery</h2>
      <p>Bharatpur is the capital of Chitwan Province and home to hundreds of thousands of people. Many of them cross into Narayangarh specifically to visit Hamro Bakery — or order delivery directly to Bharatpur.</p>
      <p>The reason is simple: we are the best-rated bakery in the region, with a 4.8-star Google rating and over 92 reviews from real customers.</p>

      <h2>Cake Delivery to Bharatpur</h2>
      <p>Can't make it to Narayangarh? No problem. Hamro Bakery delivers across Bharatpur and Chitwan via:</p>
      <ul>
        <li><strong>Foodmandu</strong> — order via app for delivery</li>
        <li><strong>Mero Kinamel</strong> — local delivery partner</li>
        <li><strong>Direct WhatsApp order</strong> — call 9865009581 and arrange delivery</li>
      </ul>

      <h2>What We Bake for Bharatpur Customers</h2>
      <p>Every item at Hamro Bakery is available for delivery to Bharatpur:</p>
      <ul>
        <li>Custom birthday cakes (from Rs 600/lb)</li>
        <li>Wedding cakes and anniversary cakes</li>
        <li>Fondant design cakes (from Rs 1,500/lb)</li>
        <li>Fresh pastries, cookies, breads and dry items</li>
        <li>Eggless options for all products</li>
      </ul>

      <h2>Best Bakery Near Bharatpur — Hamro Bakery Narayangarh</h2>
      <p>Narayangarh and Bharatpur are neighbouring cities separated by just a few kilometres. Our Sangam Road and Hakim Chowk branches are the closest to Bharatpur. Many Bharatpur residents visit us daily for fresh pastries and place weekly cake orders for their families.</p>
      <p>To order: WhatsApp <strong>9865009581</strong> or visit any branch from 8 AM daily. We're proud to be Chitwan's favourite bakery — and that includes Bharatpur.</p>
    `
  },
  {
    id: 5,
    slug: "wedding-cake-chitwan-nepal",
    title: "Wedding Cakes in Chitwan Nepal — Hamro Bakery Narayangarh",
    date: "July 27, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Planning a wedding in Chitwan? Hamro Bakery creates stunning multi-tier wedding cakes with fresh flowers and custom designs.",
    faq: [
      { q: "Where can I order a wedding cake in Chitwan Nepal?", a: "Hamro Bakery in Narayangarh, Chitwan is one of Nepal's most trusted wedding cake bakeries. Multi-tier fondant wedding cakes from Rs 1500/lb. Order 7 days ahead at 9865009581." },
      { q: "How much does a wedding cake cost in Chitwan?", a: "Wedding cakes at Hamro Bakery Chitwan start from Rs 1500/lb for fondant designs. A 3lb wedding cake for 50 guests costs around Rs 4500+. Contact 9865009581 for a custom quote." },
      { q: "How early should I order a wedding cake in Nepal?", a: "For wedding cakes in Nepal, Hamro Bakery recommends ordering at least 7 days in advance. For large multi-tier designs, 10–14 days is ideal." }
    ],
    content: `
      <p>Your wedding day deserves the most beautiful cake. Hamro Bakery has been creating <strong>wedding cakes in Chitwan Nepal</strong> since 2013 — each one crafted to match your vision, your colours and your style.</p>

      <h2>Wedding Cakes We Create in Chitwan</h2>
      <p>Our bakers specialise in a wide range of wedding cake styles:</p>
      <ul>
        <li><strong>Multi-tier fondant wedding cakes</strong> — elegant, classic, stunning</li>
        <li><strong>Fresh flower cakes</strong> — real roses, baby's breath, and seasonal flowers</li>
        <li><strong>Ombre and gradient cakes</strong> — soft colour transitions</li>
        <li><strong>Naked cakes</strong> — rustic, semi-frosted style</li>
        <li><strong>Custom monogram and initial cakes</strong></li>
        <li><strong>Gold and silver leaf decoration</strong></li>
      </ul>

      <h2>Wedding Cake Pricing in Narayangarh</h2>
      <p>Wedding cake prices at Hamro Bakery start from <strong>Rs 1,500 per pound</strong> for fondant designs. Most wedding cakes are 3–6 pounds depending on guest count. We recommend:</p>
      <ul>
        <li>Up to 50 guests — 3 lb cake</li>
        <li>50–100 guests — 4–5 lb cake</li>
        <li>100+ guests — 6 lb or multi-tier setup</li>
      </ul>
      <p>We'll help you choose the right size and design during your consultation.</p>

      <h2>How to Order a Wedding Cake in Chitwan</h2>
      <p>For wedding cakes, we recommend ordering at least <strong>7 days in advance</strong>. Larger or more complex designs may require 10–14 days. Here's how to order:</p>
      <ul>
        <li>WhatsApp us at 9865009581 with your wedding date and guest count</li>
        <li>Share reference photos of designs you love</li>
        <li>We'll discuss flavour, size, design and pricing</li>
        <li>Confirm with a small advance payment</li>
        <li>Collect from your nearest branch or arrange delivery</li>
      </ul>

      <h2>Available Flavours for Wedding Cakes</h2>
      <p>All our wedding cakes can be made in any flavour — Blackforest, Butterscotch, Vanilla, Strawberry, Chocolate Truffle, or Red Velvet. Eggless options are available on request.</p>

      <h2>Best Wedding Cake Bakery in Chitwan Nepal</h2>
      <p>With a 4.8-star Google rating and over 92 reviews, Hamro Bakery is trusted by families across Narayangarh, Bharatpur and all of Chitwan for their most important occasions. Let us be part of your special day.</p>
      <p>Contact us: <strong>9865009581</strong> | bakeryhamro1@gmail.com | hamrobakery1.com</p>
    `
  },
  {
    id: 6,
    slug: "fresh-pastries-narayangarh",
    title: "Fresh Pastries in Narayangarh — Baked Every Morning at Hamro Bakery",
    date: "July 28, 2026",
    image: "/images/img18.jpeg",
    excerpt: "The best fresh pastries in Narayangarh Chitwan — baked from scratch every morning at Hamro Bakery. Croissants, puffs, cookies and more from Rs 70.",
    faq: [
      { q: "Where can I get fresh pastries in Narayangarh?", a: "Hamro Bakery in Narayangarh bakes fresh pastries every morning from 7 AM. By 8 AM when doors open, everything is fresh. 4 branches at Hakim Chowk, Bishal Chowk, Sangam Road and Synergy Road." },
      { q: "What pastries does Hamro Bakery sell?", a: "Hamro Bakery sells veg puff (Rs 70), chicken puff (Rs 90), egg puff (Rs 80), croissants (Rs 120), cheese croissants (Rs 150), danish pastries (Rs 140), muffins (Rs 120), donuts (Rs 90) and cookies (Rs 125-200)." },
      { q: "What time does Hamro Bakery open in Narayangarh?", a: "All Hamro Bakery branches in Narayangarh open at 8 AM daily, 7 days a week including public holidays. Best time to visit for fresh pastries is 8–11 AM." }
    ],
    content: `
      <p>Every morning at 7 AM, our bakers begin preparing fresh pastries at all four Hamro Bakery branches in Narayangarh. By 8 AM when the doors open, everything is fresh out of the oven. That's our promise — and it's been our standard since 2013.</p>

      <h2>Fresh Pastries Available at Hamro Bakery Narayangarh</h2>
      <p>Our daily baked pastry selection includes:</p>
      <ul>
        <li><strong>Veg Puff</strong> — flaky pastry with spiced vegetable filling — Rs 70</li>
        <li><strong>Chicken Puff</strong> — pastry with seasoned chicken — Rs 90</li>
        <li><strong>Egg Puff</strong> — classic egg pastry — Rs 80</li>
        <li><strong>Croissant</strong> — buttery, flaky layers — Rs 120</li>
        <li><strong>Cheese Croissant</strong> — Rs 150</li>
        <li><strong>Danish Pastry</strong> — fruit and cream filled — Rs 140</li>
        <li><strong>Muffins</strong> — chocolate, blueberry, vanilla — Rs 120</li>
        <li><strong>Donuts</strong> — glazed, chocolate, sprinkles — Rs 90</li>
        <li><strong>Cookies</strong> — chocolate chip, butter, oat — Rs 125–200</li>
      </ul>

      <h2>Why Hamro Bakery Pastries Are the Best in Chitwan</h2>
      <p>We never sell yesterday's pastries. Every item in our display case was baked that morning. We use no artificial preservatives — just real butter, fresh flour, and quality ingredients. This is what makes the difference between our pastries and mass-produced alternatives.</p>

      <h2>Best Time to Visit for Fresh Pastries</h2>
      <p>For the freshest selection, visit any Hamro Bakery branch between <strong>8 AM and 11 AM</strong>. Popular items like Veg Puff and Chicken Puff often sell out by noon. You can also call ahead to reserve specific items.</p>

      <h2>Visit Our Pastry Shops in Narayangarh</h2>
      <ul>
        <li>Hakim Chowk — 9865009581 — opens 8 AM</li>
        <li>Bishal Chowk — 9702663750 — opens 8 AM</li>
        <li>Sangam Road — 9855070143 — opens 8 AM</li>
        <li>Synergy Road — 9821207163 — opens 8 AM</li>
      </ul>
      <p>All branches open 7 days a week including public holidays. Fresh pastries daily — no exceptions.</p>
    `
  },
  {
    id: 7,
    slug: "bakery-narainghat-chitwan",
    title: "Best Bakery in Narainghat — Hamro Bakery Narayangarh Chitwan",
    date: "August 19, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Narainghat's best bakery is Hamro Bakery — 4 branches, fresh cakes and pastries daily, 4.8-star rating. Order custom cakes, pastries and more.",
    faq: [
      { q: "Which is the best bakery in Narainghat?", a: "Hamro Bakery is the best bakery in Narainghat (Narayangarh), Chitwan. Established in 2013, they have a 4.8-star Google rating and 4 branches across Narainghat. Call 9865009581." },
      { q: "Is Narainghat and Narayangarh the same place?", a: "Yes. Narainghat and Narayangarh refer to the same city in Chitwan, Nepal. Hamro Bakery operates 4 branches throughout Narainghat/Narayangarh." },
      { q: "Where is Hamro Bakery in Narainghat?", a: "Hamro Bakery has 4 locations in Narainghat: Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), and Synergy Road (9821207163). All open 8 AM daily." }
    ],
    content: `
      <p>Searching for the <strong>best bakery in Narainghat</strong>? You've found it. Hamro Bakery has been Narainghat's most trusted bakery since 2013 — known for fresh cakes, custom birthday cakes, pastries, and friendly service across all four of our branches.</p>

      <h2>Is Narainghat the Same as Narayangarh?</h2>
      <p>Yes — Narainghat and Narayangarh are two common names for the same city in Chitwan, Nepal. Whether you search for "bakery in Narainghat" or "bakery in Narayangarh", Hamro Bakery is your answer. We serve the entire city and the wider Chitwan district including Bharatpur.</p>

      <h2>Hamro Bakery Locations in Narainghat</h2>
      <p>We have 4 branches spread across Narainghat so there's always one nearby:</p>
      <ul>
        <li><strong>Hakim Chowk</strong> — 9865009581 — our original 2013 branch</li>
        <li><strong>Bishal Chowk</strong> — 9702663750</li>
        <li><strong>Sangam Road</strong> — 9855070143 — our busiest branch</li>
        <li><strong>Synergy Road</strong> — 9821207163</li>
      </ul>
      <p>All branches open daily at 8 AM, 7 days a week including public holidays.</p>

      <h2>What You Can Order at Our Narainghat Bakery</h2>
      <p>Hamro Bakery offers the widest range of baked goods in Narainghat:</p>
      <ul>
        <li><strong>Custom birthday cakes</strong> — from Rs 600/lb — any design, any flavour</li>
        <li><strong>Wedding cakes</strong> — multi-tier fondant designs from Rs 1500/lb</li>
        <li><strong>Anniversary and occasion cakes</strong></li>
        <li><strong>Red Velvet cake</strong> — Rs 1000/lb — our most popular premium cake</li>
        <li><strong>Blackforest cake</strong> — Rs 600/lb — rich chocolate classic</li>
        <li><strong>Fresh pastries</strong> — croissants, puffs, muffins, donuts from Rs 70</li>
        <li><strong>Cookies and biscuits</strong> — daily baked</li>
        <li><strong>Bread and buns</strong></li>
        <li><strong>Eggless options</strong> — all products available eggless</li>
      </ul>

      <h2>Why Hamro Bakery is Narainghat's Favourite</h2>
      <p>In a city with many bakery options, Hamro Bakery stands apart for one simple reason: everything is baked fresh, every single morning. Our 17 bakers start work at 7 AM so that nothing on the shelf is from yesterday. No frozen ingredients, no pre-made bases.</p>
      <p>With a <strong>4.8-star Google rating</strong> and over 92 customer reviews, we are consistently ranked as the best bakery in Narainghat and Chitwan. Customers from as far as Bharatpur and Meghauli visit us for special occasions.</p>

      <h2>Order a Cake in Narainghat — How It Works</h2>
      <p>For custom cakes: WhatsApp <strong>9865009581</strong> with your occasion, size, flavour and design idea. We confirm within hours. Standard cakes: 1 day advance. Custom designs: 2–3 days. Wedding cakes: 5–7 days.</p>
      <p>Payment accepted: Cash, eSewa, Khalti, QR at all branches. Delivery available across Narainghat, Narayangarh and Bharatpur.</p>

      <h2>Hamro Bakery — Narainghat's Bakery Since 2013</h2>
      <p>Over a decade of baking. Four branches. 17 local bakers. Thousands of happy customers. If you're in Narainghat and you want the best cake or the freshest pastry, there's only one name: Hamro Bakery.</p>
    `
  },
  {
    id: 8,
    slug: "cake-shop-chitwan-comparison",
    title: "Best Cake Shops in Chitwan Nepal — Complete Guide 2026",
    date: "August 19, 2026",
    image: "/images/img38.png",
    excerpt: "Looking for the best cake shop in Chitwan? Here's a complete guide to bakeries and cake shops in Narayangarh, Bharatpur and Narainghat — with honest comparison.",
    faq: [
      { q: "Which is the best cake shop in Chitwan Nepal?", a: "Hamro Bakery is widely considered the best cake shop in Chitwan Nepal, with a 4.8-star Google rating, 4 branches in Narayangarh, and over 10 years of experience baking custom cakes, birthday cakes and pastries." },
      { q: "How do I find a good bakery in Chitwan?", a: "Look for bakeries with Google reviews above 4.5 stars and that bake fresh daily. Hamro Bakery in Narayangarh has 92+ reviews at 4.8 stars and is the most recommended bakery in Chitwan." },
      { q: "Can I order a cake online in Chitwan Nepal?", a: "Yes. Hamro Bakery accepts cake orders via WhatsApp at 9865009581. Order custom birthday cakes, wedding cakes and pastries for delivery across Chitwan, Narayangarh and Bharatpur." }
    ],
    content: `
      <p>If you're searching for the <strong>best cake shop in Chitwan Nepal</strong>, this guide will help you decide. Chitwan has grown significantly as a city, and with that growth has come more bakery options across Narayangarh, Bharatpur and Narainghat. Here's what you need to know.</p>

      <h2>What Makes a Great Cake Shop in Chitwan?</h2>
      <p>Before listing options, it's worth defining what separates a great bakery from an average one in Nepal:</p>
      <ul>
        <li><strong>Fresh daily baking</strong> — not reheated or frozen products</li>
        <li><strong>Custom design capability</strong> — ability to make unique cakes per order</li>
        <li><strong>Consistent quality</strong> — not just good once, but reliably good</li>
        <li><strong>Transparent pricing</strong> — clear price per pound with no hidden costs</li>
        <li><strong>Fast response time</strong> — for WhatsApp orders, confirmation within hours</li>
        <li><strong>Customer reviews</strong> — Google ratings above 4.5 from real customers</li>
      </ul>

      <h2>Hamro Bakery — The Best Cake Shop in Chitwan</h2>
      <p>Hamro Bakery in Narayangarh is the highest-rated cake shop in Chitwan by a significant margin. Here's what sets them apart:</p>
      <ul>
        <li><strong>4.8-star Google rating</strong> — 92+ verified reviews</li>
        <li><strong>Established 2013</strong> — over 10 years of baking experience</li>
        <li><strong>4 branches</strong> — Hakim Chowk, Bishal Chowk, Sangam Road, Synergy Road</li>
        <li><strong>17 dedicated bakers</strong> — all from Chitwan</li>
        <li><strong>100% fresh daily</strong> — baking starts at 7 AM every morning</li>
        <li><strong>Full custom cake capability</strong> — any design, fondant, floral, photo cakes</li>
        <li><strong>Eggless options</strong> — available for all products</li>
        <li><strong>Competitive pricing</strong> — Rs 600/lb standard, Rs 1500/lb fondant</li>
      </ul>

      <h2>Cake Prices in Chitwan — What to Expect</h2>
      <p>Understanding cake pricing in Chitwan helps you compare options fairly:</p>
      <ul>
        <li>Standard flavours (Blackforest, Vanilla, Butterscotch): Rs 600–700/lb</li>
        <li>Premium flavours (Red Velvet, Chocolate Truffle): Rs 800–1000/lb</li>
        <li>Fondant design cakes: Rs 1200–1500/lb</li>
        <li>Multi-tier wedding cakes: Custom quote based on design</li>
      </ul>
      <p>Hamro Bakery's pricing sits at the fair middle — not the cheapest, but significantly better quality than cheaper options, and more affordable than Kathmandu-level premium bakeries.</p>

      <h2>How to Order the Best Cake in Chitwan</h2>
      <p>For the best cake in Chitwan, order from Hamro Bakery:</p>
      <ul>
        <li>WhatsApp: <strong>9865009581</strong></li>
        <li>Website: hamrobakery1.com</li>
        <li>Email: bakeryhamro1@gmail.com</li>
        <li>Walk in: any of 4 Narayangarh branches, open 8 AM daily</li>
      </ul>
      <p>Standard cakes: 1 day advance. Custom designs: 2–3 days. Wedding cakes: 5–7 days. Payment: Cash, eSewa, Khalti, QR.</p>

      <h2>Verdict — Best Cake Shop in Chitwan Nepal 2026</h2>
      <p>Based on Google ratings, years of experience, product range, and customer reviews: <strong>Hamro Bakery</strong> is the best cake shop in Chitwan Nepal in 2026. They're the obvious choice for birthday cakes, wedding cakes, custom fondant designs, and fresh daily pastries across Narayangarh, Bharatpur, and Narainghat.</p>
    `
  }
]
    title: "Best Birthday Cakes in Chitwan — Hamro Bakery Narayangarh",
    date: "July 20, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Looking for the best birthday cake in Chitwan or Narayangarh? Hamro Bakery has been making people smile since 2013.",
    content: `
      <p>If you're searching for the <strong>best birthday cake in Chitwan</strong>, you've found it. Hamro Bakery has been Narayangarh's most loved bakery since 2013, crafting hundreds of birthday cakes every month for families across Chitwan, Bharatpur and Narayangarh.</p>

      <h2>Why Hamro Bakery Makes the Best Birthday Cakes in Narayangarh</h2>
      <p>Our bakers have over a decade of experience. Every cake is baked fresh from scratch on the day of your order — we never use frozen ingredients or pre-made bases. When you order a birthday cake from Hamro Bakery, you're getting a cake made specifically for your occasion.</p>

      <h2>Birthday Cake Flavours Available</h2>
      <p>We offer a wide range of flavours to suit every taste:</p>
      <ul>
        <li><strong>Blackforest</strong> — Rs 600/lb — rich chocolate with cherries</li>
        <li><strong>Butterscotch</strong> — Rs 600/lb — creamy caramel classic</li>
        <li><strong>Vanilla</strong> — Rs 600/lb — timeless favourite</li>
        <li><strong>Strawberry</strong> — Rs 600/lb — fruity and fresh</li>
        <li><strong>Chocolate</strong> — Rs 700/lb — deep, rich chocolate</li>
        <li><strong>Red Velvet</strong> — Rs 1,000/lb — premium and stunning</li>
        <li><strong>Fondant Design Cakes</strong> — Rs 1,500/lb — fully custom</li>
      </ul>

      <h2>What Size Cake Do I Need?</h2>
      <p>Choosing the right size is important. Here's our guide for birthday cakes in Chitwan:</p>
      <ul>
        <li><strong>0.5 lb</strong> — serves 4–5 people (small family celebration)</li>
        <li><strong>1 lb</strong> — serves 8–10 people (small birthday party)</li>
        <li><strong>1.5 lb</strong> — serves 12–15 people (medium group)</li>
        <li><strong>2 lb</strong> — serves 15–20 people (larger birthday)</li>
        <li><strong>3 lb+</strong> — serves 25+ people (big celebration)</li>
      </ul>

      <h2>Custom Birthday Cake Designs in Narayangarh</h2>
      <p>Want something truly special? Our bakers can create theme cakes based on your ideas — cartoon characters, sports themes, floral designs, photo cakes, number cakes, and more. Share a reference photo on WhatsApp and we'll bring your vision to life.</p>
      <p>Eggless birthday cakes are also available — just mention it when you order.</p>

      <h2>How to Order a Birthday Cake in Chitwan</h2>
      <p>Ordering is simple. WhatsApp us at <strong>9865009581</strong> with your occasion, cake size, flavour and preferred design. We recommend ordering <strong>2–3 days in advance</strong> for custom designs and at least 1 day for standard cakes.</p>
      <p>You can also walk into any of our 4 branches in Narayangarh — Hakim Chowk, Bishal Chowk, Sangam Road, or Synergy Road. All branches open at 8 AM daily.</p>
    `
  },
  {
    id: 2,
    slug: "custom-cakes-narayangarh",
    title: "How to Order Custom Cakes in Narayangarh — Step by Step Guide",
    date: "July 22, 2026",
    image: "/images/img13.jpeg",
    excerpt: "Want a custom cake in Narayangarh? Here's exactly how to order from Hamro Bakery — step by step.",
    content: `
      <p>Ordering a <strong>custom cake in Narayangarh</strong> is easy with Hamro Bakery. We've been creating personalized cakes for every occasion since 2013 — from simple birthday designs to elaborate wedding masterpieces.</p>

      <h2>Step 1: Decide Your Occasion and Design</h2>
      <p>Before ordering, think about what you need. Is it a birthday cake, wedding cake, anniversary cake, or baby shower cake? Do you have a theme in mind — flowers, cartoon characters, a sports team, a favourite colour? The more details you share, the better we can deliver.</p>
      <p>Tip: Save reference photos on your phone and share them on WhatsApp. Our bakers can recreate almost any design.</p>

      <h2>Step 2: Choose Your Flavour</h2>
      <p>Popular custom cake flavours at Hamro Bakery Narayangarh:</p>
      <ul>
        <li>Blackforest (Rs 600/lb) — most popular</li>
        <li>Butterscotch (Rs 600/lb)</li>
        <li>Red Velvet (Rs 1,000/lb) — premium</li>
        <li>Chocolate Truffle (Rs 700/lb)</li>
        <li>Fondant Design (Rs 1,500/lb) — any design possible</li>
      </ul>
      <p>Eggless options are available for all flavours — just request it.</p>

      <h2>Step 3: Choose the Right Size</h2>
      <p>For a party of 20 people, order 2 pounds. For 10 people, 1 pound is enough. Not sure? WhatsApp us and we'll help you decide based on your guest count and budget.</p>

      <h2>Step 4: Place Your Order</h2>
      <p>WhatsApp <strong>9865009581</strong> with: your name, occasion, cake size, flavour, design idea, and the date/time you need it. We'll confirm within a few hours.</p>
      <p>For standard cakes: order at least 1 day ahead. For custom fondant designs: order 2–3 days ahead. For large wedding cakes: 5–7 days ahead.</p>

      <h2>Step 5: Advance Payment</h2>
      <p>A small advance payment is required to start your custom cake. We accept cash, eSewa, Khalti and QR payment at all branches.</p>

      <h2>Step 6: Collect or Get Delivery</h2>
      <p>Pick up your cake from any of our 4 Narayangarh branches, or arrange delivery via WhatsApp. We deliver across Narayangarh and Bharatpur.</p>

      <h2>Hamro Bakery Branch Locations in Narayangarh</h2>
      <ul>
        <li>Hakim Chowk — 9865009581</li>
        <li>Bishal Chowk — 9702663750</li>
        <li>Sangam Road — 9855070143</li>
        <li>Synergy Road — 9821207163</li>
      </ul>
    `
  },  {
    id: 3,
    slug: "hamro-bakery-chitwan-since-2013",
    title: "Hamro Bakery — 10+ Years of Baking Happiness in Chitwan",
    date: "May 20, 2026",
    image: "/images/img23.jpeg",
    content: `
      <p><strong>Hamro Bakery</strong> is Chitwan's most trusted bakery — and the story behind it is one of hard work, community, and a genuine love for baking. Since 2013, we have served thousands of families in Narayangarh, Bharatpur and across Chitwan.</p>

      <h2>How It Started</h2>
      <p>Hamro Bakery opened its first branch at Hakim Chowk, Narayangarh in 2013. From day one, the mission was simple: bake everything fresh every morning, never compromise on quality, and make every customer feel like family. That mission hasn't changed.</p>

      <h2>Growing to 4 Branches</h2>
      <p>The trust of Chitwan's community helped Hamro Bakery grow. Today we operate four branches across Narayangarh:</p>
      <ul>
        <li><strong>Hakim Chowk</strong> — our original branch since 2013</li>
        <li><strong>Bishal Chowk</strong> — serving central Narayangarh</li>
        <li><strong>Sangam Road</strong> — our busiest branch</li>
        <li><strong>Synergy Road</strong> — our newest location</li>
      </ul>

      <h2>What Makes Us Different</h2>
      <p>Many bakeries in Nepal use frozen or pre-made bases. At Hamro Bakery, every item is made from scratch every single morning. Our 17 local bakers report to work at 7 AM so that fresh cakes, pastries and baked goods are ready when the doors open at 8 AM.</p>
      <p>We also employ locally. Every person at Hamro Bakery is from Chitwan. The money stays in the community.</p>

      <h2>Our Ratings and Reviews</h2>
      <p>With a 4.8-star Google rating across 92+ reviews, Hamro Bakery is consistently rated as the best bakery in Chitwan and Narayangarh. Customers highlight our fresh ingredients, beautiful custom cake designs, and friendly service.</p>

      <h2>Visit Us</h2>
      <p>All branches open daily at 8 AM. No reservation needed for standard items. For custom cakes, WhatsApp 9865009581 at least 2 days in advance. We'd love to bake your next celebration.</p>
    `
  },  {
    id: 4,
    slug: "best-bakery-bharatpur-nepal",
    title: "Best Bakery in Bharatpur Nepal — Hamro Bakery Review",
    date: "May 15, 2026",
    image: "/images/img38.png",
    content: `
      <p>If you're looking for the <strong>best bakery in Bharatpur Nepal</strong>, Hamro Bakery in Narayangarh is your answer. Just minutes from Bharatpur city, we deliver fresh cakes, custom birthday cakes and pastries across the entire Chitwan district.</p>

      <h2>Why People from Bharatpur Choose Hamro Bakery</h2>
      <p>Bharatpur is the capital of Chitwan Province and home to hundreds of thousands of people. Many of them cross into Narayangarh specifically to visit Hamro Bakery — or order delivery directly to Bharatpur.</p>
      <p>The reason is simple: we are the best-rated bakery in the region, with a 4.8-star Google rating and over 92 reviews from real customers.</p>

      <h2>Cake Delivery to Bharatpur</h2>
      <p>Can't make it to Narayangarh? No problem. Hamro Bakery delivers across Bharatpur and Chitwan via:</p>
      <ul>
        <li><strong>Foodmandu</strong> — order via app for delivery</li>
        <li><strong>Mero Kinamel</strong> — local delivery partner</li>
        <li><strong>Direct WhatsApp order</strong> — call 9865009581 and arrange delivery</li>
      </ul>

      <h2>What We Bake for Bharatpur Customers</h2>
      <p>Every item at Hamro Bakery is available for delivery to Bharatpur:</p>
      <ul>
        <li>Custom birthday cakes (from Rs 600/lb)</li>
        <li>Wedding cakes and anniversary cakes</li>
        <li>Fondant design cakes (from Rs 1,500/lb)</li>
        <li>Fresh pastries, cookies, breads and dry items</li>
        <li>Eggless options for all products</li>
      </ul>

      <h2>Best Bakery Near Bharatpur — Hamro Bakery Narayangarh</h2>
      <p>Narayangarh and Bharatpur are neighbouring cities separated by just a few kilometres. Our Sangam Road and Hakim Chowk branches are the closest to Bharatpur. Many Bharatpur residents visit us daily for fresh pastries and place weekly cake orders for their families.</p>
      <p>To order: WhatsApp <strong>9865009581</strong> or visit any branch from 8 AM daily. We're proud to be Chitwan's favourite bakery — and that includes Bharatpur.</p>
    `
  },
  {
    id: 5,
    slug: "wedding-cake-chitwan-nepal",
    title: "Wedding Cakes in Chitwan Nepal — Hamro Bakery Narayangarh",
    date: "July 27, 2026",
    image: "/images/img27.jpeg",
    excerpt: "Planning a wedding in Chitwan? Hamro Bakery creates stunning multi-tier wedding cakes with fresh flowers and custom designs.",
    content: `
      <p>Your wedding day deserves the most beautiful cake. Hamro Bakery has been creating <strong>wedding cakes in Chitwan Nepal</strong> since 2013 — each one crafted to match your vision, your colours and your style.</p>

      <h2>Wedding Cakes We Create in Chitwan</h2>
      <p>Our bakers specialise in a wide range of wedding cake styles:</p>
      <ul>
        <li><strong>Multi-tier fondant wedding cakes</strong> — elegant, classic, stunning</li>
        <li><strong>Fresh flower cakes</strong> — real roses, baby's breath, and seasonal flowers</li>
        <li><strong>Ombre and gradient cakes</strong> — soft colour transitions</li>
        <li><strong>Naked cakes</strong> — rustic, semi-frosted style</li>
        <li><strong>Custom monogram and initial cakes</strong></li>
        <li><strong>Gold and silver leaf decoration</strong></li>
      </ul>

      <h2>Wedding Cake Pricing in Narayangarh</h2>
      <p>Wedding cake prices at Hamro Bakery start from <strong>Rs 1,500 per pound</strong> for fondant designs. Most wedding cakes are 3–6 pounds depending on guest count. We recommend:</p>
      <ul>
        <li>Up to 50 guests — 3 lb cake</li>
        <li>50–100 guests — 4–5 lb cake</li>
        <li>100+ guests — 6 lb or multi-tier setup</li>
      </ul>
      <p>We'll help you choose the right size and design during your consultation.</p>

      <h2>How to Order a Wedding Cake in Chitwan</h2>
      <p>For wedding cakes, we recommend ordering at least <strong>7 days in advance</strong>. Larger or more complex designs may require 10–14 days. Here's how to order:</p>
      <ul>
        <li>WhatsApp us at 9865009581 with your wedding date and guest count</li>
        <li>Share reference photos of designs you love</li>
        <li>We'll discuss flavour, size, design and pricing</li>
        <li>Confirm with a small advance payment</li>
        <li>Collect from your nearest branch or arrange delivery</li>
      </ul>

      <h2>Available Flavours for Wedding Cakes</h2>
      <p>All our wedding cakes can be made in any flavour — Blackforest, Butterscotch, Vanilla, Strawberry, Chocolate Truffle, or Red Velvet. Eggless options are available on request.</p>

      <h2>Best Wedding Cake Bakery in Chitwan Nepal</h2>
      <p>With a 4.8-star Google rating and over 92 reviews, Hamro Bakery is trusted by families across Narayangarh, Bharatpur and all of Chitwan for their most important occasions. Let us be part of your special day.</p>
      <p>Contact us: <strong>9865009581</strong> | bakeryhamro1@gmail.com | hamrobakery1.com</p>
    `
  },
  {
    id: 6,
    slug: "fresh-pastries-narayangarh",
    title: "Fresh Pastries in Narayangarh — Baked Every Morning at Hamro Bakery",
    date: "July 28, 2026",
    image: "/images/img18.jpeg",
    excerpt: "The best fresh pastries in Narayangarh Chitwan — baked from scratch every morning at Hamro Bakery. Croissants, puffs, cookies and more from Rs 70.",
    content: `
      <p>Every morning at 7 AM, our bakers begin preparing fresh pastries at all four Hamro Bakery branches in Narayangarh. By 8 AM when the doors open, everything is fresh out of the oven. That's our promise — and it's been our standard since 2013.</p>

      <h2>Fresh Pastries Available at Hamro Bakery Narayangarh</h2>
      <p>Our daily baked pastry selection includes:</p>
      <ul>
        <li><strong>Veg Puff</strong> — flaky pastry with spiced vegetable filling — Rs 70</li>
        <li><strong>Chicken Puff</strong> — pastry with seasoned chicken — Rs 90</li>
        <li><strong>Egg Puff</strong> — classic egg pastry — Rs 80</li>
        <li><strong>Croissant</strong> — buttery, flaky layers — Rs 120</li>
        <li><strong>Cheese Croissant</strong> — Rs 150</li>
        <li><strong>Danish Pastry</strong> — fruit and cream filled — Rs 140</li>
        <li><strong>Muffins</strong> — chocolate, blueberry, vanilla — Rs 120</li>
        <li><strong>Donuts</strong> — glazed, chocolate, sprinkles — Rs 90</li>
        <li><strong>Cookies</strong> — chocolate chip, butter, oat — Rs 125–200</li>
      </ul>

      <h2>Why Hamro Bakery Pastries Are the Best in Chitwan</h2>
      <p>We never sell yesterday's pastries. Every item in our display case was baked that morning. We use no artificial preservatives — just real butter, fresh flour, and quality ingredients. This is what makes the difference between our pastries and mass-produced alternatives.</p>

      <h2>Best Time to Visit for Fresh Pastries</h2>
      <p>For the freshest selection, visit any Hamro Bakery branch between <strong>8 AM and 11 AM</strong>. Popular items like Veg Puff and Chicken Puff often sell out by noon. You can also call ahead to reserve specific items.</p>

      <h2>Visit Our Pastry Shops in Narayangarh</h2>
      <ul>
        <li>Hakim Chowk — 9865009581 — opens 8 AM</li>
        <li>Bishal Chowk — 9702663750 — opens 8 AM</li>
        <li>Sangam Road — 9855070143 — opens 8 AM</li>
        <li>Synergy Road — 9821207163 — opens 8 AM</li>
      </ul>
      <p>All branches open 7 days a week including public holidays. Fresh pastries daily — no exceptions.</p>
    `
  }
]
export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = posts.find((p) => p.slug === slug);

  // Inject per-post Article schema + FAQPage for Google and AI engines
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
          "sameAs": [
            "https://www.facebook.com/hamrobakery1",
            "https://www.instagram.com/hamrobakery_official",
            "https://g.co/kgs/hamrobakery"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hamro Bakery Narayangarh",
          "logo": {"@type": "ImageObject","url": "https://hamrobakery1.com/images/logo.jpeg"},
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hakim Chowk",
            "addressLocality": "Narayangarh",
            "addressRegion": "Chitwan",
            "addressCountry": "NP"
          }
        },
        "mainEntityOfPage": {"@type": "WebPage","@id": `https://hamrobakery1.com/blog/${post.slug}`},
        "url": `https://hamrobakery1.com/blog/${post.slug}`,
        "keywords": `Hamro Bakery, ${post.title}, best bakery Chitwan, best bakery Narayangarh, best bakery Bharatpur, bakery Narainghat, cake shop Chitwan Nepal`,
        "about": {
          "@type": "Bakery",
          "@id": "https://hamrobakery1.com/#bakery",
          "name": "Hamro Bakery",
          "telephone": "+977-9865009581"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", "p:first-of-type"]
        }
      }
    ];

    // Inject FAQPage schema if post has FAQ — AI models extract these as direct answers
    if (post.faq && post.faq.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map((item: {q: string; a: string}) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      });
    }

    const script = document.createElement("script");
    script.id = "blog-post-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    document.head.appendChild(script);

    // Update page title and canonical
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
          <Link href="/blog">
            <span className="text-[#C4714A] hover:underline cursor-pointer text-sm">← Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <BranchSelector />
      <Navbar />
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto max-w-3xl px-6 py-12"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-sans text-[#2C1A0E]/40 mb-8 flex-wrap">
            <Link href="/"><span className="hover:text-[#C4714A] cursor-pointer transition-colors">Home</span></Link>
            <span>/</span>
            <Link href="/blog"><span className="hover:text-[#C4714A] cursor-pointer transition-colors">Blog</span></Link>
            <span>/</span>
            <span className="text-[#2C1A0E]/60 truncate max-w-[200px]">{post.title}</span>
          </div>

          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-64 object-cover rounded-sm mb-8"
          />

          <p className="text-[#2C1A0E]/35 text-xs font-sans mb-3">{post.date}</p>

          <h1 className="font-bold text-3xl md:text-4xl text-[#2C1A0E] mb-8 leading-tight">
            {post.title}
          </h1>

          <div
            className="prose max-w-none text-[#2C1A0E]/70 font-sans
              [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-sm
              [&>h2]:font-bold [&>h2]:text-xl [&>h2]:text-[#2C1A0E] [&>h2]:mt-8 [&>h2]:mb-3
              [&>ul]:mb-4 [&>ul]:pl-5 [&>ul>li]:mb-1.5 [&>ul>li]:text-sm [&>ul>li]:leading-relaxed
              [&>ol]:mb-4 [&>ol]:pl-5 [&>ol>li]:mb-1.5 [&>ol>li]:text-sm
              [&>strong]:text-[#2C1A0E] [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-7 bg-[#2C1A0E] rounded-sm text-center">
            <h3 className="font-bold text-xl text-white mb-2">
              Order from Hamro Bakery
            </h3>
            <p className="text-white/45 text-sm font-sans mb-5">
              WhatsApp any branch — we reply fast and confirm your order the same day.
            </p>
            <a
              href="https://wa.me/9779865009581"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors"
            >
              WhatsApp: 9865009581
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link href="/blog">
              <span className="text-[#2C1A0E]/40 hover:text-[#C4714A] text-sm font-sans cursor-pointer transition-colors">
                ← More articles
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
