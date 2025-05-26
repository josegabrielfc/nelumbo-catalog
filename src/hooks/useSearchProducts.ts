import { useMemo } from 'react';
import { Product } from '../types/product';

export const useSearchProducts = (
  products: Product[],
  searchText: string,
  category: string
) => {
  return useMemo(() => {
    let filteredProducts = [...products];

    if (category) {
      filteredProducts = filteredProducts.filter(
        product => product.categoria === category
      );
    }

    if (searchText) {
      const searchLower = searchText.toLowerCase();
      filteredProducts = filteredProducts.filter(
        product =>
          product.nombre.toLowerCase().includes(searchLower) ||
          product.marca.toLowerCase().includes(searchLower)
      );
    }

    return filteredProducts;
  }, [products, searchText, category]);
};