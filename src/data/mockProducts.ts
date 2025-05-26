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
    categoria: 'Smartphones Gama alta',
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
    categoria: 'Smartphones Gama alta',
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
    categoria: 'Smartphones Gama media',
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
    categoria: 'Smartphones Gama media',
    imagen: ['/src/assets/poco-x7pro.webp'],
    memoria: '128GB',
    ram: '8GB'
  },
  {
    id: '5',
    nombre: 'Motorola Edge 50',
    marca: 'Motorola',
    precio: 699.99,
    reviews: 3.9,
    categoria: 'Smartphones Gama media',
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
    categoria: 'Smartphones Gama baja',
    imagen: ['/src/assets/galaxy-a05.webp'],
    memoria: '64GB',
    ram: '4GB'
  },
  {
    id: '7',
    nombre: 'ZTE Blade V60',
    marca: 'ZTE',
    precio: 249.99,
    reviews: 2.9,
    categoria: 'Smartphones Gama baja',
    imagen: ['/src/assets/zte-v60.webp'],
    memoria: '128GB',
    ram: '6GB'
  }
];


export const mockMotos: Product[] = [
  {
    id: 'moto1',
    nombre: 'Yamaha MT-09',
    marca: 'Yamaha',
    precio: 12999.99,
    precioOriginal: 13999.99,
    descuento: 7,
    reviews: 4.9,
    categoria: 'Motos Deportivas',
    imagen: ['src/assets/Mt09_4.jpeg', 'src/assets/Mt09_1.png', 'src/assets/Mt09_2.png', 'src/assets/Mt09_3.png'],
    descripcion: 'La Yamaha MT-09 es una motocicleta naked deportiva con motor de 890cc, 3 cilindros y tecnología de última generación.'
  },
  {
    id: 'moto2',
    nombre: 'Kawasaki Ninja 400',
    marca: 'Kawasaki',
    precio: 6999.99,
    descuento: 5,
    reviews: 4.8,
    categoria: 'Motos Deportivas',
    imagen: ['src/assets/Ninja_400.png', 'src/assets/Ninja_400_1.png'],
    descripcion: 'Motocicleta deportiva ligera ideal para principiantes y experimentados.'
  },
  {
    id: 'moto3',
    nombre: 'Honda CBR650R',
    marca: 'Honda',
    precio: 9999.99,
    reviews: 4.7,
    categoria: 'Motos Deportivas',
    imagen: ['src/assets/honda.webp', 'src/assets/honda_1.png'],
    descripcion: 'Deportiva de media cilindrada con motor de 4 cilindros en línea y 649cc.'
  }  
];

export const productsByCategory = {
  'Home': mockProducts,
  'Celulares': mockProducts,
  'Motos': mockMotos,
};