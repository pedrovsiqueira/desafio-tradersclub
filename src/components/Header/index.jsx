import React from 'react';
import { Container } from './styles';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Input placeholder="Pesquise por um veículo" />
      <Link to="/cars/new">
        <Button>Cadastrar</Button>
      </Link>
    </Container>
  );
};

export default Header;
