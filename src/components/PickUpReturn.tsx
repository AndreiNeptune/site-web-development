"use client";

import { motion } from "framer-motion";
import { PhoneCall, Truck, ShieldAlert, Award, AlertCircle } from "lucide-react";

export default function PickUpReturn() {
  const steps = [
    {
      title: "1. Programare",
      desc: "Completează formularul de contact de pe site sau sună-ne direct la numărul dedicat de logistică.",
      detail: "Telefon: 0770 198 233",
      icon: PhoneCall,
    },
    {
      title: "2. Preluare rapidă",
      desc: "Curierul sau tehnicianul nostru ridică echipamentul direct de la ușa ta pe baza unei fișe de service completate.",
      detail: "Completată telefonic/fizic",
      icon: Truck,
    },
    {
      title: "3. Tarifare Clară",
      desc: "București: Preluare și livrare GRATUITĂ tur-retur. Ilfov: Taxă fixă logistică de 200 lei (include tur și retur).",
      detail: "București gratuit | Ilfov 200 lei",
      icon: AlertCircle,
    },
    {
      title: "4. Regula de Aur",
      desc: "Analizăm, diagnosticăm și te sunăm cu prețul exact. Nu facem nicio intervenție până când nu ne oferi acordul tău explicit.",
      detail: "Fără costuri ascunse",
      icon: Award,
    },
  ];

  return (
    <section id="pickup-return" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Pick-Up &amp; Return
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Service la ușa ta în 4 pași simpli
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Nu ai timp să vii la magazinul nostru? Nicio problemă! Noi ridicăm laptopul sau calculatorul tău, îl reparăm în laboratoarele noastre profesionale și ți-l aducem înapoi complet funcțional.
          </p>
        </div>

        {/* Golden Rule Banner */}
        <div className="max-w-4xl mx-auto mb-14 bg-gradient-to-r from-amber-500/10 via-amber-600/15 to-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 text-center shadow-md">
          <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold uppercase text-xs tracking-wider mb-2">
            <ShieldAlert className="w-5 h-5 animate-[pulse_2s_infinite]" />
            Regula Noastră de Aur
          </div>
          <p className="text-slate-950 dark:text-slate-200 font-black text-lg sm:text-xl">
            &ldquo;Nu intervenim până nu ne dai acceptul!&rdquo;
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto leading-relaxed">
            Plătești doar ceea ce aprobi în avans. Diagnosticarea este transparentă, iar dacă intervenția nu merită sau depășește bugetul tău, poți refuza lucrarea în cunoștință de cauză.
          </p>
        </div>

        {/* Stepper Steps Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-12 hidden lg:block z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between items-start group"
                >
                  <div className="w-full">
                    {/* Icon Circle */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  <span className="inline-block w-full text-center sm:text-left text-xs bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-blue-600 dark:text-blue-400 font-bold px-3 py-1.5 rounded-xl">
                    {step.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Secondary Stepper CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Ai nevoie urgenta de preluare? Programează acum la dispecerat:
          </p>
          <a
            href="tel:0770198233"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
          >
            Suna Logistică: 0770 198 233
          </a>
        </div>

      </div>
    </section>
  );
}
