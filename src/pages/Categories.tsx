import { products } from "@/data/products";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  // Extrai categorias únicas da lista de produtos
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Categorias</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map(category => (
          // Por enquanto, o link não levará a lugar nenhum, mas preparamos a estrutura
          <Link to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`} key={category}>
            <Card className="hover:shadow-lg transition-shadow duration-200 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-center text-base">{category}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;