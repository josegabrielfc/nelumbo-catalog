import { useState } from "react";
import ProductCard from "../ui/Card/ProductCard";
import ProductModal from "../ui/modal/ProductModal";
import { Product } from "../../types/product";

interface ProductsGridProps {
  products: Product[];
  title?: string;
}

export const ProductsGrid = ({ products, title }: ProductsGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Aseguramos mostrar solo 4 productos
  const displayProducts = products.slice(0, 4);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="w-full py-16 px-24">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4 md:px-6 text-center">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-6">
        {displayProducts.map((product) => (
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
    </section>
  );
};