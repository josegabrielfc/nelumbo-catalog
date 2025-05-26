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

    if (filters.reviews) {
      const maxReviews = filters.reviews as number;
      filteredProducts = filteredProducts.filter(product => 
        product.reviews <= maxReviews
      );
    }

    if (filters.price) {
      const { min, max } = filters.price as { min: number; max: number };
      
      filteredProducts = filteredProducts.filter(product => {
        if (min && !max) {
          return product.precio >= min;
        }
        if (!min && max) {
          return product.precio <= max;
        }
        if (min && max) {
          return product.precio >= min && product.precio <= max;
        }
        return true;
      });
    }

    return filteredProducts;
  }, [products, filters]);
};