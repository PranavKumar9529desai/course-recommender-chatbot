import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <h1 className="text-3xl font-bold">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            Learner&apos;s Amigo
          </span>
          <span className="block text-xl mt-2 font-medium">AI Course Recommender</span>
        </h1>
        
        <p className="text-lg">
          Share your goals, ambitions, background and work profile to get your curated, personalized course recommendations.
        </p>

        <div className="text-sm text-muted-foreground">
          <p>To get started, simply:</p>
          <ul className="mt-2 list-disc list-inside">
            <li>Tell us about your educational background</li>
            <li>Share your career goals and ambitions</li>
            <li>Describe your work experience</li>
            <li>Mention any specific skills you want to learn</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
