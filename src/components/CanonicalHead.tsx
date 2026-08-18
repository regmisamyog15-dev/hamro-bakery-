import { useEffect } from "react";
import { useLocation } from "wouter";

const PAGE_META: Record<string, { title: string; description: string; keywords?: string }> = {
  "/": {
    title: "Hamro Bakery Narayangarh — Best Bakery in Chitwan Nepal",
    description: "Best bakery in Chitwan since 2013. Custom birthday cakes, wedding cakes, fresh pastries. 4 branches in Narayangarh. Order: 9865009581.",
    keywords: "best bakery Chitwan, best bakery Narayangarh, bakery Nepal, custom cake Narayangarh, birthday cake Chitwan",
  },
  "/menu": {
    title: "Menu & Prices — Hamro Bakery Narayangarh | Cakes from Rs 600",
    description: "Hamro Bakery Narayangarh menu: cakes from Rs 600/lb, pastries Rs 70+, cookies, dry items. All baked fresh daily in Chitwan. Order via WhatsApp.",
    keywords: "cake price Narayangarh, bakery menu Chitwan, cake price Nepal, pastry price Narayangarh, blackforest cake price",
  },
  "/gallery": {
    title: "Cake Gallery — Hamro Bakery Narayangarh Chitwan Nepal",
    description: "Photos of custom cakes, birthday cakes, wedding cakes and pastries from Hamro Bakery in Narayangarh Chitwan. Real cakes, real occasions.",
    keywords: "cake photos Chitwan, custom cake design Nepal, bakery gallery Narayangarh",
  },
  "/custom-cake": {
    title: "Custom Cakes Narayangarh — Order Birthday & Wedding Cakes",
    description: "Order custom birthday, wedding and anniversary cakes in Narayangarh from Hamro Bakery. Fondant from Rs 1500/lb. WhatsApp 9865009581. 2–3 days notice.",
    keywords: "custom cake Narayangarh, custom cake Chitwan, birthday cake order Nepal, wedding cake Chitwan, fondant cake Nepal",
  },
  "/about": {
    title: "About Hamro Bakery — Best Bakery in Chitwan Since 2013",
    description: "Hamro Bakery Narayangarh — serving Chitwan since 2013. 4 branches, 17 local bakers, 4.8-star Google rating. The most loved bakery in Narayangarh.",
    keywords: "about Hamro Bakery, Hamro Bakery history, best bakery Chitwan 2013, Narayangarh bakery",
  },
  "/contact": {
    title: "Contact Hamro Bakery — 4 Branches in Narayangarh Chitwan",
    description: "Hamro Bakery branches in Narayangarh: Hakim Chowk 9865009581, Bishal Chowk 9702663750, Sangam Road 9855070143, Synergy Road 9821207163. Open 8AM daily.",
    keywords: "Hamro Bakery contact, Hamro Bakery location, bakery Narayangarh address, Hakim Chowk bakery",
  },
  "/blog": {
    title: "Blog — Cake Tips & Bakery News from Hamro Bakery Chitwan",
    description: "Cake ordering tips, bakery news and guides from Hamro Bakery — the best bakery in Narayangarh Chitwan since 2013. Birthday cakes, custom designs and more.",
    keywords: "cake tips Nepal, how to order cake Chitwan, bakery blog Nepal, Hamro Bakery news",
  },
  "/blog/best-birthday-cakes-chitwan": {
    title: "Best Birthday Cakes in Chitwan — Hamro Bakery Narayangarh",
    description: "Find the best birthday cakes in Chitwan at Hamro Bakery Narayangarh. Custom designs, fresh daily, from Rs 600/lb. Order: 9865009581.",
    keywords: "best birthday cake Chitwan, birthday cake Narayangarh, custom birthday cake Nepal, birthday cake price Chitwan",
  },
  "/blog/custom-cakes-narayangarh": {
    title: "How to Order Custom Cakes in Narayangarh — Step by Step",
    description: "Step-by-step guide to ordering custom cakes in Narayangarh from Hamro Bakery. Flavours, sizes, pricing and WhatsApp ordering explained.",
    keywords: "custom cake order Narayangarh, how to order cake Nepal, custom cake price Narayangarh, cake design Chitwan",
  },
  "/blog/hamro-bakery-chitwan-since-2013": {
    title: "Hamro Bakery Chitwan — Baking Happiness Since 2013",
    description: "The story of Hamro Bakery — from one shop at Hakim Chowk to 4 branches across Narayangarh. Chitwan's most loved bakery since 2013.",
    keywords: "Hamro Bakery story, best bakery Chitwan history, Narayangarh bakery since 2013, Hakim Chowk bakery",
  },
  "/blog/best-bakery-bharatpur-nepal": {
    title: "Best Bakery Near Bharatpur Nepal — Hamro Bakery Narayangarh",
    description: "Looking for the best bakery in Bharatpur Nepal? Hamro Bakery delivers fresh cakes and pastries across Chitwan from 4 Narayangarh branches.",
    keywords: "best bakery Bharatpur, bakery near Bharatpur Nepal, cake delivery Bharatpur, Chitwan bakery",
  },
  "/blog/wedding-cake-chitwan-nepal": {
    title: "Wedding Cakes in Chitwan Nepal — Order from Hamro Bakery",
    description: "Beautiful wedding cakes in Chitwan Nepal from Hamro Bakery. Multi-tier fondant, fresh flower cakes. From Rs 1500/lb. Order 9865009581.",
    keywords: "wedding cake Chitwan, wedding cake Nepal, wedding cake Narayangarh, fondant wedding cake Nepal",
  },
  "/blog/fresh-pastries-narayangarh": {
    title: "Fresh Pastries in Narayangarh — Hamro Bakery | Baked Daily",
    description: "Best fresh pastries in Narayangarh Chitwan at Hamro Bakery. Puffs, croissants, muffins, donuts from Rs 70 — baked every morning at 8AM.",
    keywords: "fresh pastries Narayangarh, pastry shop Chitwan, best pastry Nepal, bakery Narayangarh morning",
  },
};

export function CanonicalHead() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location] ?? PAGE_META["/"];
    const base = "https://hamrobakery1.com";
    const canonical = `${base}${location === "/" ? "" : location}`;

    // Update title
    document.title = meta.title;

    // Update or create canonical
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical === `${base}` ? `${base}/` : canonical;

    // Update meta description
    let desc = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (desc) desc.content = meta.description;

    // Update keywords
    if (meta.keywords) {
      let kw = document.querySelector<HTMLMetaElement>("meta[name='keywords']");
      if (!kw) {
        kw = document.createElement("meta");
        kw.name = "keywords";
        document.head.appendChild(kw);
      }
      kw.content = meta.keywords;
    }

    // Update OG tags — create if missing (happens when 200.html fallback loads on inner pages)
    const og = (prop: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property='${prop}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.content = val;
    };
    const canonicalHref = canonical === `${base}` ? `${base}/` : canonical;
    og("og:url", canonicalHref);
    og("og:title", meta.title);
    og("og:description", meta.description);
    og("og:image", "https://hamrobakery1.com/opengraph.jpg");

    // Update twitter card as well
    const tw = (name: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = val;
    };
    tw("twitter:title", meta.title);
    tw("twitter:description", meta.description);
  }, [location]);

  return null;
}
