import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  StyledCarPrimaryInfo,
  StyledCarSecundaryInfo,
} from './styles';

const Card = ({ id, title, model, brand, year, km, price }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  return (
    <Link to={`/cars/${id}`}>
      <Container>
        <StyledCarPrimaryInfo>
          <p>
            <strong>{title}</strong>
          </p>
          <p>
            {model} &#8226; {brand} &#8226; {km} &#8226; KM
          </p>
        </StyledCarPrimaryInfo>

        <StyledCarSecundaryInfo>
          <p>
            <strong>{formattedPrice}</strong>
          </p>
          <p>{year}</p>
        </StyledCarSecundaryInfo>
      </Container>
    </Link>
  );
};

export default Card;
