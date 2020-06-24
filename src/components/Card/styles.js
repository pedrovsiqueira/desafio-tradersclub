import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #424d5c;
  border-radius: none;
  padding: 30px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const StyledCarPrimaryInfo = styled.div``;

export const StyledCarSecundaryInfo = styled.div`
  text-align: right;
`;
