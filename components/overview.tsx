import { motion } from "framer-motion";
import Image from "next/image";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-6xl mx-auto h-[calc(100vh-2rem)] flex items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col md:flex-row md:items-start items-center gap-12 leading-relaxed text-center md:text-left">
        {/* Logo Section */}
        <div className="md:w-1/2 flex flex-col items-center md:sticky md:top-0">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text mb-6 md:hidden">
            Welcome to
          </h1>
          <div className="relative size-64 md:size-96">
            <Image
              src="/learneramigologo1.webp"
              alt="Learner's Amigo Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="hidden md:block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              Welcome to
            </h1>
            <span className="text-2xl font-medium text-blue-400 mt-4 block">
              Your Personal Course Advisor
            </span>
          </div>

          <span className="text-xl font-medium text-blue-400 md:hidden">
            Your Personal Course Advisor
          </span>

          <div className="bg-secondary/50 rounded-lg p-5 backdrop-blur-sm">
            <p className="text-lg mb-4">
              Share your goals, ambitions, background and work profile to get your
              curated, personalized course recommendations.
            </p>

            <div className="text-sm text-muted-foreground">
              <p className="font-medium">To get started, simply:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-500" />
                  Tell us about your educational background
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-500" />
                  Share your career goals and ambitions
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-500" />
                  Describe your work experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-500" />
                  Mention any specific skills you want to learn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
