import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

export function Cart() {
  const [opened, setOpened] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <>
      {opened && (
        <div
          onClick={() => setOpened(false)}
          className={`${opened ? "opacity-100" : "opacity-0"} fixed left-0 top-0 h-full w-full bg-black/60 duration-200`}
        ></div>
      )}
      <aside
        className={`z-[99999999999] ${opened ? "right-0" : "-right-96"} fixed top-0 h-screen w-96 bg-white duration-200`}
      >
        <div className="p-8">
          <h3 className="mb-4 text-xl font-semibold">Your Cart</h3>
          <div className="space-y-2">
            {cart.map((product) => (
              <div key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* cart icon */}
        <button
          type="button"
          onClick={() => setOpened((s) => !s)}
          className="absolute -left-16 bottom-5"
        >
          <span className="text-4xl">🛒</span>
          <div className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
            {cart.length}
          </div>
        </button>
      </aside>
    </>
  );
}
