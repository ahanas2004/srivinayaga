import type { Metadata } from "next";
import ProductCatalogue from "@/components/products/ProductCatalogue";
import Reveal from "@/components/common/Reveal";

export const metadata: Metadata = {
 title: "Instruments — The Complete Catalogue",
 description:
 "Browse the curated catalogue of scientific instruments and laboratory equipment supplied by Sri Vinayaga Scientific across India.",
 alternates: { canonical: "/products" },
};

export default function ProductsPage() {
 return (
 <>
 <section className="pt-40 lg:pt-52 pb-16">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6 mb-16">
 <div className="col-span-12 lg:col-span-2">
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 CHAPTER · III<br />INSTRUMENTS
 </div>
 </div>
 <div className="col-span-12 lg:col-span-10">
 <Reveal>
 <h1 className="font-sans font-bold text-[48px] sm:text-[80px] lg:text-[120px] leading-[0.95] tracking-[-0.025em]">
 The catalogue,<br /><em className="text-bronze-500">in its entirety.</em>
 </h1>
 </Reveal>
 <Reveal delay={0.1}>
 <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-600">
 Each entry has been admitted to this register only after due consideration of its
 metrological lineage and its suitability for the laboratories we serve.
 </p>
 </Reveal>
 </div>
 </div>
 </div>
 </section>

 <section className="pb-32 lg:pb-44">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <ProductCatalogue />
 </div>
 </section>
 </>
 );
}