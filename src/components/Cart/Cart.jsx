import React, { useState } from "react";

function Cart() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpened(false)}
        className={`${opened ? "opacity-100" : "opacity-0"} fixed left-0 top-0 h-full w-full bg-black/50 duration-200`}
      ></div>
      <aside
        className={`z-[99999999999] ${opened ? "right-0" : "-right-96"} fixed top-0 h-screen w-96 bg-white duration-200`}
      >
        <div className="p-8">
          <h3 className="mb-4 text-xl font-semibold">Your Cart</h3>
          <div className="space-y-2">
            <div className="border p-2">Product Card 1</div>
            <div className="border p-2">Product Card 2</div>
            <div className="border p-2">Product Card 3</div>
            <div className="border p-2">Product Card 4</div>
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
            2
          </div>
        </button>
      </aside>
    </>
  );
}

export default Cart;
