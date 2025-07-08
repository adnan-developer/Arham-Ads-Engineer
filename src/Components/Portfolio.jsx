import React, { useEffect, useState, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.jpg';

const projects = [
  { id: 1, image: project1 },
  { id: 2, image: project2 },
  { id: 3, image: project3 },
  { id: 4, image: project4 },
  { id: 5, image: project5 },
  { id: 6, image: project6 },
  { id: 7, image: project7 },
  { id: 8, image: project8 },
];

const ProjectsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto-slide logic
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);

    return () => resetTimeout();
  }, [current, length]);

  const nextSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <section id="projects" className="w-full py-24 px-6 md:px-20 text-black">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#017534]">Portfolio</h2>
        <p className="mt-3 text-gray-600 text-lg">Swipe through my best work</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl h-[400px]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer top-1/2 left-4 transform -translate-y-1/2 bg-white text-[#017534] p-2 rounded-full shadow hover:bg-[#017534] hover:text-white transition z-20"
        >
          <h1><i class="ri-arrow-left-line"></i></h1>
        </button>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 bg-white text-[#017534] p-2 rounded-full shadow hover:bg-[#017534] hover:text-white transition z-20"
        >
         <h1><i class="ri-arrow-right-line"></i></h1>
        </button>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
