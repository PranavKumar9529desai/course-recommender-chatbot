// app/home/Sections/cta-section.tsx
import { CTAButton } from '../components/cta-button';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-gradient-to-br from-purple-100/20 to-blue-100/20 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-3xl border border-blue-100/20 shadow-xl relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 size-32 bg-gradient-to-br from-blue-100/30 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 size-32 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-tl-full" />

          <SparklesIcon className="size-12 mx-auto mb-8 text-blue-600" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Journey
            </span>
            ?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have found their perfect courses with
            Learner&apos;s Amigo
          </p>
          
          <CTAButton
            href="/chat"
            variant="primary"
            className="shadow-lg hover:shadow-blue-200/50 transition-all duration-300 scale-100 hover:scale-105"
          >
            Get Started For Free
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
