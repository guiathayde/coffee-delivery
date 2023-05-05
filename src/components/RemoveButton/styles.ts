import styled from 'styled-components';

export const RemoveButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${({ theme }) => theme.button};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    background: ${({ theme }) => theme.hover};

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }

    span {
      color: ${({ theme }) => theme.subtitle};
    }
  }
`;
