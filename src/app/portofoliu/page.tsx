import { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Portofoliu | Proiecte Web Design Premium",
  description: "Explorează portofoliul meu de site-uri web performante, optimizate și create cu cele mai noi tehnologii (Next.js, Tailwind, Framer Motion).",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
            Performanță vizuală.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Arhitectură de top.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Un showcase al proiectelor digitale pe care le-am construit. De la platforme e-commerce la bloguri medicale optimizate extrem.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 sm:px-8 lg:px-12 pb-32 max-w-[1400px] mx-auto">
        <PortfolioGrid />
      </section>
    </div>
  );
}
