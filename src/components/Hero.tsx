"use client";

import { ArrowRight, Laptop, Monitor } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroMockup = dynamic(() => import("./HeroMockup"), { ssr: false });

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Background cyber grid & colorful blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70" />
      
      {/* Glowing light blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl will-change-transform transform-gpu" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite] will-change-transform transform-gpu" />

      {/* Fade out to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Information */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          <div
            className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Agenție Web Design &amp; Dezvoltare Web
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6"
          >
            CREARE SITE-URI WEB ȘI{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 dark:from-blue-400 dark:via-indigo-400 dark:to-pink-500 bg-clip-text text-transparent">
              MAGAZINE ONLINE
            </span>
          </h1>

          <p
            className="text-base sm:text-xl text-slate-800 dark:text-slate-200 font-medium mb-4 text-balance mx-auto lg:mx-0"
          >
            Atrage mai mulți clienți cu un design modern, optimizat pentru conversii.
          </p>
          <p
            className="text-slate-600 dark:text-slate-300 max-w-2xl text-sm sm:text-base mb-10 leading-relaxed"
          >
            Transformăm ideile tale în experiențe digitale memorabile. Fie că ai nevoie de un <strong className="text-slate-700 dark:text-white">site de prezentare</strong> rapid sau de o <strong className="text-slate-700 dark:text-white">platformă e-commerce</strong> complexă, îți oferim soluții web complete.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/web-design"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Vezi Pachetele Web
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-900 dark:text-slate-100 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-2xl transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Solicită o Ofertă
            </Link>
          </div>
        </div>

        {/* Right Column: MacBook Pro Mockup */}
        <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
          {isDesktop && <HeroMockup />}
        </div>
      </div>
    </section>
  );
}
