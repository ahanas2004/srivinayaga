"use client";

import products from "@/data/products.json";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedInstruments() {
 const featured = products.slice(0, 4);

 return (
 <section className="py-32 lg:py-44 bg-ivory-100/50 border-y border-ink-900/5">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 {/* Heading */}
 <div className="grid grid-cols-12 gap-6 mb-20">
 <div className="col-span-12 lg:col-span-5">
 <Reveal>
 <div className="eyebrow text-ink-700 flex items-center gap-3">
 <span className="font-sans font-bold text-bronze-500 text-lg">§ II</span>
 <span className="h-px w-10 bg-bronze-500" />
 THE CATALOGUE
 </div>
 <h2 className="mt-6 font-sans font-bold text-[44px] lg:text-[64px] leading-[1] tracking-[-0.01em]">
 A curated <em className="text-bronze-500">exhibition</em> of selected instruments.
 </h2>
 </Reveal>
 </div>
 <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
 <Reveal delay={0.1}>
 <p className="text-sm text-ink-600 leading-relaxed">
 Four pieces from the present folio. Each accompanied by its technical specification,
 provenance, and the discipline for which it was conceived.
 </p>
 </Reveal>
 </div>
 </div>

 {/* Editorial grid — alternating layout */}
 <div className="space-y-24">
 {featured.map((p, i) => {
 const isEven = i % 2 === 0;
 return (
 <Reveal key={p.id}>
 <motion.div
 className="grid grid-cols-12 gap-6 group"
 initial="rest"
 whileHover="hover"
 animate="rest"
>
 {/* Image plate */}
 <div className={`col-span-12 lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
 <Link href={`/products/${p.id}`} className="block">
 <div className="relative aspect-[16/10] bg-paper border border-ink-900/10 overflow-hidden">
 <motion.div
 variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
 transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
 className="absolute inset-0"
>
 {p.image ? (
 <Image
 src={p.image}
 alt={p.name}
 fill
 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
 sizes="(max-width: 1024px) 100vw, 60vw"
 />
 ) : (
 <svg viewBox="0 0 800 500" className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="0.5">
 <g className="text-ink-900/20">
 <rect x="200" y="100" width="400" height="300" />
 <line x1="200" y1="250" x2="600" y2="250" strokeDasharray="2 4" />
 <line x1="400" y1="100" x2="400" y2="400" strokeDasharray="2 4" />
 <circle cx="400" cy="250" r="80" />
 <circle cx="400" cy="250" r="120" strokeDasharray="2 4" />
 </g>
 <g className="text-bronze-500">
 <circle cx="400" cy="250" r="3" fill="currentColor" />
 </g>
 </svg>
 )}
 </motion.div>
 <div className="absolute top-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-widest2 text-ink-700 z-10">
 <span className="bg-paper/80 px-2 py-1">PLATE {String(i + 1).padStart(2, "0")}</span>
 <span className="bg-paper/80 px-2 py-1">{p.code}</span>
 </div>
 <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-10">
 <span className="font-mono text-[10px] tracking-widest2 text-ink-500 bg-paper/80 px-2 py-1">{p.year}</span>
 <motion.span
 variants={{ rest: { x: 0 }, hover: { x: 6 } }}
 className="font-mono text-[10px] tracking-widest2 text-bronze-600 bg-paper/80 px-2 py-1"
>
 VIEW DOSSIER →
 </motion.span>
 </div>
 </div>
 </Link>
 </div>

 {/* Description column */}
 <div className={`col-span-12 lg:col-span-4 ${isEven ? "lg:col-start-9" : "lg:col-start-1 lg:order-1"} flex flex-col justify-center`}>
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600 mb-4">
 {p.category.toUpperCase()} · {p.brand.toUpperCase()}
 </div>
 <h3 className="font-sans font-bold text-[32px] lg:text-[40px] leading-[1.05] text-ink-900 mb-4">
 {p.name}
 </h3>
 <p className="font-sans font-bold text-bronze-600 text-lg mb-6">
 "{p.tagline}"
 </p>
 <p className="text-sm text-ink-600 leading-relaxed mb-8">
 {p.description}
 </p>
 <dl className="border-t border-ink-900/10 pt-5 space-y-2 text-[12px]">
 {Object.entries(p.specs).slice(0, 3).map(([k, v]) => (
 <div key={k} className="flex justify-between font-mono">
 <dt className="text-ink-500 tracking-wider2">{k.toUpperCase()}</dt>
 <dd className="text-ink-900">{v}</dd>
 </div>
 ))}
 </dl>
 </div>
 </motion.div>
 </Reveal>
 );
 })}
 </div>

 {/* See all */}
 <Reveal>
 <div className="mt-24 pt-10 border-t border-ink-900/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
 <p className="font-sans font-bold text-2xl text-ink-700">
 Forty-eight further instruments await examination.
 </p>
 <Link
 href="/products"
 className="group inline-flex items-center gap-3 text-[13px] tracking-wider2 text-ink-900"
>
 <span className="border-b border-bronze-500 pb-0.5">VIEW THE COMPLETE CATALOGUE</span>
 <span className="text-bronze-500 group-hover:translate-x-1 transition-transform">→</span>
 </Link>
 </div>
 </Reveal>
 </div>
 </section>
 );
}
