import React, { createContext, useState, useEffect } from 'react';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleInputChange = inputValue => {
    const { value } = inputValue.current;
    setSearchInputValue(value);
  };

  console.log(searchInputValue);

  return (
    <Context.Provider value={{ handleInputChange }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
