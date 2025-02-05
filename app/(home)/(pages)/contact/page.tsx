import React from 'react';
import {
  EnvelopeIcon,
  UserIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
              <EnvelopeIcon className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg">
            We&apos;re here to help you on your learning journey
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <form className="space-y-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  className="pl-10 block w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="pl-10 block w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
