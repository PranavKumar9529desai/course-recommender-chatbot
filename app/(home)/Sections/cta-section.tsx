// app/home/Sections/cta-section.tsx
import { CTAButton } from '../components/cta-button';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
      >
        <SparklesIcon className="size-12 mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg mb-8 opacity-90 animate-slideUp">
          Join thousands of learners who have found their perfect courses with
          Learner&apos;s Amigo
        </p>
        <CTAButton
          href="/chat"
          variant="primary"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Get Started For Free
        </CTAButton>
      </motion.div>
    </section>
  );
}
