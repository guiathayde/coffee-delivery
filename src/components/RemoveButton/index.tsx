import { ButtonHTMLAttributes } from 'react';
import { Trash } from 'phosphor-react';

import { RemoveButtonContainer } from './styles';

export function RemoveButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <RemoveButtonContainer {...props}>
      <Trash size={16} />
      <span>Remover</span>
    </RemoveButtonContainer>
  );
}
