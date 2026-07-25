"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, PortfolioCategory } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";

const categories: PortfolioCategory[] = ["Toate", "Medical & Beauty", "Business & Imobiliare", "E-commerce"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("Toate");

  const filteredProjects = portfolioData.filter((item) =>
    activeCategory === "Toate" ? true : item.category === activeCategory
  );

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors ${
              activeCategory === category
                ? "text-black"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((item, index) => {
            // Asymmetrical pattern: 1 large, 2 small, 1 large, etc.
            // Index 0: large (0 % 3 === 0)
            // Index 1: small (1 % 3 === 1)
            // Index 2: small (2 % 3 === 2)
            // Index 3: large (3 % 3 === 0)
            const isLarge = index % 3 === 0;

            return (
              <PortfolioCard
                key={item.slug}
                item={item}
                index={index}
                isLarge={isLarge}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center text-zinc-500 py-20">
          Nu am găsit proiecte în această categorie.
        </div>
      )}
    </div>
  );
}
