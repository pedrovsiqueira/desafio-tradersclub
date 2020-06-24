import React from 'react';
import { Container, StyledFigure } from './styles';
import logoTC from '../../assets/logo-tc.png';

const LeftBar = () => {
  return (
    <Container>
      <StyledFigure>
        <img src={logoTC} alt="TradersClub Logo" />
      </StyledFigure>
    </Container>
  );
};

export default LeftBar;
