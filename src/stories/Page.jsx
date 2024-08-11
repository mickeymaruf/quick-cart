import React from "react";
import { CartProvider } from "../context/CartContext";
import { Products } from "../components/Products";

function Page() {
  return (
    <CartProvider apiKey="hDw3ZoeXhiVc44qmQ6OIpiicOAa2">
      <Products />
    </CartProvider>
  );
}

export default Page;
