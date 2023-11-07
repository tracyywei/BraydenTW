import React from "react";

function FirstPlate() {
  return (
    <div
      className="pt-10 pb-4 sm:pt-24 sm:pb-20 w-full text-center relative"
    >
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
         First Plate
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        A food-inspired dating app prioritizing in-person interaction
      </p>
      <img
          className="w-7/12 rounded-md mx-auto mt-6"
          src="/static/projects/firstplate-cover.png"
        />
    </div>
  );
}

export default FirstPlate;
