import { Link } from "react-router-dom";
import { Github, Twitter, Facebook, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Store</h3>
            <p className="text-muted-foreground mt-2 text-sm">Sua loja online para tudo.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">Sobre Nós</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contato</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary">Envio e Devoluções</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Categorias</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/categories/electronics" className="hover:text-primary">Eletrônicos</Link></li>
              <li><Link to="/categories/clothing" className="hover:text-primary">Vestuário</Link></li>
              <li><Link to="/categories/home" className="hover:text-primary">Casa</Link></li>
              <li><Link to="/categories/books" className="hover:text-primary">Livros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Siga-nos</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" aria-label="WhatsApp" className="hover:text-primary"><MessageSquare size={20} /></a>
              <a href="#" aria-label="Github" className="hover:text-primary"><Github size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={20} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Store. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary">Política de Privacidade</Link>
            <Link to="/terms" className="hover:text-primary">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;