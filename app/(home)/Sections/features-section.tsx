// app/home/Sections/features-section.tsx
import {
  RocketLaunchIcon,
  AcademicCapIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Learner's Amigo?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-slideUp">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: RocketLaunchIcon,
    title: "Personalized Learning",
    description:
      "AI-powered course recommendations tailored to your goals and preferences",
  },
  {
    icon: AcademicCapIcon,
    title: "Expert Guidance",
    description: "Get professional insights and structured learning paths",
  },
  {
    icon: ChartBarIcon,
    title: "Track Progress",
    description:
      "Monitor your learning journey with detailed analytics and milestones",
  },
];
