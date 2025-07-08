import React from 'react';
import ArhamImage from '../assets/about.jpeg'; // Replace with your actual image path

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-20 text-black relative overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full blur-[120px] opacity-20 z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] bg-[#017534] rounded-full blur-[100px] opacity-10 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#017534] mb-6">
            Who is Arham?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m a <span className="font-semibold text-black">Google Ads Certified Expert</span> and
            <span className="font-semibold text-black"> Performance Marketer</span> passionate about scaling businesses through strategic, data-driven advertising.
            As the <span className="font-semibold text-black">COO at Devfinix</span>, I’ve led results-driven campaigns across Search, Display, P-Max, and Smart Campaigns — driving ROI and brand growth.
          </p>

          <p className="mt-6 text-lg text-gray-600">
            With a proven track record and sharp market insight, I turn ad spend into success stories — using performance, not promises.
          </p>

          {/* CTA */}
          <div className="mt-8">
           <a href="#contact">
        <button className="group cursor-pointer p-2 px-5 max-md:p-1 max-md:px-4 rounded-full bg-white text-black border relative overflow-hidden">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white max-md:group-hover:text-black">
            Hire Me
          </span>
          <span className="max-md:hidden absolute w-4 h-4 right-1 -bottom-1 bg-[#017534] rounded-full transition-all duration-200 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:bottom-0 z-0"></span>
        </button>
      </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-xl w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <img
              src={ArhamImage}
              alt="Sir Arham"
              className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
