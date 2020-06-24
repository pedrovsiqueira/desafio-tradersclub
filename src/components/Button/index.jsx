import React, { useContext } from 'react';
import { StyledButton } from './styles';
import { Context } from '../../context';

const Button = ({ children, ...rest }) => {
  const { handleRegister } = useContext(Context);
  return (
    <StyledButton onClick={handleRegister} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
