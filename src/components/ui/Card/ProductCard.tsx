import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "./Card";
import { StarIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

/**
 * @interface ProductCardProps
 * @description Propiedades requeridas para el componente ProductCard
 */
interface ProductCardProps {
  id: string;
  image: string[];
  name: string;
  price: number;
  discount?: number;
  reviews: number;
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
const ProductCard = ({
  id,
  name,
  price,
  image,
  discount,
  reviews,
  extra = "flex flex-col w-full h-full !p-4 3xl:p-![18px] transition-transform hover:scale-105",
  onClick,
}: ProductCardProps) => {
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();
  
  const descuentoNumerico = discount !== undefined ? discount : 1;
  const descuento = ((price * (100 - descuentoNumerico)) / 100).toFixed(2);

  const cuotaBase = discount ? parseFloat(descuento) : price;
  const cuotaMensual = (cuotaBase / 12).toFixed(2);
  const cuotaSemanal = (cuotaBase / 48).toFixed(2);

  const handleCardClick = (e: React.MouseEvent) => {
    if (!e.currentTarget.contains(e.target as Node) || (e.target as HTMLElement).closest("button")) return;
    navigate(`/product/${id}`);
  };

  return (
    <Card extra={extra} onClick={handleCardClick}>
      <div className="h-full w-full">
        <div className="relative">
          <div className="relative w-full h-96">
            {" "}
            <img
              src={image[0]}
              className="mb-3 h-full w-full object-cover rounded-md 3xl:h-full 3xl:w-full px-6"
              alt={`Imagen de ${name}`}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHeart(!heart);
              }}
              className="absolute right-0 top-0 flex items-center justify-center rounded-md bg-transparent  text-brand-500 "
            >
              <div className="flex h-full w-full items-center justify-center rounded-md text-3xl">
                {!heart ? (
                  <IoHeartOutline className="text-gray-400" />
                ) : (
                  <IoHeart className="text-brand-500 text-blue-800" />
                )}
              </div>
            </button>
          </div>
        </div>


        <hr className="border-t border-white my-2" />
        <div className="mb-3 flex items-stretch justify-between px-1 gap-4">
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <p className="text-lg font-bold text-black break-words">{name}</p>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-4 w-4 ${
                    star <= reviews
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-gray-600 ml-1">
                ({reviews.toFixed(1)})
              </span>
            </div>

            <div className="flex flex-col gap-1 text-sm text-gray-400">
              <p className="font-medium">${cuotaSemanal} p/semana</p>
              <p className="font-medium">o ${cuotaMensual} p/mes</p>
            </div>
          </div>

          <div className="flex flex-col text-right items-end flex-shrink-0">
            {discount ? (
              <>
                <p className="mb-2 text-4xl font-bold text-blue-800">
                  ${descuento}
                </p>
                <p className="mb-2 text-2xl font-medium text-gray-500 line-through">
                  ${price}
                </p>
              </>
            ) : (
              <p className="mb-2 text-4xl font-bold text-blue-800">${price}</p>
            )}
            <div className="flex justify-end">
              <button
                className="w-fit px-4 py-2 rounded-lg font-semibold bg-[#FFD300] text-[#004AC1] transition-colors cursor-pointer hover:bg-[#FFC700] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
              > Lo Quiero!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
