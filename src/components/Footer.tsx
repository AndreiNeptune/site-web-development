import { MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-zinc-300 pt-16 pb-24 md:pb-8 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <svg
                className="w-8 h-8"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#swirlGradFooter)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="180 60"
                />
                <path
                  d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30"
                  stroke="url(#swirlGradFooter)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="swirlGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight leading-none text-slate-900 dark:text-white transition-colors">
                  Omnivo
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 transition-colors">
              Oferim servicii IT la cel mai înalt nivel profesional. Siguranța și performanța echipamentului tău sunt prioritatea noastră.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors hover:scale-110"
                aria-label="Facebook Link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-500 transition-colors hover:scale-110"
                aria-label="Instagram Link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.058 1.065.048 1.79.217 2.428.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.637.416 1.363.465 2.428.047 1.066.058 1.405.058 4.122 0 2.717-.01 3.056-.058 4.122-.048 1.065-.217 1.79-.465 2.428a4.88 4.88 0 01-1.153 1.772 4.88 4.88 0 01-1.772 1.153c-.637.247-1.363.416-2.428.465-1.066.047-1.405.058-4.122.058-2.717 0-3.056-.01-4.122-.058-1.065-.048-1.79-.217-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.9 4.9 0 01-1.153-1.772c-.247-.637-.416-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.058-4.122.048-1.065.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.637-.247 1.363-.416 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.337-8.337a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-4 uppercase tracking-wider text-xs transition-colors">
              Link-uri Rapide
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/instalare-windows" className="hover:text-blue-600 dark:hover:text-white transition-colors">Instalare Windows</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">Pick-Up &amp; Return</Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-blue-600 dark:hover:text-white transition-colors">Galerie Foto</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 dark:hover:text-white transition-colors">Articole Blog</Link>
              </li>
            </ul>
          </div>

          {/* Locations Short */}
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-4 uppercase tracking-wider text-xs transition-colors">
              Locațiile Noastre
            </h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Sector 2</p>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 mt-0.5">Bulevardul Chișinău nr. 12</p>
                  <p className="text-[10px] text-slate-600 dark:text-zinc-400 mt-0.5">Tel: +40 770 198 233</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800 dark:text-slate-200">Sector 4</p>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 mt-0.5">Bd. C-tin Brâncoveanu nr. 15, Bl. B17, parter</p>
                  <p className="text-[10px] text-slate-600 dark:text-zinc-400 mt-0.5">Tel: +40 770 198 233</p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Summary */}
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-4 uppercase tracking-wider text-xs transition-colors">
              Program Servicii
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <p className="font-bold text-slate-800 dark:text-slate-200">Luni – Vineri</p>
                <p className="text-xs text-slate-700 dark:text-zinc-300 mt-0.5">09:00 – 17:30 (Ambele locații)</p>
              </li>
              <li>
                <p className="font-bold text-slate-800 dark:text-slate-200">Sâmbătă – Duminică</p>
                <p className="text-xs text-rose-700 dark:text-rose-300 mt-0.5 italic">Închis</p>
              </li>
              <li className="pt-2 border-t border-slate-200 dark:border-slate-900 hidden md:flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                Fără costuri ascunse
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-900/80 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-600 dark:text-zinc-400">
            Copyright &copy; {currentYear}{" "}Omnivo. Toate drepturile rezervate.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 sm:gap-4">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Politică de Confidențialitate</Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Termeni și Condiții</Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">ANPC</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
