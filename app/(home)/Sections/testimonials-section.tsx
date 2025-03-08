'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { StarIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import('swiper/react').then((mod) => mod.SwiperSlide),
  {
    ssr: false,
  },
);

interface Testimonial {
  id: string;
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
    id: 'test-1',
    name: 'Pranav Desai',
    role: 'Computer Science Student',
    rating: 5,
    avatarColor: '#4F46E5',
    comment:
      'As a student, finding the right learning path was challenging until I found this platform. The AI recommendations perfectly matched my learning style!',
    company: 'VIT University',
    impact: 'Secured Dream Internship',
  },
  {
    id: 'test-2',
    name: 'Priya Kulkarni',
    role: 'Engineering Student',
    rating: 5,
    avatarColor: '#4F46E5',
    comment:
      'The personalized course suggestions helped me master data science concepts faster than traditional learning methods.',
    company: 'IIT Bombay',
    impact: 'Top of Class Performance',
  },
  {
    id: 'test-3',
    name: 'Harsh Patel',
    role: 'IT Student',
    rating: 5,
    avatarColor: '#4F46E5',
    comment:
      'This platform made learning complex programming concepts so much easier. The course recommendations were spot-on for my skill level.',
    company: 'BITS Pilani',
    impact: 'Won Coding Competition',
  },
];

export function TestimonialsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Success Stories from{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Learners
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how AI-powered course recommendations transformed learning journeys
          </p>
        </motion.div>

        <div className="relative px-4">
          {isClient && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
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
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-100">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                          <p className="text-blue-600 font-medium text-sm mt-1">
                            {testimonial.company}
                          </p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon
                              key={`star-${i as number}`}
                              className="size-5 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                        &quot;{testimonial.comment}&quot;
                      </blockquote>

                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-sm font-medium border border-blue-100 group-hover:border-blue-200 transition-colors">
                        {testimonial.impact}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
