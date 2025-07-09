import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full bg-[#017534] text-white py-12 px-6 md:px-20 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Branding */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Arham Yaseen Tahir</h1>
          <p className="text-sm text-gray-200">
            Certified Google Ads Expert & Performance Marketer. Helping brands grow through data-driven advertising.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">Services</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <div className="flex space-x-4 text-gray-200">
            <a
  href="https://www.upwork.com/freelancers/~01de1bd6d6027a46da"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition"
>
  <h1 className="text-xl">
    <SiUpwork />
  </h1>
</a>
            <a href="https://www.linkedin.com/in/arhamyaseentahir/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <h1 className='text-xl'><i className="ri-linkedin-box-fill"></i></h1>
            </a>
              <a href="https://www.facebook.com/arhamadsengineer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <h1 className='text-xl'><i className="ri-facebook-fill"></i></h1>
            </a>
            <a href="https://www.instagram.com/arhamadsengineer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <h1 className='text-xl'><i className="ri-instagram-line"></i></h1>
            </a>
            <a href="mailto:arhamadsengineer@gmail.com" className="hover:text-white transition">
              <h1 className='text-xl'><i className="ri-mail-fill"></i></h1>
            </a>
              <a href="https://www.wa.me/923099694096" className="hover:text-white transition">
              <h1 className='text-xl'><i className="ri-whatsapp-line"></i></h1>
            </a>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white mt-10 pt-6 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Arham Yaseen Tahir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
