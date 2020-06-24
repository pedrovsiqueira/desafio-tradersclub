import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';
import { Context } from '../../context';

const Button = ({ children, ...rest }) => {
  const { handleRegister } = useContext(Context);

  return (
    <Link to="/cars/new">
      <StyledButton {...rest}>{children}</StyledButton>;
    </Link>
  );
};

export default Button;
