import Image from "next/image";
import HerosectionImage from "@/app/home/assests/herosecionrmbg.webp";
import { CTAButton } from "../components/cta-button";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gray-50 overflow-hidden relative flex items-center -mt-12">
      <div className="max-w-[1400px] h-full flex items-center justify-evenly md:flex-row flex-col px-6 md:px-12 lg:px-16">
        <div className="md:w-2/5 w-full z-10 md:mt-0 mt-12 min-h-[300px] flex flex-col justify-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-4xl xl:text-[70px] font-extrabold tracking-tight md:text-left text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
                Learner&apos;s Amigo
              </span>
            </h1>
            <p className="text-lg md:text-lg text-gray-600 leading-relaxed md:text-left text-center max-w-xl md:mt-4 font-medium whitespace-nowrap">
              Personalized Course Recommender
            </p>
            <div className="flex md:justify-start justify-center gap-4 md:mt-8">
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
        <div className="md:w-3/5 w-full flex justify-end items-center md:absolute md:right-[-4%] md:top-1/2 md:-translate-y-1/2">
          <div className="w-[130%] md:w-[160%] xl:w-[170%] md:h-[120vh]">
            <Image
              src={HerosectionImage}
              alt="AI Learning Assistant"
              width={1200}
              height={1200}
              priority
              className="size-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
