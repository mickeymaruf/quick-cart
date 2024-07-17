import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { TbPlus } from "react-icons/tb";
import { MdOutlineDone } from "react-icons/md";
import Button from "../Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, description, price } = product;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 400);
    }
  }, [added]);

  return (
    <div className="w-[320px] max-w-xs overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative aspect-square">
        <img
          className="h-full w-full select-none object-cover duration-200"
          src={imageUrl}
          alt={name}
        />
        <div className="absolute left-0 top-0 h-full w-full"></div>
      </div>

      <div className="p-5">
        <h5 className="mb-1 text-lg font-bold">{name}</h5>
        <p className="mb-3">
          <span className="text-base text-gray-600">Price:</span>{" "}
          <span className="text-xl tracking-wide">${price}</span>
        </p>
        <p className="mb-4 overflow-hidden whitespace-nowrap text-sm text-gray-600">
          {description?.length > 40
            ? description?.slice(0, 40) + " .."
            : description}
        </p>
        {added ? (
          <Button type="button" variant="success" fullWidth>
            Added to Cart <MdOutlineDone size={23} />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => {
              addToCart(product);
              setAdded(true);
            }}
            fullWidth
          >
            Add to Cart <TbPlus size={23} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
