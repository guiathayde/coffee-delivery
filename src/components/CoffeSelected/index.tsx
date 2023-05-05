import { Coffee } from '../../reducers/coffees/reducer';

import { Counter } from '../Counter';
import { RemoveButton } from '../RemoveButton';

import {
  CoffeSelectedContainer,
  Info,
  Details,
  Name,
  Actions,
  Price,
} from './styles';

interface CoffeSelectedProps {
  coffee: Coffee;
  quantity: number;
  onIncrement: (coffee: Coffee) => void;
  onDecrement: (coffee: Coffee) => void;
  onRemove: (coffee: Coffee) => void;
}

export function CoffeSelected({
  coffee,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}: CoffeSelectedProps) {
  return (
    <CoffeSelectedContainer>
      <Info>
        <img className="coffee-image" src={coffee.image} alt={coffee.name} />
        <Details>
          <Name>{coffee.name}</Name>
          <Actions>
            <Counter
              quantity={quantity}
              onIncrement={() => onIncrement(coffee)}
              onDecrement={() => onDecrement(coffee)}
            />
            <RemoveButton onClick={() => onRemove(coffee)} />
          </Actions>
        </Details>
      </Info>
      <Price>R$ {coffee.price}</Price>
    </CoffeSelectedContainer>
  );
}
