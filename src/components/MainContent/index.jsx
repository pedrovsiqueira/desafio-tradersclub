import React, { useContext } from 'react';
import { Container, Content, StyledList } from './styles';
import { Context } from '../../context';
import Card from '../Card/index';

const MainContent = ({ type, rest }) => {
  const { searchInputValue, cars } = useContext(Context);

  return (
    <Container {...rest}>
      <Content>
        {!searchInputValue ? (
          <h1>
            Pesquisa de veículos do <span>TradersClub</span>
          </h1>
        ) : (
          <StyledList>
            {cars.map((car) => (
              <Card key={car.id} {...car} />
            ))}
          </StyledList>
        )}
      </Content>
    </Container>
  );
};

export default MainContent;
