"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingCalculator() {
  const [pages, setPages] = useState(1);
  const [addons, setAddons] = useState({
    contactForm: false,
    cms: false,
    languages: false,
    logo: false,
  });

  const basePrice = 300;
  const pagePrice = 100;

  const addonPrices = {
    contactForm: 50,
    cms: 500,
    languages: 200,
    logo: 600,
  };

  const calculateTotal = () => {
    let total = basePrice;
    if (pages > 1) {
      total += (pages - 1) * pagePrice;
    }
    if (addons.contactForm) total += addonPrices.contactForm;
    if (addons.cms) total += addonPrices.cms;
    if (addons.languages) total += addonPrices.languages;
    if (addons.logo) total += addonPrices.logo;
    return total;
  };

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Cât costă site-ul tău?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Fiecare proiect este diferit. Acest calculator îți oferă o primă estimare. Prețul exact va fi stabilit după o scurtă discuție.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Base Package */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col h-full">
            <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pachet de Bază</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Fundația fiecărui site (300€)</p>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Design Personalizat</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Adaptat brandului și audienței tale</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Optimizat pentru toate dispozitivele</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Smartphone, tabletă și desktop</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Animații &amp; Interacțiuni</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Pentru a aduce site-ul tău la viață</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Optimizare Viteza de Încărcare</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Pentru o experiență perfectă</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Pagini Legale</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Termeni și condiții, GDPR, Cookies</p>
              </div>
            </div>
          </div>

          {/* Right Column: Customization */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pages Slider */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Număr de Pagini</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Câte pagini ar trebui să aibă site-ul tău?</p>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">
                  {pages}
                </div>
              </div>
              
              <div className="relative pt-2">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:accent-blue-500 focus:outline-none"
                />
                <div className="flex justify-between text-xs font-bold text-slate-400 dark:text-slate-500 mt-2">
                  <span>1 (Bază)</span>
                  <span>+100€ / pagină adiacentă</span>
                  <span>20 max</span>
                </div>
              </div>
            </div>

            {/* Addons List */}
            <div className="flex flex-col gap-3">
              <AddonCard
                title="Formular de Contact"
                description="Astfel potențialii clienți te pot contacta direct și sigur."
                price={addonPrices.contactForm}
                isSelected={addons.contactForm}
                onClick={() => toggleAddon("contactForm")}
              />
              <AddonCard
                title="Content Management (Panou Admin)"
                description="Actualizează singur conținutul, nu sunt necesare cunoștințe tehnice."
                price={addonPrices.cms}
                isSelected={addons.cms}
                onClick={() => toggleAddon("cms")}
              />
              <AddonCard
                title="Mai Multe Limbi"
                description="Pentru ca fiecare vizitator să îți poată înțelege site-ul (ex: RO/EN)."
                price={addonPrices.languages}
                isSelected={addons.languages}
                onClick={() => toggleAddon("languages")}
              />
              <AddonCard
                title="Logo &amp; Branding"
                description="Nu ai un logo încă? Voi crea unul care se potrivește perfect brandului tău."
                price={addonPrices.logo}
                isSelected={addons.logo}
                onClick={() => toggleAddon("logo")}
              />
            </div>
          </div>
        </div>

        {/* Footer / Total Section */}
        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium">de la</span>
            <motion.span 
              key={calculateTotal()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white"
            >
              {calculateTotal().toLocaleString("ro-RO")}€
            </motion.span>
          </div>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-bold py-4 px-12 rounded-full transition-colors text-lg shadow-lg"
          >
            SOLICITĂ O OFERTĂ
          </Link>
          
          <p className="mt-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Toate sumele sunt orientative și nu implică o obligație. Voi pregăti o ofertă personalizată după discuția noastră inițială.
          </p>
        </div>
      </div>
    </section>
  );
}

function AddonCard({ title, description, price, isSelected, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`relative p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
        isSelected 
          ? "bg-blue-50 dark:bg-blue-500/10 border-blue-500 dark:border-blue-500" 
          : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50"
      }`}
    >
      <div className="flex-1">
        <h4 className={`font-bold mb-1 transition-colors ${isSelected ? "text-blue-700 dark:text-blue-400" : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"}`}>
          {title}
        </h4>
        <p className={`text-sm transition-colors ${isSelected ? "text-blue-600/80 dark:text-blue-400/80" : "text-slate-600 dark:text-slate-400"}`}>
          {description}
        </p>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-6 min-w-32">
        <span className={`text-sm font-bold ${isSelected ? "text-blue-700 dark:text-blue-400" : "text-slate-500 dark:text-slate-400"}`}>
          +{price}€
        </span>
        <button 
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isSelected 
              ? "bg-blue-600 text-white" 
              : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400"
          }`}
        >
          {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
