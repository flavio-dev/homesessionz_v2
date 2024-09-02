"use client";
import { createContext } from "react";
export const MixesContext = createContext({
  mixes: [],
});

const MixesProvider = ({ children, mixes }) => {
  return (
    <MixesContext.Provider value={{ mixes }}>{children}</MixesContext.Provider>
  );
};

export default MixesProvider;
