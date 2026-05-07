import type { Metadata } from "next";
import brands from "@/data/brands.json";
import Reveal from "@/components/common/Reveal";

export const metadata: Metadata = {
 title: "Manufacturers — The Houses We Represent",
 description: "The scientific instrument manufacturers represented by Sri Vinayaga Scientific.",
 alternates: { canonical: "/brands" },
};

export default function BrandsPage() {
 return (
 <>
 <section className="pt-40 lg:pt-52 pb-24">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-2">
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 CHAPTER · IV<br />MANUFACTURERS
 </div>
 </div>
 <div className="col-span-12 lg:col-span-10">
 <Reveal>
 <h1 className="font-sans font-bold text-[48px] sm:text-[80px] lg:text-[120px] leading-[0.95] tracking-[-0.025em]">
 Houses of <em className="text-bronze-500">lineage.</em>
 </h1>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-600">
 Each manufacturer admitted to our register is selected for the consistency of its craft —
 some now into their second century of continuous manufacture.
 </p>
 </Reveal>
 </div>
 </div>
 </div>
 </section>

 <section className="pb-32">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 border border-ink-900/10">
 {brands.map((b, i) => (
 <Reveal key={b.name} delay={(i % 3) * 0.05}>
 <div className="bg-paper p-10 lg:p-14 h-full group hover:bg-ivory-100/50 transition-colors duration-700 cursor-default">
 <div className="flex items-start justify-between mb-12">
 <span className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 № {String(i + 1).padStart(2, "0")}
 </span>
 <span className="font-sans font-bold text-bronze-500">{b.since}</span>
 </div>
 <h2 className="font-sans font-bold text-3xl lg:text-4xl text-ink-900 mb-3 transition-all">
 {b.name}
 </h2>
 <p className="font-sans font-bold text-ink-600 mb-8">{b.origin}</p>
 <div className="hairline mb-6" />
 <div className="font-mono text-[10px] tracking-widest2 text-ink-600">
 {b.discipline.toUpperCase()}
 </div>
 </div>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}