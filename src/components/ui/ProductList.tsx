import { useState } from "react";
import ProductCard from "./Card/ProductCard";
import { mockProducts } from "../../data/mockProducts";
import ProductModal from "./modal/ProductModal";
import { Product } from "../../types/product";
import { SortOption } from "../../types/sort";
import { useSortProducts } from "../../hooks/useSortProducts";
import { useFilterProducts } from "../../hooks/useFilterProducts";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import { FilterValues } from "../interfaces/types";

interface ProductListProps {
  sortBy?: SortOption;
  filters: FilterValues;
  searchText: string;
  category: string;
}

export const ProductList = ({
  sortBy,
  filters,
  searchText,
  category
}: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useFilterProducts(mockProducts, filters);
  const searchedProducts = useSearchProducts(filteredProducts, searchText, category);
  const sortedProducts = useSortProducts(searchedProducts, sortBy);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="mt-3 grid h-full w-full">
      <div className="col-span-1 h-fit w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-4 md:px-6 xl:px-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.imagen}
              name={product.nombre}
              reviews={product.reviews}
              discount={product.descuento}
              price={product.precio}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
        
        {selectedProduct && (
          <ProductModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            product={selectedProduct}
          />
        )}
      </div>
    </div>
  );
};