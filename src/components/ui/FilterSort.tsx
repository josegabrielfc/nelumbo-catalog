import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SortOption, sortOptionsMap } from "../../types/sort";

interface FilterSortProps {
  options: string[];
  onSort?: (value: SortOption) => void;
}

export const FilterSort = ({ options, onSort }: FilterSortProps) => {
  const handleSort = (value: string) => {
    const sortValue = sortOptionsMap[value as keyof typeof sortOptionsMap];
    if (sortValue && onSort) {
      onSort(sortValue);
    }
  };

  return (
    <div className="w-full h-12 flex items-center">
      <span className="border border-gray-900 text-gray-700 whitespace-nowrap font-medium h-full flex items-center px-4 rounded-l">
        Ordenar por
      </span>
      <div className="relative w-full h-full flex items-center rounded-r border border-gray-700 border-l-0">
        <select
          className="w-full h-full px-3 appearance-none bg-transparent pr-8 text-gray-800 font-semibold text-s focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => handleSort(e.target.value)}
          defaultValue=""
        >
          <option value="">Seleccionar</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDownIcon className="h-6 w-6 text-gray-900" />
        </div>
      </div>
    </div>
  );
};
