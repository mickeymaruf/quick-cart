import React from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product = {} }) => {
  const { addToCart } = useCart();

  return (
    <div className="m-4 max-w-xs overflow-hidden rounded shadow-lg">
      <img className="w-full" src={product.imageUrl} alt={product.name} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{product.name}</div>
        <p className="text-base text-gray-700">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          ${product.price}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
