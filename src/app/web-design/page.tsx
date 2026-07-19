import { Metadata } from "next";
import WebDesignPackages from "@/components/WebDesignPackages";
import PricingCalculator from "@/components/PricingCalculator";
import WebDesignFAQ from "@/components/WebDesignFAQ";

export const metadata: Metadata = {
  title: "Creare Site-uri Web și Magazine Online | Omnivo",
  description: "Pachete web design profesionale. Optimizat SEO, optimizare mobile, optimizare rapiditatea site-ului.",
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen pt-14 md:pt-16">
      {/* Hero scurt pentru Web Design */}
      <section className="bg-white dark:bg-slate-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Servicii de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Web Design</span> și Dezvoltare Web
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Oferim soluții complete pentru prezența afacerii tale în mediul online. Toate pachetele noastre includ optimizare SEO, design responsive pentru mobil și încărcare rapidă a paginilor.
          </p>
        </div>
      </section>

      {/* Componenta de Pachete */}
      <WebDesignPackages />

      {/* Calculator de Pret */}
      <PricingCalculator />

      {/* Componenta FAQ */}
      <WebDesignFAQ />
    </main>
  );
}
