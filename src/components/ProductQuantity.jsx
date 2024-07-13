import React, { useState } from "react";
import { loadImages } from "../images/loadImages";

const images = loadImages();

const ProductQuantity = ({ initialQuantity = 0, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Function to handle the increment of the quantity
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onQuantityChange(quantity + 1);
  };

  // Function to handle the decrement of the quantity
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 w-fit bg-lightGrayishBlue p-3 rounded-lg">
      <button onClick={handleDecrement} className="px-3 py-1 ">
        <img src={images.minus} alt="Minus" />
      </button>
      <span className="font-bold">{quantity}</span>
      <button onClick={handleIncrement} className="px-3 py-1 ">
        <img src={images.plus} alt="Plus" />
      </button>
    </div>
  );
};

export default ProductQuantity;
