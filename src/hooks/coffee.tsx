import React, {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';

import { Coffee, coffeesReducer } from '../reducers/coffees/reducer';
import {
  incrementCoffeeSelected,
  decrementCoffeeSelected,
  removeCoffeeSelected,
  clearCoffeeSelected,
} from '../reducers/coffees/actions';

import { coffees as coffeesFromDatabase } from '../database/coffeesData';

import { PaymentMethod } from '../pages/Checkout';

export interface AddressAndPayment {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethod | string;
}

interface CoffeesContextData {
  coffees: Coffee[];
  selectedCoffeesIds: number[];

  increment(coffeeId: number): void;
  decrement(coffeeId: number): void;
  remove(coffeeId: number): void;
  clear(): void;

  addressAndPayment: AddressAndPayment;
  setAddressAndPayment: React.Dispatch<React.SetStateAction<AddressAndPayment>>;
}

const CoffeesContext = createContext({} as CoffeesContextData);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
      selectedCoffeesIds: [],
    },
    (initialState) => {
      // TODO - get coffees from database
      return {
        ...initialState,
        coffees: coffeesFromDatabase,
      };
    }
  );
  const { coffees, selectedCoffeesIds } = coffeesState;

  const [addressAndPayment, setAddressAndPayment] = useState<AddressAndPayment>(
    {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: '',
    }
  );

  function increment(coffeeId: number) {
    dispatch(incrementCoffeeSelected(coffeeId));
  }

  function decrement(coffeeId: number) {
    dispatch(decrementCoffeeSelected(coffeeId));
  }

  function remove(coffeeId: number) {
    dispatch(removeCoffeeSelected(coffeeId));
  }

  function clear() {
    dispatch(clearCoffeeSelected());
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        selectedCoffeesIds,
        increment,
        decrement,
        remove,
        clear,
        addressAndPayment,
        setAddressAndPayment,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}

export function useCoffee() {
  const context = useContext(CoffeesContext);

  if (!context) {
    throw new Error('useCoffee must be used within an CoffeesContextProvider');
  }

  return context;
}
