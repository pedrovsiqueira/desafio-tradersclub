import React from 'react';
import { Container, Content, StyledNav } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import MainContent from '../../components/MainContent/index';

const Home = () => {
  return (
    <Container>
      <LeftBar />
      <Content>
        <StyledNav>
          <Input placeholder="Pesquise por um veículo" />
          <Button>Cadastrar</Button>
        </StyledNav>
        <MainContent type="Home" />
      </Content>
    </Container>
  );
};

export default Home;
