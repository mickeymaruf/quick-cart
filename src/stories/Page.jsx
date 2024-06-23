import React from "react";
import { CartProvider } from "../context/CartContext";
import { Products } from "../components/Products";

function Page() {
  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );
}

export default Page;
