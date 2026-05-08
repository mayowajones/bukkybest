import { useState } from "react";
import ProductPage from "./pages/ProductPage";
import CartSidebar from "./components/CartSidebar";
import Navbar from "./components/Navbar";
import { useProducts } from "./hooks/useProducts";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [loginForm, setLoginForm] = useState({ name: "", pass: "" });
  const [loginError, setLoginError] = useState("");

  const { products } = useProducts();

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.name.trim() || !loginForm.pass.trim()) {
      setLoginError("Please fill in all fields.");
      return;
    }
    setCurrentUser(loginForm.name);
    setLoginError("");
  };

  const handleOrder = (product) => {
    const phone = "2347036810786";
    const msg = `Hello Admin, I am ${currentUser}. I want to order: ${product.name} at ₦${product.price.toLocaleString()}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo / Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-600 shadow-lg mb-4">
              <span className="text-3xl">✝️</span>
            </div>
            <h1 className="text-3xl font-bold text-amber-900 tracking-tight">BUKKYBEST</h1>
            <p className="text-amber-700 text-sm mt-1">Sacred Spiritual Products</p>
            <p className="text-amber-600 text-xs mt-1">Bodija Market, Ibadan • 07036810786</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Welcome — Please Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  placeholder="Enter your name"
                  value={loginForm.name}
                  onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  placeholder="Enter password"
                  value={loginForm.pass}
                  onChange={(e) => setLoginForm({ ...loginForm, pass: e.target.value })}
                />
              </div>
              {loginError && <p className="text-red-500 text-xs">{loginError}</p>}
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg py-3 transition duration-200 shadow-md"
              >
                Enter Store
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-4">Admin? Use username: admin / pass: 1234</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar
        user={currentUser}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onLogout={() => { setCurrentUser(null); setCart([]); }}
      />
      <ProductPage
        products={products}
        onAddToCart={addToCart}
        onOrder={handleOrder}
        currentUser={currentUser}
      />
      <CartSidebar
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQty={updateQty}
        currentUser={currentUser}
      />
    </div>
  );
}