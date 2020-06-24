import React from 'react';
import { Container, Content, StyledNav } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const Car = () => {
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

export default Car;
