import React from 'react';
import { Container, Content } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Header from '../../components/Header/index';
import EditCar from '../../components/EditCar/index';

const Car = () => {
  return (
    <Container>
      <LeftBar />
      <Content>
        <Header />
        <EditCar />
      </Content>
    </Container>
  );
};

export default Car;
