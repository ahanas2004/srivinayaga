"use client";

import Link from "next/link";
import navigation from "@/data/navigation.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ivory-50 pt-32 pb-12 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-12 lg:gap-8 pb-24 border-b border-ivory-50/10">
          {/* Brand block */}
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="inline-block group">
              <span className="font-sans font-bold text-3xl tracking-tight text-ivory-50 group-hover:text-bronze-400 transition-colors duration-500">
                Sri Vinayaga <span className="text-bronze-400">Scientific</span>
              </span>
            </Link>
            <p className="mt-8 text-sm text-ivory-300/60 leading-relaxed max-w-sm">
              Established in Tamil Nadu as a leading provider of high-precision laboratory instruments 
              and scientific equipment. Supporting research and industry since 2010.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <a href="#" className="eyebrow text-[10px] text-ivory-300 hover:text-bronze-400 transition-colors">LinkedIn</a>
              <a href="#" className="eyebrow text-[10px] text-ivory-300 hover:text-bronze-400 transition-colors">Instagram</a>
              <a href="#" className="eyebrow text-[10px] text-ivory-300 hover:text-bronze-400 transition-colors">Twitter</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-7">
            <h4 className="eyebrow text-bronze-500 mb-8">NAVIGATION</h4>
            <ul className="space-y-4">
              {navigation.primary.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-3 text-sm text-ivory-200 hover:text-ivory-50 transition-colors"
                  >
                    <span className="font-mono font-bold text-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.ord}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h4 className="eyebrow text-bronze-500 mb-8">CONTACT INFO</h4>
            <address className="not-italic space-y-6">
              <div>
                <span className="eyebrow text-[10px] text-ivory-400 block mb-2">OFFICE LOCATION</span>
                <p className="text-sm text-ivory-200 leading-loose uppercase tracking-wider">
                  TIRUCHIRAPPALLI<br />
                  TAMIL NADU, INDIA
                </p>
              </div>
              <div>
                <span className="eyebrow text-[10px] text-ivory-400 block mb-2">EMAIL & PHONE</span>
                <p className="text-sm text-ivory-200">
                  <a href="mailto:info@svs-scientific.com" className="hover:text-bronze-400 transition-colors">
                    info@svs-scientific.com
                  </a>
                  <br />
                  <a href="tel:+910000000000" className="hover:text-bronze-400 transition-colors">
                    +91 00000 00000
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="eyebrow text-[10px] text-ivory-300/40">
            © {currentYear} SRI VINAYAGA SCIENTIFIC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="eyebrow text-[10px] text-ivory-300/40 hover:text-ivory-300">PRIVACY</Link>
            <Link href="/terms" className="eyebrow text-[10px] text-ivory-300/40 hover:text-ivory-300">TERMS</Link>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="eyebrow text-[10px] text-ivory-300/40">SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Large decorative text */}
      <div className="mt-20 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[20vw] font-sans font-bold leading-none text-center whitespace-nowrap tracking-tighter">
          SRI VINAYAGA SCIENTIFIC
        </h2>
      </div>
    </footer>
  );
}
