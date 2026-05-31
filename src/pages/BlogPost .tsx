import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";

const posts = [
  {
    id: 1,
    slug: "best-birthday-cakes-chitwan",
    title: "Best Birthday Cakes in Chitwan — Hamro Bakery",
    date: "May 28, 2026",
    image: "/images/img1.jpeg",
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
    `
  },
  {
    id: 4,
    slug: "best-bakery-bharatpur-nepal",
    title: "Best Bakery in Bharatpur Nepal — Hamro Bakery Review",
    date: "May 15, 2026",
    image: "/images/img4.jpeg",
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
      <p>Call or WhatsApp 9865009581 to order from anywhere in Bharatpur.</p>
    `
  }
];

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = posts.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-primary mb-4">Post not found</h1>
          <Link href="/blog">
            <span className="text-primary hover:underline cursor-pointer">← Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-3xl px-4 py-16"
      >
        <Link href="/blog">
          <span className="text-primary hover:underline cursor-pointer text-sm mb-8 block">
            ← Back to Blog
          </span>
        </Link>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />
        <p className="text-muted-foreground text-sm mb-2">{post.date}</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 leading-tight">
          {post.title}
        </h1>
        <div
          className="prose prose-lg max-w-none text-foreground [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:text-primary [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ol]:mb-4 [&>ol]:pl-6 [&>ol>li]:mb-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 p-6 bg-primary/10 rounded-2xl text-center">
          <h3 className="text-xl font-serif text-primary mb-2">Order from Hamro Bakery</h3>
          <p className="text-muted-foreground mb-4">Call or WhatsApp us to place your order!</p>
          <a
            href="https://wa.me/9779865009581"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            WhatsApp: 9865009581
          </a>
        </div>
      </motion.div>
    </div>
  );
}
