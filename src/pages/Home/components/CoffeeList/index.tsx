import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCoffee } from '../../../../hooks/coffee';
import { useWindowDimensions } from '../../../../hooks/windowDimensions';

import { Tag } from '../../../../components/Tag';
import { CoffeeCard } from '../../../../components/CoffeeCard';

import {
  CoffeeListContainer,
  Header,
  FilterContainer,
  ListContainer,
} from './styles';

type Filter = 'Tradicional' | 'Especial' | 'Com leite' | 'Alcoólico' | 'Gelado';

export function CoffeeList() {
  const { coffees, increment, decrement } = useCoffee();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const [filtersSelected, setFiltersSelected] = useState<Filter[]>([
    'Tradicional',
    'Especial',
    'Com leite',
    'Alcoólico',
    'Gelado',
  ]);

  const handleFilter = useCallback(
    (filter: Filter) => {
      const filterIsSelected = filtersSelected.includes(filter);

      if (filterIsSelected) {
        const filters = filtersSelected.filter((item) => item !== filter);

        setFiltersSelected(filters);
      } else {
        setFiltersSelected([...filtersSelected, filter]);
      }
    },
    [filtersSelected]
  );

  return (
    <CoffeeListContainer>
      <Header>
        <h1>Nossos cafés</h1>
        <FilterContainer>
          <Tag
            variant="outline"
            onClick={() => handleFilter('Tradicional')}
            isSelected={filtersSelected.includes('Tradicional')}
          >
            Tradicional
          </Tag>
          <Tag
            variant="outline"
            onClick={() => handleFilter('Especial')}
            isSelected={filtersSelected.includes('Especial')}
          >
            Especial
          </Tag>
          <Tag
            variant="outline"
            onClick={() => handleFilter('Com leite')}
            isSelected={filtersSelected.includes('Com leite')}
          >
            Com leite
          </Tag>
          <Tag
            variant="outline"
            onClick={() => handleFilter('Alcoólico')}
            isSelected={filtersSelected.includes('Alcoólico')}
          >
            Alcoólico
          </Tag>
          <Tag
            variant="outline"
            onClick={() => handleFilter('Gelado')}
            isSelected={filtersSelected.includes('Gelado')}
          >
            Gelado
          </Tag>
        </FilterContainer>
      </Header>

      <ListContainer>
        {coffees.map((coffee) => {
          const hasSomeFilterSelected = filtersSelected.some((filter) =>
            coffee.tags.includes(filter)
          );
          if (!hasSomeFilterSelected) return null;

          return (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onIncrement={increment}
              onDecrement={decrement}
              onShoppingCartClick={() => navigate('checkout')}
              containerStyle={{
                margin: width <= 425 ? '0 auto' : '0',
              }}
            />
          );
        })}
      </ListContainer>
    </CoffeeListContainer>
  );
}
