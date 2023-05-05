import { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react';

import { useCoffee } from '../../hooks/coffee';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { CoffeSelected } from '../../components/CoffeSelected';

import {
  CheckoutContainer,
  CheckoutContent,
  Title,
  AddressPaymentContainer,
  ContentContainer,
  FormContainer,
  CoffeesSelectedContainer,
  Divider,
  TotalContainer,
  Detail,
  TotalDetail,
  ConfirmButton,
} from './styles';

export type PaymentMethod = 'credit' | 'debit' | 'cash';

export function Checkout() {
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    coffees,
    selectedCoffeesIds,
    increment,
    decrement,
    remove,
    setAddressAndPayment,
  } = useCoffee();

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [paymentMethodSelected, setPaymentMethodSelected] =
    useState<PaymentMethod>();

  function handleSelectPaymentMethod(type: 'credit' | 'debit' | 'cash') {
    setPaymentMethodSelected(type);
  }

  const handleConfirmOrder = useCallback(() => {
    if (selectedCoffeesIds.length < 1) {
      alert('Selecione pelo menos um café');
      return;
    }

    if (
      cep.length < 8 ||
      street.length < 1 ||
      number.length < 1 ||
      neighborhood.length < 1 ||
      city.length < 1 ||
      state.length < 1
    ) {
      alert('Preencha todos os campos necessários');
      return;
    }

    if (!paymentMethodSelected) {
      alert('Selecione um método de pagamento');
      return;
    }

    setAddressAndPayment({
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      paymentMethod: paymentMethodSelected,
    });

    navigate('/success');
  }, [
    selectedCoffeesIds,
    cep,
    city,
    complement,
    navigate,
    neighborhood,
    number,
    paymentMethodSelected,
    setAddressAndPayment,
    state,
    street,
  ]);

  const allPriceSelectedCoffeesNumber = selectedCoffeesIds.map((coffeeId) => {
    const coffee = coffees.find((coffee) => coffee.id === coffeeId);

    if (!coffee) return 0;

    const priceNumber = Number(coffee.price.replace(',', '.'));
    const totalPrice = priceNumber * coffee.quantity;

    return totalPrice;
  });

  const totalPriceSelectedCoffees = allPriceSelectedCoffeesNumber.reduce(
    (acc, price) => {
      return acc + price;
    },
    0
  );

  const total = totalPriceSelectedCoffees + 3.5;

  const totalPriceSelectedCoffeesString =
    totalPriceSelectedCoffees.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const totalString = total.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <Title>Complete seu pedido</Title>
        <AddressPaymentContainer>
          <ContentContainer>
            <div className="header">
              <MapPin size={22} color={theme['yellow-dark']} />
              <div className="title-container">
                <h3 className="title">Endereço de entrega</h3>
                <h4 className="subtitle">
                  Informe o endereço onde deseja receber seu pedido
                </h4>
              </div>
            </div>

            <FormContainer>
              <Input
                placeholder="CEP"
                required
                containerStyle={{ width: '30%' }}
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <Input
                placeholder="Rua"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <div className="number-complement-container">
                <Input
                  placeholder="Número"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <Input
                  placeholder="Complemento"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                />
              </div>
              <div className="neighborhood-city-state-container">
                <Input
                  placeholder="Bairro"
                  required
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                />
                <Input
                  placeholder="Cidade"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  placeholder="UF"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </FormContainer>
          </ContentContainer>

          <ContentContainer>
            <div className="header">
              <CurrencyDollar size={22} color={theme['purple-dark']} />
              <div className="title-container">
                <h3 className="title">Pagamento</h3>
                <h4 className="subtitle">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </h4>
              </div>
            </div>
            <div className="select-container">
              <Select
                icon={<CreditCard size={16} color={theme.purple} />}
                label="CARTÃO DE CRÉDITO"
                isSelected={paymentMethodSelected === 'credit'}
                onClick={() => handleSelectPaymentMethod('credit')}
              />
              <Select
                icon={<Bank size={16} color={theme.purple} />}
                label="CARTÃO DE DÉBITO"
                isSelected={paymentMethodSelected === 'debit'}
                onClick={() => handleSelectPaymentMethod('debit')}
              />
              <Select
                icon={<Money size={16} color={theme.purple} />}
                label="DINHEIRO"
                isSelected={paymentMethodSelected === 'cash'}
                onClick={() => handleSelectPaymentMethod('cash')}
              />
            </div>
          </ContentContainer>
        </AddressPaymentContainer>
      </CheckoutContent>

      <CheckoutContent>
        <Title>Cafés selecionados</Title>
        <CoffeesSelectedContainer>
          {coffees.map((coffee) => {
            if (selectedCoffeesIds && !selectedCoffeesIds.includes(coffee.id))
              return null;

            return (
              <>
                <CoffeSelected
                  key={coffee.id}
                  coffee={coffee}
                  quantity={coffee.quantity}
                  onIncrement={() => increment(coffee.id)}
                  onDecrement={() => decrement(coffee.id)}
                  onRemove={() => remove(coffee.id)}
                />
                <Divider />
              </>
            );
          })}
          <TotalContainer>
            <Detail>
              <span className="label">Total de itens</span>
              <span className="value">
                R$ {totalPriceSelectedCoffeesString}
              </span>
            </Detail>
            <Detail>
              <span className="label">Entrega</span>
              <span className="value">R$ 3,50</span>
            </Detail>
            <TotalDetail>
              <span className="label">Total</span>
              <span className="value">R$ {totalString}</span>
            </TotalDetail>
          </TotalContainer>
          <ConfirmButton onClick={handleConfirmOrder}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </CoffeesSelectedContainer>
      </CheckoutContent>
    </CheckoutContainer>
  );
}
