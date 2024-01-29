import React from 'react';
import budget from '../assets/portfolio/budget.png';
import cruise from '../assets/portfolio/cruise.png';
import math from '../assets/portfolio/math.png';
import malay from '../assets/portfolio/malay.png';
import todo from '../assets/portfolio/todo.png';

const Portfolio = () => (
  <div name="portfolio" className="w-full md:h-screen text-teal-950 sm:mt-10">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="bg-teal-950 p-8 text-white">
        <p className="text-4xl font-extrabold inline border-b-4 border-gray-400">My Portfolio</p>
      </div>
      <p className="py-6 m-5">Explore some of my projects below</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        <div className="shadow-md shadow-gray-600 rounded-lg">
          <img src={cruise} alt="" className="rounded-md duration-200 hover:scale-105" />
          <div className="flex items-center justify-center">
            <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-600 to-teal-700 cursor-pointer text-white rounded-md">Live Link</button>
            <button type="button" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-600 to-teal-700 cursor-pointer text-white rounded-md">Source</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
