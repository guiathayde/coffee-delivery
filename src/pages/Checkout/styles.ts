import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;

  min-height: 100vh;

  padding: 3rem 0;
  margin: 0 auto;
`;

export const CheckoutContent = styled.div`
  min-width: 28rem;
  max-width: 640px;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.subtitle};

  margin-bottom: 1rem;
`;

export const AddressPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 100%;

  background: ${({ theme }) => theme.card};
  border-radius: 6px;

  .header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;

    gap: 0.5rem;

    .title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      gap: 0.125rem;

      .title {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        text-align: center;
        color: ${({ theme }) => theme.subtitle};
      }

      .subtitle {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
        text-align: center;
        color: ${({ theme }) => theme.text};
      }
    }
  }

  .select-container {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  width: 100%;

  .number-complement-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 0.75rem;

    width: 100%;
  }

  .neighborhood-city-state-container {
    display: grid;
    grid-template-columns: 1fr 2fr 60px;
    grid-gap: 0.75rem;

    width: 100%;
  }
`;

export const CoffeesSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 100%;

  background: ${({ theme }) => theme.card};
  border-radius: 6px 44px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  border: 1px solid ${({ theme }) => theme.button};
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  width: 100%;
`;

const BaseDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
`;

export const Detail = styled(BaseDetail)`
  .label {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${({ theme }) => theme.text};
  }

  .value {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${({ theme }) => theme.text};
  }
`;

export const TotalDetail = styled(BaseDetail)`
  .label {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${({ theme }) => theme.subtitle};
  }

  .value {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;

    display: flex;
    align-items: center;
    text-align: right;

    color: ${({ theme }) => theme.subtitle};
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 100%;

  background: ${({ theme }) => theme.yellow};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;

  text-transform: uppercase;

  color: ${({ theme }) => theme.white};
  font-stretch: 100;

  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`;
