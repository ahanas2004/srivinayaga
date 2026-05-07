"use client";

import Reveal from "@/components/common/Reveal";

export default function Manifesto() {
 return (
 <section className="py-32 lg:py-48 bg-paper">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-8">
 <div className="col-span-12 lg:col-span-10 lg:col-start-2">
 <Reveal>
   <div className="flex flex-col items-center text-center">
     <span className="eyebrow text-ink-400 mb-12">OUR MISSION</span>
     <p className="font-sans font-medium text-[28px] lg:text-[48px] leading-[1.3] text-ink-800 text-balance tracking-tight">
       "At <span className="text-bronze-500 font-bold">Sri Vinayaga Scientific</span>, we provide 
       the tools that power important research. We don't just sell equipment; we provide the 
       <span className="text-ink-900 font-bold"> reliability</span> and support needed for 
       scientific success."
     </p>

     <div className="mt-16 w-16 h-px bg-bronze-500" />

     <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 text-left max-w-5xl">
       <div className="space-y-4">
         <h3 className="eyebrow text-ink-900">QUALITY</h3>
         <p className="text-sm text-ink-600 leading-relaxed font-normal">
           All our products are carefully selected for their performance, 
           durability, and industry standards.
         </p>
       </div>
       <div className="space-y-4">
         <h3 className="eyebrow text-ink-900">PRECISION</h3>
         <p className="text-sm text-ink-600 leading-relaxed font-normal">
           We ensure every instrument we deliver meets high accuracy requirements 
           for reliable scientific measurements.
         </p>
       </div>
       <div className="space-y-4">
         <h3 className="eyebrow text-ink-900">SERVICE</h3>
         <p className="text-sm text-ink-600 leading-relaxed font-normal">
           Our support continues after the sale. We provide expert technical assistance, 
           regular maintenance, and calibration.
         </p>
       </div>
     </div>
   </div>
 </Reveal>

 </div>
 </div>
 </div>
 </section>
 );
}

