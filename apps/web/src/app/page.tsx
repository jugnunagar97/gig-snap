import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ToolsSection from "@/components/ToolsSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ToolsSection />
      <TrustSection />
      <HowItWorksSection />
      <PricingSection />
      <GuaranteesSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
