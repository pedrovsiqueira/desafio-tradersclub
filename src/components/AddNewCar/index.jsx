import React from 'react';
import { Container, Content } from './styles';

const MainContent = (props) => {
  return (
    <Container {...props}>
      <Content>
        <h1>hora de criar um novo carro</h1>
      </Content>
    </Container>
  );
};

export default MainContent;
