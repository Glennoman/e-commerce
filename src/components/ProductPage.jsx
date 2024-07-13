import React, { useState, useEffect } from "react";
import ProductQuantityWithCart from "./ProductQuantityWithCart";
import CartPopUp from "./CartPopUp";

//
const ProductPage = () => {
  const [products, setProducts] = useState([]); // [1]
  const [cart, setCart] = useState([]);
  // Cart visibility state and function to toggle it
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Retrieve data from json file
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setIsCartVisible(true);
  };

  // close cart and remove item from cart
  const closeCart = () => {
    setIsCartVisible(false);
    setCart([]);
  };

  // close cart without removing item from cart
  const closeCartIcon = () => {
    // Close the cart without removing the items
    setIsCartVisible(true);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <ProductQuantityWithCart
            product={product}
            onAddToCart={(quantity) => addToCart(product, quantity)}
          />
        </div>
      ))}
      {isCartVisible && (
        <CartPopUp
          cart={cart}
          closeCart={closeCart}
          closeCartIcon={closeCartIcon}
        />
      )}
    </div>
  );
};

export default ProductPage;
