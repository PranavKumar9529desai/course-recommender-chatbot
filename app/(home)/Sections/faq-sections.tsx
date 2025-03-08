import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "How does the AI-powered course recommendation system work?",
    answer:
      "Our AI system analyzes your interests, learning style, and career goals to suggest personalized course recommendations. It uses advanced algorithms to match you with courses that align with your unique profile and learning objectives.",
  },
  {
    id: "faq-2",
    question: "Can I get recommendations for specific skill levels?",
    answer:
      "Absolutely! Whether you're a beginner, intermediate, or advanced learner, our system adapts to your expertise level. We'll suggest courses that match your current skills while helping you progress to the next level.",
  },
  {
    id: "faq-3",
    question: "What makes this recommender different from others?",
    answer:
      "Unlike traditional systems, our chatbot combines real-time interaction with smart learning patterns. It not only recommends courses but also adapts to your feedback and learning progress, creating a truly personalized educational journey.",
  },
  {
    id: "faq-4",
    question: "How often are course recommendations updated?",
    answer:
      "Our system continuously updates its recommendations based on new course availability, your progress, and changing industry trends. This ensures you always have access to the most relevant and up-to-date learning resources.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered learning
            platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="group border border-gray-100 rounded-2xl bg-white px-6 shadow-sm data-[state=open]:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <div className="flex gap-4 items-center">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
