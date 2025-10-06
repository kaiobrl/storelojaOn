import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const DealsPage = () => {
  const dealProducts = products.filter(product => product.originalPrice);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Ofertas Especiais</h1>
      {dealProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dealProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Nenhuma oferta disponível no momento. Volte em breve!</p>
        </div>
      )}
    </div>
  );
};

export default DealsPage;