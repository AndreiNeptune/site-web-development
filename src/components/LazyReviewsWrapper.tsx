"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// We load the actual Reviews component only on the client, and only when needed.
const Reviews = dynamic(() => import("@/components/Reviews"), { ssr: false });

export default function LazyReviewsWrapper() {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" } // Fetch the chunk 400px before the user scrolls to it
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[500px]">
      {isIntersecting && <Reviews />}
    </div>
  );
}
