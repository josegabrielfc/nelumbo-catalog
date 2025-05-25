import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";
import macropayLogo from "../../assets/macropay.svg";
import { MenuProps } from "../interfaces/types";

export const Header = ({
  isOpen: isMenuOpen,
  setIsOpen: setIsMenuOpen,
}: MenuProps) => {
  return (
    <header className="w-full bg-gradient-to-b from-[#004AC1] to-[#0744A8] text-white">
      <div className="w-full h-[70px] md:h-[90px] lg:h-[110px] px-4 md:px-8 lg:px-24 flex justify-between items-center">
        <img
          src={macropayLogo}
          alt="Macropay Logo"
          className="h-8 md:h-10"
          loading="eager"
        />

        <div className="flex items-center gap-4">
          {/* Boton menu (Mobile)*/}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          <button
            className="p-2 bg-[#EBEFF4] rounded-full hover:bg-[#F8F9FA] hover:shadow-lg transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Version (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4">
            <button className="px-6 py-4 rounded-lg font-semibold bg-[#FFD300] text-[#004AC1] hover:bg-[#ffe066] transition-colors">
              Crea Tu Cuenta
            </button>

            <button className="px-4 py-2 rounded-lg text-[#FFD300] hover:bg-white/10 transition-colors">
              Iniciar sesión
            </button>
          </nav>
        </div>
      </div>

      {/* Navegacion menu (Mobile)*/}
      <div
        className={`lg:hidden w-full bg-[#0744A8] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-4">
          <button className="w-full px-4 py-2 rounded-lg font-semibold bg-[#FFD300] text-[#004AC1] transition-colors">
            Crea Tu Cuenta
          </button>
          <button className="w-full px-4 py-2 text-[#FFD300] hover:bg-white/10 transition-colors">
            Iniciar sesión
          </button>
        </nav>
      </div>
    </header>
  );
};
