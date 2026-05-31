import { motion } from "framer-motion";
import { Link } from "wouter";

const posts = [
  {
    id: 1,
    slug: "best-birthday-cakes-chitwan",
    title: "Best Birthday Cakes in Chitwan — Hamro Bakery",
    date: "May 28, 2026",
    image: "/images/img1.jpeg",
    excerpt: "Looking for the perfect birthday cake in Chitwan? Hamro Bakery has been creating stunning custom birthday cakes in Narayangarh since 2013. From simple designs to elaborate multi-tier creations, we make every birthday special.",
    content: `
      <p>When it comes to birthday cakes in Chitwan, Hamro Bakery stands out as the top choice for families, businesses and individuals across Narayangarh and Bharatpur.</p>
      <h2>Why Choose Hamro Bakery for Birthday Cakes?</h2>
      <p>With over 10 years of experience, our bakers craft each cake with love and precision. Whether you want a simple round cake or a custom designed masterpiece, we deliver excellence every time.</p>
      <h2>Our Birthday Cake Options</h2>
      <ul>
        <li>Custom photo cakes</li>
        <li>Theme cakes (cartoon, floral, sports)</li>
        <li>Multi-tier birthday cakes</li>
        <li>Eggless options available</li>
        <li>Various flavors: chocolate, vanilla, red velvet, fruit</li>
      </ul>
      <h2>How to Order</h2>
      <p>Call us at 9865009581 or WhatsApp to place your order. We recommend ordering 2-3 days in advance for custom designs. Visit any of our 4 branches in Narayangarh.</p>
    `
  },
  {
    id: 2,
    slug: "custom-cakes-narayangarh",
    title: "How to Order Custom Cakes in Narayangarh",
    date: "May 25, 2026",
    image: "/images/img2.jpeg",
    excerpt: "Custom cakes are now easier to order than ever in Narayangarh. Hamro Bakery offers fully personalized cakes for weddings, birthdays, anniversaries and corporate events across Chitwan.",
    content: `
      <p>Ordering a custom cake in Narayangarh has never been easier. At Hamro Bakery, we specialize in creating personalized cakes that match your exact vision and budget.</p>
      <h2>Step by Step: How to Order a Custom Cake</h2>
      <ol>
        <li><strong>Contact us:</strong> Call 9865009581 or WhatsApp your design idea</li>
        <li><strong>Consultation:</strong> We discuss size, flavor, design and price</li>
        <li><strong>Confirmation:</strong> Pay advance and confirm your order</li>
        <li><strong>Delivery/Pickup:</strong> Collect from any branch or request delivery</li>
      </ol>
      <h2>Types of Custom Cakes We Make</h2>
      <p>From wedding cakes to corporate event cakes, baby shower cakes to anniversary cakes — Hamro Bakery creates it all in Chitwan.</p>
      <h2>Price Range</h2>
      <p>Our custom cakes start from NPR 500 per pound. Contact us for exact pricing based on your design.</p>
    `
  },
  {
    id: 3,
    slug: "hamro-bakery-chitwan-since-2013",
    title: "Hamro Bakery — 10+ Years of Baking Happiness in Chitwan",
    date: "May 20, 2026",
    image: "/images/img3.jpeg",
    excerpt: "Since 2013, Hamro Bakery has been Chitwan's most trusted bakery. From a single shop to 4 branches across Narayangarh, our journey has been built on quality, love and the smiles of our customers.",
    content: `
      <p>Hamro Bakery started in 2013 with a simple mission — to bring happiness through freshly baked goods to the people of Chitwan. Today, we are proud to serve thousands of customers daily across 4 branches in Narayangarh.</p>
      <h2>Our Story</h2>
      <p>What began as a small bakery at Hakim Chowk has grown into Chitwan's favourite bakery chain. Our secret? Fresh ingredients, passionate bakers, and a commitment to making every celebration special.</p>
      <h2>Our 4 Branches in Narayangarh</h2>
      <ul>
        <li>Hakim Chowk — our original location</li>
        <li>Bishal Chowk</li>
        <li>Sangam Road</li>
        <li>Synergy Road</li>
      </ul>
      <h2>What Makes Us Different</h2>
      <p>At Hamro Bakery, we use fresh local ingredients, bake daily, and take pride in every product we make. Our customers in Bharatpur, Narayangarh and across Chitwan trust us for all their baking needs.</p>
      <h2>Visit Us Today</h2>
      <p>Come visit any of our branches or call 9865009581 to order. We deliver across Chitwan through Foodmandu and Mero Kinamel.</p>
    `
  },
  {
    id: 4,
    slug: "best-bakery-bharatpur-nepal",
    title: "Best Bakery in Bharatpur Nepal — Hamro Bakery Review",
    date: "May 15, 2026",
    image: "/images/img4.jpeg",
    excerpt: "Searching for the best bakery in Bharatpur? Hamro Bakery in Narayangarh is just minutes away and serves the entire Chitwan district with fresh cakes, pastries and custom orders.",
    content: `
      <p>Bharatpur is the heart of Chitwan, and Hamro Bakery is proud to serve this vibrant city with the finest baked goods in the region.</p>
      <h2>Why Hamro Bakery is Bharatpur's Favourite</h2>
      <p>With branches conveniently located across Narayangarh and delivery available throughout Chitwan, Hamro Bakery is always just a call away for Bharatpur residents.</p>
      <h2>Popular Items in Bharatpur</h2>
      <ul>
        <li>Custom birthday cakes delivered to Bharatpur</li>
        <li>Fresh daily pastries</li>
        <li>Wedding cakes for Chitwan weddings</li>
        <li>Corporate event cakes and desserts</li>
      </ul>
      <h2>Order from Bharatpur</h2>
      <p>Call or WhatsApp 9865009581 to order from anywhere in Bharatpur. We deliver through Foodmandu and Mero Kinamel, or arrange direct delivery via WhatsApp.</p>
    `
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary/10 py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Hamro Bakery Blog
          </h1>
          <p className="text-muted-foreground text-lg">
            Stories, tips and news from Chitwan's favourite bakery
          </p>
        </motion.div>
      </div>

      {/* Posts Grid */}
      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <span className="text-primary font-semibold text-sm hover:underline cursor-pointer">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
