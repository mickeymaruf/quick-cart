import React from "react";
import { useCart } from "../../context/CartContext";
import { FiTrash } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";

function CartItem({ id, name, imageUrl, quantity, price }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div className="flex gap-4 border-b pb-6">
      <img className="h-28 w-28" src={imageUrl} alt="" />
      <div className="flex-1">
        <h5 className="font-semibold">{name}</h5>
        <p>
          Price:{" "}
          <i className="font-serif text-sm">
            {/* {toAmount({ amount: price, amount_type: "number" })} */}${price}
          </i>
        </p>
        <div className="mt-8 flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(id)}
            className="flex h-8 w-8 items-center justify-center rounded bg-gray-100"
          >
            -
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded border text-sm">
            {quantity}
          </div>
          <button
            onClick={() => increaseQuantity(id)}
            className="flex h-8 w-8 items-center justify-center rounded bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <FiTrash
          onClick={() => removeFromCart(id)}
          size={19}
          className="cursor-pointer opacity-30 hover:opacity-50"
        />
      </div>
    </div>
  );
}

export default CartItem;
