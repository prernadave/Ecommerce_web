import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function SideNavbar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 shadow-md bg-gray-200 h-screen">
      <div className="p-4">
        <div>   
          <div className="font-bold text-lg mb-4">Log in</div>
          <FontAwesomeIcon icon={faTimesCircle} className='text-2xl bg-white text-black' />
        </div>

        <ul className="text-gray-600">
          <li className="py-2 border-b border-gray-200">NEW ARRIVAL</li>
          <li className="py-2 border-b border-gray-200">BEST SELLING</li>
          <li className="py-2 border-b border-gray-200">STYLESPIRE LUXE</li>
          <li className="py-2 border-b border-gray-200">SHOP</li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavbar;
