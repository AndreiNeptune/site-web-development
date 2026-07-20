"use client";

import { useState, useEffect } from "react";
import { Plus, Check } from "lucide-react";
import { motion, useSpring, useTransform, Variants } from "framer-motion";
import Link from "next/link";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { bounce: 0, duration: 800 });
  
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString("ro-RO"));

  return <motion.span>{display}</motion.span>;
}

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 overflow-hidden">
      <motion.div 
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Cât costă site-ul tău?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Fiecare proiect este diferit. Acest calculator îți oferă o primă estimare orientativă.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Column: Base Package */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group">
            <div>
              <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Pachet de Bază</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Fundația fiecărui site (300€)</p>
              </div>

              <div className="space-y-3">
                <motion.div variants={itemVariants} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Design Personalizat</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Adaptat brandului și audienței tale</p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Optimizare Mobile &amp; Desktop</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Responsive pe toate dispozitivele</p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Animații &amp; Interacțiuni</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Interfață fluidă și modernă</p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Viteză de Încărcare &amp; SEO</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Performanță ridicată pe Google</p>
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Pagini Legale</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Termeni și condiții, GDPR, Cookies</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Customization */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Pages Slider */}
            <motion.div variants={itemVariants} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Număr de Pagini</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Câte pagini va avea site-ul tău?</p>
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white bg-slate-200/60 dark:bg-slate-800 px-3 py-1 rounded-xl shadow-inner">
                  <AnimatedNumber value={pages} /> {pages === 1 ? "pagină" : "pagini"}
                </div>
              </div>
              
              <div className="relative pt-1">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer accent-blue-600 dark:accent-blue-500 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1.5">
                  <span>1 (Bază)</span>
                  <span>+100€ / pagină adiacentă</span>
                  <span>20 max</span>
                </div>
              </div>
            </motion.div>

            {/* Addons List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
              <AddonCard
                title="Formular de Contact"
                description="Trimitere mesaje direct pe email sau WhatsApp."
                price={addonPrices.contactForm}
                isSelected={addons.contactForm}
                onClick={() => toggleAddon("contactForm")}
              />
              <AddonCard
                title="Content Management (Panou Admin)"
                description="Editezi singur textul și imaginile fără cunoștințe tehnice."
                price={addonPrices.cms}
                isSelected={addons.cms}
                onClick={() => toggleAddon("cms")}
              />
              <AddonCard
                title="Mai Multe Limbi"
                description="Suport multilingv (ex: Română / Engleză)."
                price={addonPrices.languages}
                isSelected={addons.languages}
                onClick={() => toggleAddon("languages")}
              />
              <AddonCard
                title="Logo &amp; Branding"
                description="Identitate vizuală completă și logo profesional."
                price={addonPrices.logo}
                isSelected={addons.logo}
                onClick={() => toggleAddon("logo")}
              />
            </motion.div>
          </div>
        </div>

        {/* Footer / Total Section */}
        <motion.div variants={itemVariants} className="text-center pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2 bg-slate-50 dark:bg-slate-900/50 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800">
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Preț estimat:</span>
            <span className="text-xs text-slate-400 dark:text-slate-500">de la</span>
            <motion.span 
              className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 drop-shadow-sm flex items-center"
            >
              <AnimatedNumber value={calculateTotal()} />€
            </motion.span>
          </div>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            SOLICITĂ O OFERTĂ
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AddonCard({ title, description, price, isSelected, onClick }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={`relative p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer group flex items-center justify-between gap-3 overflow-hidden ${
        isSelected 
          ? "bg-blue-50/80 dark:bg-blue-500/10 border-blue-500 dark:border-blue-500 shadow-md shadow-blue-500/5" 
          : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-sm"
      }`}
    >
      {isSelected && (
        <motion.div 
          layoutId="highlight"
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-50 pointer-events-none" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      <div className="flex-1 min-w-0 relative z-10">
        <h4 className={`font-bold text-xs sm:text-sm transition-colors ${isSelected ? "text-blue-700 dark:text-blue-400" : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"}`}>
          {title}
        </h4>
        <p className={`text-xs truncate transition-colors ${isSelected ? "text-blue-600/80 dark:text-blue-400/80" : "text-slate-500 dark:text-slate-400"}`}>
          {description}
        </p>
      </div>
      
      <div className="flex items-center gap-3 shrink-0 relative z-10">
        <span className={`text-xs sm:text-sm font-bold ${isSelected ? "text-blue-700 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"}`}>
          +{price}€
        </span>
        <motion.button 
          layout
          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
            isSelected 
              ? "bg-blue-600 text-white" 
              : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400"
          }`}
        >
          {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </motion.button>
      </div>
    </motion.div>
  );
}
