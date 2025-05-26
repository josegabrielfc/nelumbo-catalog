import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface CategoriesProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export const Categories = ({ onCategoryChange, selectedCategory }: CategoriesProps) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categories = ["Home", "Celulares", "Motos", "Carros", "Relojes"];

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    setIsCategoryOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md" aria-label="Categories">
      {/* Mobile version */}
      <div className="lg:hidden w-full px-4">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full py-4 flex items-center justify-between text-gray-600"
          aria-expanded={isCategoryOpen}
        >
          <span>{selectedCategory || 'Categorías'}</span>
          <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}/>
        </button>

        {isCategoryOpen && (
          <ul className="py-2 space-y-2" role="list">
            {categories.map((category) => (
              <li key={category}>
                <button 
                  className={`w-full px-4 py-2 text-left transition-colors
                    ${selectedCategory === category 
                      ? 'text-[#004AC1] bg-gray-50' 
                      : 'text-gray-600 hover:text-[#004AC1] hover:bg-gray-50'}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop version */}
      <div className="hidden lg:block w-full px-4 md:px-8 lg:px-24 py-4">
        <ul className="flex flex-wrap gap-8" role="list">
          {categories.map((category) => (
            <li key={category}>
              <button 
                className={`font-medium transition-colors cursor-pointer
                  ${selectedCategory === category 
                    ? 'text-[#004AC1]' 
                    : 'text-gray-600 hover:text-[#004AC1]'}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
