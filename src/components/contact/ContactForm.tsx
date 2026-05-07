"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
 name: z.string().min(2, "Required"),
 email: z.string().email("Valid email required"),
 institution: z.string().min(2, "Required"),
 subject: z.string().min(2, "Required"),
 message: z.string().min(10, "Please elaborate"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
 const [sent, setSent] = useState(false);
 const [loading, setLoading] = useState(false);

 const {
 register,
 handleSubmit,
 reset,
 formState: { errors },
 } = useForm<FormData>({ resolver: zodResolver(schema) });

 const onSubmit = async (data: FormData) => {
 setLoading(true);
 try {
 // Replace with EmailJS configuration
 // await emailjs.send("service_id", "template_id", data, "public_key");
 await new Promise((r) => setTimeout(r, 1200));
 setSent(true);
 reset();
 } catch (e) {
 console.error(e);
 } finally {
 setLoading(false);
 }
 };

 if (sent) {
 return (
 <div className="py-16 text-center">
 <div className="font-sans font-bold text-bronze-500 text-7xl mb-6">✓</div>
 <h3 className="font-sans font-bold text-3xl lg:text-4xl text-ink-900 mb-4">
 Your correspondence is received.
 </h3>
 <p className="text-ink-600 max-w-md mx-auto">
 A member of our bureau shall reply within one working day.
 </p>
 </div>
 );
 }

 return (
 <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
 <Field label="Your name" error={errors.name?.message}>
 <input {...register("name")} className={inputCls} placeholder="Dr. Jane Doe" />
 </Field>
 <Field label="Electronic mail" error={errors.email?.message}>
 <input {...register("email")} type="email" className={inputCls} placeholder="jane@institution.edu" />
 </Field>
 </div>
 <Field label="Institution" error={errors.institution?.message}>
 <input {...register("institution")} className={inputCls} placeholder="Department, University, or Company" />
 </Field>
 <Field label="Subject" error={errors.subject?.message}>
 <input {...register("subject")} className={inputCls} placeholder="The matter to which this concerns" />
 </Field>
 <Field label="Particulars of your enquiry" error={errors.message?.message}>
 <textarea {...register("message")} rows={5} className={`${inputCls} resize-none`} placeholder="Please describe the instrument, service, or proposition you wish to discuss." />
 </Field>

 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-ink-900/15">
 <p className="text-xs font-mono tracking-wider2 text-ink-500">
 BY DESPATCHING THIS, YOU ASSENT TO BEING CONTACTED IN REPLY.
 </p>
 <button
 type="submit"
 disabled={loading}
 className="group inline-flex items-center gap-3 text-sm tracking-wider2 text-ink-900 disabled:opacity-50"
>
 <span className="border-b border-bronze-500 pb-1">
 {loading ? "DESPATCHING…" : "DESPATCH CORRESPONDENCE"}
 </span>
 <span className="text-bronze-500 group-hover:translate-x-1 transition-transform">→</span>
 </button>
 </div>
 </form>
 );
}

const inputCls =
 "w-full bg-transparent border-0 border-b border-ink-900/30 py-3 font-sans font-bold text-xl text-ink-900 placeholder:text-ink-400 placeholder:font-light focus:outline-none focus:border-bronze-500 transition-colors";

function Field({
 label,
 error,
 children,
}: {
 label: string;
 error?: string;
 children: React.ReactNode;
}) {
 return (
 <div>
 <label className="eyebrow text-ink-600 block mb-2">{label}</label>
 {children}
 {error && <p className="mt-2 font-mono text-[10px] tracking-wider2 text-red-700">⚠ {error.toUpperCase()}</p>}
 </div>
 );
}