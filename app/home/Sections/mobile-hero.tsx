import Image from "next/image";
import HerosectionImage from "@/app/home/assests/herosecionrmbg.webp";
import { CTAButton } from "../components/cta-button";

export function MobileHeroSection() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HerosectionImage}
          alt="AI Learning Assistant"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight animate-slideIn">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-transparent bg-clip-text">
              Learner&apos;s Amigo
            </span>
          </h1>
          
          <p className="text-base text-gray-700 leading-relaxed font-medium animate-slideIn">
            Your Personal AI-Powered Course Navigator that understands your
            learning style, goals, and preferences.
          </p>

          <div className="flex justify-center gap-3 animate-slideUp">
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
    </section>
  );
}
