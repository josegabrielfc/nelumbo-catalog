import { StarIcon } from "@heroicons/react/24/outline";

interface StarRatingFilterProps {
  value?: number;
  onChange?: (value: number) => void;
}

export const StarRatingFilter = ({ value = 5, onChange }: StarRatingFilterProps) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-2">
      <div 
        className="flex items-center gap-1" 
        role="group" 
        aria-label={`Calificación: ${value} estrellas o menos`}
      >
        {stars.map((starValue) => (
          <button
            key={starValue}
            type="button"
            onClick={() => onChange?.(starValue)}
            className={`transition-colors ${
              starValue <= value 
                ? 'text-yellow-400 hover:text-yellow-500' 
                : 'text-gray-300 hover:text-gray-400'
            }`}
            aria-label={`Filtrar por ${starValue} estrellas o menos`}
          >
            <StarIcon 
              className="h-5 w-5"
              fill={starValue <= value ? "currentColor" : "none"} 
              stroke="currentColor"
            />
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500">
        {value} {value === 1 ? 'estrella' : 'estrellas'} o menos
      </p>
    </div>
  );
};