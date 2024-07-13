import React, { useEffect, useState } from "react";
import CartPopUp from "./CartPopUp";

const Navbar = () => {
  const [icons, setIcons] = useState({});
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Dynamically import all SVG, PNG, and JPG files in the /images directory
    const importIcons = import.meta.glob("../images/*.{svg,png,jpg}");

    // load all icons and set them in the state
    const loadIcons = async () => {
      const iconsMap = {}; // Create an empty object to store the icons
      for (const path in importIcons) {
        const module = await importIcons[path](); // Import the icon
        const iconName = path
          .split("/")
          .pop()
          .replace(/\.(svg|png|jpg)$/, ""); // Get the icon name
        iconsMap[iconName] = module.default; // Add the icon to the icons object
      }
      setIcons(iconsMap); // Set the icons in the state
    };

    loadIcons(); // Call the function to load the icons
  }, []);

  // When clicking on cart icon open cart and when clicking on cart icon again close cart and when clicking on remove
  const toggleCart = () => {
    if (isCartVisible) {
      setIsCartVisible(false);
    } else {
      setIsCartVisible(true);
      setCart([]);
    }
  }; // [1]

  return (
    <nav className="p-4 pb-10 border-b-2 border-lightGrayishBlue">
      <div className="flex justify-between items-center">
        <div className="flex justify-start gap-[59px]">
          <img src={icons.logo} alt="Logo" className="w-[137px] h-[20px]" />
          {/* Middle section */}
          <ul className="flex justify-between items-center gap-8">
            <li>
              <a href="#" className="text-darkGrayishBlue">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-darkGrayishBlue">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-darkGrayishBlue">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-darkGrayishBlue">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right section */}
        <div className="">
          <ul className="flex justify-items-end items-center gap-11">
            <li>
              <a href="#" className="text-darkGrayishBlue">
                <img src={icons.cart} alt="Cart" onClick={toggleCart} />
              </a>
            </li>
            <li>
              <a href="#" className="text-darkGrayishBlue">
                <img src={icons.avatar} width={50} alt="Avatar" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isCartVisible && <CartPopUp cart={cart} closeCart={toggleCart} />}
      {/* When clicking on cart icon open cart */}
    </nav>
  );
};

export default Navbar;
