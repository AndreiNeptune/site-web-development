"use client";

import { Phone, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const phoneNumber = "40770198233";
  const message = "Salut! Am o problemă cu laptopul/PC-ul și aș dori o programare.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-3 py-3 md:hidden flex items-center justify-between gap-2 shadow-[0_-8px_30px_rgb(0,0,0,0.12)]">
      {/* Call Button */}
      <a
        href="tel:0770198233"
        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold h-11 rounded-xl text-[10px] sm:text-xs transition-colors shadow-sm"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
        <span>Sună-ne</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold h-11 rounded-xl text-[10px] sm:text-xs transition-colors shadow-sm"
      >
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>WhatsApp</span>
      </a>

      {/* Book Button */}
      <Link
        href="/contact"
        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold h-11 rounded-xl text-[10px] sm:text-xs transition-all shadow-md shadow-blue-500/20"
      >
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>Rezervă</span>
      </Link>
    </div>
  );
}
