import React from "react";
import { HeroSection } from "./Sections/hero-section";
import { FeaturesSection } from "./Sections/features-section";
import { TestimonialsSection } from "./Sections/testimonials-section";
import { CTASection } from "./Sections/cta-section";
import { FAQSection } from "./Sections/faq-sections";
import Navbar from "./components/Navbar/Navbar";
export default function Page() {
  return (
    <main>
      <div className="fixed top-0 inset-x-0 z-[100]">
        <Navbar />
      </div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
