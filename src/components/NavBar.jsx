import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [navigation, setNavigation] = useState(false);
  const handleNavToggle = () => {
    setNavigation(!navigation);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      handleNavToggle();
    }
  };
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experiences',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-teal-950 fixed">
      <div>
        <h1 className="text-5xl font-logo ml-2">
          Kehinde
        </h1>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>
      <div onClick={handleNavToggle} onKeyDown={handleKeyDown} role="button" tabIndex={0} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {navigation ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navigation && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-teal-950 to-gray-800 text-gray-400">

        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNavigation(!navigation)} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      )}

    </div>
  );
}

export default NavBar;
