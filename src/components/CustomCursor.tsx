"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const portfolioCard = target.closest("[data-portfolio-card]");
      if (portfolioCard) {
        setIsHovering(true);
        setHoverText("Vezi");
        return;
      }

      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
        animate={{
          x: mousePosition.x - (isHovering && hoverText ? 40 : isHovering ? 6 : 6),
          y: mousePosition.y - (isHovering && hoverText ? 40 : isHovering ? 6 : 6),
          width: isHovering && hoverText ? 80 : isHovering ? 12 : 12,
          height: isHovering && hoverText ? 80 : isHovering ? 12 : 12,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <AnimatePresence>
          {isHovering && hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-black font-extrabold text-[14px] tracking-widest uppercase text-center"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Outer ring for subtle glow, following slightly behind */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 bg-white/5 rounded-full pointer-events-none z-[9998] backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
