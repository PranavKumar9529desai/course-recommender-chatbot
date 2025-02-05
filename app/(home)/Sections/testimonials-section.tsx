'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), {
  ssr: false,
});

const AvatarSVG = ({ bgColor = "#4F46E5", className = "" }) => (
  <div className={`relative ${className} group`}>
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <circle cx="32" cy="32" r="32" className="fill-current transition-colors duration-300" fill={bgColor} />
      <path d="M32 32C36.4183 32 40 28.4183 40 24C40 19.5817 36.4183 16 32 16C27.5817 16 24 19.5817 24 24C24 28.4183 27.5817 32 32 32Z" fill="white" />
      <path d="M48 48C48 41.3726 40.8366 36 32 36C23.1634 36 16 41.3726 16 48" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </div>
);

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  avatarColor: string;
  comment: string;
  company: string;
  impact: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Pranav Desai",
    role: "Computer Science Student",
    rating: 5,
    avatarColor: "#FF6B6B",
    comment: "As a student, finding the right learning path was challenging until I found this platform. The AI recommendations perfectly matched my learning style!",
    company: "VIT University",
    impact: "Secured Dream Internship"
  },
  {
    name: "Priya Kulkarni",
    role: "Engineering Student",
    rating: 5,
    avatarColor: "#4ECDC4",
    comment: "The personalized course suggestions helped me master data science concepts faster than traditional learning methods.",
    company: "IIT Bombay",
    impact: "Top of Class Performance"
  },
  {
    name: "Harsh Patel",
    role: "IT Student",
    rating: 5,
    avatarColor: "#FFD93D",
    comment: "This platform made learning complex programming concepts so much easier. The course recommendations were spot-on for my skill level.",
    company: "BITS Pilani",
    impact: "Won Coding Competition"
  }
];

export function TestimonialsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600">
                From Our Learners
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how AI-powered course recommendations helped these professionals advance their careers
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {isClient && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide key={i} className="py-12">
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-gray-900 mb-1">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        <p className="text-blue-600 font-medium text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.comment}"
                    </blockquote>
                    
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium border border-blue-100">
                      {testimonial.impact}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}