import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

function Home() {
  return (
    <div name="home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl sm:text-7xl font-extrabold text-teal-950">Hi, I&lsquo;m Kehinde and I am a Fullstack Developer</h2>
          <p className="text-teal-950 py-4 max-w-md">
            I used to work as an ESL Teacher, now I am transforming Education with Technology.
            I build web applications using React/Redux, Ruby on Rails, Python, and Postgresql
          </p>

          <div>
            <button type="submit" className="text-white w-fix px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-600 to-teal-700 cursor-pointer group">
              Checkout My Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
