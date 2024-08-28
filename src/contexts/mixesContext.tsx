"use client";
import { createContext, useState } from "react";
export const MixesContext = createContext({
  mixes: [],
  saveMixes: ([]) => {},
});

const MixesProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [mixes, setMixes] = useState([]);
  const saveMixes = (listOfMixes) => {
    setMixes(listOfMixes);
  };

  return (
    <MixesContext.Provider value={{ mixes, saveMixes }}>
      {children}
    </MixesContext.Provider>
  );
};

export default MixesProvider;
