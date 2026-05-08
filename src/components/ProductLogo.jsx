export default function ProductLogo() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl mb-8 shadow-xl"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/057/236/365/small/dove-soaring-above-a-wooden-cross-at-sunset-creates-a-powerful-symbol-of-peace-and-spirituality-in-a-serene-sky-photo.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "200px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      <div className="relative z-10 p-8 flex flex-col justify-center h-full">
        <p className="text-amber-300 text-sm font-medium uppercase tracking-widest mb-1">✝ Welcome to</p>
        <h2 className="text-white text-3xl font-bold mb-2">Bukkybest Sacred Store</h2>
        <p className="text-amber-200 text-sm">Spiritual Church Products — Bodija Market, Ibadan</p>
        <p className="text-amber-300 text-xs mt-1">📞 07036810786 &nbsp;|&nbsp; WhatsApp Orders Available</p>
      </div>
    </div>
  );
}