import styled, { css } from 'styled-components';

interface SelectContainerProps {
  isSelected: boolean;
}

export const SelectContainer = styled.button<SelectContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 178.67px;

  background: ${({ theme }) => theme.button};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme['purple-light']};
      border-color: ${({ theme }) => theme['purple-light']};
    `}

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
`;
