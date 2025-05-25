import { StarIcon } from "@heroicons/react/24/outline";

interface StarRatingFilterProps {
  value: number;
  onChange?: (value: number) => void;
}

export const StarRatingFilter = ({ value, onChange }: StarRatingFilterProps) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div 
      className="flex items-center gap-1" 
      role="group" 
      aria-label={`Calificación: ${value} estrellas`}
    >
      {stars.map((starValue) => (
        <button
          key={starValue}
          type="button"
          onClick={() => onChange?.(starValue)}
          className="text-yellow-400 hover:text-yellow-500 transition-colors"
          aria-label={`Calificar ${starValue} estrellas`}
        >
          <StarIcon 
            className="h-5 w-5"
            fill={starValue <= value ? "currentColor" : "none"} 
            stroke="currentColor"
          />
        </button>
      ))}
    </div>
  );
};