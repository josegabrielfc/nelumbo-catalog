export interface Product {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  precioOriginal?: number;
  descuento?: number;
  reviews: number; // escala de 1 a 5
  categoria: string;
  imagen: string[];
  memoria?: string;
  ram?: string;
  color?: string;
  descripcion?: string;
}