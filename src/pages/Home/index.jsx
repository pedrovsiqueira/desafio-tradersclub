import React from 'react';
import { Container, StyledNav } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const Home = () => {
  return (
    <Container>
      <LeftBar />
      <StyledNav>
        <Input placeholder="Pesquise por um veículo" />
        <Button>Cadastrar</Button>
      </StyledNav>
    </Container>
  );
};

export default Home;
