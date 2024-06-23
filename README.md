# Quick Cart 🛒

A Faster to integrate and Easy to maintain Cart plugin for your website.

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
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
```

That's it.Now you have a cart on bottom-right of your website.

### 2. Use Products Component

Now just use the `<Product />` component anywhere you want.

```jsx
import Products from "quick-cart";

const Home = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
```

### Customization

You can customize the Cart and Products components as per your application's design and requirements.

### License

This project is licensed under the [MIT License](https://github.com/mickeymaruf/quick-cart/blob/main/LICENSE.txt) - see the LICENSE file for details.
