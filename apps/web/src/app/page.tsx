import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ComparisonSection from "@/components/ComparisonSection";
import ToolsSection from "@/components/ToolsSection";
import TrustSection from "@/components/TrustSection";
import TrustBadges from "@/components/TrustBadges";
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
      <ComparisonSection />
      <ToolsSection />
      <TrustSection />
      <TrustBadges />
      <HowItWorksSection />
      <PricingSection />
      <GuaranteesSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
