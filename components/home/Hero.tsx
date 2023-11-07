import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { skills } from "@/data/content/home";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <img src="/static/logos/Headshot-min.jpg"
            className="rounded-full w-44 h-44"></img><br/>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        👋 Hi, I'm <span className="heroShiny1 text-fun-pink">Tracy</span>!{" "}
        </h1>
        <p className="text-2xl mb-5">I enjoy <span className="heroShiny2 text-fun-pink">designing</span> and <span className="heroShiny2 text-fun-pink">building</span> experiences with tech.
          </p>
          <p className="text-xl mb-5">📍 Palo Alto, CA
          </p>
          <p className="text-xl mb-5">👩🏻‍🎓 Studying Computer Science and Design at Stanford
          </p>
          <br></br>
          <div className="flex flex-col md:flex-row justify-between relative">
            <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
              Skills
            </h2>
            <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
              {skills.map((item, index) => {
                return (
                  <div
                    title={item.title}
                    key={index}
                    className="w-10 mx-auto flex items-center flex-col justify-center"
                  >
                    <img src={item.icon} style={item.style} />
                    <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <br/><br/>
      <div className="flex flex-row justify-between">
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white text-xl rounded-full  bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
              <a href="mailto:tracywei@stanford.edu">email ↗</a>
            </div>
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
              <a href="https://www.linkedin.com/in/tracy-wei">linkedin ↗</a>
            </div>
            <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
              <a href="https://drive.google.com/file/d/1-lPCohWWUw_-ErLahxC6aWKv2vn43buT/view?usp=sharing">resume ↗</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between relative">
          <br></br>
      </div>
      </div>
    </>
  );
}

export default Hero;
