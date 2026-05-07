import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
 metadataBase: new URL("https://srivinayagascientific.com"),
 title: {
 default: "Sri Vinayaga Scientific — Precision Laboratory Instruments | Trichy, Chennai",
 template: "%s · Sri Vinayaga Scientific",
 },
 description:
 "Sri Vinayaga Scientific (SVS) is a curated distributor of precision scientific instruments, laboratory equipment, calibration services and cleanroom solutions across Tamil Nadu and India.",
 keywords: [
 "scientific instruments Trichy",
 "laboratory equipment Chennai",
 "calibration services Tamil Nadu",
 "cleanroom setup India",
 "Sri Vinayaga Scientific",
 "lab instrument distributors",
 ],
 authors: [{ name: "Sri Vinayaga Scientific" }],
 openGraph: {
 type: "website",
 locale: "en_IN",
 url: "https://srivinayagascientific.com",
 title: "Sri Vinayaga Scientific — Precision Laboratory Instruments",
 description:
 "A curated house of precision scientific instruments, calibration and laboratory infrastructure across India.",
 siteName: "Sri Vinayaga Scientific",
 },
 twitter: {
 card: "summary_large_image",
 title: "Sri Vinayaga Scientific",
 description: "Precision scientific instruments distributor — Trichy & Chennai.",
 },
 robots: { index: true, follow: true },
 alternates: { canonical: "/" },
};

const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: "Sri Vinayaga Scientific",
 image: "https://srivinayagascientific.com/og.jpg",
 "@id": "https://srivinayagascientific.com",
 url: "https://srivinayagascientific.com",
 telephone: "+91-00000-00000",
 address: [
 {
 "@type": "PostalAddress",
 streetAddress: "Trichy Office",
 addressLocality: "Tiruchirappalli",
 addressRegion: "Tamil Nadu",
 postalCode: "620001",
 addressCountry: "IN",
 },
 ],
 priceRange: "$$$",
 areaServed: ["Tamil Nadu", "India"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en">
 <head>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
 />
 </head>
 <body className="grain min-h-screen bg-paper text-ink-900">
 <Header />
 <main>{children}</main>
 <Footer />
 </body>
 </html>
 );
}