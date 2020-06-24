import React, { createContext, useState, useEffect } from 'react';
import { api } from './services/api';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [cars, setCars] = useState([]);
  const [carId, setCarId] = useState(0);
  const [carDetails, setCarDetails] = useState({
    id: '',
    title: '',
    model: '',
    brand: '',
    year: '',
    km: '',
    price: '',
  });

  const handleInputChange = (inputValue) => {
    const { value } = inputValue.current;
    setSearchInputValue(value);
  };

  useEffect(() => {
    const response = async () => {
      if (carId !== 0) {
        const { data } = await api.get(`cars/${carId}`);
        const { id, title, model, brand, year, km, price } = data;
        setCarDetails({
          id,
          title,
          model,
          brand,
          year,
          km,
          price,
        });
      }
    };
    response();
  }, [carId]);

  console.log(carDetails);

  const handleRegister = () => {
    console.log('click me');
  };

  useEffect(() => {
    //timer to prevent excessive api requests
    const timeoutId = setTimeout(() => {
      const response = async () => {
        try {
          const { data } = await api.get(`cars?q=${searchInputValue}`);
          setCars(data);
        } catch (err) {
          console.log(err);
        }
      };
      response();
    }, 400);
    return () => clearTimeout(timeoutId);
  }, [searchInputValue]);

  return (
    <Context.Provider
      value={{
        handleInputChange,
        handleRegister,
        searchInputValue,
        cars,
        setCarId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
