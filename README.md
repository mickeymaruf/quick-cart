# <a href='https://redux.js.org'><div style="display:flex;align-items:center;gap:10px;"> <svg color="#1d4ed8" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="35" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"></path></svg> <span style="color:black;">Quick Cart</span></div></a>

A faster to integrate and easy to maintain cart plugin for your website.

## Installation

To install the package, use npm or yarn:

```bash
npm install quick-cart
# or
yarn add quick-cart
```

## Usage

### 1. Wrap your application with `CartProvider`

Wrap your main application component with `CartProvider` to provide cart context to all components:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "quick-cart";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider apiKey="YOUR_PUBLIC_API_KEY">
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
```

Get your api key at **https://quickkcart.vercel.app**.

### 2. Use Products Component

Now just use the `<Product />` component anywhere you want.

```jsx
import Products from "quick-cart";

const Page = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Page;
```

Create an account on **https://quickkcart.vercel.app**, to get started with your products and payments.

### License

This project is licensed under the [MIT License](https://github.com/mickeymaruf/quick-cart/blob/main/LICENSE.txt) - see the LICENSE file for details.
