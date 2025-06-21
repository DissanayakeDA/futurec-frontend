import React from "react";
import { products } from "../data/products";
import "../index.css";
// interface ProductCardProps {
//   product: Product;
// }
export function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full mb-2">
          {product.category}
        </span>
        <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
        <p className="font-bold text-lg text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
