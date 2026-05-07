import type { Metadata } from "next";
import Reveal from "@/components/common/Reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — Sri Vinayaga Scientific",
  description:
    "Learn about Sri Vinayaga Scientific — providing high-quality scientific instruments and laboratory solutions in Tamil Nadu for over 20 years.",
  alternates: { canonical: "/about" },
};

const chapters = [
  {
    no: "01",
    year: "2003",
    title: "Our Foundations",
    body: "Founded in Tiruchirappalli with a mission to provide South Indian laboratories with high-quality scientific instruments from world-leading manufacturers.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800"
  },
  {
    no: "02",
    year: "2009",
    title: "Expanding to Chennai",
    body: "We opened our second office in Chennai to better serve our growing list of academic and pharmaceutical clients across the region.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
  },
  {
    no: "03",
    year: "2014",
    title: "Calibration Services",
    body: "We established a dedicated calibration division to provide our clients with accurate and reliable instrument verification services.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
  },
  {
    no: "04",
    year: "2020",
    title: "Modern Solutions",
    body: "We expanded our services to include complete cleanroom setups and custom laboratory components to meet the unique needs of modern research.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?q=80&w=800"
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 lg:pt-52 pb-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-2">
              <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
                COMPANY PROFILE<br />ABOUT US
              </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <Reveal>
                <h1 className="font-sans font-bold text-[48px] sm:text-[80px] lg:text-[100px] leading-[0.95] tracking-tight">
                  Trusted Partner for <span className="text-bronze-500">Scientific Success</span>.
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-12 max-w-2xl text-lg lg:text-xl font-normal leading-relaxed text-ink-600">
                  Sri Vinayaga Scientific has spent over two decades helping laboratories find 
                  the right equipment. We focus on building long-term relationships with 
                  top global manufacturers to bring you reliable tools for your research.
                </p>
              </Reveal>
            </div>
          </div>
          
          <Reveal delay={0.3}>
            <div className="mt-20 relative aspect-[21/9] bg-ivory-100 border border-ink-900/10 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/abouthero/1500/600" 
                alt="Laboratory research"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chronicle */}
      <section className="py-24 lg:py-32 border-t border-ink-900/10">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <Reveal>
            <div className="eyebrow text-ink-700 flex items-center gap-3 mb-20">
              <span className="font-sans font-bold text-bronze-500 text-lg">§</span>
              <span className="h-px w-10 bg-bronze-500" />
              OUR HISTORY
            </div>
          </Reveal>

          <div className="space-y-20 lg:space-y-32">
            {chapters.map((c, i) => (
              <Reveal key={c.no} delay={i * 0.05}>
                <div className="grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-12 lg:col-span-3">
                    <div className="font-sans font-bold text-7xl text-bronze-500">{c.no}</div>
                    <div className="mt-3 font-mono text-[11px] tracking-widest2 text-ink-500">{c.year}</div>
                    <div className="mt-8 relative aspect-square w-full lg:w-48 bg-ivory-100 border border-ink-900/10 overflow-hidden">
                      <Image 
                        src={c.image} 
                        alt={c.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                    <h3 className="font-sans font-bold text-4xl lg:text-5xl text-ink-900 mb-6">{c.title}</h3>
                    <p className="text-lg font-normal leading-relaxed text-ink-600">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-32 bg-ivory-100/50 border-y border-ink-900/10">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { n: "22", l: "Years of Experience" },
              { n: "1200+", l: "Happy Clients" },
              { n: "48", l: "Trusted Brands" },
              { n: "02", l: "Offices · Trichy & Chennai" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <div className="font-sans font-bold text-7xl lg:text-8xl text-ink-900">{s.n}</div>
                  <div className="hairline w-12 my-4" />
                  <div className="font-mono text-[11px] tracking-wider2 text-ink-600">
                    {s.l.toUpperCase()}
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