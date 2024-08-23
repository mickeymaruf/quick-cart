import React from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addToCart } = useCart();

  return (
    <div className="group w-[320px] max-w-xs overflow-hidden rounded-xl border border-gray-300 bg-white">
      <div className="relative aspect-square">
        <img
          className="h-full w-full select-none object-cover duration-200 group-hover:scale-105"
          src={imageUrl}
          alt={name}
        />
        <div className="absolute bottom-0 left-0 m-3">
          <div className="flex w-fit items-center gap-4 rounded-full border border-gray-300 bg-white/80 p-1 pl-4 text-sm font-medium backdrop-blur-3xl">
            {name}{" "}
            <button
              type="button"
              onClick={() => {
                addToCart(product);
                setAdded(true);
              }}
              className="rounded-full bg-blue-600 p-2 px-3 tracking-wide text-white hover:bg-blue-700"
            >
              ${price} USD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
