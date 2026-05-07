"use client";

import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
 return (
 <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
 {/* Decorative background elements */}
 <div className="absolute inset-0 pointer-events-none">
 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bronze-100/30 blur-[120px] rounded-full z-0" />
 <div className="absolute inset-0 opacity-[0.1] z-0">
 <Image 
 src="https://picsum.photos/seed/hero/1500/600"
 alt="Background"
 fill
 className="object-cover grayscale"
 priority
 />
 </div>
 </div>

 <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
 <div className="max-w-5xl">
 <Reveal>
 <div className="eyebrow text-ink-700 mb-8 flex items-center gap-3">
 <span className="font-mono font-bold text-bronze-500 text-lg">01</span>
 <span className="h-px w-10 bg-bronze-500" />
 ESTABLISHED IN TRICHY
 </div>
 </Reveal>

 <Reveal delay={0.1}>
   <h1 className="font-sans font-bold text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.9] tracking-tight text-ink-900">
     High Precision <span className="text-bronze-500">Scientific Instruments</span>.
   </h1>
 </Reveal>

 <div className="mt-16 grid grid-cols-12 gap-8 items-end">
   <div className="col-span-12 lg:col-span-6">
     <Reveal delay={0.2}>
       <p className="text-xl lg:text-2xl text-ink-700 leading-relaxed font-normal text-balance">
         Sri Vinayaga Scientific provides world-class laboratory equipment, 
         accurate calibration services, and industrial cleanroom solutions.
       </p>
     </Reveal>

     <Reveal delay={0.3}>
       <div className="mt-12 flex flex-wrap gap-6">
         <Link 
           href="/products" 
           className="group flex items-center gap-3 px-8 py-4 bg-ink-900 text-paper hover:bg-bronze-500 transition-colors duration-500 rounded-sm"
         >
           <span className="eyebrow text-[12px] tracking-widest">View Products</span>
           <motion.span 
             className="w-2 h-2 rounded-full bg-bronze-400"
             animate={{ scale: [1, 1.5, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
           />
         </Link>
         <Link 
           href="/contact" 
           className="group flex items-center gap-3 px-8 py-4 border border-ink-900/20 hover:border-bronze-500 transition-colors duration-500 rounded-sm"
         >
           <span className="eyebrow text-[12px] tracking-widest text-ink-700">Contact Us</span>
         </Link>
       </div>
     </Reveal>
   </div>
 <div className="col-span-12 lg:col-span-4 lg:col-start-9">
 <Reveal delay={0.4}>
 <div className="pt-8 border-t border-ink-900/10">
 <div className="flex justify-between items-baseline mb-4">
 <span className="eyebrow text-[10px] text-ink-400">OPERATIONAL REGIONS</span>
 <span className="numeral text-bronze-500">02</span>
 </div>
 <p className="text-sm text-ink-600 uppercase tracking-widest leading-loose">
 TAMIL NADU<br />PAN INDIA
 </p>
 </div>
 </Reveal>
 </div>
 </div>
 </div>
 </div>

 {/* Scroll indicator */}
 <motion.div 
 className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 1, duration: 1 }}
>
 <div className="h-16 w-px bg-gradient-to-b from-bronze-500 to-transparent" />
 <span className="eyebrow text-[9px] text-bronze-500 vertical-text tracking-[0.5em]">SCROLL</span>
 </motion.div>
 </section>
 );
}
