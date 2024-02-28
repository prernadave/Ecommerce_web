import React from "react";

function Hero1Sec() {
  return (
    <>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button className="bg-black text-white px-4 py-2 rounded-full border border-white hover:bg-gray-400 hover:text-black transition duration-300">
          New Drops
        </button>
        <button className="bg-transparent text-black px-4 py-2 rounded-full border border-black hover:text-black transition duration-300">
          Top Trending
        </button>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Hero1Sec;
