import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TasbeehCounter from "@/components/TasbeehCounter";
import BenefitsSection from "@/components/BenefitsSection";
import ResourcesSection from "@/components/ResourcesSection";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <TasbeehCounter />
      <BenefitsSection />
      <ResourcesSection />
      <DeveloperSection />
      <Footer />
    </main>
  );
}
