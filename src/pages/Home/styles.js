import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
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
  width: calc(100vw - 300px);
  display: flex;
  flex-direction: column;
`;
