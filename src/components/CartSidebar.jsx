export default function CartSidebar({ open, cart, onClose, onRemove, onUpdateQty, currentUser }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const phone = "2347036810786";
    const lines = cart.map((i) => `• ${i.name} x${i.qty} = ₦${(i.price * i.qty).toLocaleString()}`).join("\n");
    const msg = `Hello Bukkybest Admin, I am ${currentUser}. I'd like to place this order:\n\n${lines}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease confirm availability and payment details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-amber-800 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">🛒 Your Cart</h2>
          <button onClick={onClose} className="hover:opacity-70 transition text-2xl leading-none">&times;</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-5xl mb-4">🛒</p>
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add products to start your order</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-lg bg-amber-50"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/60/f59e0b/fff?text=?"; }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                  <p className="text-amber-700 text-sm font-bold">₦{item.price.toLocaleString()}</p>
                  {/* Qty controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold flex items-center justify-center"
                    >−</button>
                    <span className="text-sm font-semibold w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold flex items-center justify-center"
                    >+</button>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                  <p className="text-sm font-bold text-gray-700">₦{(item.price * item.qty).toLocaleString()}</p>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-400 hover:text-red-600 text-xs transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{cart.reduce((s, i) => s + i.qty, 0)} item(s)</span>
              <span className="font-bold text-amber-800 text-base">Total: ₦{total.toLocaleString()}</span>
            </div>

            {/* Payment info */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 space-y-1">
              <p className="font-semibold">💳 Payment Options:</p>
              <p>• Bank Transfer (details on WhatsApp)</p>
              <p>• Pay on Delivery (Ibadan only)</p>
              <p>• POS at our Bodija store</p>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md"
            >
              <span>📲</span> Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}