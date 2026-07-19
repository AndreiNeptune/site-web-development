"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50 transition-all">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg pr-4">
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen 
              ? "bg-blue-500 border-blue-500 text-white rotate-180" 
              : "border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-transparent"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 sm:p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base border-t border-slate-100 dark:border-slate-800/50 mt-1">
              <div className="pt-4 space-y-4">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function WebDesignFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Cât costă un site web? (How Much Does a Website Cost?)",
      answer: (
        <>
          <p>Depinde de anvergura și cerințele proiectului tău. Numărul de pagini, necesitatea de a avea mai multe limbi sau crearea unui logo pot avea un impact semnificativ asupra prețului.</p>
          <p>Pentru o primă estimare, te poți orienta după pachetele de mai sus. O ofertă exactă va fi stabilită după o discuție inițială, în care aflăm împreună de ce are nevoie cu adevărat proiectul tău.</p>
        </>
      ),
    },
    {
      question: "De ce am nevoie pentru a începe? (What Do I Need to Get Started?)",
      answer: (
        <>
          <p>Practic de nimic, cu excepția dorinței de a-ți prezenta brandul puternic în mediul online.</p>
          <p>Dacă ai deja un logo și culori ale brandului, vom construi pe baza lor. Dacă nu, vom dezvolta împreună o direcție vizuală care ți se potrivește perfect.</p>
          <p>Nici domeniul nu este obligatoriu de la bun început. Dacă nu ai unul încă, ne vom ocupa împreună de asta.</p>
        </>
      ),
    },
    {
      question: "Cât durează un proiect? (How Long Does a Project Take?)",
      answer: (
        <>
          <p>De la prima discuție și până la lansare, un proiect durează în mod normal între 6 și 10 săptămâni, în funcție de complexitate și coordonare.</p>
          <p>Acest timp permite un proces bine gândit, fără a lungi lucrurile inutil.</p>
        </>
      ),
    },
    {
      question: "Ce se întâmplă dacă nu îmi place designul? (What If I Don't Like the Design?)",
      answer: (
        <>
          <p>Înainte de a desena un singur pixel, dezvoltăm împreună o viziune clară despre cum ar trebui să arate și să se simtă brandul tău. Pe baza acesteia, sunt create primele designuri și ai ocazia să oferi feedback până când ești complet mulțumit.</p>
          <p>Din experiența mea, acest proces structurat duce la un rezultat care se potrivește cu adevărat, și mult mai rapid decât te-ai aștepta.</p>
        </>
      ),
    },
    {
      question: "Pot să îmi actualizez conținutul mai târziu? (Can I Update My Content Later?)",
      answer: (
        <>
          <p>Asta depinde de ce îți dorești. În timpul discuției noastre inițiale, vom stabili împreună dacă dorești să poți edita ulterior părți ale site-ului tău, cum ar fi portofoliul, textele sau imaginile.</p>
          <p>Dacă dorești acest lucru, vom integra un CMS (Sistem de Management al Conținutului) care îți permite să actualizezi conținutul independent, fără a necesita cunoștințe tehnice. La predare, îți voi arăta cum funcționează totul pentru a avea mereu control complet.</p>
        </>
      ),
    },
    {
      question: "De ce nu există costuri lunare? (Why Are There No Monthly Costs?)",
      answer: (
        <>
          <p>Site-ul tău este găzduit prin Cloudflare, unul dintre cei mai importanți furnizori de infrastructură la nivel mondial. Asta înseamnă timpi de încărcare rapizi, fiabilitate ridicată și zero costuri lunare recurente pentru hosting de care să te lovești lună de lună.</p>
          <p>Plătești o singură dată și site-ul tău funcționează.</p>
        </>
      ),
    },
    {
      question: "Oferiți mentenanță sau suport după lansare? (Do You Offer Maintenance After Launch?)",
      answer: (
        <>
          <p>Scopul meu este să predau un site web care funcționează impecabil, nu necesită mentenanță continuă și îndeplinește pe deplin așteptările tale. Nu îl publicăm online până când nu ești complet mulțumit.</p>
          <p>Dacă apare ceva minor imediat după lansare, sunt desigur la dispoziția ta. Pentru modificări majore sau extensii ulterioare, voi fi bucuros să colaborăm din nou și vom stabili împreună ce este mai bine.</p>
        </>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Întrebări Frecvente (FAQ)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Tot ce trebuie să știi despre colaborarea noastră și procesul de creare a site-ului.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
