import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MonitorUp } from "lucide-react";

import LazyReviewsWrapper from "@/components/LazyReviewsWrapper";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Grid (Replacement for ServicesTabs & WindowsHome) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
              Alege Serviciul Dorit
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Cum te putem ajuta astăzi?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              Selectează categoria de care ai nevoie pentru a vedea lista completă de servicii și prețuri.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Web Design Card - TOP CHOICE */}
            <Link href="/web-design" className="relative group block bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 dark:from-blue-500/10 dark:via-indigo-500/10 dark:to-purple-500/10 border-2 border-blue-500/30 dark:border-blue-500/40 rounded-3xl p-6 sm:p-8 hover:border-blue-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all overflow-hidden">
               <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider py-1.5 px-4 rounded-bl-xl rounded-tr-2xl sm:rounded-tr-3xl shadow-lg">Web Design</div>
               
               <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left mt-2 sm:mt-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                      Creare Site de Prezentare &amp; Magazine Online
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                      Atrage clienți noi prin design modern, optimizat pentru conversii, rapid și SEO friendly. Soluții personalizate pentru orice afacere, de la 300€.
                    </p>
                    <span className="inline-flex items-center gap-2 font-bold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 px-5 py-2.5 rounded-xl text-sm group-hover:translate-x-2 transition-transform shadow-md">
                      Vezi pachetele &rarr;
                    </span>
                  </div>
                </div>
            </Link>

            {/* Windows Install Card */}
            <Link href="/instalare-windows" className="relative group block bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-pink-500/50 transition-all overflow-hidden">
               <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left mt-2 sm:mt-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:text-pink-500 transition-colors shadow-inner">
                    <MonitorUp className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                      Instalare Windows la Domiciliu
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      Instalare profesională OS la domiciliu, incluzând drivere, antivirus, optimizare și back-up date. Ne deplasăm noi la tine!
                    </p>
                    <span className="inline-flex items-center font-bold text-pink-600 dark:text-pink-400 text-sm group-hover:translate-x-2 transition-transform">
                      Află mai multe &rarr;
                    </span>
                  </div>
                </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Carousel */}
      <LazyReviewsWrapper />
    </>
  );
}

