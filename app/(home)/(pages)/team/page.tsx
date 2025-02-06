"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin as LinkedInIcon, Twitter as TwitterIcon } from 'lucide-react';

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)_4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Passionate individuals dedicated to revolutionizing education
            through AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 group-hover:opacity-75 transition-opacity duration-300 z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-lg mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <LinkedInIcon className="size-6" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition-colors duration-200"
                      >
                        <TwitterIcon className="size-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join the Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for talented individuals who are passionate about
              education and technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-200"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const team = [
  {
    name: 'Team Member One',
    role: 'AI Lead',
    description:
      'Machine learning expert with a passion for educational technology',
    image: '/team/member1.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Team Member Two',
    role: 'Full Stack Developer',
    description: 'Architecture wizard bringing ideas to life through code',
    image: '/team/member2.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Team Member Three',
    role: 'UX Designer',
    description: 'Creating intuitive and delightful user experiences',
    image: '/team/member3.jpg',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Team Member Four',
    role: 'Education Specialist',
    description: 'Former educator bringing real-world insights to our platform',
    image: '/team/member4.jpg',
    linkedin: '#',
    twitter: '#',
  },
];
