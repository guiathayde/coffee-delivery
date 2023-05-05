export enum ActionTypes {
  INCREMENT_COFFEE_SELECTED = 'INCREMENT_COFFEE_SELECTED',
  DECREMENT_COFFEE_SELECTED = 'DECREMENT_COFFEE_SELECTED',
  REMOVE_COFFEE_SELECTED = 'REMOVE_COFFEE_SELECTED',
  CLEAR_COFFEE_SELECTED = 'CLEAR_COFFEE_SELECTED',
}

export function incrementCoffeeSelected(coffeeId: number) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_SELECTED,
    payload: {
      coffeeId,
    },
  };
}

export function decrementCoffeeSelected(coffeeId: number) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_SELECTED,
    payload: {
      coffeeId,
    },
  };
}

export function removeCoffeeSelected(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_SELECTED,
    payload: {
      coffeeId,
    },
  };
}

export function clearCoffeeSelected() {
  return {
    type: ActionTypes.CLEAR_COFFEE_SELECTED,
  };
}
