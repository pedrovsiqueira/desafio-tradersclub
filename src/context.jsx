import React, { createContext, useState, useEffect } from 'react';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const handleInputChange = inputValue => {
    const { value } = inputValue.current;
    setSearchInputValue(value);
  };

  const handleRegister = () => {
    console.log('click me');
  };

  console.log(searchInputValue);

  return (
    <Context.Provider
      value={{ handleInputChange, handleRegister, searchInputValue }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
