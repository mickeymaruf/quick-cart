import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { FaOpencart } from "react-icons/fa";
import Button from "../Button";
import { CgChevronLeft } from "react-icons/cg";

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
        className={`z-[99999999999] ${opened ? "right-0" : "-right-full md:-right-[450px]"} fixed top-0 h-screen w-full bg-white duration-200 md:w-[450px]`}
      >
        <Button
          onClick={() => setOpened(false)}
          className="m-5 mb-0 flex aspect-square !p-1 md:hidden"
        >
          <CgChevronLeft size={25} color="#ffffff" />
        </Button>

        {/* close */}
        <div className="flex h-full flex-col justify-between">
          <div className="overflow-y-auto">
            {cart.length === 0 ? (
              <div className="relative flex h-screen flex-col items-center justify-center text-center font-semibold">
                <p className="text-lg">
                  Your cart is empty. <br /> Fill it with something good.
                </p>
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
              <div className="space-y-6 p-5 md:p-8">
                {cart?.map((item) => (
                  <CartItem key={item._id} {...item} />
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="sticky bottom-0 left-0 w-full bg-white px-5 pb-4 md:px-8">
              <div className="mb-2 border-t py-2">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1">Subtotal</td>
                      <td className="py-1 text-right text-lg font-semibold">
                        {/* {toAmount({ amount: totalPrice, amount_type: "number" })} */}
                        {totalPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1">Shipping</td>
                      <td className="py-1 text-right">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-4 border-neutral-300 border-t-transparent"></div>
                ) : (
                  "Continue to Checkout"
                )}
              </Button>
              <div className="mt-4 flex items-center justify-center gap-x-2">
                <span className="text-sm">Powered by</span>
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

        {/* cart icon */}
        <Button
          type="button"
          onClick={() => setOpened((s) => !s)}
          className="absolute -left-24 bottom-8 !p-3"
        >
          <FaOpencart size={30} className={opened && "text-white"} />
          <div className="absolute -right-3 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
            {totalProducts}
          </div>
        </Button>
      </aside>
    </>
  );
}
