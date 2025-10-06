import { Link } from "react-router-dom";
import { ShoppingCart, Package2, Menu, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useCart } from "../contexts/CartContext";
import Cart from "./Cart";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { cart } = useCart();
  const { theme, setTheme } = useTheme();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Package2 className="h-6 w-6" />
            <span className="font-bold">Minha Loja</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground">Produtos</Link>
            <Link to="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground">Categorias</Link>
            <Link to="/deals" className="text-sm font-medium text-muted-foreground hover:text-foreground">Ofertas</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-5 text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <Cart />
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link to="/products" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">Produtos</Link>
                <Link to="/categories" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">Categorias</Link>
                <Link to="/deals" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">Ofertas</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;