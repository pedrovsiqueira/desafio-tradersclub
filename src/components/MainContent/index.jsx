import React, { useContext } from 'react';
import { Container, Content } from './styles';
import { Context } from '../../context';

const MainContent = ({ type, rest }) => {
  const { searchInputValue } = useContext(Context);

  return (
    <Container type={type}>
      <Content>
        {!searchInputValue && type ? (
          <h1>
            Pesquisa de veículos do <span>TradersClub</span>
          </h1>
        ) : (
          <div>not oi</div>
        )}
      </Content>
    </Container>
  );
};

export default MainContent;
