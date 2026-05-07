import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/common/Reveal";

export const metadata: Metadata = {
 title: "Contact — Initiate Correspondence",
 description: "Reach the Trichy and Chennai offices of Sri Vinayaga Scientific.",
 alternates: { canonical: "/contact" },
};

export default function ContactPage() {
 return (
 <>
 <section className="pt-40 lg:pt-52 pb-16">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-6">
 <div className="col-span-12 lg:col-span-2">
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600">
 CHAPTER · VII<br />CONTACT
 </div>
 </div>
 <div className="col-span-12 lg:col-span-10">
 <Reveal>
 <h1 className="font-sans font-bold text-[48px] sm:text-[80px] lg:text-[120px] leading-[0.95] tracking-[-0.025em]">
 We should be glad<br /><em className="text-bronze-500">to hear from you.</em>
 </h1>
 </Reveal>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 lg:py-24">
 <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
 <div className="grid grid-cols-12 gap-12">
 <div className="col-span-12 lg:col-span-7">
 <Reveal>
 <div className="eyebrow text-ink-600 mb-10">Form of Enquiry</div>
 <ContactForm />
 </Reveal>
 </div>

 <div className="col-span-12 lg:col-span-4 lg:col-start-9">
 <Reveal delay={0.1}>
 <div className="eyebrow text-ink-600 mb-10">The Bureaux</div>

 <div className="space-y-12">
 <div>
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600 mb-3">
 OFFICE I · HEAD BUREAU
 </div>
 <h3 className="font-sans font-bold text-3xl text-ink-900 mb-4">Tiruchirappalli</h3>
 <p className="text-ink-600 leading-relaxed">
 No. 12, Salai Road,<br />
 Thillai Nagar,<br />
 Tiruchirappalli — 620018<br />
 Tamil Nadu, India
 </p>
 <div className="mt-4 space-y-1 text-sm">
 <p>+91 00000 00000</p>
 <p>trichy@srivinayagascientific.com</p>
 </div>
 </div>

 <div className="hairline" />

 <div>
 <div className="font-mono text-[10px] tracking-widest2 text-bronze-600 mb-3">
 OFFICE II · METROPOLITAN
 </div>
 <h3 className="font-sans font-bold text-3xl text-ink-900 mb-4">Chennai</h3>
 <p className="text-ink-600 leading-relaxed">
 Anna Salai,<br />
 Chennai — 600002<br />
 Tamil Nadu, India
 </p>
 <div className="mt-4 space-y-1 text-sm">
 <p>+91 00000 00000</p>
 <p>chennai@srivinayagascientific.com</p>
 </div>
 </div>

 <div className="hairline" />

 <div>
 <div className="eyebrow text-ink-600 mb-3">Hours</div>
 <p className="font-sans font-bold text-ink-700">
 Monday through Saturday<br />
 09:00 — 18:00 IST
 </p>
 </div>
 </div>
 </Reveal>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}