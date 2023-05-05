import { useTheme } from 'styled-components';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';

import { useCoffee } from '../../hooks/coffee';

import {
  SuccessContainer,
  SuccessContent,
  OrderContainer,
  Title,
  Subtitle,
  OrderInfoContainer,
  OrderInfo,
  OrderInfoIcon,
  Illustration,
} from './styles';

import illustration from '../../assets/success-illustration.png';
import { useEffect } from 'react';

export function Success() {
  const theme = useTheme();
  const { clear, addressAndPayment } = useCoffee();

  useEffect(() => {
    clear();
  }, [clear]);

  const { street, number, neighborhood, state, paymentMethod } =
    addressAndPayment;

  const paymentMethodLabel =
    paymentMethod === 'cash'
      ? 'Dinheiro'
      : paymentMethod === 'credit'
      ? 'Cartão de crédito'
      : 'Cartão de débito';

  return (
    <SuccessContainer>
      <SuccessContent>
        <OrderContainer>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
          <OrderInfoContainer>
            <OrderInfo>
              <OrderInfoIcon backgroundColor={theme.purple}>
                <MapPin size={32} weight="fill" color={theme.white} />
              </OrderInfoIcon>
              <span>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>{' '}
                {neighborhood} - {state}
              </span>
            </OrderInfo>
            <OrderInfo>
              <OrderInfoIcon backgroundColor={theme.yellow}>
                <Timer size={32} weight="fill" color={theme.white} />
              </OrderInfoIcon>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </OrderInfo>
            <OrderInfo>
              <OrderInfoIcon backgroundColor={theme['yellow-dark']}>
                <CurrencyDollar size={32} weight="fill" color={theme.white} />
              </OrderInfoIcon>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethodLabel}</strong>
              </div>
            </OrderInfo>
          </OrderInfoContainer>
        </OrderContainer>
        <Illustration src={illustration} alt="Sucesso" />
      </SuccessContent>
    </SuccessContainer>
  );
}
