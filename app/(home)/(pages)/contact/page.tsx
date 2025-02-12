"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  UserIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Contact() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      content: 'San Francisco, CA',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      content: 'Available 24/7',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)_4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm font-medium border border-blue-100 mb-6"
          >
            Let&apos;s Connect
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            We&apos;re here to help you on your learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`${info.bgColor} size-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`size-7 ${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{info.title}</h3>
                <p className="text-gray-600 text-lg">{info.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-3xl rotate-1" />
          <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-xl group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 transition-colors group-focus-within:text-blue-500" />
                      <input
                        type="text"
                        id="name"
                        className="pl-12 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-xl group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 transition-colors group-focus-within:text-blue-500" />
                      <input
                        type="email"
                        id="email"
                        className="pl-12 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-xl group-hover:scale-105 transition-transform duration-300" />
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 group text-lg font-medium"
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="size-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
