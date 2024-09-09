import React from "react";
import pic from "./assets/pic.jpg";
// Import the new font (use Google Fonts in index.html or through CSS)

const Home = () => {
  return (
    <div className="flex flex-row justify-center pt-3 gap-0 h-full w-[100vw] bg-gradient-to-b from-gray-900 via-gray-800 to-black bg-no-repeat bg-cover items-center min-h-screen">
      {/* Left Side - Glass Background with Full Width */}
      <div className="w-[50%] h-full p-8 bg-white/10 backdrop-blur-lg rounded-none shadow-none text-white flex flex-col gap-5 justify-center items-start">
        <h1 className="font-bold text-5xl relative text-white">
          Disk/CPU Scheduling Algorithms
        </h1>
        <p className="text-lg font-normal">
        Explore and interact with key Operating System algorithms in real-time. <br/>
        This web app lets you visualize and control simulations for <br />
        Round Robin CPU Scheduling, SCAN Disk Scheduling, MRU Page Replacement, and the Banker’s Deadlock algorithm.
        </p>
        <div className="ease-in hover:ease-out duration-300 transition">
          <a
            href="./simulators"
            className="p-3 text-lg font-bold bg-gray-700 text-white rounded-md hover:bg-blue-700 hover:text-gray-100 hover:shadow-lg transition-all duration-300"
          >
            Run Simulator
          </a>
        </div>
      </div>

      {/* Right Side - Image Covering Half of the Screen */}
      <div className="w-[50%] h-full">
        <img
          className="w-full h-full object-cover"
          src={pic}
          alt="Disk/CPU Scheduling"
        />
      </div>
    </div>
  );
};

export default Home;
