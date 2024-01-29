import React from 'react';
import { BsGithub, BsLinkedin, BsFillPersonLinesFill } from 'react-icons/bs';
import { SiMinutemailer } from 'react-icons/si';

const MediaIcons = () => {
  const icons = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <BsLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github
          <BsGithub size={30} />
        </>
      ),
      href: 'https://github.com',
    },
    {
      id: 3,
      child: (
        <>
          Email
          <SiMinutemailer size={30} />
        </>
      ),
      href: 'mailto:kennyhensaw001@icloud.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'kenny_henshaw_resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {icons.map((icon) => (
          <li key={icon.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-teal-950 ${icon.style}`}>
            <a href={icon.href} className="flex justify-between items-center w-full text-white" download={icon.download} target="_blank" rel="noreferrer">
              {icon.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaIcons;
