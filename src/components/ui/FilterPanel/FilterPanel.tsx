import { useState } from "react";
import { FilterPanelProps, FilterValues } from "../../interfaces/types";
import { CheckboxFilter } from "./CheckboxFilter";
import { RangeFilter } from "./RangeFilter";
import { StarRatingFilter } from "./StarRatingFilter";

export const FilterPanel = ({ filters, onFilterChange }: FilterPanelProps) => {
  const [selectedValues, setSelectedValues] = useState<FilterValues>({});

  const handleFilterChange = (category: string, value: FilterValues[string]) => {
    const updatedFilters = {
      ...selectedValues,
      [category]: value,
    };
    
    setSelectedValues(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <aside className="w-full" aria-label="Panel de filtros">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="space-y-6">
          {filters.map((filter) => (
            <div 
              key={filter.name} 
              className="filter-section border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {filter.label}
              </h3>

              {/* Renderizado condicional de filtros */}
              {filter.type === "checkbox" && (
                <CheckboxFilter
                  name={filter.name}
                  options={(filter.options ?? []).map(opt => ({
                    label: opt.label,
                    value: String(opt.value),
                  }))}
                  selectedValues={selectedValues[filter.name] as string[]}
                  onChange={handleFilterChange}
                />
              )}

              {filter.type === "range" && (
                <RangeFilter
                  name={filter.name}
                  label={filter.label}
                  value={selectedValues[filter.name] as { min: number; max: number }}
                  onChange={handleFilterChange}
                />
              )}

              {filter.type === "stars" && (
                <StarRatingFilter
                  value={filter.value ?? 0}
                  onChange={(value) => handleFilterChange(filter.name, value)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};