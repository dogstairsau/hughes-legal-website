import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Features from "@/components/Features";
import Paths from "@/components/Paths";
import Services from "@/components/Services";
import Why from "@/components/Why";
import People from "@/components/People";
import LocalMap from "@/components/LocalMap";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBand />
        <Features />
        <Paths />
        <Services />
        <Why />
        <People />
        <LocalMap />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
