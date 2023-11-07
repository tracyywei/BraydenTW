import React from "react";

function Cesta() {
  return (
    <div
      className="pt-10 pb-4 sm:pt-24 sm:pb-20 w-full text-center relative"
    >
       <div
        className="pt-10 pb-4 sm:pt-24 sm:pb-20 w-10/12 text-center relative bg-white rounded-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative text-black">
        <span className="heroShiny1 text-fun-pink"><b>Police Militarization Data</b></span>
        </h1>
        <p className="text-black text-xl sm:text-2xl max-w-3xl m-auto">
        Understanding police militarization quantatiatively and empathetically
        </p>
        <img
            className="w-8/12 rounded-3xl mx-auto mt-6"
            src="/static/projects/cesta-cover.png"
          />
          <div className="flex flex-row justify-between">
            <div className="w-fit mx-auto mt-5 cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white text-xl rounded-full  bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
              <a href="https://www.figma.com/proto/HhTDVx84H5zo5sCieRLGdI/mei-ksr?node-id=109-255&starting-point-node-id=109%3A255&scaling=scale-down&mode=design&t=ErXAjNz0Fll1Seld-1">figma ↗</a>
            </div>
            <div className="w-fit mx-auto mt-5 cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white text-xl rounded-full  bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
              <a href="https://github.com/know-systemic-racism/ca-mei-app">github ↗</a>
            </div>
          </div>
      </div>

      <div
        className="pt-10 pb-4 sm:pt-24 sm:pb-20 w-10/12 text-center relative bg-white rounded-3xl mt-20 mx-auto"
      >
        <h1 className="text-white text-4xl sm:text-3xl inline-block w-auto mx-auto mb-8 relative">
        <b><span className="heroShiny1 text-fun-pink">🔮 Overview</span></b>
        </h1>
        <p className="text-black text-lg sm:text-xl max-w-3xl m-auto text-left">
        A web app and data project by the Stanford Know Systemic Racism Project, with partners American Friends Service Committee (AFSC) and Electronic Frontier Foundation (EFF)
        <br/><br/>As a research assistant for Know Systemic Racism, I built a wireframe and coded a web-based application that makes the military equipment inventory of California law enforcement agencies visible to legislators and citizens.
        </p>
        <div className="flex flex-row justify-center">
          <p className="text-black text-lg sm:text-xl max-w-3xl mr-8">
            <br/><b>Team</b>
            <br/>Tracy Wei
            <br/>Nicole Coleman
            <br/>Felicia Smith
          </p>
          <p className="text-black text-lg sm:text-xl max-w-3xl">
            <br/><b>My Role</b>
            <br/>Designer
            <br/>Developer
          </p>
        </div>
      </div>

      <div
        className="pt-10 pb-4 sm:pt-24 sm:pb-20 w-10/12 text-center relative bg-white rounded-3xl mt-20 mx-auto"
      >
        <h1 className="text-white text-4xl sm:text-3xl inline-block w-auto mx-auto mb-8 relative">
         <b><span className="heroShiny1 text-fun-pink">🧩 Problem Space</span></b>
        </h1>
        <div className="flex flex-row justify-center">
          <p className="text-black text-lg sm:text-xl max-w-3xl mr-8 text-left">
            California State Assembly Bill 481 requires law enforcement agencies to post annual reports about the military equipment that they own.
            <br></br><br></br>
            <i>"The public has a right to know about any funding, acquisition, or use of military equipment by state or local government officials, as well as a right to participate in any government agency’s decision to fund, acquire, or use such equipment."</i>
            </p>
        </div>
        <p className="text-black text-lg sm:text-xl max-w-3xl m-auto">
          <span className="text-2xl"><br></br><b>But what exactly is this military equipment and what is it used for?</b></span>
        </p>
        <div className="flex flex-row justify-center">
          <p className="text-black text-lg sm:text-xl max-w-3xl mr-8 text-left">
            <br/>This web app is intended to make it easier for the public to understand.
          </p>
        </div>
          
      </div>

      <div
        className="pt-10 pb-4 sm:pt-24 sm:pb-20 w-10/12 text-center relative bg-white rounded-3xl mt-20 mx-auto"
      >
        <h1 className="text-white text-4xl sm:text-3xl inline-block w-auto mx-auto mb-8 relative">
         <b><span className="heroShiny1 text-fun-pink">💡 Ideation</span></b>
        </h1>
        <div className="flex flex-row justify-center">
          <p className="text-black text-lg sm:text-xl max-w-3xl mr-8 text-left">
          As an intern brought on to this existing project, I was tasked with designing a wireframe in Figma for the web application, which would be used as a foundation for the rest of the project. 
          <br/><br/>I was given the following product requirements that I turned into features in the wireframe:
          <br/><br/> • Visualize police military equipment → <b>A filterable and searchable gallery view of military equipment</b>
          <br/><br/> • Allow users to find police militarization data for each law enforcement agency → <b>A map view for users to filter and select law enforcement agencies to access more details</b>
          <br/><br/> • Allow users to find their local law enforcement agency → <b>Incorporate filtering and searching by zipcode and location in gallery and map view</b>
          <br/><br/> • Help users feel personally connected to police militarization → <b>Visualize military equipment inventory in the user's local law enforcement agency & county statistics</b>
          <br/><br/>The data used to power the project came from policy manuals that recorded the equipment owned by law enforcement agencies and the associated cost.

          </p>
        </div>
      </div>

      <div
        className="pt-1 pb-1 sm:pt-5 sm:pb-5 w-10/12 text-center relative bg-white rounded-3xl mt-20 mx-auto"
      >
        <h1 className="text-white text-4xl sm:text-3xl inline-block w-auto mx-auto relative">
         <b><span className="heroShiny1 text-fun-pink">🚀 User Flow</span></b>
        </h1>
        <div className="flex flex-row justify-center">
          <p className="text-black text-lg sm:text-xl max-w-3xl mr-8 text-left">
          <br/>To help the general public better understand military equipment, I took an approach that prioritized both quantitative evidence through data as well as empathy through the way in which I presented and visualized the data.
          </p>
        </div>
      </div>
      <img
            className="w-11/12 rounded-3xl mx-auto mt-6"
            src="/static/projects/userflow-cesta.png"
          />

      <div
        className="pt-1 pb-1 sm:pt-5 sm:pb-5 w-10/12 text-center relative bg-white rounded-3xl mt-20 mx-auto"
      >
        <h1 className="text-white text-4xl sm:text-3xl inline-block w-auto mx-auto relative">
         <b><span className="heroShiny1 text-fun-pink">🎨 Medium-Fidelty Prototype</span></b>
        </h1>
      </div>
      <img
            className="w-11/12 rounded-3xl mx-auto mt-6"
            src="/static/projects/cesta-wireframe.png"
          />

      <div
        className="pt-1 pb-1 sm:pt-5 sm:pb-5 w-10/12 text-center relative bg-white rounded-3xl mt-20 mx-auto"
      >
        <h1 className="text-white text-4xl sm:text-3xl inline-block w-auto mx-auto relative">
         <b><span className="heroShiny1 text-fun-pink">⚒️ Project Features</span></b>
        </h1>
        <div className="flex flex-row justify-center">
          <img
            className="w-8/12 rounded-3xl mx-auto mt-6"
            src="/static/projects/cesta-frames/1.png"
          />
          <p className="text-black text-md sm:text-md max-w-3xl mr-8 text-left ml-5">
            <br/>
            <b><span className="heroShiny1 text-fun-pink text-lg sm:text-lg">Personalized Military Equipment Inventory View</span></b>
            <br/><br/>A gallery view of military equipment that filters inventory by where the user lives so that users can learn more about the military equipment in their local law enforcement agencies. 
            <br/>The goal is to <b>make the user feel connected to this issue by helping them uncover what is happening in their homes.</b>
          </p>
        </div>

        <div className="flex flex-row justify-center">
          <img
            className="w-8/12 rounded-3xl mx-auto mt-6"
            src="/static/projects/cesta-frames/2.png"
          />
          <p className="text-black text-md sm:text-md max-w-3xl mr-8 text-left ml-5">
            <br/>
            <b><span className="heroShiny1 text-fun-pink text-lg sm:text-lg">Law Enforcement Agency (LEA) Map View</span></b>
            <br/>A map view page for users to filter and select specific law enforcement agencies to learn more details about their respective inventories
          </p>
        </div>

        <div className="flex flex-row justify-center">
          <img
            className="w-8/12 rounded-3xl mx-auto mt-6"
            src="/static/projects/cesta-frames/3.png"
          />
          <p className="text-black text-md sm:text-md max-w-3xl mr-8 text-left ml-5">
            <br/>
            <b><span className="heroShiny1 text-fun-pink text-lg sm:text-lg">Detailed LEA Map View</span></b>
            <br/>Once the user has selected a law enforcement agency to view, there is a more detailed map view showing the county boundaries as well as more detailed information about the LEA.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Cesta;
