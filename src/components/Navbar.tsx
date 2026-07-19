"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, Menu, ArrowRight, Home, MonitorUp, ImageIcon, FileText, Laptop } from "lucide-react";

const getMobileIcon = (label: string) => {
  switch(label) {
    case "Acasă": return <Home className="w-5 h-5 text-slate-500 dark:text-slate-400" />;
    case "Windows": return <MonitorUp className="w-5 h-5 text-pink-500 dark:text-pink-400" />;
    case "Galerie": return <ImageIcon className="w-5 h-5 text-slate-500 dark:text-slate-400" />;
    case "Blog": return <FileText className="w-5 h-5 text-slate-500 dark:text-slate-400" />;
    case "Web Design": return <Laptop className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    case "Contact": return <Phone className="w-5 h-5 text-slate-500 dark:text-slate-400" />;
    default: return <ArrowRight className="w-5 h-5 text-slate-400" />;
  }
};

const getBadge = (label: string) => {
  if (label === "Windows") return (
    <div className="ml-auto flex items-center gap-2">
      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[9px] font-black tracking-wider uppercase px-2 py-1 rounded-lg shadow-md shadow-pink-500/20">Top Choice</span>
      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:translate-x-1 transition-transform" />
    </div>
  );
  return <ArrowRight className="ml-auto w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:translate-x-1 transition-transform" />;
};
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Acasă", href: "/" },
    { label: "Web Design", href: "/web-design" },
    { label: "Windows", href: "/instalare-windows" },
    { label: "Galerie", href: "/galerie" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar Discret (Desktop) */}
      <div className="hidden md:flex h-9 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-white/[0.02] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center justify-between">
          <div className="text-xs font-normal text-slate-600 dark:text-zinc-400 flex items-center space-x-6">
            <a href="mailto:office@servicecomputer.ro" className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-white transition-colors duration-200">
              <Mail className="w-3.5 h-3.5" />
              <span>office@servicecomputer.ro</span>
            </a>
            <a href="tel:0770198233" className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-white transition-colors duration-200">
              <Phone className="w-3.5 h-3.5" />
              <span>+40 770 198 233</span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-slate-600 dark:text-zinc-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors duration-200" aria-label="Urmărește-ne pe Facebook">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors duration-200" aria-label="Urmărește-ne pe Instagram">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.058 1.065.048 1.79.217 2.428.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.637.416 1.363.465 2.428.047 1.066.058 1.405.058 4.122 0 2.717-.01 3.056-.058 4.122-.048 1.065-.217 1.79-.465 2.428a4.88 4.88 0 01-1.153 1.772 4.88 4.88 0 01-1.772 1.153c-.637.247-1.363.416-2.428.465-1.066.047-1.405.058-4.122.058-2.717 0-3.056-.01-4.122-.058-1.065-.048-1.79-.217-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.9 4.9 0 01-1.153-1.772c-.247-.637-.416-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.058-4.122.048-1.065.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.637-.247 1.363-.416 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.337-8.337a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Sticky Glassmorphism */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out border-b border-slate-200 dark:border-white/[0.05] ${
        isScrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-[0_2px_20px_-5px_rgba(0,0,0,0.3)]" : "bg-white dark:bg-slate-950"
      }`}>
        <div className="max-w-7xl mx-auto px-6 w-full h-14 md:h-16 flex items-center justify-between">
          
          {/* Stânga: Brand ID & Glow */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group relative shrink min-w-0">
            <div className="bg-blue-500/10 dark:bg-violet-500/10 blur-xl absolute -z-10 w-12 h-12 rounded-full left-0 top-1/2 -translate-y-1/2" />
            <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="swirlGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" stroke="url(#swirlGradNew)" strokeWidth="8" strokeLinecap="round" strokeDasharray="180 60" />
                <path d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30" stroke="url(#swirlGradNew)" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <span className="font-bold tracking-tight text-slate-900 dark:text-white text-[11px] sm:text-sm md:text-base leading-none truncate">
              OMNIVO
            </span>
          </Link>

          {/* Centru: Navigație Magnetică */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Dreapta: CTA Cristal & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-all focus:outline-none" />
            <Link href="/contact" className={buttonVariants({ variant: "default", className: "group rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/10 h-10 px-5 text-sm transition-all duration-300" })}>
              Pick-up & Return Gratuit
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Interfață Mobilă: Sheet */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-all focus:outline-none" />
            <Sheet>
              <SheetTrigger render={<button className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/[0.08] transition-all focus:outline-none flex items-center justify-center" />}>
                <Menu className="w-5 h-5" />
                <span className="sr-only">Deschide meniul</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[350px] backdrop-blur-xl bg-white/95 dark:bg-slate-950/95 border-slate-200 dark:border-white/[0.08] p-6 flex flex-col">
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-3 group relative mb-8">
                    <div className="bg-blue-500/10 dark:bg-violet-500/10 blur-xl absolute -z-10 w-14 h-14 rounded-full left-0 top-1/2 -translate-y-1/2" />
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <svg className="w-10 h-10 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="swirlGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#4f46e5" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="50" r="40" stroke="url(#swirlGradMobile)" strokeWidth="8" strokeLinecap="round" strokeDasharray="180 60" />
                        <path d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30" stroke="url(#swirlGradMobile)" strokeWidth="6" strokeLinecap="round" fill="none" />
                      </svg>
                    </div>
                    <span className="font-bold tracking-tight text-slate-900 dark:text-white text-[15px] sm:text-base md:text-lg leading-tight">
                      OMNIVO
                    </span>
                  </Link>
                </SheetTitle>
                <nav className="flex-1 flex flex-col mt-4">
                  <div className="flex flex-col space-y-2 mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-4 py-3 px-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900/80 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                          {getMobileIcon(link.label)}
                        </div>
                        <span className="text-[17px] font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                          {link.label}
                        </span>
                        {getBadge(link.label)}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
