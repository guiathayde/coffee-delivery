import styled from 'styled-components';

export const CoffeSelectedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;

  width: 100%;

  background: ${({ theme }) => theme.card};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  .coffee-image {
    width: 64px;
    height: 64px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Name = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.subtitle};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${({ theme }) => theme.text};

  margin-left: auto;
`;
