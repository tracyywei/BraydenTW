import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects built with <b>{tag}</b>
            <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Projects
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          From these projects, I've learned how to:
        </p>
        
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-xl max-w-3xl m-auto text-left">
        <br></br>- creating wireframes, prototypes, and low-fidelty to high-fidelity design
        <br></br>- test and rapidly iterate based on user feedback
        <br></br>- collaborate with cross-functional teams on designs
        <br></br>- & conduct user research to gather insights and inform design decisions
    </p>
      )}
    </div>
  );
}

export default Heading;
