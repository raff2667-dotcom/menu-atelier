import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Consultation from "./components/Consultation";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhySection />
        <HowItWorks />
        <Features />
        <Consultation />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
