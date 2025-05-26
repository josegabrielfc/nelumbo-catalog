import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    nombre: 'iPhone 16 Pro Max',
    marca: 'Apple',
    precio: 1299.99,
    precioOriginal: 1399.99,
    descuento: 10, // 10% de descuento
    reviews: 4.8,
    categoria: 'Smartphones',
    imagen: '/src/assets/iphone16promax.webp',
    memoria: '256GB',
    ram: '8GB'
  },
  {
    id: '2',
    nombre: 'Samsung Galaxy S24 Ultra',
    marca: 'Samsung',
    precio: 1199.99,
    reviews: 4.7,
    categoria: 'Smartphones',
    imagen: '/src/assets/s24ultra.webp',
    memoria: '512GB',
    ram: '12GB'
  },
  {
    id: '3',
    nombre: 'Motorola Edge 50',
    marca: 'Motorola',
    precio: 699.99,
    reviews: 4.5,
    categoria: 'Smartphones',
    imagen: '/src/assets/moto-edge50.webp',
    memoria: '256GB',
    ram: '8GB'
  },
  {
    id: '4',
    nombre: 'POCO X7 Pro',
    marca: 'Xiaomi',
    precio: 399.99,
    reviews: 4.6,
    categoria: 'Smartphones',
    imagen: '/src/assets/poco-x7pro.webp',
    memoria: '128GB',
    ram: '8GB'
  },
  {
    id: '5',
    nombre: 'Redmi Note 14 Pro',
    marca: 'Xiaomi',
    precio: 299.99,
    reviews: 4.4,
    categoria: 'Smartphones',
    imagen: '/src/assets/redmi-note14pro.webp',
    memoria: '128GB',
    ram: '6GB'
  },
  {
    id: '6',
    nombre: 'Samsung Galaxy A05',
    marca: 'Samsung',
    precio: 199.99,
    reviews: 4.3,
    categoria: 'Smartphones',
    imagen: '/src/assets/galaxy-a05.webp',
    memoria: '64GB',
    ram: '4GB'
  },
  {
    id: '7',
    nombre: 'ZTE Blade V60',
    marca: 'ZTE',
    precio: 249.99,
    reviews: 3.8,
    categoria: 'Smartphones',
    imagen: '/src/assets/zte-v60.webp',
    memoria: '128GB',
    ram: '6GB'
  }
];