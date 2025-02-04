// app/home/Sections/testimonials-section.tsx
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const testimonials = [
  {
    name: "John Doe",
    avatar: "/avatars/user1.jpg",
    comment: "This platform helped me find the perfect course for my needs!"
  },
  {
    name: "Jane Smith",
    avatar: "/avatars/user2.jpg",
    comment: "The recommendations were spot-on and saved me lots of time."
  },
  {
    name: "Mike Johnson",
    avatar: "/avatars/user3.jpg",
    comment: "Excellent course suggestions and user-friendly interface."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl animate-slideUp">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}