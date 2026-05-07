"use client";

import brands from "@/data/brands.json";
import Reveal from "@/components/common/Reveal";

export default function Manufacturers() {
 return (
 <section className="py-32 lg:py-44 bg-ink-900 text-ivory-50 relative overflow-hidden">
 {/* Decorative numerals */}
 <div className="absolute -top-20 -right-20 font-sans font-bold text-[400px] text-ivory-50/[0.02] leading-none select-none">
 IV
 </div>

 <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative">
 <Reveal>
 <div className="grid grid-cols-12 gap-6 mb-20">
 <div className="col-span-12 lg:col-span-6">
 <div className="eyebrow text-bronze-400 flex items-center gap-3">
 <span className="font-sans font-bold text-bronze-400 text-lg">§ IV</span>
 <span className="h-px w-10 bg-bronze-400" />
 THE MANUFACTURERS
 </div>
 <h2 className="mt-6 font-sans font-bold text-[44px] lg:text-[64px] leading-[1.05] text-ivory-50">
 Houses of <em className="text-bronze-400">consequence.</em>
 </h2>
 </div>
 <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
 <p className="text-sm leading-relaxed text-ivory-100/70">
 We represent only those manufacturers whose instruments
 we ourselves would specify for a research of our own.
 </p>
 </div>
 </div>
 </Reveal>

 {/* Brand list — typographic */}
 <div className="border-t border-ivory-100/15">
 {brands.map((b, i) => (
 <Reveal key={b.name} delay={i * 0.04}>
 <div className="group grid grid-cols-12 gap-4 py-7 lg:py-9 border-b border-ivory-100/15 cursor-default">
 <div className="col-span-1">
 <span className="font-mono text-[10px] tracking-widest2 text-bronze-400/60">
 {String(i + 1).padStart(2, "0")}
 </span>
 </div>
 <div className="col-span-7 lg:col-span-5">
 <h3 className="font-sans font-bold text-2xl lg:text-[34px] text-ivory-50 group-hover:text-bronze-400 transition-colors duration-500">
 {b.name}
 </h3>
 </div>
 <div className="col-span-4 lg:col-span-3 flex items-center">
 <span className="font-mono text-[11px] tracking-wider2 text-ivory-100/50">
 {b.discipline.toUpperCase()}
 </span>
 </div>
 <div className="hidden lg:flex col-span-2 items-center">
 <span className="font-sans font-bold text-ivory-100/60">{b.origin}</span>
 </div>
 <div className="hidden lg:flex col-span-1 items-center justify-end">
 <span className="font-mono text-[11px] text-bronze-400/70">‘{b.since.slice(2)}</span>
 </div>
 </div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}