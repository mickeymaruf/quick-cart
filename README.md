# <a href='https://redux.js.org'>Quick Cart</a>

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
