"use client";

import Reveal from "@/components/common/Reveal";

const quotes = [
 {
 text: "The diligence with which Sri Vinayaga Scientific assembles each commission has, for fifteen years, freed our department from the burden of vendor management.",
 author: "Prof. R. Krishnamurthy",
 role: "Head of Analytical Chemistry",
 inst: "Indian Institute of Technology · Madras",
 ref: "REF / IIT-M / 2023",
 },
 {
 text: "Their calibration division responds with a precision and punctuality more familiar to a Swiss horologist than a regional supplier.",
 author: "Dr. Sanjay Iyer",
 role: "Quality Assurance Director",
 inst: "Sun Pharmaceutical Industries",
 ref: "REF / SUN / 2024",
 },
];

export default function Testimony() {
 return (
 <section className="py-32 lg:py-44">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <Reveal>
 <div className="eyebrow text-ink-700 flex items-center gap-3 mb-16">
 <span className="font-sans font-bold text-bronze-500 text-lg">§ V</span>
 <span className="h-px w-10 bg-bronze-500" />
 CORRESPONDENCE
 </div>
 </Reveal>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
 {quotes.map((q, i) => (
 <Reveal key={i} delay={i * 0.15}>
 <article className="relative">
 <div className="font-sans font-bold text-[180px] leading-[0.6] text-bronze-500/30 absolute -top-4 -left-4 select-none">
 &ldquo;
 </div>
 <blockquote className="relative font-sans font-bold text-2xl lg:text-[30px] leading-[1.4] text-ink-900 font-light text-balance">
 {q.text}
 </blockquote>
 <footer className="mt-10 pt-6 border-t border-ink-900/10">
 <div className="font-sans font-bold text-lg text-ink-900">{q.author}</div>
 <div className="text-sm text-ink-600 mt-1">{q.role}</div>
 <div className="text-sm text-bronze-600 mt-1">{q.inst}</div>
 <div className="font-mono text-[10px] tracking-widest2 text-ink-400 mt-4">
 {q.ref}
 </div>
 </footer>
 </article>
 </Reveal>
 ))}
 </div>
 </div>
 </section>
 );
}