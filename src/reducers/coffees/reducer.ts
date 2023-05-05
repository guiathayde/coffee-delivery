import { produce } from 'immer';

import { ActionTypes } from './actions';

export interface Coffee {
  id: number;
  image: any;
  tags: string[];
  name: string;
  description: string;
  price: string;
  quantity: number;
}

interface CoffeesState {
  coffees: Coffee[];
  selectedCoffeesIds: number[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.INCREMENT_COFFEE_SELECTED: {
      return produce(state, (draft) => {
        const coffeeSelected = draft.coffees.find(
          (c) => c.id === action.payload.coffeeId
        );
        if (coffeeSelected) {
          coffeeSelected.quantity++;

          if (!draft.selectedCoffeesIds.includes(coffeeSelected.id)) {
            draft.selectedCoffeesIds.push(coffeeSelected.id);
          }
        }
      });
    }
    case ActionTypes.DECREMENT_COFFEE_SELECTED: {
      return produce(state, (draft) => {
        const coffeeSelected = draft.coffees.find(
          (c) => c.id === action.payload.coffeeId
        );
        if (coffeeSelected) {
          coffeeSelected.quantity--;

          if (coffeeSelected.quantity <= 0) {
            coffeeSelected.quantity = 0;

            if (draft.selectedCoffeesIds) {
              draft.selectedCoffeesIds = draft.selectedCoffeesIds.filter(
                (coffeeId) => coffeeId !== action.payload.coffeeId
              );
            }
          }
        }
      });
    }
    case ActionTypes.REMOVE_COFFEE_SELECTED: {
      return produce(state, (draft) => {
        const coffeeSelected = draft.coffees.find(
          (c) => c.id === action.payload.coffeeId
        );
        if (coffeeSelected) {
          coffeeSelected.quantity = 0;

          if (draft.selectedCoffeesIds) {
            draft.selectedCoffeesIds = draft.selectedCoffeesIds.filter(
              (coffeeId) => coffeeId !== action.payload.coffeeId
            );
          }
        }
      });
    }
    case ActionTypes.CLEAR_COFFEE_SELECTED: {
      return produce(state, (draft) => {
        draft.coffees.forEach((coffee) => {
          coffee.quantity = 0;
        });
        draft.selectedCoffeesIds = [];
      });
    }
    default:
      return state;
  }
}
