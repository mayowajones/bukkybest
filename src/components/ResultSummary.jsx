export default function ResultSummary({ count, total, search, category }) {
  return (
    <div className="text-sm text-gray-500">
      {search || category !== "All" ? (
        <span>
          Showing <strong className="text-amber-700">{count}</strong> of {total} products
          {category !== "All" && <> in <strong className="text-amber-700">{category}</strong></>}
          {search && <> matching "<strong className="text-amber-700">{search}</strong>"</>}
        </span>
      ) : (
        <span>Showing all <strong className="text-amber-700">{total}</strong> products</span>
      )}
    </div>
  );
}