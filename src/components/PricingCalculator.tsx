"use client";

import { useState, useEffect } from "react";
import { Plus, Check, Clock } from "lucide-react";
import { motion, useSpring, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { PackageType } from "./WebDesignPricingSection";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { bounce: 0, duration: 800 });
  
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString("ro-RO"));

  return <motion.span>{display}</motion.span>;
}

const PACKAGES_CONFIG = {
  basic: {
    title: "Prezentare Basic",
    subtitle: "Fundația fiecărui site",
    basePrice: 300,
    baseHours: 30,
    slider: {
      title: "Număr de Pagini",
      description: "Câte pagini va avea site-ul tău?",
      min: 1,
      max: 20,
      unit: "pagină",
      unitPlural: "pagini",
      stepPrice: 100,
      stepHours: 5,
      footerText: ["1 (Bază)", "+100€ / pagină adiacentă", "20 max"]
    },
    features: [
      { title: "Design Personalizat", desc: "Adaptat brandului și audienței tale" },
      { title: "Optimizare Mobile & Desktop", desc: "Responsive pe toate dispozitivele" },
      { title: "Animații & Interacțiuni", desc: "Interfață fluidă și modernă" },
      { title: "Viteză de Încărcare & SEO", desc: "Performanță ridicată pe Google" },
      { title: "Pagini Legale", desc: "Termeni și condiții, GDPR, Cookies" },
    ],
    addons: [
      { id: "addon1", title: "Formular de Contact", desc: "Trimitere mesaje direct pe email sau WhatsApp.", price: 50, hours: 5 },
      { id: "addon2", title: "Content Management (Panou Admin)", desc: "Editezi singur textul și imaginile fără cunoștințe tehnice.", price: 500, hours: 15 },
      { id: "addon3", title: "Mai Multe Limbi", desc: "Suport multilingv (ex: Română / Engleză).", price: 200, hours: "dynamic", hoursBase: 1, hoursPerSliderStep: 0.5 },
      { id: "addon4", title: "Logo & Branding", desc: "Identitate vizuală completă și logo profesional.", price: 600, hours: 15 },
    ]
  },
  pro: {
    title: "Magazin Online PRO",
    subtitle: "Platformă completă de eCommerce",
    basePrice: 800,
    baseHours: 80,
    slider: {
      title: "Produse Adăugate Inițial",
      description: "Câte produse introducem noi pentru tine?",
      min: 10,
      max: 100,
      unit: "produse",
      unitPlural: "produse",
      stepPrice: 5,
      stepHours: 0.5,
      footerText: ["10 (Bază)", "+5€ / produs suplimentar", "100 max"]
    },
    features: [
      { title: "Design Personalizat eCommerce", desc: "Optimizat pentru conversii și vânzări" },
      { title: "Catalog Produse & Categorii", desc: "Gestiune facilă a produselor și stocurilor" },
      { title: "Integrare Plăți cu Cardul", desc: "Stripe, NETOPIA sau EuPlatesc" },
      { title: "Generare AWB Automat", desc: "Integrare directă cu firmele de curierat" },
      { title: "Viteză de Încărcare & SEO", desc: "Esențial pentru succesul magazinului" },
    ],
    addons: [
      { id: "addon1", title: "Facturare Automată", desc: "Integrare SmartBill, FGO sau Oblio.", price: 150, hours: 10 },
      { id: "addon2", title: "Sistem de Recenzii", desc: "Recenzii cu poze și rating pentru produse.", price: 100, hours: 5 },
      { id: "addon3", title: "Mai Multe Limbi", desc: "Vânzări la nivel internațional.", price: 200, hours: "dynamic", hoursBase: 2, hoursPerSliderStep: 0.5 },
      { id: "addon4", title: "Logo & Branding", desc: "Identitate vizuală completă și logo profesional.", price: 600, hours: 15 },
    ]
  },
  custom: {
    title: "Custom Web App",
    subtitle: "Platformă la comandă",
    basePrice: 1500,
    baseHours: 150,
    slider: {
      title: "Număr de Ecrane (Screens)",
      description: "Câte vizualizări distincte va avea aplicația?",
      min: 1,
      max: 20,
      unit: "ecran",
      unitPlural: "ecrane",
      stepPrice: 150,
      stepHours: 12,
      footerText: ["1 (Bază)", "+150€ / ecran suplimentar", "20 max"]
    },
    features: [
      { title: "Arhitectură Custom (React/Next.js)", desc: "Dezvoltare de la zero, performanță maximă" },
      { title: "Design UX/UI Avansat (Figma)", desc: "Prototipare și design system complet" },
      { title: "Bază de Date & API-uri", desc: "Stocare sigură și procesare rapidă" },
      { title: "Sisteme de Conturi Utilizatori", desc: "Roluri multiple (Admin, Client, etc.)" },
      { title: "Securitate Avansată", desc: "Protecție împotriva vulnerabilităților web" },
    ],
    addons: [
      { id: "addon1", title: "Autentificare Avansată", desc: "2FA, Login cu Google/Facebook/Apple.", price: 300, hours: 20 },
      { id: "addon2", title: "Panou Admin Complex", desc: "Grafice, statistici și rapoarte avansate.", price: 500, hours: 40 },
      { id: "addon3", title: "Integrare API Extern", desc: "Conectare cu ERP, CRM sau alte servicii.", price: 400, hours: 30 },
      { id: "addon4", title: "Logo & Branding", desc: "Identitate vizuală completă și logo profesional.", price: 600, hours: 15 },
    ]
  }
};

interface PricingCalculatorProps {
  selectedPackage?: PackageType;
}

export default function PricingCalculator({ selectedPackage = "basic" }: PricingCalculatorProps) {
  const config = PACKAGES_CONFIG[selectedPackage];
  
  const [sliderValue, setSliderValue] = useState(config.slider.min);
  const [addons, setAddons] = useState<Record<string, boolean>>({
    addon1: false,
    addon2: false,
    addon3: false,
    addon4: false,
  });

  // Reset state when package changes
  useEffect(() => {
    setSliderValue(config.slider.min);
    setAddons({
      addon1: false,
      addon2: false,
      addon3: false,
      addon4: false,
    });
  }, [selectedPackage, config.slider.min]);

  const calculateTotal = () => {
    let total = config.basePrice;
    if (sliderValue > config.slider.min) {
      total += (sliderValue - config.slider.min) * config.slider.stepPrice;
    }
    
    config.addons.forEach((addon) => {
      if (addons[addon.id]) {
        total += addon.price;
      }
    });
    
    return total;
  };

  const calculateTotalHours = () => {
    let totalHours = config.baseHours;
    const extraSteps = sliderValue - config.slider.min;
    
    if (extraSteps > 0) {
      totalHours += extraSteps * config.slider.stepHours;
    }
    
    config.addons.forEach((addon: any) => {
      if (addons[addon.id]) {
        if (addon.hours === "dynamic") {
          // Dynamic hours: base + 0.5h per extra slider step
          totalHours += addon.hoursBase + extraSteps * addon.hoursPerSliderStep;
        } else {
          totalHours += addon.hours;
        }
      }
    });
    
    // Round up if not a whole number
    return Math.ceil(totalHours);
  };

  const toggleAddon = (key: string) => {
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
        key={selectedPackage} // Force remount animation when package changes
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Configurează Prețul pentru {config.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Fiecare proiect este diferit. Acest calculator îți oferă o primă estimare orientativă pe baza pachetului ales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Column: Base Package */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group">
            <div>
              <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{config.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{config.subtitle} ({config.basePrice}€)</p>
              </div>

              <div className="space-y-3">
                {config.features.map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{feature.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Customization */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Pages/Items Slider */}
            <motion.div variants={itemVariants} className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{config.slider.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{config.slider.description}</p>
                </div>
                <div className="text-xl font-black text-slate-900 dark:text-white bg-slate-200/60 dark:bg-slate-800 px-3 py-1 rounded-xl shadow-inner">
                  <AnimatedNumber value={sliderValue} /> {sliderValue === 1 ? config.slider.unit : config.slider.unitPlural}
                </div>
              </div>
              
              <div className="relative pt-1">
                <input
                  type="range"
                  min={config.slider.min}
                  max={config.slider.max}
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer accent-blue-600 dark:accent-blue-500 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-1.5">
                  <span>{config.slider.footerText[0]}</span>
                  <span>{config.slider.footerText[1]}</span>
                  <span>{config.slider.footerText[2]}</span>
                </div>
              </div>
            </motion.div>

            {/* Addons List */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
              {config.addons.map((addon) => (
                <AddonCard
                  key={addon.id}
                  title={addon.title}
                  description={addon.desc}
                  price={addon.price}
                  isSelected={addons[addon.id]}
                  onClick={() => toggleAddon(addon.id)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer / Total Section */}
        <motion.div variants={itemVariants} className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Hours + Price */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              {/* Hours */}
              <div className="flex items-center gap-2.5 bg-slate-50 dark:bg-slate-900/50 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                <Clock className="w-5 h-5 text-emerald-500 shrink-0" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Timp estimat:</span>
                  <motion.span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 flex items-center">
                    <AnimatedNumber value={calculateTotalHours()} />
                  </motion.span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Ore</span>
                </div>
              </div>
              {/* Price */}
              <div className="flex items-baseline gap-2 bg-slate-50 dark:bg-slate-900/50 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Preț estimat:</span>
                <span className="text-xs text-slate-400 dark:text-slate-500">de la</span>
                <motion.span 
                  className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 drop-shadow-sm flex items-center"
                >
                  <AnimatedNumber value={calculateTotal()} />€
                </motion.span>
              </div>
            </div>
            
            {/* Right: CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              SOLICITĂ O OFERTĂ
            </Link>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-600 text-center mt-3">
            * Prețurile și timpii sunt estimativi. Oferta finală va fi stabilită după discuția inițială.
          </p>
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
