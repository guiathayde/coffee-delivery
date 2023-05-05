import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';

import {
  IntroContainer,
  IntroDetails,
  Title,
  Items,
  Item,
  ItemIcon,
  IllustrationImg,
} from './styles';

import illustration from '../../../../assets/intro-illustration.png';

export function Intro() {
  return (
    <IntroContainer>
      <IntroDetails>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </Title>
        <Items>
          <Item>
            <ItemIcon backgroundColor="yellow-dark">
              <ShoppingCart size={32} weight="fill" />
            </ItemIcon>
            Compra simples e segura
          </Item>
          <Item>
            <ItemIcon backgroundColor="yellow">
              <Timer size={32} weight="fill" />
            </ItemIcon>
            Entrega rápida e rastreada
          </Item>
          <Item>
            <ItemIcon backgroundColor="purple">
              <Package size={32} weight="fill" />
            </ItemIcon>
            Embalagem mantém o café intacto
          </Item>
          <Item>
            <ItemIcon backgroundColor="text">
              <Coffee size={32} weight="fill" />
            </ItemIcon>
            O café chega fresquinho até você
          </Item>
        </Items>
      </IntroDetails>
      <IllustrationImg src={illustration} alt="Café" />
    </IntroContainer>
  );
}
