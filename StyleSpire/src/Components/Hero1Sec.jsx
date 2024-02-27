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

      <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg px-4 py-4">
        <div className="flex justify-center items-center">
          <img
            src="https://www.snitch.co.in/cdn/shop/files/4MSS2847-04-M17.jpg?v=1708327888"
            alt="Image"
          />
        </div>
        <p className="text-lg font-semibold text-center mt-4">
          {" "}
          Grid Block White Checks Shirt <br />
          Rs. 1,099
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className=" text-black rounded-lg p-2 flex justify-center items-center border">
            S
          </div>
          <div className=" text-black rounded-lg p-2 flex justify-center items-center border">
            M
          </div>
          <div className=" text-black rounded-lg p-2 flex justify-center items-center border">
            L
          </div>
          <div className=" text-black rounded-lg p-2 flex justify-center items-center border">
            XL
          </div>
          <div className=" text-black rounded-lg p-2 flex justify-center items-center border">
            XXL
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1Sec;
