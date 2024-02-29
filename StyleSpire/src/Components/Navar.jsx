import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faShoppingBag,
  faCamera,
  faBars,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import SideNavbar from "./SideNavbar";

function Navbar() {
  const [isLogged, setIsLogged] = React.useState(false);

  const toggleSideNavbar = () => {
    setIsLogged(!isLogged);
  };

  const closeSideNavbar = () => {
    setIsLogged(false);
  };

  return (
    <>
      <div className="bg-black w-full h-8">
        <p className="text-white text-center flex justify-center items-center">
          25% OFF ON SHOES & SUNGLASSES USE CODE STYLE250
        </p>
      </div>
      <div className="flex justify-around items-center h-20">
        <div>
          {isLogged ? (
            <FontAwesomeIcon
              onClick={closeSideNavbar}
              icon={faTimesCircle}
              className="fa-thin cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              onClick={toggleSideNavbar}
              icon={faBars}
              className="fa-thin cursor-pointer"
            />
          )}
          {isLogged && <SideNavbar />}
        </div>

        <div>LOGO</div>
        <div className="flex justify-around gap-9">
          <FontAwesomeIcon icon={faUser} className="fa-thin text-md" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-thin" />
          <FontAwesomeIcon icon={faHeart} className="fa-thin" />
          <FontAwesomeIcon icon={faShoppingBag} className="fa-thin" />
          <FontAwesomeIcon icon={faCamera} className="fa-thin" />
        </div>
      </div>

      <div>
        <hr />

        <div>
          <hr />

          <div
            className="bg-cover bg-center h-screen w-full"
            style={{
              backgroundImage:
                "url('https://www.snitch.co.in/cdn/shop/files/New-trending-banner-option-2-web_1400x.webp?v=1708326042')",
            }}
          >
            {/* Content inside the div */}
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{
          backgroundImage:
            "url('https://www.snitch.co.in/cdn/shop/files/banner-for-bottom-web_1400x.webp?v=1708196868')",
        }}
      ></div>
    </>
  );
}

export default Navbar;
