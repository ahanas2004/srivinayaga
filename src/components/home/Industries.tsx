"use client";

import industries from "@/data/industries.json";
import Reveal from "@/components/common/Reveal";

export default function Industries() {
 return (
 <section className="py-32 lg:py-44">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <Reveal>
 <div className="grid grid-cols-12 gap-6 mb-16">
 <div className="col-span-12 lg:col-span-6">
 <div className="eyebrow text-ink-700 flex items-center gap-3">
 <span className="font-sans font-bold text-bronze-500 text-lg">§ III</span>
 <span className="h-px w-10 bg-bronze-500" />
 DISCIPLINES
 </div>
 <h2 className="mt-6 font-sans font-bold text-[44px] lg:text-[64px] leading-[1.05]">
 The fields we<br /><em className="text-bronze-500">honourably serve.</em>
 </h2>
 </div>
 </div>
 </Reveal>

 {/* Tabular editorial layout */}
 <div className="border-t border-ink-900/15">
 {industries.map((ind, i) => (
 <Reveal key={ind.code} delay={i * 0.05}>
 <div className="group grid grid-cols-12 gap-4 py-8 lg:py-12 border-b border-ink-900/15 hover:bg-ivory-100/40 transition-colors duration-700 cursor-default">
 <div className="col-span-2 lg:col-span-1">
 <span className="font-mono text-[11px] tracking-widest2 text-bronze-600">
 /{ind.code}
 </span>
 </div>
 <div className="col-span-10 lg:col-span-4">
 <h3 className="font-sans font-bold text-2xl lg:text-4xl text-ink-900 group-hover:text-bronze-600 transition-all duration-500">
 {ind.name}
 </h3>
 </div>
 <div className="col-span-12 lg:col-span-6 lg:col-start-7">
 <p className="text-[15px] leading-relaxed text-ink-600 max-w-xl">
 {ind.description}
 </p>
 </div>
 <div className="hidden lg:flex col-span-1 items-center justify-end">
 <span className="text-bronze-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">→</span>
 </div>
 </div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}