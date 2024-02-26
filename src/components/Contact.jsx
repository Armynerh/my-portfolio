import React from 'react';

const Contact = () => (
  <div name="contact" className="w-full md:h-screen text-teal-950">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="bg-teal-950 p-8">
        <p className="text-white text-4xl font-extrabold inline border-b-4 border-gray-400">Contact Me</p>
      </div>
      <p className="py-6">If you&lsquo;d like to chat about new projects, Please get in touch</p>
      <div className="flex justify-center items-center">
        <form action="https://formspree.io/f/xayreqev" method="POST" className="flex flex-col w-full md:w-1/2 ">
          <input type="text" name="fullname" placeholder="Fullname" className="p-2 border-2 border-teal-950 focus:outline-none" />
          <input type="email" name="email" placeholder="Email Address" className="p-2 my-6 border-2 border-teal-950 focus:outline-none" />
          <textarea name="message" rows={10} className="p-2 border-2 border-teal-950 focus:outline-none" placeholder="Enter your message here" />
          <button type="submit" className="text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r from-gray-600 to-teal-700 cursor-pointer w-fit">Chat with me</button>

        </form>
      </div>
    </div>
  </div>
);

export default Contact;
