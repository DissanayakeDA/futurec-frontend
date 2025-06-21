import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "./ProductCard";

export function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-10 text-gray-500">
          No products found in this category.
        </div>
      )}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
