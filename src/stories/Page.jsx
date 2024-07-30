import React from "react";
import { CartProvider } from "../context/CartContext";
import { Products } from "../components/Products";

function Page() {
  return (
    <CartProvider apiKey="MdoUyiJkCJZtqKddNtgi9QxLqUz2">
      <Products />
    </CartProvider>
  );
}

export default Page;
