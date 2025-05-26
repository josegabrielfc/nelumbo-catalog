import { useState, useEffect } from 'react';

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

  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (type: 'min' | 'max', inputValue: string) => {
    const numericValue = inputValue === '' ? 0 : parseInt(inputValue);
    const newValue = {
      ...localValue,
      [type]: numericValue
    };

    // Validaciones
    if (type === 'min' && newValue.max && numericValue > newValue.max) {
      return;
    }
    if (type === 'max' && newValue.min && numericValue < newValue.min) {
      return;
    }

    setLocalValue(newValue);
    onChange(name, newValue);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1">
        <div className="relative flex-1">
          <input
            type="number"
            placeholder="Min"
            className="w-full p-2 border border-gray-300 rounded text-black text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={localValue.min || ''}
            onChange={(e) => handleChange('min', e.target.value)}
            min={0}
            aria-label={`Mínimo ${label}`}
          />
          <span className="absolute left-2 -top-2 text-black text-xs bg-white px-1 text-gray-500">
            Mínimo
          </span>
        </div>
        
        <span className="text-gray-400">-</span>
        
        <div className="relative flex-1">
          <input
            type="number"
            placeholder="Max"
            className="w-full p-2 border border-gray-300 rounded text-black text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={localValue.max || ''}
            onChange={(e) => handleChange('max', e.target.value)}
            min={0}
            aria-label={`Máximo ${label}`}
          />
          <span className="absolute left-2 -top-2 text-black text-xs bg-white px-1 text-gray-500">
            Máximo
          </span>
        </div>
      </div>
      
      {localValue.min > 0 && localValue.max > 0 && (
        <p className="text-xs text-gray-500">
          Mostrando productos entre ${localValue.min} y ${localValue.max}
        </p>
      )}
      {localValue.min > 0 && !localValue.max && (
        <p className="text-xs text-gray-500">
          Mostrando productos desde ${localValue.min}
        </p>
      )}
      {!localValue.min && localValue.max > 0 && (
        <p className="text-xs text-gray-500">
          Mostrando productos hasta ${localValue.max}
        </p>
      )}
    </div>
  );
};