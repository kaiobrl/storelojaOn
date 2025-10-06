import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/data/products";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex flex-col text-left">
      <CardHeader className="p-4">
        <div className="aspect-square relative bg-foreground/[0.025] rounded-lg">
            <img
                src={product.image}
                alt={product.name}
                className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="mt-2 text-sm">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <div className="flex flex-col">
            <p className="text-xl font-semibold">
            R$ {product.price.toFixed(2).replace(".", ",")}
            </p>
            <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
            </div>
        </div>
        <Button>Adicionar</Button>
      </CardFooter>
    </Card>
  );
};