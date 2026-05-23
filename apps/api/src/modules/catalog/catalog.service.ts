import { httpError } from '../../lib/http-error.js';

export const categories = [
  { id: 'chandeliers', name: 'Люстры', slug: 'lyustry' },
  { id: 'sconces', name: 'Бра', slug: 'bra' },
  { id: 'pendants', name: 'Подвесы', slug: 'podvesy' },
  { id: 'spots', name: 'Споты', slug: 'spoty' },
  { id: 'soffits', name: 'Саффиты', slug: 'saffity' },
  { id: 'designer-collections', name: 'Дизайнерские коллекции', slug: 'dizaynerskie-kollektsii' },
];

export const brands = [
  'Maytoni',
  'ODEON LIGHT',
  'Lightstar',
  'EGLO',
  'Freya',
  'Favourite',
  'ST Luce',
  'Arte Lamp',
  'Eurosvet',
  'Novotech',
  'Omnilux',
  'Ideal Lux',
  'Mantra',
  'Crystal Lux',
  'Lumion',
  'Citilux',
  'LOFT IT',
  'Newport',
  'Nowodvorski',
  'Leds-C4',
];

export const products = [
  {
    slug: 'maytoni-chandelier-cascade',
    name: 'Maytoni Cascade',
    category: 'Люстры',
    brand: 'Maytoni',
    priceFrom: 145000,
    currency: 'KZT',
  },
  {
    slug: 'odeon-light-wall-sconce',
    name: 'ODEON LIGHT Wall Sconce',
    category: 'Бра',
    brand: 'ODEON LIGHT',
    priceFrom: 42000,
    currency: 'KZT',
  },
  {
    slug: 'lightstar-kitchen-pendant',
    name: 'Lightstar Kitchen Pendant',
    category: 'Подвесы',
    brand: 'Lightstar',
    priceFrom: 68000,
    currency: 'KZT',
  },
  {
    slug: 'novotech-functional-spot',
    name: 'Novotech Functional Spot',
    category: 'Споты',
    brand: 'Novotech',
    priceFrom: 18000,
    currency: 'KZT',
  },
];

export function getCategories() {
  return { success: true, data: categories };
}

export function getBrands() {
  return { success: true, data: brands };
}

export function getProducts() {
  return { success: true, data: products };
}

export function getProductBySlug(slug: string) {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    throw httpError(404, 'PRODUCT_NOT_FOUND', 'Product was not found.');
  }

  return { success: true, data: product };
}
