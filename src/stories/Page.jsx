import React from "react";
import { CartProvider } from "../context/CartContext";
import { Products } from "../components/Products";

function Page() {
  return (
    <CartProvider apiKey="pZ7N9pAommYN11yYYYaEq43dgLJ3">
      <Products />
    </CartProvider>
  );
}

export default Page;
