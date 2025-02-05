import React from 'react';
import { RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate individuals dedicated to revolutionizing education through AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <HeartIcon className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900 ml-3">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We're dedicated to making education more accessible and personalized through 
              innovative AI technology, helping every learner reach their full potential.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900 ml-3">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To create a world where quality education knows no bounds, powered by AI that 
              understands and adapts to each individual's learning journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: "Sarah Chen",
    role: "AI Lead",
    description: "Machine learning expert with a passion for educational technology",
    image: "/team/sarah.jpg" // Add team member images
  },
  {
    name: "Alex Rodriguez",
    role: "Full Stack Developer",
    description: "Architecture wizard bringing ideas to life through code",
    image: "/team/alex.jpg"
  },
  {
    name: "Maya Patel",
    role: "UX Designer",
    description: "Creating intuitive and delightful user experiences",
    image: "/team/maya.jpg"
  },
  {
    name: "James Wilson",
    role: "Education Specialist",
    description: "Former educator bringing real-world insights to our platform",
    image: "/team/james.jpg"
  }
];

export default AboutPage;
