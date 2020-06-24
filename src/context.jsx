import React, { createContext, useState, useEffect } from 'react';
import { api } from './services/api';

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [cars, setCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [newCar, setNewCar] = useState({});
  const [carDetails, setCarDetails] = useState({
    title: '',
    model: '',
    brand: '',
    year: 0,
    color: '',
    km: 0,
    price: 0,
  });

  //handle inputchage for search input
  const handleInputChange = (inputValue) => {
    const { value } = inputValue.current;
    setSearchInputValue(value);
  };

  //handle input changes to inputs inside form
  const handleFormInputChange = (formInputValue) => {
    const { name, value } = formInputValue.current;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  //method to save altered car
  const handleSave = async (id) => {
    setSearchInputValue('');
    try {
      await api.put(`/cars/${id}`, carDetails);
    } catch (err) {
      console.log(err);
    }
  };

  //method to remove car
  const handleRemove = async (id) => {
    setSearchInputValue('');
    try {
      await api.delete(`/cars/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  //method for cancel button
  const handleCancel = () => {
    setSearchInputValue('');
  };

  //method to check for input changes before saving to state
  const handleFormInputNewCar = (formInputValue) => {
    console.log(formInputValue.current.select);

    const { name, value } = formInputValue.current;

    setNewCar({
      ...newCar,
      [name]: value,
    });
  };

  //method for adding new car to db
  const handleAddNewCar = async () => {
    setSearchInputValue('');
    try {
      await api.post(`/cars/`, newCar);
    } catch (err) {
      console.log(err);
    }
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

  return (
    <Context.Provider
      value={{
        handleInputChange,
        searchInputValue,
        cars,
        brands,
        handleFormInputChange,
        carDetails,
        setCarDetails,
        handleSave,
        handleRemove,
        handleCancel,
        handleFormInputNewCar,
        handleAddNewCar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
