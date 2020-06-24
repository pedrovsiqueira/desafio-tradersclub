import React from 'react';
import { Container } from './styles';

const Card = () => {
  return (
    <Container>
      <StyledCarMainInfo>
        <p>Celta Azul 2005 Ar e Direção</p>
        <p>Celta - Chevrolet - 106.041 KM</p>
      </StyledCarMainInfo>

      <StyledCarMainInfo>R$ 11.772,22 2005</StyledCarMainInfo>
    </Container>
  );
};

export default Card;
