import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10%;
  margin: 0 auto;

  width: 100%;

  background: ${({ theme }) => theme.white};

  nav {
    display: flex;
    gap: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: 84.95px;
  height: 40px;
  object-fit: cover;

  cursor: pointer;
`;

export const LocationButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  min-width: 8.9375rem;
  height: 2.375rem;

  background: ${({ theme }) => theme['purple-light']};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['purple-dark']};

  svg {
    color: ${({ theme }) => theme.purple};
  }
`;

export const Cart = styled(NavLink)`
  position: relative;

  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme['yellow-light']};
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};

    svg {
      color: ${({ theme }) => theme.yellow};
    }
  }
`;

export const CartCounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  right: -0.521875rem;
  top: -0.5rem;

  background: ${({ theme }) => theme['yellow-dark']};
  border-radius: 50%;

  font-weight: 700;
  font-size: 0.75rem;
  text-align: center;

  color: ${({ theme }) => theme.white};
`;
