export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Moderno",
    category: "Eletrônicos",
    price: 2499.90,
    originalPrice: 2999.90,
    imageUrl: "/placeholder.svg",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Notebook Ultra Fino",
    category: "Eletrônicos",
    price: 5499.00,
    imageUrl: "/placeholder.svg",
    rating: 4.8,
    reviews: 85,
  },
  {
    id: 3,
    name: "Tênis de Corrida",
    category: "Vestuário",
    price: 299.99,
    originalPrice: 349.99,
    imageUrl: "/placeholder.svg",
    rating: 4.2,
    reviews: 250,
  },
  {
    id: 4,
    name: "Camiseta de Algodão",
    category: "Vestuário",
    price: 79.90,
    imageUrl: "/placeholder.svg",
    rating: 4.6,
    reviews: 400,
  },
  {
    id: 5,
    name: "Fone de Ouvido Bluetooth",
    category: "Eletrônicos",
    price: 159.50,
    originalPrice: 199.50,
    imageUrl: "/placeholder.svg",
    rating: 4.4,
    reviews: 310,
  },
  {
    id: 6,
    name: "Relógio Inteligente",
    category: "Acessórios",
    price: 899.00,
    imageUrl: "/placeholder.svg",
    rating: 4.7,
    reviews: 150,
  },
  {
    id: 7,
    name: "Mochila para Notebook",
    category: "Acessórios",
    price: 149.90,
    imageUrl: "/placeholder.svg",
    rating: 4.9,
    reviews: 500,
  },
  {
    id: 8,
    name: "Livro de Ficção",
    category: "Livros",
    price: 35.00,
    originalPrice: 45.00,
    imageUrl: "/placeholder.svg",
    rating: 4.3,
    reviews: 95,
  },
];