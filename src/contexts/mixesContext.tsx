"use client";
import { createContext } from "react";
export const MixesContext = createContext({
  mixes: [] as IMix[],
});

const MixesProvider = ({ children, mixes }: IMixesProviderProps) => {
  return (
    <MixesContext.Provider value={{ mixes }}>{children}</MixesContext.Provider>
  );
};

export default MixesProvider;
