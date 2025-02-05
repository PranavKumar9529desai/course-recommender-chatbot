// app/home/Sections/cta-section.tsx
import { CTAButton } from "../components/cta-button";
import { SparklesIcon } from '@heroicons/react/24/outline';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <SparklesIcon className="w-12 h-12 mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg mb-8 opacity-90 animate-slideUp">
          Join thousands of learners who have found their perfect courses with Learner's Amigo
        </p>
        <CTAButton 
          href="/chat" 
          variant="primary" 
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Get Started For Free
        </CTAButton>
      </div>
    </section>
  );
}