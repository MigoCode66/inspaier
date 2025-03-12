'use client';
import React, { createContext, useContext } from 'react';

export const viewContext = createContext('viewContext');

const ViewContext = ({ children }: { children: React.ReactNode }) => {
  return <viewContext.Provider value="hiden">{children}</viewContext.Provider>;
};

export default ViewContext;
