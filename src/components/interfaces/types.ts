export interface MenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export interface FilterOption {
  label: string;
  value: string | number;
}
export interface Filter {
  name: string;
  label: string;
  type: 'checkbox' | 'range' | 'stars';
  options?: FilterOption[];
  value?: number;
}

export type FilterValues = {
  [key: string]: string[] | { min: number; max: number } | number;
};

export interface FilterPanelProps {
  filters: Filter[];
  onFilterChange: (filters: FilterValues) => void;
}