import React from "react";
import { Link as ScrollLink } from "react-scroll";

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
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
          <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
            </div>
      </div>
    </>
  );
}

export default Hero;
