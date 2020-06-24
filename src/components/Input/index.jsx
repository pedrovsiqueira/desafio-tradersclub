import React, { useRef, useContext } from 'react';
import { Context } from '../../context';
import { StyledInput } from './styles';

const Input = props => {
  const inputRef = useRef(null);
  const { handleInputChange } = useContext(Context);

  return (
    <StyledInput
      onChange={() => handleInputChange(inputRef)}
      ref={inputRef}
      {...props}
    />
  );
};

export default Input;
