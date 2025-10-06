import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">formato livre</h3>
            <p className="text-muted-foreground mt-2 text-sm">Sua loja online para tudo.</p>
          </div>
          <div>
            <h4 className="font-semibold">Comprar</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">Todos os Produtos</Link></li>
              <li><Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground">Categorias</Link></li>
              <li><Link to="/deals" className="text-sm text-muted-foreground hover:text-foreground">Ofertas</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Sobre</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">Sobre Nós</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Suporte</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground">Envio e Devoluções</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} formato livre. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;