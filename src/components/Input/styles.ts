import styled, { css } from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  width: 100%;

  background: ${({ theme }) => theme.input};

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.button};

  font-style: italic;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.label};

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme['yellow-dark']};
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.text};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.text};

    &::placeholder {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${({ theme }) => theme.label};
    }
  }

  span {
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.label};
  }
`;
