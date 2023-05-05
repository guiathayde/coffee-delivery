import { ShoppingCart } from 'phosphor-react';

import { Tag } from '../Tag';
import { Counter } from '../Counter';

import { Coffee } from '../../reducers/coffees/reducer';

import { CoffeeCardContainer, BuyContainer, IconButton } from './styles';

interface CoffeeCardProps {
  coffee: Coffee;
  onIncrement: (coffeeId: number) => void;
  onDecrement: (coffeeId: number) => void;
  onShoppingCartClick: () => void;
}

export function CoffeeCard({
  coffee,
  onIncrement,
  onDecrement,
  onShoppingCartClick,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt={coffee.name} />
      <div className="tags">
        {coffee.tags.map((tag) => (
          <Tag key={tag} variant="filled">
            {tag}
          </Tag>
        ))}
      </div>
      <span className="name">{coffee.name}</span>
      <p>{coffee.description}</p>
      <BuyContainer>
        <div className="price-container">
          <span className="siphon">R$</span>
          <strong className="price">{coffee.price}</strong>
        </div>
        <div className="actions">
          <Counter
            quantity={coffee.quantity}
            onIncrement={() => onIncrement(coffee.id)}
            onDecrement={() => onDecrement(coffee.id)}
          />
          <IconButton onClick={onShoppingCartClick}>
            <ShoppingCart size={22} weight="fill" />
          </IconButton>
        </div>
      </BuyContainer>
    </CoffeeCardContainer>
  );
}
