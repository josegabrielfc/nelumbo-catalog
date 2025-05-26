import { useState } from "react";
import { Header } from "./Header";
import { Categories } from "../ui/Categories";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white" aria-label="Main navigation">
      <div className="flex flex-col w-full">
        <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Categories />
      </div>
    </nav>
  );
};
