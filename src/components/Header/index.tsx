import { useNavigate } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import {
  HeaderContainer,
  Logo,
  LocationButton,
  Cart,
  CartCounter,
} from './styles';

import logo from '../../assets/logo.svg';

interface HeaderProps {
  quantityCoffeesSelected: number;
}

export function Header({ quantityCoffeesSelected }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Coffee Delivery" onClick={() => navigate('/')} />
      <nav>
        <LocationButton type="button" title="Localização">
          <MapPin size={24} weight="fill" />
          São Carlos, SP
        </LocationButton>
        <Cart to="/checkout" title="Checkout">
          <ShoppingCart size={24} weight="fill" />
          {quantityCoffeesSelected > 0 && (
            <CartCounter>{quantityCoffeesSelected}</CartCounter>
          )}
        </Cart>
      </nav>
    </HeaderContainer>
  );
}
