import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does the AI-powered course recommendation system work?
              </AccordionTrigger>
              <AccordionContent>
                Our AI system analyzes your interests, learning style, and
                career goals to suggest personalized course recommendations. It
                uses advanced algorithms to match you with courses that align
                with your unique profile and learning objectives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I get recommendations for specific skill levels?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Whether you're a beginner, intermediate, or advanced
                learner, our system adapts to your expertise level. We'll
                suggest courses that match your current skills while helping you
                progress to the next level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What makes this recommender different from others?
              </AccordionTrigger>
              <AccordionContent>
                Unlike traditional systems, our chatbot combines real-time
                interaction with smart learning patterns. It not only recommends
                courses but also adapts to your feedback and learning progress,
                creating a truly personalized educational journey.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How often are course recommendations updated?
              </AccordionTrigger>
              <AccordionContent>
                Our system continuously updates its recommendations based on new
                course availability, your progress, and changing industry
                trends. This ensures you always have access to the most relevant
                and up-to-date learning resources.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
