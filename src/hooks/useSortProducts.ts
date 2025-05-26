import { useMemo } from 'react';
import { Product } from '../types/product';
import { SortOption } from '../types/sort';

export const useSortProducts = (products: Product[], sortBy?: SortOption) => {
  const sortedProducts = useMemo(() => {
    let sortedItems = [...products];

    if (sortBy) {
      sortedItems.sort((a, b) => {
        switch (sortBy) {
          case "price_asc":
            return a.precio - b.precio;
          case "price_desc":
            return b.precio - a.precio;
          case "id_desc":
            return parseInt(b.id) - parseInt(a.id);
          case "id_asc":
          default:
            return parseInt(a.id) - parseInt(b.id);
        }
      });
    }

    return sortedItems;
  }, [products, sortBy]);

  return sortedProducts;
};