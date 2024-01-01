import React from 'react';
import fynoScreenshot from '../pics/fyno.png'; // Ensure the path is correct
import inklinkScreenshot from '../pics/inklink.png'; // Ensure the path is correct

function Gallery() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center space-y-10">
        {/* Fyno Project */}
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold mb-4">Fyno - Find Your Next Owner</h2>
          <img src={fynoScreenshot} alt="Fyno Website" className="w-full md:max-w-2xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
          <p className="text-center mt-4">
            A platform dedicated to facilitating pet adoptions, making it easier for pets to find their next owners.
          </p>
        </div>

        {/* Inklink Project */}
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold mb-4">Inklink</h2>
          <img src={inklinkScreenshot} alt="Inklink Website" className="w-full md:max-w-2xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
          <p className="text-center mt-4">
          Inklink is a dynamic platform tailored for the exchange and sale of secondhand books. It offers a user-friendly interface for book lovers to connect, buy, and sell their books, fostering a community of reading enthusiasts and sustainable book circulation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
