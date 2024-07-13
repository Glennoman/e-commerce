import React, { useEffect, useState } from "react";
import LayoutWrapper from "../default layout/LayoutWrapper";
import Navbar from "../components/Navbar";
import ProductQuantity from "./ProductQuantity";
import ProductQuantityWithCart from "./ProductQuantityWithCart";
import ProductPage from "./ProductPage";

const Hero = () => {
  const [icons, setIcons] = useState({});

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

  return (
    <main>
      {/* Navbar components here */}
      <Navbar />
      {/* Container grid */}
      <div className="pt-[90px] flex justify-between px-[212px] ">
        {/* grid 6 rows 4 cols */}
        <div className="grid grid-cols-4 grid-rows-5 gap-4 w-[445px] h-[565]">
          {/* main picture takes 4 rows  */}
          <div className="col-span-4 row-span-4 relative">
            <img
              src={icons.product1}
              alt="Hero"
              className="object-cover w-full absolute inset-0 rounded-lg"
            />
          </div>
          <div className="grid-cols-1 grid-rows-1">
            <img
              src={icons.product1TN}
              alt="Thumbnail"
              className=" rounded-lg hover:opacity-50 hover:border-orange hover:border-2 cursor-pointer"
            />
          </div>
          <div className="grid-cols-1 grid-rows-1">
            <img
              src={icons.product2TN}
              alt="Thumbnail"
              className=" rounded-lg hover:opacity-50 hover:border-orange hover:border-2 cursor-pointer"
            />
          </div>
          <div className="grid-cols-1 grid-rows-1">
            <img
              src={icons.product3TN}
              alt="Thumbnail"
              className=" rounded-lg hover:opacity-50 hover:border-orange hover:border-2 cursor-pointer"
            />
          </div>
          <div className="grid-cols-1 grid-rows-1">
            <img
              src={icons.product4TN}
              alt="Thumbnail"
              className=" rounded-lg hover:opacity-50 hover:border-orange hover:border-2 cursor-pointer"
            />
          </div>
          {/* 1st row */}
        </div>
        <div className="flex flex-col justify-center gap-10 w-[445px] h-[426px]">
          <p className="uppercase text-darkGrayishBlue font-bold text-xs">
            Sneaker Company
          </p>
          <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
          <p className="text-darkGrayishBlue">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex gap-5">
            <div>
              <p className="text-2xl font-bold">$125.00</p>
              <p className="text-base font-bold text-darkGrayishBlue line-through">
                $250.00
              </p>
            </div>
            <p className="h-fit bg-black text-white px-2 rounded-lg">50%</p>
          </div>
          <ProductPage />
        </div>
      </div>
      {/* Right side Hero */}
    </main>
  );
};

export default Hero;
