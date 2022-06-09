import React from "react";
import { TbArrowRightSquare } from 'react-icons/tb'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Wes</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a full stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          I'm a full-stack developer that specializes in implementing designs to
          functional fullstack web applications.
        </p>
        <div className="wrapper">
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            <button className="group border-2 px-6 py-3 my-2 flex items-center">
              <h6 className="jump">View Work</h6>
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowRightSquare className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        <div className="wrapper">
          <Link activeClass="active" to="contact" smooth={true} duration={500}>
            <button className="group border-2 px-6 py-3 my-2 flex items-center">
              <h6 className="jump">Hit Me Up!</h6>
              <span className="group-hover:rotate-90 duration-300">
              <TbArrowRightSquare className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
