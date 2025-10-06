import { ShoppingCart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const { cartCount, openCart } = useCart();

  return (
    <header className="border-b sticky top-0 bg-background z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              formato livre
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">Produtos</Link>
            <Link to="/categories" className="text-sm font-medium text-gray-600 hover:text-gray-900">Categorias</Link>
            <Link to="/deals" className="text-sm font-medium text-gray-600 hover:text-gray-900">Ofertas</Link>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <Input type="search" placeholder="Buscar..." className="pl-10 h-9" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <ThemeToggle />
            <div className="relative">
              <Button variant="ghost" size="icon" onClick={openCart}>
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Carrinho</span>
              </Button>
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartCount}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Conta</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;