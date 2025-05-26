import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { FormEvent, useState } from "react";

interface SearchPanelProps {
  categories: Array<{ label: string; value: string }>;
  onSearch: (searchText: string, category: string) => void;
}

export const SearchPanel = ({ categories, onSearch }: SearchPanelProps) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchText.trim(), selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onSearch(searchText.trim(), category);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-12 flex items-center">
      <div className="relative w-full h-full flex items-center pl-10">
        <div className="relative flex-grow h-full flex items-center border border-gray-900 rounded-l-[30px]">
          <div className="absolute left-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-900" />
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Encuentra el producto que necesitas"
            className="w-full h-full pl-10 pr-3 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-[30px]"
          />
        </div>
        <div
          className="relative h-full flex items-center rounded-r-[30px] border border-gray-700 border-l-0 w-[200px]"
        >
          <select
            className="w-full h-full px-3 appearance-none bg-gray-500 pr-8 text-white font-semibold text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 rounded-r-[30px]"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDownIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </form>
  );
};
