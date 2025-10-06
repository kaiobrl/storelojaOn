import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Index;