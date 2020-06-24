import React from 'react';
import { Container } from './styles';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

const Header = () => {
  return (
    <Container>
      <Input placeholder="Pesquise por um veículo" />
      <Button>Cadastrar</Button>
    </Container>
  );
};

export default Header;
