import React from 'react';
import budget from '../assets/portfolio/budget.png';
import cruise from '../assets/portfolio/cruise.png';
import math from '../assets/portfolio/math.png';
import malay from '../assets/portfolio/malay.png';
import todo from '../assets/portfolio/todo.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: cruise,
      liveLink: 'https://cruisefleet.onrender.com/',
      sourceLink: 'https://github.com/Armynerh/cruise-fleet-backend',
    },
    {
      id: 2,
      src: math,
      liveLink: 'https://math-magic-0phk.onrender.com/',
      sourceLink: 'https://github.com/Armynerh/math_magicians',
    },
    {
      id: 3,
      src: malay,
      liveLink: 'https://malaysia-metrics.onrender.com/',
      sourceLink: 'https://github.com/Armynerh/malaysia_vaccination_metrics',
    },
    {
      id: 4,
      src: todo,
      liveLink: 'https://armynerh.github.io/todo-list-project/dist/',
      sourceLink: 'https://github.com/Armynerh/todo-list-project',
    },
    {
      id: 5,
      src: budget,
      liveLink: 'https://budge-it-6aex.onrender.com/',
      sourceLink: 'https://github.com/Armynerh/budget_app',
    },
  ];
  return (
    <div name="portfolio" className="w-full md:h-screen text-teal-950">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="bg-teal-950 p-8 text-white">
          <p className="text-4xl font-extrabold inline border-b-4 border-gray-400">My Portfolio</p>
        </div>
        <p className="py-6">See some of my recent projects below</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({
            id, src, liveLink, sourceLink,
          }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-600 to-teal-700 cursor-pointer text-white rounded-md">Live</a>
                <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-600 to-teal-700 cursor-pointer text-white rounded-md">Source</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
