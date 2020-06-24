import styled from 'styled-components';
import background from '../../assets/car-wireframe.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
    font-family: 'Lobster Two', cursive;
    background: transparent;
    margin: 50px auto;
    width: 75%;
    text-align: end;
    font-weight: 400;
    padding-right: 35px;
  }

  span {
    background-color: rgba(45, 72, 105, 0.7);
    padding: 5px 10px;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 80px;
`;
