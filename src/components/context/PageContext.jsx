import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <PageContext.Provider value={{ isHomePage, setIsHomePage }}>
      {children}
    </PageContext.Provider>
  );
};
