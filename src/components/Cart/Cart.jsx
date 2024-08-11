import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { FaOpencart } from "react-icons/fa";
import Button from "../Button";
import { CgChevronLeft } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

export function Cart() {
  const { cart, opened, setOpened, apiKey, APP_API_URL } = useCart();
  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const totalPrice = cart.reduce(
    (total, product) => total + Number(product.price * product.quantity),
    0,
  );

  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    fetch(`${APP_API_URL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems: cart.map((p) => {
          return { _id: p._id, quantity: p.quantity };
        }),
        apiKey,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        console.log(url);
        window.location = url;
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {opened && (
        <div
          onClick={() => setOpened(false)}
          className={`${opened ? "opacity-100" : "opacity-0"} fixed left-0 top-0 h-full w-[99%] bg-black/60 duration-200`}
        ></div>
      )}
      <aside
        className={`z-[99999999999] ${opened ? "right-0" : "-right-full md:-right-[450px]"} fixed top-0 h-screen w-full bg-white/90 backdrop-blur-md duration-200 md:w-[450px]`}
      >
        {/* close */}
        <div className="flex h-full flex-col justify-between">
          <div className="overflow-y-auto">
            {cart.length === 0 ? (
              <div className="relative flex h-screen flex-col items-center justify-center text-center font-semibold">
                <div className="absolute left-0 top-0 flex w-full items-center justify-between p-5 md:p-8">
                  <h5 className="text-xl font-medium">My Cart</h5>
                  <button
                    type="button"
                    onClick={() => setOpened(false)}
                    className="flex aspect-square rounded-lg border p-2"
                  >
                    <IoCloseOutline size={25} />
                  </button>
                </div>

                <HiOutlineShoppingCart size={50} />
                <p className="mt-1 text-2xl">Your cart is empty.</p>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center gap-x-2">
                  <span className="text-sm">Powered by</span>
                  <a href="https://quickkcart.vercel.app/" target="_blank">
                    <div className="relative flex w-fit items-center gap-2 text-lg font-bold">
                      <FaOpencart className="text-blue-600" />
                      Quick Cart
                      <div className="absolute -bottom-0 right-0 h-0.5 w-5 bg-gray-300"></div>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-5 md:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <h5 className="text-xl font-medium">My Cart</h5>
                  <button
                    type="button"
                    onClick={() => setOpened(false)}
                    className="flex aspect-square rounded-lg border p-2"
                  >
                    <IoCloseOutline size={25} />
                  </button>
                </div>
                <div className="space-y-6">
                  {cart?.map((item) => (
                    <CartItem key={item._id} {...item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="sticky bottom-0 left-0 w-full px-5 pb-4 md:px-8">
              <div className="mb-2 border-t py-2">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-1 text-gray-500">Taxes</td>
                      <td className="py-1 text-right">${totalPrice} USD</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Shipping</td>
                      <td className="py-1 text-right text-gray-500">Free</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-gray-500">Subtotal</td>
                      <td className="py-1 text-right">${totalPrice} USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-full bg-blue-600 p-3 font-medium text-white"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-4 border-white/80 border-t-transparent"></div>
                ) : (
                  "Proceed to Checkout"
                )}
              </button>
              <div className="mt-4 flex items-center justify-center gap-x-2">
                <span className="text-sm text-gray-500">Powered by</span>
                <a href="https://quickkcart.vercel.app/" target="_blank">
                  <div className="relative flex w-fit items-center gap-2 whitespace-nowrap text-lg font-bold">
                    <FaOpencart className="text-blue-600" />
                    Quick Cart
                    <div className="absolute -bottom-0 right-0 h-0.5 w-5 bg-gray-300"></div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* cart icon */}
      <button
        type="button"
        onClick={() => setOpened((s) => !s)}
        className="fixed bottom-8 right-8 rounded-lg border bg-gray-100 p-3.5"
      >
        <HiOutlineShoppingCart size={20} />
        <div className="absolute -right-3 -top-1 flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-xs font-medium text-white">
          {totalProducts}
        </div>
      </button>
    </>
  );
}
