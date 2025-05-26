import { useState } from "react";
import ProductCard from "./Card/ProductCard";
import { mockProducts } from "../../data/mockProducts";
import ProductModal from "./modal/ProductModal";
import { Product } from "../../types/product";

export const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {/* Grid responsivo:
            - Móvil (<768px): 1 columna
            - Tablet (≥768px): 2 columnas
            - Desktop (≥1280px): 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-4 md:px-6 xl:px-8">
          {mockProducts.map((product) => (
            <ProductCard
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