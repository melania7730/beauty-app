import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);

  const skinTypes = [
    "Normal",
    "Oily",
    "Dry",
    "Combination",
    "Sensitive",
    "Acne Prone",
    "Mature",
  ];
  const ageGroups = ["20s", "30s", "40s", "50s"];

  const toggleSelection = (item, setSelected, selected) => {
    setSelected((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
  };

  const getRecommendations = () => {
    // Implement the logic to get recommendations based on selectedSkinTypes and selectedAgeGroups
    console.log("Selected Skin Types:", selectedSkinTypes);
    console.log("Selected Age Groups:", selectedAgeGroups);
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "lightblue",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Beauty App</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Select Skin Type</h2>
        {skinTypes.map((type) => (
          <button
            key={type}
            onClick={() =>
              toggleSelection(type, setSelectedSkinTypes, selectedSkinTypes)
            }
            style={
              selectedSkinTypes.includes(type)
                ? selectedButtonStyle
                : buttonStyle
            }
          >
            {type}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h2>Select Age</h2>
        {ageGroups.map((group) => (
          <button
            key={group}
            onClick={() =>
              toggleSelection(group, setSelectedAgeGroups, selectedAgeGroups)
            }
            style={
              selectedAgeGroups.includes(group)
                ? selectedButtonStyle
                : buttonStyle
            }
          >
            {group}
          </button>
        ))}
      </div>
      <div>
        <button onClick={getRecommendations} style={buttonStyle}>
          Get Recommendation
        </button>
      </div>
      <ProductList />
    </div>
  );
};

export default App;
