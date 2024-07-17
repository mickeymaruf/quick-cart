import React from "react";
import { CartProvider } from "../context/CartContext";
import { Products } from "../components/Products";

function Page() {
  return (
    <CartProvider>
      <Products apiKey="hDw3ZoeXhiVc44qmQ6OIpiicOAa2" />
    </CartProvider>
  );
}

export default Page;
