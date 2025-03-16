import React from "react";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h2 className="product-name">{product.name}</h2>
    <p className="product-details">{product.description}</p>{" "}
    <img className="product-image" src={product.image} alt="" />
  </div>
);

export default ProductCard;
