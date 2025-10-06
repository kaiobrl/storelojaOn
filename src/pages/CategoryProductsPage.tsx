import { useParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CategoryProductsPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  // Converte o nome da categoria da URL para o formato original (ex: 'eletronicos' -> 'Eletrônicos')
  const getCategoryFromSlug = (slug: string | undefined) => {
    if (!slug) return '';
    const product = products.find(p => p.category.toLowerCase().replace(/\s+/g, '-') === slug);
    return product ? product.category : '';
  };

  const category = getCategoryFromSlug(categoryName);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  if (!category) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold mb-4">Categoria não encontrada</h1>
        <p className="text-muted-foreground mb-6">A categoria que você está procurando não existe.</p>
        <Button asChild>
          <Link to="/categories">Ver todas as categorias</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Produtos em <span className="text-primary">{category}</span>
      </h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
            <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryProductsPage;