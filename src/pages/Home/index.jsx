import React from 'react';
import { Container, Content, StyledNav } from './styles';
import LeftBar from '../../components/LeftBar/index';
import Header from '../../components/Header/index';
import MainContent from '../../components/MainContent/index';

const Home = () => {
  return (
    <Container>
      <LeftBar />
      <Content>
        <Header />
        <MainContent type="Home" />
      </Content>
    </Container>
  );
};

export default Home;
