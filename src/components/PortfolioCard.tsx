"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PortfolioItem } from "@/data/portfolio";
import MacbookMockup from "./MacbookMockup";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  isLarge?: boolean;
}

export default function PortfolioCard({ item, index, isLarge = false }: PortfolioCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col gap-6 ${isLarge ? "col-span-1 md:col-span-2" : "col-span-1"}`}
      data-portfolio-card
    >
      <Link href={`/portofoliu/${item.slug}`} className="block relative overflow-hidden rounded-3xl bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-2xl p-4 sm:p-8 md:p-12 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <MacbookMockup
            imageSrc={item.imageSrc}
            videoSrc={item.videoSrc}
            alt={item.title}
          />
        </div>
      </Link>

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 px-2">
        <div>
          <Link href={`/portofoliu/${item.slug}`} className="inline-flex items-center gap-2 group/title">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 transition-colors">
              {item.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover/title:text-blue-400 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
          </Link>
          <div className="flex items-center gap-3 mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-medium">
            <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
              {item.category}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span>{item.year}</span>
          </div>
        </div>

        <Link
          href={`/portofoliu/${item.slug}`}
          className="hidden sm:inline-flex items-center justify-center h-12 px-6 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-50 dark:hover:text-blue-600 transition-colors"
        >
          Case Study
        </Link>
      </div>
    </motion.div>
  );
}
