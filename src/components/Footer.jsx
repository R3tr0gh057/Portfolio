import React from 'react';

export default function Footer() {
  return (
    <footer className="w-[90vw] h-16 z-10 bg-[#ffffff00] opacity-0 fixed bottom-10 left-[5.5%] bg-black text-white py-6">
      <div className="footer-container flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="text-lg font-bold">
          {/* Replace with your logo */}
          <img src="" alt="Logo" className="w-24" />
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}