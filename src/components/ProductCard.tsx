import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "../contexts/CartContext";
import { showSuccess } from "@/utils/toast";
import ProductImageModal from "./ProductImageModal";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    showSuccess(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <>
      <Card className="w-full flex flex-col">
        <CardHeader className="p-0 relative">
          <button onClick={() => setIsModalOpen(true)} className="w-full block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-t-lg">
            <img src={product.imageUrl} alt={product.name} className="rounded-t-lg object-cover aspect-square" />
          </button>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <CardTitle className="text-base font-semibold mt-1 h-12">{product.name}</CardTitle>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
          </div>
          <p className="text-xl font-bold mt-2">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
        </CardFooter>
      </Card>
      <ProductImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageUrl={product.imageUrl} 
        productName={product.name} 
      />
    </>
  );
};

export default ProductCard;