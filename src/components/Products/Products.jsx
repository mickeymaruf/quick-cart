import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../../context/CartContext";

export function Products() {
  const [products, setProducts] = useState([]);
  const { apiKey, APP_API_URL } = useCart();

  useEffect(() => {
    fetch(`${APP_API_URL}/products/${apiKey}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-center gap-7 md:justify-start">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
