import React from 'react';
import Image from 'next/image';

const TeamPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate individuals dedicated to revolutionizing education
            through AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-square overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.description}</p>
                  <div className="mt-4 flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      LinkedIn
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: 'Team Member One',
    role: 'AI Lead',
    description:
      'Machine learning expert with a passion for educational technology',
    image: '/team/member1.jpg',
  },
  {
    name: 'Team Member Two',
    role: 'Full Stack Developer',
    description: 'Architecture wizard bringing ideas to life through code',
    image: '/team/member2.jpg',
  },
  {
    name: 'Team Member Three',
    role: 'UX Designer',
    description: 'Creating intuitive and delightful user experiences',
    image: '/team/member3.jpg',
  },
  {
    name: 'Team Member Four',
    role: 'Education Specialist',
    description: 'Former educator bringing real-world insights to our platform',
    image: '/team/member4.jpg',
  },
];

export default TeamPage;
