export default function CategoryFilter({ categories, selected, onChange }) {
  const icons = {
    All: "🌟",
    "Anointing Oil": "🕯️",
    Soaps: "🧼",
    "Herbs & Salts": "🌿",
    Perfumes: "🌸",
    Accessories: "🛁",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
            selected === cat
              ? "bg-amber-700 text-white border-amber-700 shadow-md scale-105"
              : "bg-white text-amber-800 border-amber-200 hover:bg-amber-50 hover:border-amber-400"
          }`}
        >
          {icons[cat] || "📦"} {cat}
        </button>
      ))}
    </div>
  );
}