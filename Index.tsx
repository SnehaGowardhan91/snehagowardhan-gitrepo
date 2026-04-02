import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const totalItems = Object.values(cart).reduce((s, q) => s + q, 0);

  const handleAdd = useCallback((id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const handleRemove = useCallback((id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });
  }, []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={totalItems} onCartClick={() => setCartOpen(true)} />
      <HeroSection onOrderClick={scrollToMenu} />
      <MenuSection cart={cart} onAdd={handleAdd} onRemove={handleRemove} />
      <TestimonialsSection />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default Index;
