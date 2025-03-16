import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import axios from "axios";

const ProductList = ({ preferences }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(import.meta.env);
    axios.get(import.meta.env.VITE_API_URL).then((response) => {
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
