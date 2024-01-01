import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md'; // Icons for email and phone

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-green-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Email Section */}
        <div className="flex flex-col items-center">
          <a href="mailto:cyj0430@gmail.com" className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full hover:bg-blue-200 transition duration-300">
            <MdEmail size={50} className="text-blue-500" />
          </a>
          <span className="mt-4">cyj0430@gmail.com</span>
        </div>

        {/* Phone Section */}
        <div className="flex flex-col items-center">
          <a href="tel:+886987633808" className="flex items-center justify-center w-24 h-24 bg-green-100 rounded-full hover:bg-green-200 transition duration-300">
            <MdLocalPhone size={50} className="text-green-500" />
          </a>
          <span className="mt-4">+886 987 633 808</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
