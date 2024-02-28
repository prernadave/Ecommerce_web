import React from "react";

function Card() {
  const Data = [
    {
      id: "1",
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2847-04-M17.jpg?v=1708327888",
      name: "Grid Block White Checks Shirt",
      price: "1,099",
    },
    {
      id: "2",
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2844-04-M39.jpg?v=1707995544&width=1800",
      name: "Grid Block White Checks Shirt",
      price: "1,099",
    },
    {
      id: "3",
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2748-02-M161.jpg?v=1707990758&width=1800",
      name: "Grid Block White Checks Shirt",
      price: "1,099",
    },
    {
      id: "4",
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2847-04-M50.jpg?v=1708435447&width=1800",
      name: "Grid Block White Checks Shirt",
      price: "1,099",
    },
    {
      id: "5",
      img: "https://www.snitch.co.in/cdn/shop/files/4MST2180-03-M21.jpg?v=1696841179&width=1800",
      name: "Grid Block White Checks Shirt",
      price: "1,099",
    },
    {
      id: "6",
      img: "https://www.snitch.co.in/cdn/shop/files/4MST2094-09-M27.jpg?v=1708950141&width=1800",
      name: "Grid Block White Checks Shirt",
      price: "1,099",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Data.map((item) => (
        <div key={item.id} className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg px-4 py-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="flex justify-center items-center">
            <img src={item.img} alt="Product" className="h-60 w-full object-cover" />
          </div>
          <p className="text-lg font-semibold text-center mt-4">
            {item.name} <br />
            Rs. {item.price}
          </p>

          <div className="grid grid-cols-5 gap-2 mt-4">
            <div className="bg-gray-200 text-center rounded-lg py-2">S</div>
            <div className="bg-gray-200 text-center rounded-lg py-2">M</div>
            <div className="bg-gray-200 text-center rounded-lg py-2">L</div>
            <div className="bg-gray-200 text-center rounded-lg py-2">XL</div>
            <div className="bg-gray-200 text-center rounded-lg py-2">XXL</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
