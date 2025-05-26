import { Product } from '../types/product';

export const getUniqueBrands = (products: Product[]) => {
  const brandsSet = new Set(products.map(product => product.marca));
  return Array.from(brandsSet).map(brand => ({
    label: brand,
    value: brand.toLowerCase()
  }));
};

export const getUniqueCategories = (products: Product[]) => {
  const categoriesSet = new Set(products.map(product => product.categoria));
  return Array.from(categoriesSet).map(category => ({
    label: category,
    value: category
  }));
};