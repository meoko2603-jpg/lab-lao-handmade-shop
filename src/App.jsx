import { useState } from "react";
import { products } from "./data.js";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartPanel from "./components/CartPanel.jsx";

function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existing = cart.find((i) => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    setCart(cart);
  }

  function increase(id) {
    setCart(cart.map((i) => (i.id === id ? { qty: i.qty + 1 } : i)));
  }

  // compare with increase() above — this one works
  function decrease(id) {
    setCart(
      cart.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((i) => i.id !== id));
  }

  const total = cart.reduce((sum, i) => sum + i.price, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="wrap">
      <Header shopName="ຮ້ານ Lao Handmade" itemCount={itemCount} />
      <div className="layout">
        <div>
          <FilterBar />
          <ProductGrid products={products} onAdd={addToCart} />
        </div>
        <CartPanel
          cart={cart}
          total={total}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;
