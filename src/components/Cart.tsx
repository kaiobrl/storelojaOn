import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, Plus, Minus } from "lucide-react";
import type { CartItem } from "../contexts/CartContext";

const CartItemRow = ({ item }: { item: CartItem }) => {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <img src={item.imageUrl} alt={item.name} className="h-16 w-16 rounded-md object-cover" />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-muted-foreground">
            {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => decreaseQuantity(item.id)}>
          <Minus className="h-4 w-4" />
        </Button>
        <span>{item.quantity}</span>
        <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => addToCart(item)}>
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-red-500" onClick={() => removeFromCart(item.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};


export const Cart = () => {
  const { isCartOpen, closeCart, cartItems, totalPrice, cartCount } = useCart();

  const handleCheckout = () => {
    // IMPORTANTE: Substitua este número pelo WhatsApp da sua loja
    const phoneNumber = "5511999999999"; 

    const messageItems = cartItems.map(item => 
      `• ${item.quantity}x ${item.name} - ${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    ).join('\n');

    const finalMessage = `Olá! Gostaria de finalizar meu pedido:\n\n${messageItems}\n\n*Total: ${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}*`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Carrinho ({cartCount})</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-1 px-6">
              <div className="divide-y">
                {cartItems.map(item => (
                  <CartItemRow key={item.id} item={item} />
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="px-6 py-4 bg-secondary/50">
              <div className="w-full space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                <Button className="w-full" onClick={handleCheckout}>Finalizar Compra</Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-muted-foreground">Seu carrinho está vazio.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};