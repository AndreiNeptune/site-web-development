"use client";

import { useState, useEffect, useCallback } from "react";
import { reviewsData } from "@/data/reviews";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  }, []);

  // Auto slide testimonial every 7 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 7000);
    return () => clearInterval(timer);
  }, [handleNext]);

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const activeReview = reviewsData[activeIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Recenzii Clienți
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Ce spun clienții noștri?
          </h3>
          <p className="text-slate-600 dark:text-zinc-300 text-sm max-w-xl mx-auto">
            Părerile clienților care ne-au trecut pragul sau care au apelat la serviciile noastre la domiciliu în București și Ilfov.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-900 rounded-3xl p-8 sm:p-12 min-h-[300px] flex flex-col justify-between shadow-sm overflow-hidden">
          
          {/* Quote icon watermark */}
          <div className="absolute top-6 left-6 text-blue-500/10 dark:text-blue-500/5 select-none pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 my-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Star Ratings */}
                <div className="flex gap-1 justify-center sm:justify-start">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic text-center sm:text-left">
                  &ldquo;{activeReview.text}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 text-center sm:text-left">
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                      {activeReview.author}
                    </h4>
                    {activeReview.device && (
                      <p className="text-xs text-slate-600 dark:text-zinc-300 font-medium">
                        Serviciu: {activeReview.device}
                      </p>
                    )}
                  </div>
                  {activeReview.date && (
                    <span className="text-xs text-slate-600 dark:text-zinc-300 font-semibold bg-white dark:bg-slate-950 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-900">
                      {activeReview.date}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-200/30 dark:border-slate-800/30">
            {/* Dots indicators */}
            <div className="flex gap-1.5">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className="p-3 -mx-2 -my-3 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
                  aria-label={`Mergi la mărturia ${idx + 1}`}
                >
                  <div className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? "bg-blue-600 dark:bg-blue-400 w-6"
                      : "bg-slate-300 dark:bg-slate-700 w-2.5"
                  }`} />
                </button>
              ))}
            </div>

            {/* Left/Right Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
                aria-label="Recenzia precedentă"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
                aria-label="Recenzia următoare"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
