import React, { useContext } from "react";
import { BeautyContext } from "../context/BeautyContext";
import ProductList from "../components/ProductList";

const Recommendations = () => {
  const { userPreferences } = useContext(BeautyContext);

  return (
    <div>
      <h1>Recommendations</h1>
      <ProductList preferences={userPreferences} />
    </div>
  );
};

export default Recommendations;
