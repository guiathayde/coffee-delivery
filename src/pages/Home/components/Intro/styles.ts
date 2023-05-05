import styled from 'styled-components';

import background from '../../../../assets/intro-background.svg';

export const IntroContainer = styled.section`
  display: flex;
  gap: 1rem;

  padding: 5.875rem 12%;

  width: 100%;

  background: no-repeat center url(${background});
  background-size: cover;
`;

export const IntroDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.title};
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.subtitle};
    font-stretch: 100;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.25rem;
  grid-row-gap: 2.5rem;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.5rem;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.text};
`;

interface ItemIconProps {
  backgroundColor: 'yellow' | 'yellow-dark' | 'purple' | 'text';
}

export const ItemIcon = styled.div<ItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  border-radius: 50%;
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const IllustrationImg = styled.img`
  width: 29.75rem;
  height: 22.5rem;
  object-fit: cover;
`;
