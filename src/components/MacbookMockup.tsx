"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PlayCircle } from "lucide-react";

interface MacbookMockupProps {
  imageSrc: string;
  videoSrc?: string;
  alt: string;
}

export default function MacbookMockup({ imageSrc, videoSrc, alt }: MacbookMockupProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-5xl mx-auto group perspective"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Screen Container */}
      <div className="relative aspect-[16/10] bg-[#1a1a1a] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl border-4 sm:border-8 border-[#2c2c2c] p-1 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-[#3a3a3a] group-hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)]">
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-black overflow-hidden rounded-sm sm:rounded-md">
          {/* Static Image */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered && videoSrc ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={imageSrc}
              alt={alt}
              fill
              unoptimized
              className="object-cover object-top"
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            />
          </div>

          {/* Hover Video / Animated Preview */}
          {videoSrc && (
            <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
              {videoSrc.endsWith('.webp') || videoSrc.endsWith('.gif') ? (
                <Image
                  src={videoSrc}
                  alt="Website Preview"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              ) : videoSrc.endsWith('.png') || videoSrc.endsWith('.jpg') ? (
                <Image
                  src={videoSrc}
                  alt="Website Preview"
                  fill
                  unoptimized
                  className={`object-cover transition-all ease-linear ${isHovered ? "object-bottom duration-[15000ms]" : "object-top duration-0"}`}
                />
              ) : (
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>
          )}

          {/* Video Indicator (if it has video but not hovered) */}
          {videoSrc && !isHovered && (
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full p-2 text-white/80 border border-white/10 shadow-lg">
              <PlayCircle className="w-5 h-5" />
            </div>
          )}
        </div>
        
        {/* Webcam */}
        <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#0f0f0f] rounded-full border border-[#333]" />
          <div className="w-0.5 h-0.5 bg-green-500 rounded-full opacity-50" />
        </div>
        
        {/* Screen reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none rounded-sm sm:rounded-md mix-blend-overlay" />
      </div>
      
      {/* Laptop Base */}
      <div className="relative h-2 sm:h-4 md:h-5 bg-[#d4d4d8] dark:bg-[#3f3f46] rounded-b-lg sm:rounded-b-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] flex flex-col items-center">
        {/* Trackpad indentation */}
        <div className="absolute top-0 w-1/4 h-[2px] sm:h-1 bg-[#a1a1aa] dark:bg-[#27272a] rounded-b-md" />
        
        {/* Edge highlight */}
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.div>
  );
}
