"use client";
import Image from "next/image";
import HerosectionImage from "@/app/(home)/assests/herosectionbg2.webp";
import { CTAButton } from "../components/cta-button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden relative">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto h-screen w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pt-20 md:pt-0 md:gap-8 relative"
      >
        {/* Left Content Section with enhanced styling */}
        <div className="w-full md:w-2/5 z-10 md:pr-0  rounded-2xl p-8 ">
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium border border-blue-100"
            >
              Welcome to the Future of Learning
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-4xl xl:text-[70px] font-extrabold tracking-tight md:text-left text-center relative">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-transparent bg-clip-text leading-tight hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Learner&apos;s Amigo
              </motion.span>
              {/* Add decorative element */}
              <div className="absolute -right-4 -top-4 size-20 bg-blue-500/10 rounded-full blur-xl" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:text-left text-center md:max-w-2xl font-medium opacity-90 relative"
            >
              Your Personal AI-Powered Course Navigator that understands your
              learning style, goals, and preferences to recommend the perfect
              courses for your journey.
              {/* Add subtle highlight */}
              <div className="absolute -left-4 -bottom-4 size-32 bg-purple-500/10 rounded-full blur-xl -z-10" />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex md:justify-start justify-center gap-3 md:gap-4 pt-4"
            >
              <CTAButton
                variant="primary"
                className="shadow-lg hover:shadow-blue-200/50 transition-all duration-300 scale-100 hover:scale-105"
              >
                Get Started
              </CTAButton>
              <CTAButton
                href="/about"
                variant="secondary"
                className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 ml-2 transition-transform group-hover:translate-x-1"
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
            </motion.div>
          </div>
        </div>

        {/* Right Image Section with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-3/5 h-[500px] md:h-screen relative mt-8 md:mt-0 md:translate-x-16"
        >
          <div className="relative size-full flex justify-end">
            {/* Enhanced gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgb(255 255 255) 5%, transparent 25%)",
              }}
            />

            <Image
              src={HerosectionImage}
              alt="AI Learning Assistant"
              fill
              priority
              className="object-contain object-right scale-125 hover:scale-[1.3] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={100}
              style={{
                maskImage: "linear-gradient(to left, black 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 80%, transparent)",
              }}
            />

            {/* Add floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-[15%] size-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/3 right-1/4 size-40 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
            />
          </div>
        </motion.div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-1/4 right-[5%] size-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] size-40 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
