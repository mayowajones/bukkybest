export default function Navbar({ user, cartCount, onCartOpen, onLogout }) {
  return (
    <nav className="sticky top-0 z-50 bg-amber-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl">✝️</span>
          <div>
            <h1 className="font-bold text-lg leading-none tracking-wide">BUKKYBEST</h1>
            <p className="text-amber-300 text-xs">Sacred Spiritual Products</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-amber-200 text-sm">Hello, <strong>{user}</strong></span>

          {/* Cart Button */}
          <button
            onClick={onCartOpen}
            className="relative bg-amber-600 hover:bg-amber-500 rounded-full p-2 transition"
            title="View Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}