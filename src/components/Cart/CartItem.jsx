import React from "react";
import { useCart } from "../../context/CartContext";
import { FiTrash } from "react-icons/fi";
import Button from "../Button";
import { RxCross1 } from "react-icons/rx";

function CartItem({ _id, name, imageUrl, quantity, price }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  return (
    <div className="flex gap-4 border-b pb-6">
      <img className="h-28 w-28" src={imageUrl} alt="" />
      <div className="flex-1">
        <h5 className="font-semibold">{name}</h5>
        <p>
          Price:{" "}
          <i className="text-sm font-medium">
            {/* {toAmount({ amount: price, amount_type: "number" })} */}$
            {price * quantity}
          </i>
        </p>
        <div className="mt-8 flex items-center gap-2">
          <Button
            onClick={() => decreaseQuantity(_id)}
            className="aspect-square h-8 w-8"
          >
            -
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded border text-sm">
            {quantity}
          </div>
          <Button
            onClick={() => increaseQuantity(_id)}
            className="aspect-square h-8 w-8"
          >
            +
          </Button>
        </div>
      </div>
      <Button
        variant="error"
        className="aspect-square h-8 w-8 !p-0"
        onClick={() => removeFromCart(_id)}
      >
        <RxCross1 />
      </Button>
    </div>
  );
}

export default CartItem;
