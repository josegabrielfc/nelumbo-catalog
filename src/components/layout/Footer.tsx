import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import macropayLogo from "../../assets/macropay.svg";
import { Emoji } from "../ui/Emoji";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#FFD300] to-[#D2AE00] text-[#2B3445] pt-12 pb-6 px-6 overflow-hidden min-h-[360px]">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr_2fr] gap-10 px-20">
        
        {/* Columna 1: Suscripción + Información Legal */}
        <div className="space-y-8">
          {/* Bloque de suscripción */}
          <div className="space-y-3">
            <p className="text-sm font-bold">OFERTAS Y PROMOCIONES</p>
            <h2 className="text-2xl font-extrabold">
              No te pierdas <br />
              nuestras ofertas!
            </h2>

            <div className="border-b border-[#2B3445] mt-4 flex items-center justify-between">
              <input
                type="email"
                placeholder="Tu dirección de correo electrónico"
                className="w-full py-2 text-sm text-[#2B3445] placeholder-[#2B3445]/70 bg-transparent focus:outline-none"
              />
              <FaPaperPlane className="text-2xl text-blue-800" />
            </div>
          </div>

          {/* Logo + Derechos + Enlaces */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Logo y derechos reservados */}
            <div className="flex flex-col gap-4">
              <div className="bg-blue-800 rounded-[20px] px-3 pb-2 pt-3 w-fit">
                <img src={macropayLogo} alt="Macropay Logo" className="h-8" />
              </div>
              <span className="text-[9px]">
                Todos los derechos reservados · © Macropay 2022
              </span>
            </div>

            {/* Enlaces legales */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
                Envíos y devoluciones
              </a>
              <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
                Preguntas Frecuentes
              </a>
              <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
                Aviso de privacidad
              </a>
              <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Emoji */}
        <div className="flex justify-center items-center py-8 lg:py-0">
          {/* Emoji container */}
          <Emoji />
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="flex flex-col justify-center items-center space-y-3 lg:pr-40">
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold">Conversemos!</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a href="#" className="hover:text-[#2B3445]/80 transition-colors">
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

