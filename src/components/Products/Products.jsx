import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export function Products({ PUBLIC_API_KEY }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${PUBLIC_API_KEY}`)
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
