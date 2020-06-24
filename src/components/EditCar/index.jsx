import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content } from './styles';
import { Context } from '../../context';

const MainContent = ({ rest }) => {
  const { setCarId } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    setCarId(id);
  }, [id, setCarId]);

  return (
    <Container {...rest}>
      <Content></Content>
    </Container>
  );
};

export default MainContent;
