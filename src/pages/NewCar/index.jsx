import React from 'react';
import { Container, Content } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Header from '../../components/Header/index';
import AddNewCar from '../../components/AddNewCar/index';

const Home = () => {
  return (
    <Container>
      <LeftBar />
      <Content>
        <Header />
        <AddNewCar />
      </Content>
    </Container>
  );
};

export default Home;
