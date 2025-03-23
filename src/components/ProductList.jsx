import React from "react";
import ProductCard from "./ProductCard";
import "./product.css";

const ProductList = ({ data }) => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
