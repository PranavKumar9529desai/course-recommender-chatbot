"use client";
import React, { useEffect, useState } from "react";
import { HeroSection } from "./Sections/hero-section";
import { MobileHeroSection } from "./Sections/mobile-hero";
import { FeaturesSection } from "./Sections/features-section";
import { TestimonialsSection } from "./Sections/testimonials-section";
import { CTASection } from "./Sections/cta-section";
import { FAQSection } from "./Sections/faq-sections";
import Navbar from "./components/Navbar/Navbar";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent hydration mismatch by only rendering after client-side
  if (!isClient) return null;

  return (
    <main>
      <div className="fixed top-0 inset-x-0 z-[100]">
        <Navbar />
      </div>
      {isMobile ? <MobileHeroSection /> : <HeroSection />}
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
