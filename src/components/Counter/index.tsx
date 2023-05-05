import { Minus, Plus } from 'phosphor-react';

import { CounterContainer, IconButton } from './styles';

interface CounterProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function Counter({ quantity, onDecrement, onIncrement }: CounterProps) {
  return (
    <CounterContainer>
      <IconButton onClick={onDecrement}>
        <Minus size={14} />
      </IconButton>
      <span className="number">{quantity}</span>
      <IconButton onClick={onIncrement}>
        <Plus size={14} />
      </IconButton>
    </CounterContainer>
  );
}
