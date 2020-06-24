import React, { useRef, useContext } from 'react';
import { StyledInput } from './styles';
import { Context } from '../../context';

const FormInput = ({ inputType, ...rest }) => {
  const inputRef = useRef(null);
  const { handleFormInputChange, handleFormInputNewCar } = useContext(Context);
  return (
    <StyledInput
      onChange={
        !inputType
          ? () => handleFormInputChange(inputRef)
          : () => handleFormInputNewCar(inputRef)
      }
      ref={inputRef}
      inputType={inputType}
      {...rest}
    ></StyledInput>
  );
};

export default FormInput;
