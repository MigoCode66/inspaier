'use client';
import React, { createContext, useContext, useState } from 'react';



export const viewContext = createContext<Array<string | React.Dispatch<React.SetStateAction<string | undefined>> | undefined>>([]);

const ViewContext = ({ children }: { children: React.ReactNode }) => {
  const [view, setView] = useState<string>();
  return (
    <viewContext.Provider value={[view, setView]}>
      {children}
    </viewContext.Provider>
  );
};

export default ViewContext;
