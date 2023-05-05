import { Coffee } from '../reducers/coffees/reducer';

import espresso from '../assets/expresso.png';
import american from '../assets/americano.png';
import creamyEspresso from '../assets/expresso-cremoso.png';
import icedCoffee from '../assets/cafe-gelado.png';
import coffeeWithMilk from '../assets/cafe-com-leite.png';
import latte from '../assets/latte.png';
import capuccino from '../assets/capuccino.png';
import macchiato from '../assets/macchiato.png';
import mocaccino from '../assets/mocaccino.png';
import hotChocolate from '../assets/chocolate-quente.png';
import cuban from '../assets/cubano.png';
import hawaiian from '../assets/havaiano.png';
import arabic from '../assets/arabe.png';
import irish from '../assets/irlandes.png';

export const coffees: Coffee[] = [
  {
    id: 1,
    image: espresso,
    tags: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 2,
    image: american,
    tags: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 3,
    image: creamyEspresso,
    tags: ['Tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 4,
    image: icedCoffee,
    tags: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 5,
    image: coffeeWithMilk,
    tags: ['Tradicional', 'Com leite'],
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 6,
    image: latte,
    tags: ['Tradicional', 'Com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 7,
    image: capuccino,
    tags: ['Tradicional', 'Com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 8,
    image: macchiato,
    tags: ['Tradicional', 'Com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 9,
    image: mocaccino,
    tags: ['Tradicional', 'Com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 10,
    image: hotChocolate,
    tags: ['Especial', 'Com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 11,
    image: cuban,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 12,
    image: hawaiian,
    tags: ['Especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 13,
    image: arabic,
    tags: ['Especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    quantity: 0,
  },
  {
    id: 14,
    image: irish,
    tags: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    quantity: 0,
  },
];
