import { useState } from "react";
import { Header } from "./Header";
import { Categories } from "./Categories";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50" aria-label="Main navigation">
      <div className="flex flex-col w-full">
        <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Categories />
      </div>
    </nav>
  );
};
