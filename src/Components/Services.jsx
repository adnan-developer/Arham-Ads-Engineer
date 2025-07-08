import React from 'react';
import { FaGoogle, FaBullhorn, FaChartLine, FaRobot } from 'react-icons/fa';

const services = [
  {
    title: 'Google Search Ads',
    description:
      'Reach high-intent users actively searching for your products or services with optimized search campaigns.',
    icon: <FaGoogle size={32} />,
  },
  {
    title: 'Display Advertising',
    description:
      'Create visually engaging ads that appear across millions of websites to boost brand awareness.',
    icon: <FaBullhorn size={32} />,
  },
  {
    title: 'Performance Max Campaigns',
    description:
      'Leverage Google’s AI to run goal-based campaigns across all channels and maximize conversions.',
    icon: <FaRobot size={32} />,
  },
  {
    title: 'Smart Campaign Strategy',
    description:
      'Automated campaigns built for small businesses and local growth — set it, scale it, forget it.',
    icon: <FaChartLine size={32} />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-24 px-6 md:px-20 text-black relative overflow-hidden"
    >
      {/* Background Glow Effects */}
     <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#017534] mb-4">
          Services I Offer
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Tailored performance marketing solutions that drive measurable results.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-start text-left transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="text-[#017534] mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#017534]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;