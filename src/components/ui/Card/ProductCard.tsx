import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "./Card";

/**
 * @interface ProductCardProps
 * @description Propiedades requeridas para el componente ProductCard
 */
interface ProductCardProps {
  image: string;
  name: string;
  price: string | number;  
  extra?: string;
  onClick?: () => void;
}

/**
 * @component ProductCard
 * @description Componente que muestra la información de una Producta en formato de tarjeta
 * Incluye imagen, nombres común, nombre científico y cantidad
 * 
 * @param {ProductCardProps} props - Propiedades del componente
 * @returns {JSX.Element} Componente ProductCard
 */
const ProductCard = ({ name, price, image,
  extra = "flex flex-col w-full h-full !p-4 3xl:p-![18px] cursor-pointer transition-transform hover:scale-105",
  onClick
}: ProductCardProps) => {
  // Estado para controlar el botón de favorito
  const [heart, setHeart] = useState(false);

  return (
    <Card
      extra={extra}
      onClick={onClick}
    >
      <div className="h-full w-full">
        {/* Contenedor de la imagen y botón de favorito */}
        <div className="relative">
          <div className="relative w-full h-96"> {/* Cambiado de h-64 a h-96 */}
            <img
              src={image}
              className="mb-3 h-full w-full object-cover rounded-md 3xl:h-full 3xl:w-full"
              alt={`Imagen de ${name}`}
            />
            {/* Botón de favorito */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when clicking heart
                setHeart(!heart);
              }}
              className="absolute right-0 top-0 flex items-center justify-center rounded-md bg-transparent p-2 text-brand-500 hover:cursor-pointer"
            >
              <div className="flex h-full w-full items-center justify-center rounded-md text-3xl">
                {!heart ? (
                  <IoHeartOutline />
                ) : (
                  <IoHeart className="text-brand-500" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Sección de información de la Producta */}
        <hr className="border-t border-white my-2" />
        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start 
        lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-white">
              Producto: {name}
            </p>
          </div>
          <div className="flex items-center justify-between md:flex-col md:items-start 
          lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 
          3xl:items-center 3xl:justify-between">
            <div className="flex">
              <p className="mb-2 text-sm font-normal text-gray-200">
                Precio: {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;