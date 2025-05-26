import { Product } from "../../../types/product";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  if (!isOpen || !product) return null;

  const descuentoNumerico = product.descuento !== undefined ? product.descuento : 1;
  const descuento = ((product.precio * (100 - descuentoNumerico)) / 100).toFixed(2);

  const cuotaBase = product.descuento ? parseFloat(descuento) : product.precio;
  const cuotaSemanal = (cuotaBase / 48).toFixed(2);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/25 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="flex min-h-full items-center justify-center p-8 text-center">
        <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full bg-white p-2 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="absolute top-0 left-0 right-0 h-64">
            <img
              src="/src/assets/imgModal.png"
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 px-8 pb-4 pt-70">
            <div className="flex flex-col">
              <div className="flex gap-8">
                <div className="w-1/4">
                  <img
                    src={product.imagen[0]}
                    alt={product.nombre}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-800">
                      ${cuotaBase} x 1
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.nombre}
                      </h3>
                      {(product.memoria || product.ram) && (
                        <h3 className="text-xl font-bold text-gray-900">
                          {product.memoria}
                          {product.memoria && product.ram ? ", " : ""}
                          {product.ram && `${product.ram} RAM`}
                        </h3>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      Color seleccionado: {product.color}
                    </p>
                  </div>
                </div>
              </div>

              {/* Resumen del Carrito */}
              <div className="mt-4">
                <hr className="border-t border-gray-300" />
                <div className="flex justify-between items-center my-4">
                  <span className="text-sm text-gray-600">
                    1 item en tu carrito
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-m font-bold text-blue-800">
                      ${cuotaBase}
                    </span>
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
              </div>

              <div className="pt-3">
                <div className="flex justify-center">
                  <img
                    src="/src/assets/check.png"
                    alt="Check Logo"
                    className="h-16 w-16"
                  />
                </div>
                <div className="rounded-lg p-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      Te vas a llevar este celular por solo
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-center text-blue-800">
                    $ {cuotaSemanal} p/semana!
                  </p>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors">
                  COMPRAR A CRÉDITO
                </button>

                <p className="text-center text-sm text-gray-500">o puedes</p>
                <button className="w-full text-blue-600 hover:text-blue-700 font-medium">
                  Comprar a contado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
