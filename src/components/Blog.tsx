"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { articles } from "@/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Noutăți &amp; Sfaturi
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Articole și ghiduri utile
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Descoperă secretele unui site web de succes, importanța optimizării SEO și de ce o mentenanță corectă a sistemului de operare îți salvează timp și bani.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <Link key={idx} href={`/blog/${art.slug}`} className="block h-full">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-900 transition-all group h-full cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-lg">
                      {art.category}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {art.title}
                  </h4>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {art.author}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    Citește
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
