import React, { createContext, useState, useEffect } from 'react';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const handleInputChange = inputValue => {
    const { value } = inputValue.current;
    console.log(value);
  };

  return (
    <Context.Provider value={{ handleInputChange }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
