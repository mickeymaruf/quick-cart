import React from "react";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";
import { RxCross2 } from "react-icons/rx";

export function Cart() {
  const { cart, opened, setOpened } = useCart();
  const totalProducts = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      {opened && (
        <div
          onClick={() => setOpened(false)}
          className={`${opened ? "opacity-100" : "opacity-0"} fixed left-0 top-0 h-full w-[99%] bg-black/60 duration-200`}
        ></div>
      )}
      <aside
        className={`z-[99999999999] ${opened ? "right-0" : "-right-96"} fixed top-0 h-screen w-96 bg-white duration-200`}
      >
        {/* close */}
        <div className="flex h-full flex-col justify-between">
          <button
            onClick={() => setOpened(false)}
            className="group absolute right-6 top-2 cursor-pointer rounded-full bg-white p-3 outline-none"
          >
            <RxCross2 size={23} className="group-hover:opacity-60" />
          </button>

          <div className="overflow-y-auto">
            <div className="p-6 md:p-8">
              <h3 className="text-[22px] font-medium">Your Cart</h3>

              {cart.length === 0 ? (
                <div className="mt-8 text-center font-semibold">
                  <p className="mb-6 text-sm">
                    Your cart is empty. <br /> Fill it with something good.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-4 mt-6 flex items-center justify-center gap-3 bg-[#FFF5C2] px-6 py-4 md:justify-start">
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <div className="rounded-full border border-[#FFD600] p-0.5">
                        <div className="h-3 w-3 rounded-full bg-[#FFD600]"></div>
                      </div>
                      <div className="absolute left-0 top-0 h-4 w-4 animate-ping rounded-full bg-[#FFD600]/60"></div>
                    </div>
                    <span className="text-[13px] text-black">
                      Nice! You unlocked the Welcome Offer: 20% off.
                    </span>
                  </div>

                  <div className="space-y-6">
                    {cart?.map((item) => (
                      <CartItem key={item._id} {...item} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {cart.length > 0 && (
            <div className="sticky bottom-0 left-0 w-full bg-white px-6 pb-4 md:px-8">
              <div className="border-t py-2">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="text-[#619C1C]">
                      <td className="py-1 font-semibold">
                        Welcome Offer: 20% off
                      </td>
                      <td className="py-1 text-right">
                        -
                        {/* {toAmount({
                    amount: (totalPrice * 20) / 100,
                    amount_type: "number",
                  })} */}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 font-semibold">Subtotal</td>
                      <td className="py-1 text-right">
                        {/* {toAmount({ amount: totalPrice, amount_type: "number" })} */}
                        {totalPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 font-semibold">Shipping</td>
                      <td className="py-1 text-right">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="w-full rounded-full border bg-blue-900 py-2.5 text-center text-sm font-semibold text-white duration-200 md:py-3.5 md:text-[15px]">
                Continue to Checkout
              </button>
            </div>
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
          <div className="absolute -right-3 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
            {totalProducts}
          </div>
        </button>
      </aside>
    </>
  );
}
