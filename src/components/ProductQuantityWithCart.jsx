import React, { useState } from "react";
import { loadImages } from "../images/loadImages";

const images = loadImages();

const ProductQuantityWithCart = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    if (quantity >= 0) {
      onAddToCart(quantity);
      setQuantity(0);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex gap-5 bg-lightGrayishBlue rounded-lg px-2 py-2.5">
          <button onClick={handleDecrement} className="px-3 py-1">
            <img src={images.minus} alt="Minus" />
          </button>
          <span className="font-bold">{quantity}</span>
          <button onClick={handleIncrement} className="px-3 py-1">
            <img src={images.plus} alt="Plus" />
          </button>
        </div>
        <button
          className="px-[56px] py-3 bg-orange text-black text-xs font-bold hover:bg-orange/50 rounded-lg"
          onClick={handleAddToCart}
        >
          <img
            src={images.cart}
            alt="Cart"
            className="inline-block mr-2 scale-75"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductQuantityWithCart;
