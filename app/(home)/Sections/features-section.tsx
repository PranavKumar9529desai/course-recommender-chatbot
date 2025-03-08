import {
  RocketLaunchIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import FeatureImage from '../assests/featuresectionimage.webp';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 md:mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Learner&apos;s Amigo?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:gap-12">
          {/* Image Container */}
          <div className="lg:w-1/2 relative min-h-[300px] md:min-h-[600px] flex items-center justify-center mb-8 lg:mb-0">
            <div className="relative w-full h-[300px] md:h-[600px] bg-transparent hover:scale-105 transition-transform duration-300">
              <Image
                src={FeatureImage}
                alt="Features illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="p-2"
                priority
              />
            </div>
          </div>

          {/* Features Grid Container */}
          <div className="lg:w-1/2 flex items-center">
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-slideUp">
                {features.map((feature, i) => (
                  <motion.div
                    key={i as number}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-full mb-4">
                        <feature.icon className="size-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: RocketLaunchIcon,
    title: 'Personalized Learning',
    description: 'AI-powered recommendations tailored to your goals',
  },
  {
    icon: AcademicCapIcon,
    title: 'Expert Guidance',
    description: 'Professional insights and structured paths',
  },
  {
    icon: ChartBarIcon,
    title: 'Track Progress',
    description: 'Monitor your journey with detailed analytics',
  },
  {
    icon: UserGroupIcon,
    title: 'Community Support',
    description: 'Learn and grow with fellow learners',
  },
];
