import React from 'react';
import resume from '../pics/履歷.pdf';
import profilePic from '../pics/帥照.jpg'; // Replace with your actual profile picture path

function Me() {
  return (
    <div className="relative md:min-h-screen">
      <img src={profilePic} alt="Yi-Jhao Chen" className="w-full h-auto md:absolute md:inset-0" />
      <div className="md:absolute md:inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
        <h1 className="text-6xl font-bold text-white threeD-text">Joe Chen</h1>
        <p className="text-xl mt-4 text-white">
          Hi! I'm Yi-Jhao, a passionate developer with an interest in web technologies.
          {/* Add more to your self-introduction here */}
        </p>
        <div>
          <a href={resume} download className="bg-cyan-500 hover:bg-purple-800 text-white font-bold py-1 px-4 rounded transition duration-300 w-1/4">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Me;
