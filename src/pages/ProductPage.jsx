import ProductLogo from "../components/ProductLogo";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ResultSummary from "../components/ResultSummary";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

export default function ProductPage({ onAddToCart, onOrder }) {
  const {
    products,
    search, setSearch,
    category, setCategory,
    sort, setSort,
    categories,
    total,
  } = useProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <ProductLogo />

      {/* Controls */}
      <div className="space-y-4 mb-6">
        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Category + Sort row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CategoryFilter categories={categories} selected={category} onChange={setCategory} />
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Result count */}
        <ResultSummary count={products.length} total={total} search={search} category={category} />
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-medium text-lg">No products found</p>
          <p className="text-sm mt-1">Try a different search or category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onOrder={onOrder}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-400 border-t border-amber-100 pt-6 pb-8">
        <p className="font-semibold text-amber-700">Bukkybest Sacred Spiritual Products</p>
        <p>Bodija Market beside Amala Sky, Ibadan, Nigeria &nbsp;|&nbsp; 📞 07036810786</p>
        <p className="mt-1">All orders are confirmed via WhatsApp. Payment on delivery available.</p>
      </footer>
    </main>
  );
}