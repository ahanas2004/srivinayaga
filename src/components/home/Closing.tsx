"use client";

import Link from "next/link";
import Reveal from "@/components/common/Reveal";

export default function Closing() {
 return (
 <section className="py-32 lg:py-44 border-t border-ink-900/10">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-3">
 <Reveal>
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 COLOPHON · VI
 </div>
 </Reveal>
 </div>

 <div className="col-span-12 lg:col-span-9">
 <Reveal>
 <h2 className="font-sans font-bold text-[40px] sm:text-[60px] lg:text-[88px] leading-[1] tracking-[-0.02em] text-ink-900 text-balance">
 Should our work resonate with yours,<br />
 <em className="text-bronze-500">we should be glad to correspond.</em>
 </h2>
 </Reveal>

 <Reveal delay={0.15}>
 <div className="mt-16 flex flex-wrap items-center gap-10">
 <Link
 href="/contact"
 className="group inline-flex items-center gap-4 text-sm tracking-wider2 text-ink-900"
>
 <span className="border-b border-bronze-500 pb-1">INITIATE CORRESPONDENCE</span>
 <span className="text-bronze-500 group-hover:translate-x-2 transition-transform duration-500">→</span>
 </Link>
 <a
 href="mailto:enquiries@svs.in"
 className="font-sans font-bold text-2xl text-ink-700 hover:text-bronze-600 transition-colors"
>
 enquiries@svs.in
 </a>
 </div>
 </Reveal>
 </div>
 </div>
 </div>
 </section>
 );
}