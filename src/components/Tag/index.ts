import styled, { css } from 'styled-components';

interface TagProps {
  variant: 'outline' | 'filled';
  isSelected?: boolean;
}

export const Tag = styled.button<TagProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.75rem;
  gap: 0.5rem;

  border: none;
  border: ${({ variant, theme }) => {
    if (variant === 'outline') return css`1px solid ${theme['yellow-dark']}`;
    return 'none';
  }};
  border-radius: 100px;

  background-color: ${({ variant, theme }) => {
    if (variant === 'filled') return theme['yellow-light'];
    return 'transparent';
  }};

  cursor: ${({ variant }) => {
    if (variant === 'outline') return 'pointer';
    return 'default';
  }};

  ${({ variant, isSelected }) =>
    variant !== 'filled' &&
    css`
      opacity: ${isSelected ? 1 : 0.5};
    `}

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme['yellow-dark']};
`;
