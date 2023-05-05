import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

import { useCoffee } from '../../hooks/coffee';

import { LayoutContainer, Wrapper } from './styles';

export function DefaultLayout() {
  const { selectedCoffeesIds } = useCoffee();

  return (
    <LayoutContainer>
      <Header
        quantityCoffeesSelected={
          selectedCoffeesIds ? selectedCoffeesIds.length : 0
        }
      />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </LayoutContainer>
  );
}
