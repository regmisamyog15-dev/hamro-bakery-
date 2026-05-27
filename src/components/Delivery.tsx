import { useBranch } from "@/context/BranchContext";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Foodmandu",
    url: "https://foodmandu.com/",
    img: foodmanduImg,
    description: "Order on the app & get it delivered fast",
  },
  {
    name: "Mero Kinamel",
    url: "https://www.merokinamel.com/",
    img: meroKinamelImg,
    description: "Local delivery partner across Chitwan",
  },
];

export function Delivery() {
  const { branchData } = useBranch();

  const handleDirectDelivery = () => {
    const phone = branchData?.whatsapp ?? "9865009581";
    const msg = `Hello Hamro Bakery! I'd like to request a home delivery. Please share available delivery areas and timing. Thank you!`;
    window.open(`https://wa.me/977${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-2">We Deliver To You</h2>
          <p className="text-muted-foreground">Through our partners — or directly from us</p>
        </motion.div>

        <div className="space-y-8">
          {/* Direct delivery card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-accent/20 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-md mx-auto sm:mx-0">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-serif text-xl font-bold text-primary mb-1">We Deliver Ourselves Too!</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Don't want to use a third-party app? Message us directly on WhatsApp and we'll arrange delivery straight to your door. Fresh, personal, and hassle-free.
                </p>
              </div>
              <Button
                onClick={handleDirectDelivery}
                size="lg"
                className="rounded-full gap-2 shrink-0 shadow-sm mx-auto sm:mx-0"
                data-testid="btn-direct-delivery"
              >
                <SiWhatsapp className="w-5 h-5" />
                Request Delivery
              </Button>
            </div>
          </motion.div>

          {/* Partner platforms */}
          <div>
            <p className="text-center text-sm text-muted-foreground font-semibold mb-4 uppercase tracking-widest">
              Our Delivery Partners
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {platforms.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 14px 36px rgba(92,51,23,0.13)" }}
                  className="group bg-card rounded-2xl border border-border p-6 flex items-center gap-4 shadow-sm transition-all duration-300 no-underline"
                  data-testid={`link-delivery-${i}`}
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm border border-border/50 bg-white flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-bold text-foreground mb-0.5">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
