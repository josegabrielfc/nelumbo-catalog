export type SortOption = "price_asc" | "price_desc" | "id_desc" | "id_asc";

export const sortOptionsMap = {
  "Precio más bajo": "price_asc",
  "Precio más alto": "price_desc",
  "Más recientes": "id_desc",
  "Más antiguos": "id_asc",
} as const;