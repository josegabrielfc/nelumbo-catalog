import { useMemo } from 'react';
import { Product } from '../types/product';
import { FilterValues } from '../components/interfaces/types';

export const useFilterProducts = (products: Product[], filters: FilterValues) => {
  return useMemo(() => {
    let filteredProducts = [...products];

    if (filters.brands && (filters.brands as string[]).length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        (filters.brands as string[]).includes(product.marca.toLowerCase())
      );
    }

    return filteredProducts;
  }, [products, filters]);
};