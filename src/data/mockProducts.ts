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
    imagen: ['/src/assets/iphone16promax.webp', '/src/assets/iphone16promax1.webp', '/src/assets/iphone16promax2.webp', '/src/assets/iphone16promax3.webp'],
    memoria: '256GB',
    ram: '8GB',
    descripcion:'iPhone 16 Pro Max.'+
                'Diseñado para Apple Intelligence Imponente diseño de titanio. Control de la Cámara. 4K Dolby Vision a 120 cps. Y el chip A18 Pro.'+
                'IMPONENTE DISEÑO DE TITANIO — El iPhone 16 Pro Max tiene un diseño de titanio resistente y liviano con una pantalla Super Retina XDR más grande, de 6,9 pulgadas. Es increíblemente duradero gracias al Ceramic Shield de última generación, que es dos veces más resistente que cualquier vidrio de smartphone.'
  },
  {
    id: '2',
    nombre: 'Samsung Galaxy S24 Ultra',
    marca: 'Samsung',
    precio: 1199.99,
    reviews: 4.7,
    categoria: 'Smartphones',
    imagen: ['/src/assets/s24ultra.webp', '/src/assets/s24ultra1.webp', '/src/assets/s24ultra2.webp'],
    memoria: '512GB',
    ram: '12GB'
  },
  {
    id: '3',
    nombre: 'Redmi Note 14 Pro',
    marca: 'Xiaomi',
    precio: 299.99,
    reviews: 4.4,
    categoria: 'Smartphones',
    imagen: ['/src/assets/redmi-note14pro.webp'],
    memoria: '128GB',
    ram: '6GB'
  },
  {
    id: '4',
    nombre: 'POCO X7 Pro',
    marca: 'Xiaomi',
    precio: 399.99,
    reviews: 4.6,
    categoria: 'Smartphones',
    imagen: ['/src/assets/poco-x7pro.webp'],
    memoria: '128GB',
    ram: '8GB'
  },
  {
    id: '5',
    nombre: 'Motorola Edge 50',
    marca: 'Motorola',
    precio: 699.99,
    reviews: 4.5,
    categoria: 'Smartphones',
    imagen: ['/src/assets/moto-edge50.webp'],
    memoria: '256GB',
    ram: '8GB'
  },
  {
    id: '6',
    nombre: 'Samsung Galaxy A05',
    marca: 'Samsung',
    precio: 199.99,
    reviews: 4.3,
    categoria: 'Smartphones',
    imagen: ['/src/assets/galaxy-a05.webp'],
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
    imagen: ['/src/assets/zte-v60.webp'],
    memoria: '128GB',
    ram: '6GB'
  }
];