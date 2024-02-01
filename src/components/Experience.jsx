import React from 'react';
import flask from '../assets/frameworks/flask.svg';
import js from '../assets/frameworks/js.png';
import python from '../assets/frameworks/python.png';
import postgre from '../assets/frameworks/postgre.png';
import github from '../assets/frameworks/github.png';
import html5 from '../assets/frameworks/html5.png';
import ruby from '../assets/frameworks/ruby.png';
import structure from '../assets/frameworks/structure.png';
import css from '../assets/frameworks/css.png';

const Experience = () => {
  const frameworks = [
    {
      id: 1,
      src: html5,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: js,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: ruby,
      title: 'Ruby on rails',
      style: 'shadow-red-500',
    },
    {
      id: 5,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-300',
    },
    {
      id: 6,
      src: structure,
      title: 'React',
      style: 'shadow-teal-700',
    },
    {
      id: 7,
      src: flask,
      title: 'Flask',
      style: 'shadow-gray-900',
    },
    {
      id: 8,
      src: postgre,
      title: 'PosgreSQL',
      style: 'shadow-sky-800',
    },
    {
      id: 9,
      src: github,
      title: 'Github',
      style: 'shadow-gray-900',
    },
  ];
  return (
    <div name="experience" className="w-full md:h-screen text-teal-950 sm:mt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="bg-teal-950 p-8 text-white">
          <p className="text-4xl font-extrabold inline border-b-4 border-gray-400">My Experience</p>
        </div>
        <p className="py-6">  Here are some of the languages and Frameworks I&lsquo;ve used</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm:px-0">
          {frameworks.map(({
            id, src, title, style,
          }) => (
            <div key={id} className={`shadow-md shadow-gray-600 duration-500 hover:scale-105 py-2 rounded-lg text-center ${style}`}>
              <img src={src} alt="" className="mx-auto  w-20 rounded-md" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
