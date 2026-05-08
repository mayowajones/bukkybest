import { useState, useMemo } from "react";

const img1 = "images/WhatsApp Image 2026-03-18 at 2.02.26 PM.jpeg";
const img2 = "images/sponge.jpeg";
const img3 = "images/WhatsApp Image 2026-03-18 at 2.02.33 PM.jpeg";
const img4 = "images/WhatsApp Image 2026-03-18 at 2.02.37 PM.jpeg";
const img5 = "images/salt.jpeg";


const RAW_PRODUCTS = [
  { id: 1,  name: "Anointing Oil (Gold)",       price: 5000, category: "Anointing Oil", image: img1, description: "Powerful anointing oil for spiritual blessings." },
  { id: 2,  name: "Sponge",                      price: 1500, category: "Accessories",   image: img2, description: "Soft spiritual bath sponge." },
  { id: 3,  name: "Anointing Oil (Silver)",      price: 3500, category: "Anointing Oil", image: img3, description: "Premium silver-grade anointing oil." },
  { id: 4,  name: "Anointing Oil (Royal)",       price: 5000, category: "Anointing Oil", image: img4, description: "Royal anointing oil for divine favour." },
  { id: 5,  name: "Anointing Oil (Blessed)",     price: 5000, category: "Anointing Oil", image: img1, description: "Blessed anointing oil for daily use." },
  { id: 6,  name: "Anointing Oil (Miracle)",     price: 5000, category: "Anointing Oil", image: img2, description: "Miracle oil with powerful life changes." },
  { id: 7,  name: "Anointing Oil (Holy)",        price: 5000, category: "Anointing Oil", image: img3, description: "Holy oil for special prayers and anointing." },
  { id: 8,  name: "Anointing Oil (Grace)",       price: 5000, category: "Anointing Oil", image: img4, description: "Grace oil for spiritual covering." },
  { id: 9,  name: "Anointing Oil (Deliverance)", price: 5000, category: "Anointing Oil", image: img1, description: "Deliverance oil for breaking of yokes." },
  { id: 10, name: "Anointing Oil (Fresh Fire)",  price: 5000, category: "Anointing Oil", image: img2, description: "Fresh anointing oil with powerful changes of life." },
  { id: 11, name: "Camphor (Canfur)",            price: 2000, category: "Herbs & Salts", image: img3, description: "Spiritual camphor for cleansing and protection." },
  { id: 12, name: "Anointing Oil (Prophetic)",   price: 5000, category: "Anointing Oil", image: img4, description: "Prophetic anointing oil." },
  { id: 13, name: "Oil Perfume",                 price: 3000, category: "Perfumes",      image: img1, description: "Spiritual oil perfume for attraction." },
  { id: 14, name: "Anointing Oil (Favour)",      price: 5000, category: "Anointing Oil", image: img2, description: "Favour oil for open doors." },
  { id: 15, name: "Anointing Oil (Overflow)",    price: 5000, category: "Anointing Oil", image: img3, description: "Overflow anointing oil for abundance." },
  { id: 16, name: "Anointing Oil (Victory)",     price: 5000, category: "Anointing Oil", image: img4, description: "Victory oil for conquering battles." },
  { id: 17, name: "Sea Salt",                    price: 5000, category: "Herbs & Salts", image: img1, description: "Spiritual sea salt for cleansing." },
  { id: 18, name: "Spiritual Soap",              price: 5000, category: "Soaps",         image: img2, description: "Powerful spiritual soap." },
  { id: 19, name: "Bath Sponge",                 price: 1000, category: "Accessories",   image: img3, description: "Premium spiritual bath sponge." },
  { id: 20, name: "Salt", price: 2500, category: "food", image: img5, description: "Premium spiritual bath sponge." },
];

export function useProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = useMemo(() => {
    const cats = [...new Set(RAW_PRODUCTS.map((p) => p.category))];
    return ["All", ...cats];
  }, []);

  const products = useMemo(() => {
    let list = [...RAW_PRODUCTS];

    if (category !== "All") list = list.filter((p) => p.category === category);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    if (sort === "price-asc")  list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name-asc")   list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [search, category, sort]);

  return { products, search, setSearch, category, setCategory, sort, setSort, categories, total: RAW_PRODUCTS.length };
}
