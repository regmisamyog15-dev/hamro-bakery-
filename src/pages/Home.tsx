import { BranchSelector } from "@/components/BranchSelector";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Menu } from "@/components/Menu";
import { CallAhead } from "@/components/CallAhead";
import { Gallery } from "@/components/Gallery";
import { CustomCake } from "@/components/CustomCake";
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
        <Menu />
        <CallAhead />
        <Gallery />
        <CustomCake />
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
