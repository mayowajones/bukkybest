export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx={11} cy={11} r={8} />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        </svg>
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-10 py-3 bg-white border border-amber-200 rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition placeholder-gray-400"
        placeholder="Search products (e.g. anointing oil, soap...)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}