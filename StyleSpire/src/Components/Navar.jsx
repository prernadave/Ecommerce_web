import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faHeart, faShoppingBag, faCamera, faBars } from "@fortawesome/free-solid-svg-icons";

function Navar() {
  return (
    <>
      <div className="bg-black w-full h-8">
        <p className="text-white text-center flex justify-center items-center">
          25% OFF ON SHOES & SUNGLASSES USE CODE STYLE250
        </p>
      </div>
      <div className="flex justify-around items-center h-20">   
        <div>
        <FontAwesomeIcon icon={faBars} className="fa-thin" />
      </div>

      <div>LOGO</div>
      <div className="flex justify-around gap-9 " >

        <FontAwesomeIcon icon={faUser} className="fa-thin text-md" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-thin" />
        <FontAwesomeIcon icon={faHeart} className="fa-thin" />
        <FontAwesomeIcon icon={faShoppingBag} className="fa-thin" />
        <FontAwesomeIcon icon={faCamera} className="fa-thin" />
      </div>
      </div>
   
      <div>
        <hr />
      </div>
    </>
  );
}

export default Navar;
