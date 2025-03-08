import Image from 'next/image';
import HerosectionImage from '@/app/(home)/assests/herosecionrmbg.webp';
import { CTAButton } from '../components/cta-button';
import { motion } from 'framer-motion';

export function MobileHeroSection() {
  return (
    <section className="relative w-full min-h-screen md:hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative size-full">
            <Image
              src={HerosectionImage}
              alt="AI Learning Assistant"
              fill
              priority
              className="object-cover opacity-80"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-transparent backdrop-blur-[1px]" />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Content */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 text-center"
      >
        <div className="space-y-6 max-w-md">
          {/* Add subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold text-sm uppercase tracking-wider"
          >
            AI-Powered Learning Assistant
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-transparent bg-clip-text hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Learner&apos;s Amigo
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base text-gray-700 leading-relaxed font-medium"
          >
            Your Personal AI-Powered Course Navigator that understands your
            learning style, goals, and preferences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-3"
          >
            <CTAButton 
              href="/chat" 
              variant="primary"
              className="shadow-lg hover:shadow-blue-200/50 transition-all duration-300"
            >
              Get Started
            </CTAButton>
            <CTAButton href="/about" variant="secondary" className="group">
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
      </motion.div>
    </section>
  );
}
