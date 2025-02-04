import React from "react";
import { HeroSection } from "./Sections/hero-section";
import { FeaturesSection } from "./Sections/features-section";
import { TestimonialsSection } from "./Sections/testimonials-section";
import { CTASection } from "./Sections/cta-section";
import Navbar from "./components/Navbar/Navbar";

export default function Page() {
  return (
    <main>
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
