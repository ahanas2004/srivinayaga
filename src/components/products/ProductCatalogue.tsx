"use client";

import { useMemo, useState } from "react";
import products from "@/data/products.json";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
const brands = ["All", ...Array.from(new Set(products.map((p) => p.brand)))];

export default function ProductCatalogue() {
 const [cat, setCat] = useState("All");
 const [brand, setBrand] = useState("All");
 const [q, setQ] = useState("");

 const filtered = useMemo(() => {
 return products.filter((p) => {
 const mc = cat === "All" || p.category === cat;
 const mb = brand === "All" || p.brand === brand;
 const mq =
 !q ||
 p.name.toLowerCase().includes(q.toLowerCase()) ||
 p.description.toLowerCase().includes(q.toLowerCase());
 return mc && mb && mq;
 });
 }, [cat, brand, q]);

 return (
 <div>
 {/* Filter bar — editorial sidebar */}
 <div className="grid grid-cols-12 gap-6">
 {/* Sidebar */}
 <aside className="col-span-12 lg:col-span-3">
 <div className="lg:sticky lg:top-32 space-y-10">
 {/* Search */}
 <div>
 <label className="eyebrow text-ink-600 mb-3 block">Find an instrument</label>
 <input
 type="text"
 value={q}
 onChange={(e) => setQ(e.target.value)}
 placeholder="e.g. spectrometer"
 className="w-full bg-transparent border-0 border-b border-ink-900/30 py-3 font-sans font-bold text-xl placeholder:text-ink-400 focus:outline-none focus:border-bronze-500 transition-colors"
 />
 </div>

 {/* Categories */}
 <div>
 <label className="eyebrow text-ink-600 mb-4 block">Discipline</label>
 <ul className="space-y-2">
 {categories.map((c) => (
 <li key={c}>
 <button
 onClick={() => setCat(c)}
 className={`text-left text-sm tracking-wide transition-colors ${
 cat === c ? "text-bronze-600 font-sans font-bold text-lg" : "text-ink-600 hover:text-ink-900"
 }`}
>
 {cat === c && <span className="text-bronze-500 mr-2">◆</span>}
 {c}
 </button>
 </li>
 ))}
 </ul>
 </div>

 {/* Brands */}
 <div>
 <label className="eyebrow text-ink-600 mb-4 block">Manufacturer</label>
 <ul className="space-y-2">
 {brands.map((b) => (
 <li key={b}>
 <button
 onClick={() => setBrand(b)}
 className={`text-left text-sm tracking-wide transition-colors ${
 brand === b ? "text-bronze-600 font-sans font-bold text-lg" : "text-ink-600 hover:text-ink-900"
 }`}
>
 {brand === b && <span className="text-bronze-500 mr-2">◆</span>}
 {b}
 </button>
 </li>
 ))}
 </ul>
 </div>

 <div className="pt-6 border-t border-ink-900/10 font-mono text-[11px] tracking-wider2 text-ink-500">
 {String(filtered.length).padStart(2, "0")} OF {String(products.length).padStart(2, "0")} ENTRIES
 </div>
 </div>
 </aside>

 {/* Grid */}
 <div className="col-span-12 lg:col-span-9">
 {filtered.length === 0 ? (
 <div className="py-24 text-center">
 <p className="font-sans font-bold text-2xl text-ink-600">
 No instruments match the present criteria.
 </p>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
 {filtered.map((p, i) => (
 <motion.div
 key={p.id}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
>
 <Link href={`/products/${p.id}`} className="group block">
 <div className="relative aspect-[4/3] bg-ivory-100 border border-ink-900/10 overflow-hidden">
 {p.image ? (
 <Image
 src={p.image}
 alt={p.name}
 fill
 className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 />
 ) : (
 <svg viewBox="0 0 400 300" className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="0.4">
 <g className="text-ink-900/15 group-hover:text-ink-900/30 transition-colors duration-700">
 <rect x="100" y="60" width="200" height="180" />
 <line x1="100" y1="150" x2="300" y2="150" strokeDasharray="2 4" />
 <line x1="200" y1="60" x2="200" y2="240" strokeDasharray="2 4" />
 <circle cx="200" cy="150" r="40" />
 <circle cx="200" cy="150" r="60" strokeDasharray="2 3" />
 </g>
 <circle cx="200" cy="150" r="2" className="fill-bronze-500" />
 </svg>
 )}
 <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[9px] tracking-widest2 text-ink-700 z-10">
 <span className="bg-paper/80 px-1.5 py-0.5">{p.code}</span>
 <span className="bg-paper/80 px-1.5 py-0.5">{p.year}</span>
 </div>
 <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest2 text-bronze-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-paper/80 px-1.5 py-0.5">
 EXAMINE →
 </div>
 </div>
 <div className="mt-5">
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600 mb-2">
 {p.brand.toUpperCase()} · {p.category.toUpperCase()}
 </div>
 <h3 className="font-sans font-bold text-2xl text-ink-900 group-hover:text-bronze-600 transition-all duration-500">
 {p.name}
 </h3>
 <p className="mt-2 text-sm text-ink-600 leading-relaxed line-clamp-2">
 {p.tagline}
 </p>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 )}
 </div>
 </div>
 </div>
 );
}
