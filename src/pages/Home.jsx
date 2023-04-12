import React, { useRef } from "react";
import Main_home from "../components/main-home/Main_home";
import video from ".././assets/Video_Energy_80MB.mp4";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div>
      <header className="relative h-[100%] xl:h-[100vh] w-full overflow-hidden  ">
        <video autoPlay loop muted className="w-[full] object-contain    ">
          <source src={video} type="video/mp4" />
        </video>
        <div className="container mx-auto px-2 lg:px-14 md:px-0  absolute h-full  flex items-center z-10 inset-0 justify-center  lg:justify-start">
          <div className="  font-extrabold  l   ">
            <h1 className="  text-white lg:text-text-color text-center lg:text-start text-base h-[20px] sm:text-3xl md:text-4xl xl:text-5xl  sm:h-[150px] md:h-[175px] lg:h-[200px]  transition ease-out transition-duration ">
              <Typewriter
                options={{
                  strings: [
                    "SUSTAINARBLE ENGERGY <br/> GREEN HYDROGEN  <br /> CAPTURING CARBON    <br /> WASTE MANAGEMENT ",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay: 100,
                  deleteSpeed: 5,
                  pauseFor: 2000,
                  skipAddStyles: true,
                }}
              />
            </h1>
          </div>
        </div>
        <a
          href="https://calendly.com/swissenergyhub"
          target={"_blank"}
          className="  fixed z-30 top-[50%] translate-y-[-50%] -right-[50px] sm:-right-[55px] lg:-right-[77px]   font-bold text-base tracking-[1px]
           bg-bg-color text-white w-[135px]  sm:w-[160px] lg:w-[200px] flex items-center justify-center sm:h-[50px] h-[35px] 
            -rotate-90"
        >
          Let's talk
        </a>
      </header>
      {/* <Main_home /> */}
    </div>
  );
}

export default Home;
