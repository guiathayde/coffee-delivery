import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem 0.25rem;

  background: ${({ theme }) => theme.button};
  border-radius: 6px;

  .number {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme.title};
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.125rem;

  border: none;

  background-color: transparent;

  cursor: pointer;
`;
