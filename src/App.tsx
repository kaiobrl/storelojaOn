import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import CategoriesPage from "./pages/Categories";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import DealsPage from "./pages/DealsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category/:categoryName" element={<CategoryProductsPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        <SonnerToaster />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App;