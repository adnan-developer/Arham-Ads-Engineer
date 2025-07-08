import React, { useEffect, useState } from "react";
import Pattern from "../assets/topography.svg"

const Landing = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="w-full flex flex-col items-center justify-center pt-10 relative overflow-hidden h-screen">
        <img className="w-full h-full absolute object-cover opacity-2" src={Pattern} alt="" />
      <div
        className="glow-follower w-72 h-72 bg-[#017534] opacity-30 blur-3xl rounded-full absolute pointer-events-none transition-transform duration-100"
        style={{
          transform: `translate(${position.x - 700}px, ${position.y - 400}px)`,
        }}
      ></div>
      <div className="flowing-boxes">
        <div className="box animate-float-up-down animate-infinite-left-to-right absolute top-12 left-5 py-1 px-6 bg-red-200 rounded-full">
            Google Ads Expert
        </div>
           <div className="box animate-float-left-right absolute max-md:top-200 top-80 right-5 py-1 px-6 bg-yellow-200 rounded-full">
            Specialize in Search
        </div>
           <div className="box animate-float-up-down absolute max-md:top-170 max-md:left-8 top-99 left-60 py-1 px-6 bg-green-200 rounded-full">
            Display
        </div>
           <div className="box animate-float-left-right absolute top-18 right-5 py-1 px-6 bg-blue-200 rounded-full">
            P-Max
        </div>
           <div className="box animate-float-up-down absolute top-30 left-180 py-1 px-6 bg-orange-200 rounded-full">
            Smart Campaigns
        </div>
           <div className="box animate-float-left-right max-md:left-16 max-md:top-40 absolute top-50 left-50 -rotate-45 py-1 px-6 bg-purple-200 rounded-full">
            Performance Marketer
        </div>
      </div>
      <h1 className="text-5xl font-semibold z-10">Hi, I'm Arham</h1>
      <h1 className="text-6xl mt-6 text-center z-10">
        Certified to Perform. <br />
        <span className="text-[#017534] mt-2">Driven to Deliver.</span>
      </h1>
      <div className="cta mt-16 flex flex-col items-center justify-center z-10">
        <h1>Let's get to know each other</h1>
        <h1 className="text-black text-4xl animate-bounce mt-4">
          <i className="ri-arrow-down-wide-line"></i>
        </h1>
      </div>
    </section>
  );
};

export default Landing;
