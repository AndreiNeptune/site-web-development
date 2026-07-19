"use client";

import { useState, useMemo } from "react";
import { servicesData, badgeGuides } from "@/data/services";
import { Search, Laptop, Monitor, HelpCircle, Sparkles, X } from "lucide-react";
import Fuse from "fuse.js";
import Link from "next/link";

type CategoryType = "laptop" | "calculator" | "servicii-it";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<CategoryType>("laptop");
  const [searchQuery, setSearchQuery] = useState("");

  const tabConfigs = [
    { id: "laptop", label: "Reparații Laptop", icon: Laptop },
    { id: "calculator", label: "Reparații Calculatoare", icon: Monitor },
    { id: "servicii-it", label: "Servicii IT & Soluții", icon: HelpCircle },
  ];

  // Filter services based on active tab and search query
  const filteredServices = useMemo(() => {
    // Filter services belonging to the current category first
    const categoryServices = servicesData.filter((s) => s.category === activeTab);

    if (!searchQuery.trim()) {
      return categoryServices;
    }

    // Run fuzzy search on the selected category's services
    const categoryFuse = new Fuse(categoryServices, {
      keys: ["name", "description"],
      threshold: 0.4,
    });
    
    return categoryFuse.search(searchQuery).map((res) => res.item);
  }, [activeTab, searchQuery]);

  // Handler for badge clicks to filter search dynamically
  const handleBadgeClick = (text: string) => {
    // Extract a keyword from the badge for better search filtering
    let keyword = "";
    if (text.includes("Merge Greu")) keyword = "Optimizare";
    else if (text.includes("Erori")) keyword = "Reparare";
    else if (text.includes("Se Blochează")) keyword = "Pastă Termică";
    else if (text.includes("Nu Merg Jocurile")) keyword = "Placă Video";
    else if (text.includes("Ecrane Albastre")) keyword = "Diagnoză";
    else if (text.includes("Să fie mai rapid")) keyword = "Upgrade SSD";
    else keyword = text;

    setSearchQuery(keyword);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Badges Section for Quick Troubleshooting Guidance */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="w-4.5 h-4.5" /> Ghidaj Rapid Probleme
            </span>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Apasă pe oricare dintre problemele de mai jos pentru a filtra serviciile noastre care te pot ajuta instant:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {badgeGuides.map((badge, idx) => (
              <button
                key={idx}
                onClick={() => handleBadgeClick(badge.text)}
                className="text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                🔍 {badge.text}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3" id="laptop-repairs">
            Catalog Servicii
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4" id="pc-repairs">
            Ce servicii IT vă oferim?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            De la reparații electronice complexe de plăci de bază și microsudură, până la instalare sisteme de operare și upgrade-uri complete de performanță.
          </p>
        </div>

        {/* Tab Controls and Search Bar */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          {/* Tabs Selector */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categorii de Servicii">
            {tabConfigs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tab.id}-panel`}
                  onClick={() => {
                    setActiveTab(tab.id as CategoryType);
                    setSearchQuery(""); // Clear search when changing tabs
                  }}
                  className={`flex items-center gap-2 font-bold text-xs sm:text-sm px-4.5 py-3 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Fuzzy Search input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Caută un serviciu..."
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-slate-900 dark:text-white"
              aria-label="Caută în catalogul de servicii"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Șterge căutarea"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Tab Panel */}
        <div
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={activeTab}
          className="outline-none"
        >
          {filteredServices.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-900 rounded-xl p-5 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 text-base">
                      {service.name}
                    </h4>
                    {service.description && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900/50 flex justify-between items-center text-xs font-bold text-blue-600 dark:text-blue-400">
                    <span>Garanție Inclusă</span>
                    <Link href="/contact" className="hover:underline flex items-center gap-1">
                      Cere Preț &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-slate-50 dark:bg-slate-900/30 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl max-w-md mx-auto">
              <div className="text-slate-400 dark:text-slate-500 mb-3 flex justify-center">
                <Search className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Niciun serviciu găsit</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Nu am găsit rezultate pentru &ldquo;{searchQuery}&rdquo; în categoria selectată. Încearcă alte cuvinte cheie.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Resetează căutarea
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
