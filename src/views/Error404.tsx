import { useNavigate } from "react-router-dom";

/**
 * @component Error
 * @description Componente que maneja la página de error 404
 * Características:
 * - Página de error personalizada
 * - Botón de redirección a inicio
 * @returns {JSX.Element} Componente de página de error
 * 
 * @example
 * // Uso en router
 * <Route path="*" element={<Error />} />
 */
export const Error = () => {
  const navigate = useNavigate();

  const handleError = () => {
    navigate("/"); // Redirige al home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-black">ERROR - Página no encontrada</h2>
      <br></br>
      <img src="/cryingcat.jpg" alt="Error 404" className="mb-4 rounded-[10px]" />
      <button
        className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg"
        onClick={handleError}
      >
        Error 404
      </button>
    </div>
  );
};

export default Error;
