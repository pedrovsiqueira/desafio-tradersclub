import React, { createContext, useState, useEffect } from 'react';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  return <Context.Provider value="">{children}</Context.Provider>;
};

export { ContextProvider, Context };
