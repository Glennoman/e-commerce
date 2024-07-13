import React from "react";
import { useEffect, useRef } from "react";
import { loadImages } from "../images/loadImages";

const images = loadImages();

const CartPopUp = ({ cart, closeCart, closeCartIcon }) => {
  const popupRef = useRef(null);

  // Close the popup when clicking outside of it
  useEffect(() => {
    // Function to close the cart when clicking outside of it
    const handleClickOutside = (event) => {
      // If the popup exists and the click is outside of it then close the cart
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // How does closeCart work? It's a function that takes an id and removes the item from the cart
        // It's passed as a prop from p component
        closeCart();
      }
    };
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeCart]); // Only re-run the effect if closeCart changes

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-start justify-end pt-[80px] pr-[150px]">
      <div id="cart-popup" className="bg-white p-8 w-96 rounded-lg shadow-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          <a href="#" onClick={closeCartIcon}>
            <img src={images.close} alt="Close" className="w-auto h-4" />
          </a>
        </div>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={images[item.imageKey]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-darkGrayishBlue">{item.name}</h3>
                  <p className="text-darkGrayishBlue">
                    ${item.price} x {item.quantity}
                    <span className="text-black font-bold">
                      &emsp; $ {(item.quantity * item.price).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <button
                className="text-red-500"
                onClick={() => closeCart(item.id)}
              >
                <img src={images.delete} alt="Close" />
              </button>
            </li>
          ))}
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPopUp;

// Where is closeCart defined in the CartPopUp component?
