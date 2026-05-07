"use client";

interface SectionLabelProps {
 number: string;
 label: string;
 light?: boolean;
}

export default function SectionLabel({ number, label, light = false }: SectionLabelProps) {
 return (
 <div className={`eyebrow flex items-center gap-3 ${light ? "text-ivory-300" : "text-ink-700"}`}>
 <span className="font-mono font-bold text-bronze-500 text-lg">{number}</span>
 <span className="h-px w-10 bg-bronze-500" />
 {label}
 </div>
 );
}
