import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Features</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Course Recommendations",
    description: "Get personalized course suggestions based on your interests and goals."
  },
  {
    title: "Expert Guidance",
    description: "Connect with our intelligent chatbot for immediate assistance and advice."
  },
  {
    title: "Comprehensive Course Database",
    description: "Access a wide range of courses from top educational platforms."
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey and track your achievements."
  }
];

export default FeaturesPage;
