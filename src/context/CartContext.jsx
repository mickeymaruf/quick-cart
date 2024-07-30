import React, { createContext, useState, useContext, useEffect } from "react";
import { Cart } from "../components/Cart/Cart";
import { addFontLinks } from "../lib/utils";

const APP_API_URL = "https://quick-cart-api.vercel.app";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ apiKey, children }) => {
  const [cart, setCart] = useState([]);
  const [opened, setOpened] = useState(false);

  const addToCart = (productToAdd) => {
    const productIndex = cart.findIndex(
      (product) => product._id === productToAdd._id,
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
      prevCart.filter((product) => product._id !== productId),
    );
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? { ...product, quantity: Math.max(1, product.quantity - 1) }
        : product,
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  // apply fonts <link> in <head>
  useEffect(() => {
    addFontLinks();
  }, []);

  return (
    <CartContext.Provider
      value={{
        APP_API_URL,
        apiKey,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        opened,
        setOpened,
      }}
    >
      {children}
      <Cart />
    </CartContext.Provider>
  );
};
