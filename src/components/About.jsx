import React from 'react';

const About = () => (
  <div name="about" className=" w-full md:h-screen text-teal-950 mb-10">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="bg-teal-950 p-8">
        <p className="text-white text-4xl font-extrabold inline border-b-4 border-gray-400">About Me</p>
      </div>
      {/* eslint-disable */}
      <p className="text-l mt-10">
      
In my journey as a full-stack software developer, I've discovered a passion for the intersection of technology and education. As a freelancer, I've dedicated over 100 hours to remote pair programming, fostering collaboration with international peers. My proficiency extends to implementing robust testing strategies with tools like Jest, Unittest, Pytest, and RSpec, achieving an impressive 95% test coverage. On the frontend, I specialize in crafting responsive and dynamic user interfaces using React.js. Meanwhile, on the server side, I excel in building logic and API integrations with Ruby on Rails and Flask, and I possess adept database design and maintenance skills using SQL, including PostgreSQL and MySQL.
      </p>
      <br />
      <p className="text-l sm:mb-10">
      With a unique background as an ESL teacher spanning six years, I bring a deep understanding of the education sector's intricacies. This experience equips me with valuable insights into the challenges faced by educators and students alike. Eager to combine my technical expertise with my passion for education, I am enthusiastic about contributing to projects that make a meaningful impact in the tech and education space.
      </p>
     

      
    
     
      
    </div>
  </div>
);

export default About;
