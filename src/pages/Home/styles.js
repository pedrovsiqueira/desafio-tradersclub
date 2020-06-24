import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
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
