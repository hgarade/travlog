"use client";

import React, { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children }) {
  const [activeRoute, setActiveRoute] = useState("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeRoute,
        setActiveRoute,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
