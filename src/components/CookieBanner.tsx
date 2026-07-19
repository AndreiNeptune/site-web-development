"use client";

import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie_consent_accepted");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:bottom-6 md:left-auto md:max-w-sm z-50 animate-[slideUp_0.5s_ease-out]">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-2xl backdrop-blur-md flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <div className="bg-blue-500/10 p-1.5 rounded-lg text-blue-600 dark:text-blue-400 shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Politica de Cookie-uri
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              Folosim cookie-uri pentru o experiență mai bună. Continuând navigarea, ești de acord cu politica noastră.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Politică de confidențialitate
          </Link>
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/10"
          >
            Sunt de acord
          </button>
        </div>
      </div>
    </div>
  );
}
