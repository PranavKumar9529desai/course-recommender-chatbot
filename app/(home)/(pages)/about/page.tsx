import React from 'react';
import Image from 'next/image';
import { RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';
import aboutImage from '../../assests/ctasection.webp';

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-700/[0.1] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent
                         hover:scale-105 transition-transform duration-300">
            About Us
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Empowering learners through AI-driven education
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg 
                          hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-6">
                <HeartIcon className="size-8 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We're dedicated to making education more accessible and personalized through 
                innovative AI technology, helping every learner reach their full potential.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg
                          hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-6">
                <RocketLaunchIcon className="size-8 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To create a world where quality education knows no bounds, powered by AI that 
                understands and adapts to each individual's learning journey.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={aboutImage}
                alt="About Us"
                fill
                className="rounded-2xl shadow-2xl object-contain hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
