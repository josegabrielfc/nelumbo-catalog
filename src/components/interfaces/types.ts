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

export interface FilterValues {
  brands?: string[];
  reviews?: number;
  price?: { min: number; max: number };
  [key: string]: any;
}

export interface FilterPanelProps {
  filters: Filter[];
  onFilterChange: (filters: FilterValues) => void;
}