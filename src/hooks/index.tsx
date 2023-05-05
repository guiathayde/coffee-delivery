import { ReactNode } from 'react';

import { WindowDimensionsProvider } from './windowDimensions';
import { CoffeesContextProvider } from './coffee';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <WindowDimensionsProvider>
      <CoffeesContextProvider>{children}</CoffeesContextProvider>
    </WindowDimensionsProvider>
  );
}
