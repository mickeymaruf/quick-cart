import React from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;
  const { addToCart } = useCart();

  return (
    <div className="w-[320px] max-w-xs overflow-hidden">
      <div className="group relative mb-5 aspect-square">
        <img
          className="h-full w-full rounded-lg object-cover duration-200"
          src={imageUrl}
          alt={name}
        />
      </div>

      <h5 className="mb-2 font-semibold md:text-xl">{name}</h5>
      <p className="text-sm opacity-70 md:text-base">
        {description?.length > 120
          ? description?.slice(0, 120) + " See more..."
          : description}
      </p>
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-x-2 font-bold">
          <span className="text-[15px]">
            {/* {toAmount({
                  amount: price,
                  amount_type: "number",
                })} */}
            Price: ${price}
          </span>
          <span className="ml-auto text-xs text-green-600">
            {
              // toAmount({
              //   amount: product?.oldPrice - product?.price,
              //   amount_type: "number",
              // }).split(".")[0]
            }
            15% savings
          </span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-full border border-gray-300 py-2.5 text-center text-sm font-semibold duration-200 hover:bg-blue-900 hover:text-white md:py-3 md:text-[15px]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
