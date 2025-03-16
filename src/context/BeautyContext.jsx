// filepath: src/context/BeautyContext.jsx
import React, { createContext, useState } from "react";

export const BeautyContext = createContext();

const BeautyProvider = ({ children }) => {
  const [userPreferences, setUserPreferences] = useState({
    skinType: "",
    age: "",
    skinProblem: "",
  });

  const updateUserPreferences = (preferences) => {
    setUserPreferences(preferences);
  };

  return (
    <BeautyContext.Provider value={{ userPreferences, updateUserPreferences }}>
      {children}
    </BeautyContext.Provider>
  );
};

export default BeautyProvider;
