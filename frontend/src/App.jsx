import React, { useEffect, useState } from "react";
import { ProductList } from "./components/productList";
import { CategoryFilter } from "./components/categoryFilter";
import { products } from "./data/products";
export function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // Extract unique categories from products
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory]);
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Collection
          </h1>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </header>
        <main>
          <ProductList products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}
