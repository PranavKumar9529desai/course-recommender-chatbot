import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            Learner's Amigo is your trusted companion in the educational journey. 
            We provide personalized course recommendations and guidance to help you 
            achieve your learning goals.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To make education accessible and personalized for everyone through 
            innovative AI-powered solutions and expert guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
