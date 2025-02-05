import React from 'react';
import { SparklesIcon, ChatBubbleBottomCenterTextIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const FeaturesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Experience the Future of Learning
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how our innovative features make learning more engaging and effective
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Recommendations",
    description: "Experience personalized learning pathways tailored to your goals and preferences.",
    icon: SparklesIcon,
    benefits: [
      "Smart course suggestions based on your interests",
      "Adaptive learning paths that evolve with you",
      "Personalized pace and difficulty adjustments"
    ]
  },
  {
    title: "Intelligent Chat Support",
    description: "Get instant, thoughtful responses to all your learning-related questions.",
    icon: ChatBubbleBottomCenterTextIcon,
    benefits: [
      "24/7 available AI learning assistant",
      "Course-specific guidance and clarification",
      "Quick answers to common questions"
    ]
  },
  {
    title: "Comprehensive Course Library",
    description: "Access a vast collection of high-quality courses from top educators.",
    icon: BookOpenIcon,
    benefits: [
      "Curated selection of premium courses",
      "Multi-format learning materials",
      "Regular content updates and additions"
    ]
  },
  {
    title: "Progress Analytics",
    description: "Track your learning journey with detailed insights and visualizations.",
    icon: ChartBarIcon,
    benefits: [
      "Visual progress tracking",
      "Performance insights and suggestions",
      "Goal achievement monitoring"
    ]
  }
];

export default FeaturesPage;
