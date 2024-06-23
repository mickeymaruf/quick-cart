import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    description: "Description for product 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.99,
    description: "Description for product 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30.99,
    description: "Description for product 3",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40.99,
    description: "Description for product 4",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    price: 50.99,
    description: "Description for product 5",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export function Products() {
  return (
    <div className="p-8">
      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
