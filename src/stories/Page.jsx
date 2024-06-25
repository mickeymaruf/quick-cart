import React from "react";
import { CartProvider } from "../context/CartContext";
import { Products } from "../components/Products";

function Page() {
  return (
    <CartProvider>
      <div className="mx-auto w-[500px] bg-gray-100">
        <Products PUBLIC_API_KEY="user_2iMKh5zydKnGfjsUCDf3KlslmBh" />
      </div>
    </CartProvider>
  );
}

export default Page;
