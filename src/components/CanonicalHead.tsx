import { useEffect } from "react";
import { useLocation } from "wouter";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Hamro Bakery Narayangarh — Best Bakery in Chitwan Nepal",
    description: "Best bakery in Chitwan since 2013. Custom birthday cakes, wedding cakes, fresh pastries. 4 branches in Narayangarh. Order via WhatsApp: 9865009581.",
  },
  "/menu": {
    title: "Menu & Prices — Hamro Bakery Narayangarh Chitwan Nepal",
    description: "Full menu and prices at Hamro Bakery Narayangarh. Cakes from Rs 600/lb, pastries from Rs 70, cookies and more — all baked fresh every morning in Chitwan.",
  },
  "/gallery": {
    title: "Gallery — Cakes & Pastries by Hamro Bakery Narayangarh",
    description: "Real photos of custom cakes, birthday cakes and pastries from Hamro Bakery branches in Narayangarh Chitwan. No studio shots — real bakes, real people.",
  },
  "/custom-cake": {
    title: "Custom Cakes Narayangarh — Birthday & Wedding Cakes Chitwan",
    description: "Order custom birthday, wedding and anniversary cakes in Chitwan from Hamro Bakery. Fondant designs from Rs 1500/lb. WhatsApp 9865009581. 2–3 days advance.",
  },
  "/about": {
    title: "About Hamro Bakery — Best Bakery in Chitwan Since 2013",
    description: "Hamro Bakery has served Narayangarh Chitwan since 2013. 4 branches, 17 local bakers, 4.8-star Google rating, and thousands of happy customers across Nepal.",
  },
  "/contact": {
    title: "Contact Hamro Bakery — 4 Branches in Narayangarh Chitwan",
    description: "Find Hamro Bakery near you in Narayangarh: Hakim Chowk (9865009581), Bishal Chowk (9702663750), Sangam Road (9855070143), Synergy Road (9821207163).",
  },
  "/blog": {
    title: "Blog — Cake Tips & News from Hamro Bakery Chitwan Nepal",
    description: "Cake tips, bakery news and sweet reads from Hamro Bakery — the best bakery in Narayangarh Chitwan Nepal since 2013. Custom cakes, pastries and more.",
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
