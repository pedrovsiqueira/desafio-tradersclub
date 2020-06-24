import React, { createContext, useState, useEffect } from 'react';
import { api } from './services/api';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [cars, setCars] = useState([]);

  const handleInputChange = (inputValue) => {
    const { value } = inputValue.current;
    setSearchInputValue(value);
  };

  const handleRegister = () => {
    console.log('click me');
  };

  const response = async () => {
    try {
      const { data } = await api.get(`cars?q=${searchInputValue}`);
      setCars(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //timer to prevent excessive api requests
    const timeoutId = setTimeout(() => {
      response();
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchInputValue]);

  console.log(cars);

  return (
    <Context.Provider
      value={{ handleInputChange, handleRegister, searchInputValue, cars }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
