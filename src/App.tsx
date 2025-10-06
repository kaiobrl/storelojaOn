import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "@/components/ui/toaster"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </CartProvider>
  )
}

export default App