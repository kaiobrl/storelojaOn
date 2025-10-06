export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Básica de Algodão",
    description: "Uma camiseta confortável para o dia a dia, feita com 100% algodão.",
    price: 49.90,
    image: "/placeholder.svg",
    category: "Vestuário",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fone de Ouvido Bluetooth",
    description: "Fone de ouvido sem fio com cancelamento de ruído e alta qualidade de som.",
    price: 299.90,
    image: "/placeholder.svg",
    category: "Eletrônicos",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Tênis de Corrida",
    description: "Tênis leve e flexível, ideal para corridas e atividades físicas.",
    price: 349.90,
    image: "/placeholder.svg",
    category: "Calçados",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Mochila para Notebook",
    description: "Mochila resistente à água com compartimento para notebooks de até 15 polegadas.",
    price: 189.90,
    image: "/placeholder.svg",
    category: "Acessórios",
    rating: 4.6,
  },
    {
    id: 5,
    name: "Smartwatch",
    description: "Relógio inteligente com monitoramento de atividades físicas e notificações.",
    price: 799.00,
    image: "/placeholder.svg",
    category: "Eletrônicos",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Calça Jeans Slim",
    description: "Calça jeans com corte moderno e confortável para qualquer ocasião.",
    price: 159.90,
    image: "/placeholder.svg",
    category: "Vestuário",
    rating: 4.4,
  },
];