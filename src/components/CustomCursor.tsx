"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  // Use motion values for raw mouse coordinates (bypasses React state updates for max performance)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the inner dot/pill
  const cursorX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.5 });
  const cursorY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.5 });

  // Slower springs for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.8 });
  const ringY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!hasMoved) setHasMoved(true);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

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

    const handleMouseLeave = (e: MouseEvent) => {
      // Only hide if the mouse actually left the browser window
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    // Passive listener for better scrolling performance
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isVisible, hasMoved, mouseX, mouseY]);

  if (!hasMoved || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="absolute bg-indigo-500 rounded-full flex items-center justify-center overflow-hidden shadow-lg shadow-indigo-500/20 origin-center"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ width: 12, height: 12, opacity: 0 }}
          animate={{
            width: isHovering && hoverText ? 80 : isHovering ? 24 : 12,
            height: isHovering && hoverText ? 80 : isHovering ? 24 : 12,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <AnimatePresence>
            {isHovering && hoverText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1 }}
                className="text-white font-extrabold text-[14px] tracking-widest text-center"
              >
                {hoverText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      
      {/* Outer ring for subtle glow, following slightly behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="absolute w-10 h-10 border border-indigo-400/50 bg-indigo-500/10 rounded-full backdrop-blur-[2px] origin-center"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ opacity: 0 }}
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </motion.div>
    </>
  );
}
