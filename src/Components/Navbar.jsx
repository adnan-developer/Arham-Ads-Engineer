import React, { useState } from "react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between text-black p-4">
      <h1 className="text-lg flex items-center gap-1">
        Arham{" "}
        <i className="bg-[#017534] p-1 px-2 rounded-full text-sm text-white">
          Yaseen Tahir
        </i>
      </h1>
      <div className="center-area">
        <h1
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="hidden max-md:block text-xl cursor-pointer"
        >
          <i class="ri-menu-line"></i>
        </h1>
        <div
          className={`mobile-links-modal ${
            isModalOpen ? "flex" : "hidden"
          } w-full h-screen absolute z-90 top-0 left-0 bg-[#F5F5F5] flex flex-col items-center justify-center gap-6 trasnition-all duration-300`}
        >
          <h1 className="absolute top-5 right-5 text-xl cursor-pointer">
            <i
              onClick={() => setIsModalOpen(!isModalOpen)}
              class="ri-close-large-line"
            ></i>
          </h1>
          <a href="#home">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer text-xl">
              Home
            </h1>
          </a>
          <a href="#about">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer hover:text-[#017534]">
              About
            </h1>
          </a>
          <a href="#projects">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer text-xl">
              Projects
            </h1>
          </a>
          <a href="#services">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer text-xl">
              Services
            </h1>
          </a>
          <a href="#contact">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer text-xl">
              Contact Me
            </h1>
          </a>
        </div>
        <div className="links max-md:hidden flex items-center justify-center gap-6">
          <a href="#home">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer hover:text-[#017534]">
              Home
            </h1>
          </a>
          <a href="#about">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer hover:text-[#017534]">
              About
            </h1>
          </a>
          <a href="#projects">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer hover:text-[#017534]">
              Projects
            </h1>
          </a>
          <a href="#services">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer hover:text-[#017534]">
              Services
            </h1>
          </a>
          <a href="#contact">
            <h1 className="text-md hover:rotate-4 transition-all cursor-pointer hover:text-[#017534]">
              Contact Me
            </h1>
          </a>
        </div>
      </div>
      <a href="#contact">
        <button className="group cursor-pointer p-2 px-5 max-md:p-1 max-md:px-4 rounded-full bg-white text-black border relative overflow-hidden">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white max-md:group-hover:text-black">
            Hire Me
          </span>
          <span className="max-md:hidden absolute w-4 h-4 right-1 -bottom-1 bg-[#017534] rounded-full transition-all duration-200 group-hover:w-full group-hover:h-full group-hover:right-0 group-hover:bottom-0 z-0"></span>
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
