import styled from 'styled-components';
import background from '../../assets/car-wireframe.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Lobster Two', cursive;
`;

export const Content = styled.div`
  background: url(${background}) no-repeat center;
  background-color: #1f2d40;
  background-blend-mode: multiply;
  width: 100%;
  height: 100%;
  font-size: 4.5rem;
  display: flex;
  justify-content: center;

  h1 {
    background: transparent;
    margin: 50px auto;
    width: 75%;
    text-align: end;
  }

  span {
    background-color: #2d4869;
    padding: 5px 10px;
  }
`;
