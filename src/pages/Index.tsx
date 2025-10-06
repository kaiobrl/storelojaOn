import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  // Ordena os produtos pela avaliação (rating) e pega os 8 melhores
  const mainProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Principais Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mainProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Index;