import React from "react";
import meditestPNG from "../assets/portfolio/meditest.png";
import programmingPNG from "../assets/portfolio/programming.png";
import uniPNG from "../assets/portfolio/uni_page.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      href: 'https://schmidtpeti.github.io/meditest.hu/',
      code : 'https://github.com/SchmidtPeti/meditest.hu',
      src: meditestPNG,
      text: "It's plain static website, using own css file and html structure."
    },
    {
      id: 2,
      href: 'https://schmidtpeti.github.io/Programming/ ',
      code: 'https://github.com/SchmidtPeti/Programming',
      src: programmingPNG,
      text : 'You can find most of the basic algorithms here coded in javascript.'
    },
    {
      id: 3,
      href: 'https://egyetem1.web.app/',
      code: 'https://github.com/SchmidtPeti/Uni_learning',
      src: uniPNG,
      text: 'This project was made to test whether the student is ready for exam or not. There are tasks from the lecture and also solution. You can even select the subject.'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-3xl mt-4 block">Check out some of my work right here</p>
          <p className="py-6 ">Most of my work are in Hungarian</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href,code,text }) => (
            <div>
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a href={code}>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
            <div key={(1000-id)}>
                <p className="mt-5">
                  {text} 
                </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;