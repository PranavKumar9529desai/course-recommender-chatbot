"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  Heart,
  Lightbulb,
  Users
} from "lucide-react";
import aboutImage from "../../assests/ctasection.webp";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)_4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent
                       hover:scale-105 transition-transform duration-300"
          >
            About Us
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Empowering learners through AI-driven education and personalized
            learning experiences
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 space-y-8"
          >
            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Heart className="size-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 ml-4">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                We&apos;re dedicated to making education more accessible and
                personalized through innovative AI technology, helping every
                learner reach their full potential.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <Rocket className="size-8 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 ml-4">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To create a world where quality education knows no bounds,
                powered by AI that understands and adapts to each
                individual&apos;s learning journey.
              </p>
            </motion.div>

            {/* Values Section */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <Lightbulb className="size-8 text-yellow-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Pushing boundaries in educational technology
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <Users className="size-8 text-green-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-gray-600">
                  Building connections through learning
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl -rotate-2" />
              <Image
                src={aboutImage}
                alt="About Us"
                fill
                className="rounded-2xl shadow-2xl object-contain hover:scale-105 transition-transform duration-300 relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}