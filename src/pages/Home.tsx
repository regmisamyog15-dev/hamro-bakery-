import { BranchSelector } from "@/components/BranchSelector";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Specialty } from "@/components/Specialty";
import { Menu } from "@/components/Menu";
import { CallAhead } from "@/components/CallAhead";
import { Gallery } from "@/components/Gallery";
import { CustomCake } from "@/components/CustomCake";
import { Delivery } from "@/components/Delivery";
import { OpeningHours } from "@/components/OpeningHours";
import { Reviews } from "@/components/Reviews";
import { RateUs } from "@/components/RateUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BranchSelector />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Specialty />
        <Menu />
        <CallAhead />
        <Gallery />
        <CustomCake />
        <Delivery />
        <OpeningHours />
        <Reviews />
        <RateUs />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
