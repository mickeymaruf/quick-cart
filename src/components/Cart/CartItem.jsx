import React from "react";
import { useCart } from "../../context/CartContext";
import { IoCloseOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";

function CartItem({ _id, name, imageUrl, quantity, price }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div className="relative flex items-center gap-4 border-b border-gray-300 pb-4">
      <img
        className="h-[70px] w-[70px] rounded-lg object-cover"
        src={imageUrl}
        alt={name}
      />
      <h5 className="flex-1 text-lg">{name}</h5>

      <div className="flex flex-col items-end gap-y-1">
        <p>${price * quantity} USD</p>

        <div className="flex items-center rounded-full border border-gray-200 px-0.5">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => decreaseQuantity(_id)}
          >
            <FiMinus />
          </button>
          <div className="flex h-10 w-5 items-center justify-center">
            {quantity}
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => increaseQuantity(_id)}
          >
            <FiPlus />
          </button>
        </div>
      </div>

      <button
        className="absolute -left-1.5 -top-1.5 aspect-square rounded-full bg-gray-500 p-1 text-white"
        onClick={() => removeFromCart(_id)}
      >
        <IoCloseOutline size={18} />
      </button>
    </div>
  );
}

export default CartItem;
