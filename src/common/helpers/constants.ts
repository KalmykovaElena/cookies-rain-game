import card_1 from '../assets/cookies/cake(1-1).png';
import card_2 from '../assets/cookies/cake(1-6).png';
import card_3 from '../assets/cookies/cake(1-7).png';
import booster_1 from '../assets/boosters/coinX2.png';
import booster_2 from '../assets/boosters/hourglass.png';
import booster_3 from '../assets/boosters/bomb.png';

export const TAGS = {
  div: 'div',
  section: 'section',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  span: 'span',
  button: 'button',
  input: 'input',
  img: 'img',
  ul: 'ul',
  li: 'li',
  main: 'main',
};

export const PRODUCTS = [
  {
    name: 'small cake',
    img: card_1,
    cost: 50,
    dropChance: 0.1,
  },
  {
    name: 'donut',
    img: card_2,
    cost: 30,
    dropChance: 1,
  },
  {
    name: 'cookies',
    img: card_3,
    cost: 10,
    dropChance: 1.6,
  },
];

export const LANG = {
  ru: 'ru',
  en: 'en',
};

export const VIEW = {
  cookie: 'cookie',
  factory: 'factory',
  home: 'home',
};

export const BOOSTERS = [
  {
    id: 1,
    name: 'doubleCost',
    img: booster_1,
    timer: true,
  },
  {
    id: 2,
    name: 'changeSpeed',
    img: booster_2,
    property: 16000,
    timer: true,
  },
  {
    id: 3,
    name: 'blow',
    img: booster_3,
  },
];

export const FACTORY_TYPES = {
  s: 's',
  m: 'm',
  l: 'l',
};
