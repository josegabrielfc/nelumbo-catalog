import { Product } from "../types/product";

interface ProductDetailSectionProps {
  product: Product;
}

export const ProductDetailSection = ({ product }: ProductDetailSectionProps) => {
  const descuentoNumerico: number = product.descuento !== undefined ? product.descuento : 1;
  const descuento: string = ((product.precio * (100 - descuentoNumerico)) / 100).toFixed(2);

  const cuotaBase = product.descuento ? parseFloat(descuento) : product.precio;

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 gap-4">
        {product.imagen.slice(0, 4).map((img, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-2 bg-white flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Detalle ${idx + 1}`}
              className="w-full h-64 object-contain"
            />
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Información Detallada del Producto
        </h2>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex border-b">
            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-medium">
              Otras Especificaciones
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Reviews ({product.reviews})
            </button>
          </div>

            <div className="p-4">
              <div className="grid grid-cols-4 gap-x-8 gap-y-2">
              <div className="col-span-1 text-start font-semibold text-black">Marca</div>
              <div className="col-span-3 text-start font-medium text-gray-600">{product.marca}</div>

              <div className="col-span-1 text-start font-semibold text-black">Nombre</div>
              <div className="col-span-3 text-start font-medium text-gray-600">{product.nombre}</div>

              <div className="col-span-1 text-start font-semibold text-black">Categoría</div>
              <div className="col-span-3 text-start font-medium text-gray-600">{product.categoria}</div>

              <div className="col-span-1 text-start font-semibold text-black">Color</div>
              <div className="col-span-3 text-start font-medium text-gray-600">
                {product.color || "No especificado"}
              </div>

              <div className="col-span-1 text-start font-semibold text-black">Memoria</div>
              <div className="col-span-3 text-start font-medium text-gray-600">
                {product.memoria || "No especificado"}
              </div>

              <div className="col-span-1 text-start font-semibold text-black">RAM</div>
              <div className="col-span-3 text-start font-medium text-gray-600">
                {product.ram || "No especificado"}
              </div>

              <div className="col-span-1 text-start font-semibold text-black">Precio Original</div>
              <div className="col-span-3 text-start font-medium text-gray-600">
                ${product.precioOriginal?.toFixed(2) || product.precio.toFixed(2)}
              </div>

              {product.descuento && (
                <>
                <div className="col-span-1 text-start font-semibold text-black">Descuento</div>
                <div className="col-span-3 text-start font-medium text-green-600">
                  ${product.precio} con {product.descuento}% de descuento: {cuotaBase}
                </div>
                </>
              )}

              <div className="col-span-1 text-start font-semibold text-black">Calificación</div>
              <div className="col-span-3 text-start font-medium text-gray-600">{product.reviews} de 5</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
