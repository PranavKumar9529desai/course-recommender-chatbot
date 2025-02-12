"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin as LinkedInIcon, Twitter as TwitterIcon } from 'lucide-react';

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm font-medium border border-blue-100 mb-6"
          >
            The Minds Behind Learner&apos;s Amigo
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Passionate individuals dedicated to revolutionizing education through AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 relative">
                    <div className="aspect-square relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 group-hover:opacity-75 transition-opacity duration-300 z-10" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <div className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm font-medium mb-4">
                        {member.role}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {member.description}
                      </p>
                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
                        >
                          <LinkedInIcon className="size-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
                        >
                          <TwitterIcon className="size-5" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100/50">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We&apos;re always looking for talented individuals who are passionate about
                education and technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                View Open Positions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>
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
