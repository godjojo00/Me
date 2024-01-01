import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import profilePic from '../pics/卡通頭.png'; // Update with the correct path

function Header() {
  return (
    <header className="bg-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-10">
          <Link to="/" className="text-black hover:text-orange-600 transition duration-300">Home</Link>
          <Link to="/gallery" className="text-black hover:text-orange-600 transition duration-300">Gallery</Link>
          <Link to="/contact" className="text-black hover:text-orange-600 transition duration-300">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/godjojo00" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700 transition duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://www.instagram.com/04_jhao_30" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009559838474" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
            <FaFacebook size={28} />
          </a>
          <img src={profilePic} alt="Yi-Jhao Chen" className="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </header>
  );
}

export default Header;
