import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-lg bg-white px-4 shadow-sm"
            >
              <AccordionTrigger className="hover:bg-gray-50 py-4 text-gray-900">
                How does the AI-powered course recommendation system work?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                Our AI system analyzes your interests, learning style, and
                career goals to suggest personalized course recommendations. It
                uses advanced algorithms to match you with courses that align
                with your unique profile and learning objectives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg bg-white px-4 shadow-sm"
            >
              <AccordionTrigger className="hover:bg-gray-50 py-4 text-gray-900">
                Can I get recommendations for specific skill levels?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                Absolutely! Whether you&apos;re a beginner, intermediate, or advanced
                learner, our system adapts to your expertise level. We&apos;ll
                suggest courses that match your current skills while helping you
                progress to the next level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg bg-white px-4 shadow-sm"
            >
              <AccordionTrigger className="hover:bg-gray-50 py-4 text-gray-900">
                What makes this recommender different from others?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                Unlike traditional systems, our chatbot combines real-time
                interaction with smart learning patterns. It not only recommends
                courses but also adapts to your feedback and learning progress,
                creating a truly personalized educational journey.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg bg-white px-4 shadow-sm"
            >
              <AccordionTrigger className="hover:bg-gray-50 py-4 text-gray-900">
                How often are course recommendations updated?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                Our system continuously updates its recommendations based on new
                course availability, your progress, and changing industry
                trends. This ensures you always have access to the most relevant
                and up-to-date learning resources.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
}
