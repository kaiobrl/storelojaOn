import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import CategoriesPage from "./pages/Categories";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import DealsPage from "./pages/DealsPage";
import { CartProvider } from "./contexts/CartContext";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category/:categoryName" element={<CategoryProductsPage />} />
              <Route path="/deals" element={<DealsPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        <SonnerToaster />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App;