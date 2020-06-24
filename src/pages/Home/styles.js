import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: hidden;
`;

export const StyledNav = styled.nav`
  width: 100%;
  background-color: #1a2533;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & :first-child {
    margin-right: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
