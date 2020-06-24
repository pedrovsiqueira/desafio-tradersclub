import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';

const Button = ({ children, ...rest }) => {
  return (
    <Link to="/cars/new">
      <StyledButton {...rest}>{children}</StyledButton>
    </Link>
  );
};

export default Button;
