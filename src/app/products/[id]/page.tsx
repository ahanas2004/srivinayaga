import { notFound } from "next/navigation";
import type { Metadata } from "next";
import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";

interface Props {
 params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
 return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { id } = await params;
 const product = products.find((p) => p.id === id);
 if (!product) return {};
 return {
 title: `${product.name} — ${product.brand}`,
 description: product.description,
 alternates: { canonical: `/products/${product.id}` },
 };
}

export default async function ProductPage({ params }: Props) {
 const { id } = await params;
 const product = products.find((p) => p.id === id);
 if (!product) notFound();

 const productSchema = {
 "@context": "https://schema.org",
 "@type": "Product",
 name: product.name,
 description: product.description,
 brand: { "@type": "Brand", name: product.brand },
 sku: product.code,
 category: product.category,
 image: product.image,
 };

 const others = products.filter((p) => p.id !== product.id).slice(0, 3);

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
 />

 {/* Breadcrumb */}
 <section className="pt-32 lg:pt-40">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <nav className="font-mono text-[10px] tracking-widest2 text-ink-500 flex gap-2">
 <Link href="/" className="hover:text-bronze-600">INDEX</Link>
 <span>/</span>
 <Link href="/products" className="hover:text-bronze-600">INSTRUMENTS</Link>
 <span>/</span>
 <span className="text-bronze-600">{product.code}</span>
 </nav>
 </div>
 </section>

 {/* Header */}
 <section className="py-12 lg:py-20">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-7">
 <div className="font-mono text-[11px] tracking-widest2 text-bronze-600 mb-6">
 {product.brand.toUpperCase()} · {product.category.toUpperCase()}
 </div>
 <h1 className="font-sans font-bold text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.96] tracking-[-0.02em]">
 {product.name}
 </h1>
 <p className="mt-8 font-sans font-bold text-3xl text-bronze-600 max-w-2xl">
 "{product.tagline}"
 </p>
 </div>
 <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
 <div className="font-mono text-[10px] tracking-widest2 text-ink-600 space-y-2 w-full">
 <div className="flex justify-between"><span>REFERENCE</span><span>{product.code}</span></div>
 <div className="flex justify-between"><span>VINTAGE</span><span>{product.year}</span></div>
 <div className="flex justify-between"><span>DISCIPLINE</span><span>{product.industry.toUpperCase()}</span></div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Plate */}
 <section className="pb-20">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="relative aspect-[16/9] bg-ivory-100 border border-ink-900/10 overflow-hidden">
 {product.image ? (
 <Image
 src={product.image}
 alt={product.name}
 fill
 priority
 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
 sizes="100vw"
 />
 ) : (
 <svg viewBox="0 0 1200 700" className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="0.5">
 <g className="text-ink-900/25">
 <rect x="300" y="150" width="600" height="400" />
 <line x1="300" y1="350" x2="900" y2="350" strokeDasharray="2 4" />
 <line x1="600" y1="150" x2="600" y2="550" strokeDasharray="2 4" />
 <circle cx="600" cy="350" r="120" />
 <circle cx="600" cy="350" r="160" strokeDasharray="2 4" />
 <circle cx="600" cy="350" r="80" />
 </g>
 <circle cx="600" cy="350" r="4" className="fill-bronze-500" />
 </svg>
 )}
 <div className="absolute top-6 left-6 right-6 flex justify-between font-mono text-[10px] tracking-widest2 text-ink-700 z-10">
 <span className="bg-paper/80 px-2 py-1">PLATE · {product.code}</span>
 <span className="bg-paper/80 px-2 py-1">SCALE 1:1</span>
 </div>
 </div>
 </div>
 </section>

 {/* Description & specs */}
 <section className="py-20">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-7">
 <div className="eyebrow text-ink-600 mb-6">Description</div>
 <p className="font-sans font-bold text-2xl lg:text-[28px] leading-[1.5] text-ink-800 font-light">
 {product.description}
 </p>
 </div>
 <div className="col-span-12 lg:col-span-4 lg:col-start-9">
 <div className="eyebrow text-ink-600 mb-6">Specifications</div>
 <dl className="border-t border-ink-900/15">
 {Object.entries(product.specs).map(([k, v]) => (
 <div key={k} className="flex justify-between py-4 border-b border-ink-900/15 font-mono text-[12px]">
 <dt className="tracking-wider2 text-ink-500">{k.toUpperCase()}</dt>
 <dd className="text-ink-900">{v}</dd>
 </div>
 ))}
 </dl>
 <Link
 href="/contact"
 className="mt-10 inline-flex items-center gap-3 text-sm tracking-wider2 border-b border-bronze-500 pb-1"
>
 ENQUIRE ABOUT THIS INSTRUMENT
 <span className="text-bronze-500">→</span>
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Other instruments */}
 <section className="py-20 border-t border-ink-900/10">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <h2 className="font-sans font-bold text-3xl lg:text-5xl mb-12">
 Other instruments<br /><em className="text-bronze-500">in the present folio.</em>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {others.map((p) => (
 <Link key={p.id} href={`/products/${p.id}`} className="group">
 <div className="relative aspect-[4/3] bg-ivory-100 border border-ink-900/10 overflow-hidden">
 {p.image && (
 <Image
 src={p.image}
 alt={p.name}
 fill
 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
 sizes="(max-width: 768px) 100vw, 33vw"
 />
 )}
 </div>
 <div className="mt-4 font-mono text-[10px] tracking-widest2 text-bronze-600">
 {p.brand.toUpperCase()}
 </div>
 <h3 className="font-sans font-bold text-xl text-ink-900 group-hover:text-bronze-600 transition-all">
 {p.name}
 </h3>
 </Link>
 ))}
 </div>
 </div>
 </section>
 </>
 );
}
