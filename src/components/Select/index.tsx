import { HTMLAttributes, ReactNode } from 'react';

import { SelectContainer, Label } from './styles';

interface SelectProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  isSelected?: boolean;
}

export function Select({
  icon,
  label,
  isSelected = false,
  ...rest
}: SelectProps) {
  return (
    <SelectContainer isSelected={isSelected} {...rest}>
      {icon}
      <Label>{label}</Label>
    </SelectContainer>
  );
}
