import React, { createContext, useState, useEffect } from 'react';
import { api } from './services/api';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleInputChange = (inputValue) => {
    const { value } = inputValue.current;
    setSearchInputValue(value);
  };

  const handleRegister = () => {
    console.log('click me');
  };

  useEffect(() => {
    //timer to prevent excessive api requests
    const timeoutId = setTimeout(() => {
      const response = async () => {
        try {
          const { data } = await api.get(`cars?q=${searchInputValue}`);
          const response = await api.get('brands');
          setBrands(response.data);
          setCars(data);
        } catch (err) {
          console.log(err);
        }
      };
      response();
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [searchInputValue]);

  console.log(brands);

  return (
    <Context.Provider
      value={{
        handleInputChange,
        handleRegister,
        searchInputValue,
        cars,
        brands,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
