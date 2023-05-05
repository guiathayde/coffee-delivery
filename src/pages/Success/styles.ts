import styled from 'styled-components';

export const SuccessContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  margin-top: 2.5rem;
  margin-bottom: auto;

  width: 100%;
`;

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 2rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 526px;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3;

  color: ${({ theme }) => theme['yellow-dark']};
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.3;

  color: ${({ theme }) => theme.subtitle};
  font-stretch: 100;

  margin-top: 0.25rem;
  margin-bottom: 2.5rem;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  background: linear-gradient(
        ${({ theme }) => theme.background},
        ${({ theme }) => theme.background}
      )
      padding-box,
    linear-gradient(45deg, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.text};
  }

  strong {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.text};
  }
`;

interface OrderInfoIconProps {
  backgroundColor: string;
}

export const OrderInfoIcon = styled.div<OrderInfoIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
`;

export const Illustration = styled.img`
  width: 30.75rem;
  height: 18.3125rem;
  object-fit: cover;

  max-width: 492px;
`;
