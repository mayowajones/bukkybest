export default function SortDropdown({ value, onChange }) {
  const options = [
    { value: "default",    label: "Default Order" },
    { value: "price-asc",  label: "Price: Low → High" },
    { value: "price-desc", label: "Price: High → Low" },
    { value: "name-asc",   label: "Name: A → Z" },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-amber-200 bg-white text-sm text-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}