import { useState } from "react";

export default function ProductCard({ product, onAddToCart, onOrder }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const fallback = "https://via.placeholder.com/300x300/f59e0b/ffffff?text=Product";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-amber-50 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden bg-amber-50 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = fallback; }}
        />
        {/* Category badge */}
        <span className="absolute top-2 left-2 bg-amber-700/90 text-white text-xs px-2 py-0.5 rounded-full font-medium">
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-3 flex-1">{product.description}</p>
        <p className="text-amber-700 font-bold text-lg mb-3">₦{product.price.toLocaleString()}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            className={`flex-1 text-xs font-semibold py-2 rounded-lg transition-all duration-200 ${
              added
                ? "bg-green-500 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            {added ? "✓ Added!" : "🛒 Add to Cart"}
          </button>
          <button
            onClick={() => onOrder(product)}
            className="flex-1 text-xs font-semibold py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-200"
          >
            📲 Order Now
          </button>
        </div>
      </div>
    </div>
  );
}