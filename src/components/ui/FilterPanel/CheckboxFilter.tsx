interface CheckboxFilterProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  selectedValues: string[];
  onChange: (name: string, values: string[]) => void;
}

export const CheckboxFilter = ({ 
  name, 
  options, 
  selectedValues = [], 
  onChange 
}: CheckboxFilterProps) => {
  const handleChange = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    
    onChange(name, newValues);
  };

  return (
    <div className="space-y-2" role="group">
      {options.map(({ label, value }) => (
        <label 
          key={value}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-blue-600"
            checked={selectedValues.includes(value)}
            onChange={() => handleChange(value)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
};