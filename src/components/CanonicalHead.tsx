import { useEffect } from "react";
import { useLocation } from "wouter";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Hamro Bakery Narayangarh — Best Cakes & Pastries in Chitwan Since 2013",
    description: "Chitwan's most loved bakery since 2013. Custom birthday cakes, wedding cakes, pastries & fresh baked goods. 4 branches in Narayangarh. Order via WhatsApp: 9865009581.",
  },
  "/menu": {
    title: "Menu & Prices — Hamro Bakery Narayangarh Chitwan",
    description: "Full menu and prices for Hamro Bakery Narayangarh. Cakes from Rs 600/lb, pastries from Rs 70, cookies, dry items and more — all baked fresh daily.",
  },
  "/gallery": {
    title: "Gallery — Cakes & Pastries by Hamro Bakery Narayangarh",
    description: "Real photos of cakes, pastries and baked goods from Hamro Bakery's branches in Narayangarh, Chitwan.",
  },
  "/custom-cake": {
    title: "Custom Cakes — Birthday & Wedding Cakes Narayangarh Chitwan",
    description: "Order custom birthday, wedding and anniversary cakes from Hamro Bakery in Narayangarh Chitwan. Starting Rs 600/lb. WhatsApp 9865009581.",
  },
  "/about": {
    title: "About Hamro Bakery — Baking Happiness in Chitwan Since 2013",
    description: "Hamro Bakery has been baking happiness in Narayangarh Chitwan since 2013. 4 branches, 17 staff, and a 4.8-star Google rating.",
  },
  "/contact": {
    title: "Contact & Branches — Hamro Bakery Narayangarh",
    description: "Find all 4 Hamro Bakery branches in Narayangarh: Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), Synergy Road (9821207163).",
  },
  "/blog": {
    title: "Blog — Hamro Bakery Narayangarh Chitwan",
    description: "Tips, stories and sweet reads from Hamro Bakery — Chitwan's favourite bakery since 2013.",
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

    // Update OG tags
    const og = (prop: string, val: string) => {
      const el = document.querySelector<HTMLMetaElement>(`meta[property='${prop}']`);
      if (el) el.content = val;
    };
    og("og:url", canonical === `${base}` ? `${base}/` : canonical);
    og("og:title", meta.title);
    og("og:description", meta.description);
  }, [location]);

  return null;
}
