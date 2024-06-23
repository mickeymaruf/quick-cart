import React, { createContext, useState, useContext } from "react";
import { Cart } from "../components/Cart";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const productIndex = cart.findIndex(
      (product) => product.id === productToAdd.id,
    );

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: Math.max(1, product.quantity - 1) }
        : product,
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}

      <Cart />
    </CartContext.Provider>
  );
};
