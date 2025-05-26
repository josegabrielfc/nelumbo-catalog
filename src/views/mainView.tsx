import { useState } from "react";
import { Categories } from "../components/ui/Categories";
import { productsByCategory } from "../data/mockProducts";
import { getUniqueBrands, getUniqueCategories } from "../utils/productUtils";
import { FilterSort } from "../components/ui/FilterSort";
import { SearchPanel } from "../components/ui/SearchPanel";
import { FilterPanel } from "../components/ui/FilterPanel/FilterPanel";
import { ProductList } from "../components/ui/ProductList";
import { Filter, FilterValues } from "../components/interfaces/types";
import { SortOption } from "../types/sort";
import { ProductsGrid } from "../components/layout/ProductsGrid";

export const Main = () => {
  const [currentSort, setCurrentSort] = useState<SortOption>();
  const [activeFilters, setActiveFilters] = useState<FilterValues>({});
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentCategory, setCurrentCategory] = useState<keyof typeof productsByCategory>("Home");

  const sortOptions = [
    "Precio más bajo",
    "Precio más alto",
    "Más recientes",
    "Más antiguos",
  ];

  const currentProducts = productsByCategory[currentCategory] || [];

  const handleCategoryChange = (category: string) => {
    if (category in productsByCategory) {
      setCurrentCategory(category as keyof typeof productsByCategory);
      // Reiniciar los filtros
      setActiveFilters({});
      setSearchText("");
      setSelectedCategory("");
      setCurrentSort(undefined);
    }
  };

  const filters: Filter[] = [
    {
      name: "brands",
      label: "Marcas",
      type: "checkbox",
      options: getUniqueBrands(currentProducts),
    },
    {
      name: "price",
      label: "Precio",
      type: "range",
    },
    {
      name: "reviews",
      label: "Reviews",
      type: "stars",
      value: 4,
    },
  ];

  const handleFilters = (selectedFilters: FilterValues) => {
    setActiveFilters(selectedFilters);
  };

  const handleSearch = (text: string, category: string) => {
    setSearchText(text);
    setSelectedCategory(category);
  };

  return (
    <main className="w-full">
      <Categories
        onCategoryChange={handleCategoryChange}
        selectedCategory={currentCategory}
      />
      <div className="w-full px-4 pt-6 md:px-8 lg:px-24">
        {/* Layout desktop */}
        <div className="hidden lg:grid lg:grid-cols-[25%_75%] lg:gap-4">
          <div className="h-[50px]">
            <FilterSort
              options={sortOptions}
              onSort={setCurrentSort}
            />
          </div>
          <div className="h-[50px] flex items-center">
            <div className="w-1/2">
              <SearchPanel
                categories={getUniqueCategories(currentProducts)}
                onSearch={handleSearch}
              />
            </div>
            <div className="w-1/2 flex justify-end">
              <span className="text-gray-500 text-sm">
                Mostrando {currentProducts.length > 0 ? '1' : '0'}-{currentProducts.length} de {currentProducts.length} productos
              </span>
            </div>
          </div>
          <div className="min-h-[calc(70vh-50px)]">
            <FilterPanel filters={filters} onFilterChange={handleFilters} />
          </div>
          <div className="min-h-[calc(70vh-50px)]">
            <ProductList
              products={currentProducts}
              sortBy={currentSort}
              filters={activeFilters}
              searchText={searchText}
              category={selectedCategory}
            />
          </div>
        </div>
        {/* Layout móvil (por defecto) */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          <div className="h-[50px]">
            <FilterSort
              options={sortOptions}
              onSort={(value) => setCurrentSort(value)}
            />
          </div>
          <div className="h-[50px]">
            <SearchPanel
              categories={getUniqueCategories(currentProducts)}
              onSearch={handleSearch}
            />
          </div>
          <div className="min-h-[calc(50vh-50px)]">
            <FilterPanel filters={filters} onFilterChange={handleFilters} />
          </div>
          <div className="min-h-[calc(50vh-50px)]">
            <ProductList
              products={currentProducts}
              sortBy={currentSort}
              filters={activeFilters}
              searchText={searchText}
              category={selectedCategory}
            />
          </div>
        </div>
      </div>

      <ProductsGrid 
        products={currentProducts} 
        title={`Productos Destacados - ${currentCategory}`} 
      />
    </main>
  );
};
