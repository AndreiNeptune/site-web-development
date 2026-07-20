"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Globe, Smartphone, Search, Rocket } from "lucide-react";
import Link from "next/link";

export default function WebDesignPackages() {
  const commonFeatures = [
    { icon: <Search className="w-4 h-4 text-emerald-500" />, text: "Optimizat SEO pentru Google" },
    { icon: <Smartphone className="w-4 h-4 text-emerald-500" />, text: "Optimizare Mobile (Responsive design)" },
    { icon: <Rocket className="w-4 h-4 text-emerald-500" />, text: "Optimizare pentru rapiditatea site-ului" },
    { icon: <Shield className="w-4 h-4 text-emerald-500" />, text: "Certificat de Securitate SSL Inclus" }
  ];

  return (
    <div className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Alege Pachetul Potrivit Pentru Afacerea Ta
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Design modern, performanță maximă și suport dedicat.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          
          {/* Package 1 - Basic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Prezentare Basic</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Ideal pentru afaceri mici și startup-uri care au nevoie de o prezență online rapidă.</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900 dark:text-white">de la 300</span>
                <span className="text-xl text-slate-500 font-bold">€</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Site One-Page sau Până la 5 Pagini</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Design Personalizat &amp; Modern</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Formular de Contact Integrat</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Integrare Social Media &amp; Google Maps</span>
                </li>
              </ul>
            </div>
            
            <Link href="/contact" className="w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl text-center transition-colors">
              Solicită Ofertă
            </Link>
          </motion.div>

          {/* Package 2 - PRO (Top Choice) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-blue-600 to-indigo-700 rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-blue-500/20 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-2 relative overflow-hidden group"
          >
            {/* Top Choice Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-b-lg shadow-md">
              Top Choice
            </div>

            {/* Shine Wave */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine-wave" />
            </div>

            <div className="relative z-10 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Magazin Online PRO</h3>
              </div>
              <p className="text-blue-100 text-sm mb-6">Perfect pentru cei care vor să vândă online cu o platformă sigură și rapidă.</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">de la 800</span>
                <span className="text-xl text-blue-200 font-bold">€</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">Toate funcționalitățile Basic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">Catalog Produse Nelimitat</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">Integrare Plăți cu Cardul (Stripe / NETOPIA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">Integrare Curierat (AWB Automat)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">Panou de Administrare Intuitiv</span>
                </li>
              </ul>
            </div>
            
            <Link href="/contact" className="relative z-10 w-full py-3.5 px-4 bg-white hover:bg-slate-50 text-blue-600 font-bold rounded-xl text-center shadow-lg transition-colors">
              Alege Pachetul PRO
            </Link>
          </motion.div>

          {/* Package 3 - Premium / Custom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Custom Web App</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Platforme complexe, marketplace-uri sau aplicații web la comandă.</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900 dark:text-white">de la 1500</span>
                <span className="text-xl text-slate-500 font-bold">€</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Design UX/UI Avansat (Figma)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Dezvoltare Custom React / Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Arhitectură Bază de Date &amp; API-uri</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">Sisteme de Conturi și Roluri Utilizatori</span>
                </li>
              </ul>
            </div>
            
            <Link href="/contact" className="w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl text-center transition-colors">
              Discută cu un expert
            </Link>
          </motion.div>

        </div>

        {/* Common Features Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8"
        >
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Toate pachetele includ standard:</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {commonFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center text-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 px-3 py-3 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors">
                <span className="shrink-0">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
