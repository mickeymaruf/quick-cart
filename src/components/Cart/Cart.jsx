import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

export function Cart() {
  const [opened, setOpened] = useState(false);
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

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
        {/* close */}
        <button
          type="button"
          onClick={() => setOpened(false)}
          className="absolute right-5 top-5"
        >
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios/50/multiply.png"
            alt="multiply"
          />
        </button>

        <div className="p-8">
          <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>
          {cart.length === 0 && (
            <p className="text-gray-600">Your cart is empty</p>
          )}
          {cart.length > 0 && (
            <>
              <p className="mb-4">Total Products: {totalProducts}</p>
              <ul>
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between border-b border-gray-200 py-2"
                  >
                    <div className="flex items-center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="mr-4 h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-lg font-semibold">{product.name}</p>
                        <p className="text-gray-600">
                          ${product.price} x {product.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="mr-2 rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-600"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="mr-2 rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-600"
                      >
                        -
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="rounded bg-gray-300 px-2 py-1 font-bold text-gray-800 hover:bg-gray-400"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button
                  // onClick={clearCart}
                  className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>

        {/* cart icon */}
        <button
          type="button"
          onClick={() => setOpened((s) => !s)}
          className="absolute -left-16 bottom-5"
        >
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/retro/32/shopping-cart-loaded.png"
            alt="shopping-cart-loaded"
          />
          {/* <span className="text-4xl">🛒</span> */}
          <div className="absolute -right-3 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
            {totalProducts}
          </div>
        </button>
      </aside>
    </>
  );
}
