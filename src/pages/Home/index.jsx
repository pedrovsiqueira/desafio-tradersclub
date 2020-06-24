import React from 'react';
import { Container } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const Home = () => {
  return (
    <Container>
      <LeftBar />
      <Input placeholder="Pesquise por um veículo" />
      <Button>Cadastrar</Button>
    </Container>
  );
};

export default Home;
