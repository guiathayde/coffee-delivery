import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.5rem 1.5rem;

  width: 256px;

  background: ${({ theme }) => theme.card};
  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }

  .tags {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 0.75rem;

    gap: 0.5rem;
  }

  .name {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme.subtitle};

    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme.label};

    margin-bottom: 2rem;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 90%;

  margin-top: auto;

  .price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    .siphon {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
      text-align: right;
      color: ${({ theme }) => theme.text};
    }

    .price {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.3;
      text-align: right;
      color: ${({ theme }) => theme.text};
    }
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;

    svg {
      cursor: pointer;
    }
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-dark']};

  svg {
    color: ${({ theme }) => theme.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`;
