import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo or Name */}
          <div className="text-2xl font-bold">Yogesh Sunar</div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaGithub size={30} className="text-white" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin size={30} className="text-white"  />
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-blue-400 transition">
              <MdAttachEmail size={38} className="text-white"   />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6 text-sm text-gray-400">
          © 2025 Yogesh Sunar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
