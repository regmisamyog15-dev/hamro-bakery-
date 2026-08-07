import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BranchSelector } from "@/components/BranchSelector";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";

const posts = [
  {
    id: 1,
    slug: "best-birthday-cakes-chitwan",
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
  }
]