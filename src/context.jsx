import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
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

  useEffect(() => {});

  return (
    <Context.Provider
      value={{ handleInputChange, handleRegister, searchInputValue }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
