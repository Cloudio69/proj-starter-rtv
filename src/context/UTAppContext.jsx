import { useState, useContext, createContext } from "react";

const UTContext = createContext();

const UTAppContext = ({ children }) => {
  
  const [theme, setTheme] = useState("");

  return (
    <UTContext.Provider value={{ theme, setTheme }}>
      {children}
    </UTContext.Provider>
  );
};

export default UTAppContext;

export const UTAppContextHelper = () => useContext(UTContext)
