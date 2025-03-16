import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import axios from "axios";

const ProductList = ({ preferences }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
