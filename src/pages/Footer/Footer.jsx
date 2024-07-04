import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/wasim475"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://facebook.com/wh715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Wasim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
