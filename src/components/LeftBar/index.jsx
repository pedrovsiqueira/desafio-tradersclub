import React from 'react';
import { Link } from 'react-router-dom';
import { Container, StyledFigure } from './styles';
import logoTC from '../../assets/logo-tc.png';

const LeftBar = () => {
  return (
    <Container>
      <StyledFigure>
        <Link to="/">
          <img src={logoTC} alt="TradersClub Logo" />
        </Link>
      </StyledFigure>
    </Container>
  );
};

export default LeftBar;
