import type { Metadata } from "next";
import Reveal from "@/components/common/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
 title: "Services — Calibration, Cleanroom & Custom Provision",
 description: "Calibration, cleanroom design, custom moulding and scientific distribution services from Sri Vinayaga Scientific.",
 alternates: { canonical: "/services" },
};

const services = [
 {
 no: "I",
 name: "Calibration",
 sub: "Traceable, accredited, exact.",
 body: "Our metrology team performs on-site and laboratory calibration across mass, volume, temperature, pressure and electrochemistry — issuing certificates traceable to national reference standards.",
 items: ["Mass — up to 220 kg", "Temperature — −80 to 1200 °C", "Pressure — vacuum to 700 bar", "pH & conductivity"],
 image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
 },
 {
 no: "II",
 name: "Custom Moulding",
 sub: "Bespoke laboratory components.",
 body: "When the catalogue does not suffice, our laboratory designs and manufactures laboratory components in PTFE, PMP, PP and stainless steel — drawn to the specifications of the requesting institution.",
 items: ["PTFE & fluoropolymer fabrication", "Cleanroom-grade plastics", "Custom glassware fittings", "Specimen handling apparatus"],
 image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
 },
 {
 no: "III",
 name: "Cleanroom Setup",
 sub: "Turnkey controlled environments.",
 body: "Full design, fabrication and validation of cleanroom facilities from ISO Class 8 down to ISO Class 5 — including HVAC, HEPA filtration, monitoring and qualification documentation.",
 items: ["ISO 14644 compliance", "HEPA & ULPA filtration", "DOP / PAO validation", "Particulate monitoring"],
 image: "https://picsum.photos/seed/service3/800/600"
 },
 {
 no: "IV",
 name: "Scientific Distribution",
 sub: "Two decades of provisioning.",
 body: "Procurement consultancy, vendor liaison, customs clearance, installation and after-sales servicing — performed by a dedicated account manager assigned to each institution.",
 items: ["Pan-India delivery", "Installation & commissioning", "Operator training", "Annual maintenance contracts"],
 image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
 },
];

const servicesSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 provider: { "@type": "LocalBusiness", name: "Sri Vinayaga Scientific" },
 serviceType: ["Calibration", "Cleanroom Setup", "Custom Moulding", "Scientific Distribution"],
};

export default function ServicesPage() {
 return (
 <>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

 <section className="pt-40 lg:pt-52 pb-16">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-2">
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 CHAPTER · V<br />SERVICES
 </div>
 </div>
 <div className="col-span-12 lg:col-span-10">
 <Reveal>
 <h1 className="font-sans font-bold text-[48px] sm:text-[80px] lg:text-[120px] leading-[0.95] tracking-[-0.025em]">
 Beyond supply,<br /><em className="text-bronze-500">stewardship.</em>
 </h1>
 </Reveal>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 {services.map((s, i) => (
 <Reveal key={s.no} delay={i * 0.05}>
 <article className="grid grid-cols-12 gap-6 py-16 lg:py-24 border-t border-ink-900/15 last:border-b">
 <div className="col-span-12 lg:col-span-3">
 <div className="font-sans font-bold text-7xl text-bronze-500">§{s.no}</div>
 <div className="mt-8 relative aspect-[4/3] w-full bg-ivory-100 border border-ink-900/10 overflow-hidden">
 <Image 
 src={s.image} 
 alt={s.name}
 fill
 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
 />
 </div>
 </div>
 <div className="col-span-12 lg:col-span-6">
 <h3 className="font-sans font-bold text-4xl lg:text-6xl text-ink-900 mb-4">{s.name}</h3>
 <p className="font-sans font-bold text-2xl text-bronze-600 mb-8">{s.sub}</p>
 <p className="text-lg leading-relaxed text-ink-600 max-w-xl">{s.body}</p>
 </div>
 <div className="col-span-12 lg:col-span-3">
 <div className="eyebrow text-ink-600 mb-4">Capability</div>
 <ul className="space-y-3 text-sm">
 {s.items.map((it) => (
 <li key={it} className="flex gap-3 text-ink-700 border-b border-ink-900/10 pb-3">
 <span className="text-bronze-500">◆</span>
 <span>{it}</span>
 </li>
 ))}
 </ul>
 </div>
 </article>
 </Reveal>
 ))}
 </div>
 </section>
 </>
 );
}
