import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Product } from "../types/product";
import { mockProducts } from "../data/mockProducts";
import { StarIcon } from "@heroicons/react/24/outline";
import { SiVisa, SiMastercard } from "react-icons/si";
import { ProductDetailSection } from "./ProductDetailSection";
import { ProductsGrid } from "../components/layout/ProductsGrid";

export const ProductView = () => {
  // Hook para obtener el parametro id de la URL
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    // Por ahora, usamos mockProducts porque se pidio trabajar de esta manera
    // Pero pues aqui realmente iria el endpoint a la API
    const foundProduct = mockProducts.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imagen[0]);
    }
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  const descuentoNumerico: number =
    product.descuento !== undefined ? product.descuento : 1;
  const descuento: string = (
    (product.precio * (100 - descuentoNumerico)) /
    100
  ).toFixed(2);

  const cuotaBase = product.descuento ? parseFloat(descuento) : product.precio;

  return (
  <>
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <a href="/" className="hover:text-blue-600">
          Celulares
        </a>
        <span>/</span>
        <a href="/" className="hover:text-blue-600">
          {product.marca}
        </a>
        <span>/</span>
        <span className="text-gray-900">{product.nombre}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {product.imagen.map((img, index) => (
              <button
                key={index}
                className={`border rounded-lg p-2 hover:border-blue-500 w-20 h-20 ${
                  mainImage === img ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          <div className="flex-1 border rounded-lg p-4 bg-white">
            <img
              src={mainImage}
              alt={product.nombre}
              className="w-full h-[32rem] object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.nombre}
              </h1>
              {(product.memoria || product.ram) && (
                <h2 className="text-xl font-bold text-gray-900">
                  {product.memoria}
                  {product.memoria && product.ram ? ", " : ""}
                  {product.ram && `${product.ram} RAM`}
                </h2>
              )}
            </div>

            <div className="text-right space-y-2">
              <div className="text-4xl font-bold text-blue-600">
                ${cuotaBase}
              </div>
              <div className="text-xl text-gray-500 line-through">
                ${product.precio}
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <SiVisa className="h-8 w-12 text-blue-900" />
                <SiMastercard className="h-8 w-8 text-gray-800" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <StarIcon
                  key={star}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
              <StarIcon className="h-6 w-6 text-gray-300" />
            </div>
            <span className="text-gray-600">(4.0)</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{product.descripcion}</p>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col bg-gray-300 rounded-lg p-2 items-start">
              <div className="flex items-center gap-2 ">
                <svg
                  className="w-8 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 28 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3l9 4v5c0 5.25-4.5 9.75-9 11-4.5-1.25-9-5.75-9-11V7l9-4z"
                  />
                </svg>
                <span className="font-bold text-gray-800">
                  Compra Segura con Macropay Protect
                </span>
              </div>
              <span className="text-gray-700 font-normal text-sm mt-1 ml-10">
                Devolucion gratis (30 dias)
              </span>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-yellow-400 rounded-full p-4">
                  <span className="font-bold text-gray-800">HOY</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600">DESDE</div>
                  <div className="text-2xl font-bold text-gray-800">
                    ${(product.precio / 48).toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600">SEMANAL</div>
                </div>
              </div>
              <div className="flex w-full md:w-auto items-center justify-center gap-2">
                <div className="text-center">
                  <div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                    1
                  </div>
                  <p className="text-sm text-gray-700">Aplica a tu crédito!</p>
                </div>
                <span className="text-gray-400 text-2xl mx-1">{"→"}</span>
                <div className="text-center">
                  <div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                    2
                  </div>
                  <p className="text-sm text-gray-700">Verifica tu compra</p>
                </div>
                <span className="text-gray-400 text-2xl mx-1">{"→"}</span>
                <div className="text-center">
                  <div className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">
                    3
                  </div>
                  <p className="text-sm text-gray-700">Disfruta tu celular</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
              LO QUIERO A CRÉDITO
            </button>
          </div>
        </div>
      </div>
      <ProductDetailSection product={product} />
    </div>
    <ProductsGrid products={mockProducts} title="Productos Relacionados"/>
  </>
  );
};
