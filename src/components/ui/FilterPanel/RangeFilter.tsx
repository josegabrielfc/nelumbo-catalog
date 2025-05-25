interface RangeFilterProps {
  name: string;
  label: string;
  value?: { min: number; max: number };
  onChange: (name: string, value: { min: number; max: number }) => void;
}

export const RangeFilter = ({ 
  name, 
  label,
  value = { min: 0, max: 0 }, 
  onChange 
}: RangeFilterProps) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="number"
        placeholder="Min"
        className="w-20 p-2 border border-black rounded text-sm text-black bg-transparent"
        value={value.min || ''}
        onChange={(e) => onChange(name, { 
          ...value, 
          min: parseInt(e.target.value) || 0 
        })}
        aria-label={`Mínimo ${label}`}
      />
      <span className="text-black">-</span>
      <input
        type="number"
        placeholder="Max"
        className="w-20 p-2 border border-black rounded text-sm text-black bg-transparent"
        value={value.max || ''}
        onChange={(e) => onChange(name, { 
          ...value, 
          max: parseInt(e.target.value) || 0 
        })}
        aria-label={`Máximo ${label}`}
      />
    </div>
  );
};