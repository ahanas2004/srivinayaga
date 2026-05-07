"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nav from "@/data/navigation.json";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
 const pathname = usePathname();
 const [scrolled, setScrolled] = useState(false);
 const [open, setOpen] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY> 24);
 onScroll();
 window.addEventListener("scroll", onScroll);
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <>
 <header
 className={cn(
 "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
 scrolled ? "bg-paper/85 backdrop-blur-xl border-b border-ink-900/5" : "bg-transparent"
 )}
>
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="flex items-center justify-between h-20 lg:h-24">
 {/* Logo */}
 <Link href="/" className="group flex items-center gap-3">
 <div className="flex items-baseline gap-1">
 <span className="font-sans font-bold text-2xl lg:text-[28px] tracking-tight text-ink-900">
 Sri Vinayaga
 </span>
 <span className="font-sans font-bold text-bronze-500 text-xl lg:text-[22px]">
 Scientific
 </span>
 </div>
 </Link>

 {/* Desktop Nav */}
 <nav className="hidden lg:flex items-center gap-10">
 {nav.primary.map((item) => {
 const active = pathname === item.href;
 return (
 <Link
 key={item.href}
 href={item.href}
 className="group relative text-[13px] font-light tracking-wider2 text-ink-700 hover:text-ink-900 transition-colors"
>
 <span className="font-mono text-[10px] text-bronze-500 mr-1.5 align-super">
 {item.ord}
 </span>
 {item.label}
 <span
 className={cn(
 "absolute -bottom-1 left-0 h-px bg-bronze-500 transition-all duration-500",
 active ? "w-full" : "w-0 group-hover:w-full"
 )}
 />
 </Link>
 );
 })}
 </nav>

 {/* CTA */}
 <div className="hidden lg:flex items-center gap-6">
 <div className="font-mono text-[10px] tracking-widest2 text-ink-500">
 EST · 2003
 </div>
 <Link
 href="/contact"
 className="text-[12px] tracking-wider2 text-ink-900 border-b border-bronze-500 pb-0.5 hover:text-bronze-600 transition-colors"
>
 ENQUIRE →
 </Link>
 </div>

 {/* Mobile menu */}
 <button
 onClick={() => setOpen(true)}
 className="lg:hidden text-ink-900"
 aria-label="Open menu"
>
 <Menu size={22} strokeWidth={1.25} />
 </button>
 </div>
 </div>
 </header>

 {/* Mobile sheet */}
 <AnimatePresence>
 {open && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-[60] bg-paper lg:hidden"
>
 <div className="flex items-center justify-between h-20 px-6 border-b border-ink-900/10">
 <span className="font-sans font-bold text-xl">Sri Vinayaga <span className="text-bronze-500">Scientific</span></span>
 <button onClick={() => setOpen(false)} aria-label="Close">
 <X size={22} strokeWidth={1.25} />
 </button>
 </div>
 <nav className="px-6 py-12 space-y-2">
 {nav.primary.map((item, i) => (
 <motion.div
 key={item.href}
 initial={{ opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: i * 0.05 }}
>
 <Link
 href={item.href}
 onClick={() => setOpen(false)}
 className="flex items-baseline gap-4 py-4 border-b border-ink-900/10"
>
 <span className="font-mono text-[10px] text-bronze-500">{item.ord}</span>
 <span className="font-sans font-bold text-3xl">{item.label}</span>
 </Link>
 </motion.div>
 ))}
 </nav>
 </motion.div>
 )}
 </AnimatePresence>
 </>
 );
}