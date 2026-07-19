"use client";

import { motion } from "framer-motion";
import { Laptop, Monitor } from "lucide-react";

export default function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
      className="relative w-full max-w-[480px] perspective"
    >
      {/* Screen Container */}
      <div className="relative aspect-[16/10] bg-slate-900 rounded-t-2xl border-4 border-slate-800 p-2 shadow-2xl overflow-hidden flex flex-col justify-center items-center">
        {/* Screen Content */}
        <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none">
          {/* Glowing Background Grid inside Screen */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl" />

          {/* SVG Swirl Logo */}
          <div className="relative z-10 mb-4 flex items-center justify-center">
            <svg
              className="w-16 h-16 animate-[spin_15s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#swirlGradHero)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="180 60"
              />
              <path
                d="M50 20 C60 20, 70 30, 70 50 C70 70, 50 80, 40 70 C30 60, 30 40, 50 30"
                stroke="url(#swirlGradHero)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="swirlGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="relative z-10 text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent leading-none">
            OMNIVO
          </div>
          <div className="mt-4 relative z-10 flex gap-2">
            <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-blue-400 font-bold flex items-center gap-1">
              <Laptop className="w-3 h-3" /> design
            </span>
            <span className="text-[10px] bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-purple-400 font-bold flex items-center gap-1">
              <Monitor className="w-3 h-3" /> development
            </span>
          </div>
        </div>
        
        {/* Webcam */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-700 rounded-full" />
        
        {/* Ambient reflection */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-white/5 to-transparent rotate-12 pointer-events-none" />
      </div>
      
      {/* Laptop Base */}
      <div className="relative h-4 bg-slate-400 dark:bg-slate-700 rounded-b-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-300 dark:bg-slate-600 rounded-b-md" />
      </div>
    </motion.div>
  );
}
