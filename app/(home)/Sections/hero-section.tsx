"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import HerosectionImage from "@/app/(home)/assests/herosecionrmbg.webp";
import { CTAButton } from "../components/cta-button";
import { MobileHeroSection } from "./mobile-hero";

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileHeroSection />;
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden relative flex items-center pt-20 md:pt-0 md:-mt-12">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-evenly md:flex-row flex-col px-4 sm:px-6 lg:px-8 lg:ml-[200px]">
        <div className="w-full z-10 md:mt-0 mt-8 min-h-[300px] flex animate-fadeIn">
          <div className="space-y-4 md:space-y-6 px-4 md:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-4xl xl:text-[70px] font-extrabold tracking-tight md:text-left text-center animate-slideIn">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-transparent bg-clip-text leading-tight">
                Learner&apos;s Amigo
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:text-left text-center md:max-w-2xl md:mt-4 font-medium animate-slideIn opacity-90">
              Your Personal AI-Powered Course Navigator that understands your
              learning style, goals, and preferences to recommend the perfect
              courses for your journey.
            </p>
            <p className="hidden md:block text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed md:text-left text-center md:max-w-2xl animate-slideIn opacity-80">
              Get tailored course suggestions, learning paths, and expert
              guidance to achieve your educational goals faster and more
              effectively.
            </p>
            <div className="flex md:justify-start justify-center gap-3 md:gap-4 md:mt-8 animate-slideUp">
              <CTAButton href="/chat" variant="primary">
                Get Started
              </CTAButton>
              <CTAButton href="/about" variant="secondary" className="group">
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 w-full flex justify-end items-center md:absolute md:right-[-4%] md:top-1/2 md:-translate-y-1/2 animate-fadeIn mt-8 md:mt-0">
          <div className="w-[100%] md:w-[160%] xl:w-[170%] md:h-[120vh]">
            <Image
              src={HerosectionImage}
              alt="AI Learning Assistant"
              width={1400}
              height={1400}
              priority
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
