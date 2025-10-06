import { Header } from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-left">Nossos Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <footer className="py-4 border-t">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;