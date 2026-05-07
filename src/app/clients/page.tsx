import type { Metadata } from "next";
import clients from "@/data/clients.json";
import Reveal from "@/components/common/Reveal";

export const metadata: Metadata = {
 title: "Patrons — The Institutions We Serve",
 description: "A select roll of institutions, universities and laboratories served by Sri Vinayaga Scientific.",
 alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
 return (
 <>
 <section className="pt-40 lg:pt-52 pb-24">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-2">
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 CHAPTER · VI<br />PATRONS
 </div>
 </div>
 <div className="col-span-12 lg:col-span-10">
 <Reveal>
 <h1 className="font-sans font-bold text-[48px] sm:text-[80px] lg:text-[120px] leading-[0.95] tracking-[-0.025em]">
 In the company<br /><em className="text-bronze-500">of the discerning.</em>
 </h1>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-600">
 A partial roll of the institutions whose laboratories have been our patrons —
 some, for the entirety of our existence.
 </p>
 </Reveal>
 </div>
 </div>
 </div>
 </section>

 <section className="pb-32">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="border-t border-ink-900/15">
 {clients.map((c, i) => (
 <Reveal key={c.name} delay={i * 0.04}>
 <div className="grid grid-cols-12 gap-4 py-7 lg:py-10 border-b border-ink-900/15 group hover:bg-ivory-100/40 transition-colors duration-700 cursor-default">
 <div className="col-span-1">
 <span className="font-mono text-[11px] tracking-widest2 text-bronze-600">
 {String(i + 1).padStart(2, "0")}
 </span>
 </div>
 <div className="col-span-11 lg:col-span-7">
 <h3 className="font-sans font-bold text-2xl lg:text-3xl text-ink-900 group-hover:text-bronze-600 transition-all">
 {c.name}
 </h3>
 </div>
 <div className="col-span-6 lg:col-span-2 flex items-center font-mono text-[11px] tracking-wider2 text-ink-500">
 {c.sector.toUpperCase()}
 </div>
 <div className="col-span-6 lg:col-span-2 flex items-center justify-end font-sans font-bold text-ink-600">
 {c.city}
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