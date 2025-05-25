import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Producto } from '../types/product';

interface ProductCardProps {
  producto: Producto;
  onFavoriteClick: (id: string) => void;
  isFavorite: boolean;
}

export const ProductCard = ({ producto, onFavoriteClick, isFavorite }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
          {producto.nombre}
        </h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 ${index < producto.reviews ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {producto.precioOriginal && producto.descuento && (
              <span className="text-sm text-gray-500 line-through">
                ${producto.precioOriginal.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-bold text-blue-600">
              ${producto.precio.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => onFavoriteClick(producto.id)}
            className={`p-2 rounded-full ${
              isFavorite ? 'bg-yellow-400 text-white' : 'bg-gray-200'
            }`}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  );
};
