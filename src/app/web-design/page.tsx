import { Metadata } from "next";
import WebDesignFAQ from "@/components/WebDesignFAQ";
import WebDesignPricingSection from "@/components/WebDesignPricingSection";

export const metadata: Metadata = {
  title: "Creare Site Web Profesional & Magazin Online | Omnivo",
  description: "Servicii premium de creare site web de prezentare și magazine online. Agenție de web design în București axată pe viteza de încărcare și optimizare SEO.",
  alternates: {
    canonical: 'https://omnivoweb.vercel.app/web-design',
  }
};

export default function WebDesignPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cât costă crearea unui site web sau magazin online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prețul depinde de anvergura proiectului (site de prezentare sau magazin online), numărul de pagini și funcționalități. La Omnivo, prețurile încep de la 300€ pentru site-uri de prezentare de înaltă performanță și 800€ pentru magazine online complet funcționale."
        }
      },
      {
        "@type": "Question",
        "name": "Cât durează realizarea unui site web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De la prima discuție și până la lansare, un proiect de creare site durează în mod normal între 1 și 4 săptămâni, în funcție de complexitatea designului, a conținutului și a funcționalităților tehnice cerute."
        }
      },
      {
        "@type": "Question",
        "name": "De ce să aleg platforme moderne (Next.js) în loc de WordPress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spre deosebire de site-urile WordPress care necesită plugin-uri și se încarcă adesea lent, noi dezvoltăm platforme ultra-rapide în React/Next.js. Acest lucru oferă securitate maximă (fără costuri lunare de mentenanță) și timpi de încărcare sub 1 secundă, esențiali pentru o clasare pe prima pagină în Google (SEO)."
        }
      },
      {
        "@type": "Question",
        "name": "Oferiți servicii de mentenanță după lansarea site-ului?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Site-urile create de noi pe arhitectura modernă JAMStack necesită zero mentenanță tehnică recurentă. Totuși, suntem la dispoziția ta pentru dezvoltări ulterioare, extinderea numărului de pagini sau funcționalități noi."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen pt-14 md:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero scurt pentru Web Design */}
      <section className="bg-white dark:bg-slate-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Creare Site Web, Magazine Online și <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">Web Design</span> Premium
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Agenție specializată în <strong>creare site-uri web de prezentare</strong> și <strong>dezvoltare magazine online</strong>. Soluții la cheie cu optimizare SEO avansată integrată (Core Web Vitals), adaptare perfectă pentru telefon (Mobile-First) și timpi de încărcare de sub o secundă, ajutându-te să îți depășești competiția în căutările Google.
          </p>
        </div>
      </section>

      {/* Sectiune Pachete + Calculator */}
      <WebDesignPricingSection />
      <WebDesignFAQ />
    </main>
  );
}
