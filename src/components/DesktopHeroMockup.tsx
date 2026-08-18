"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroMockup = dynamic(() => import("./HeroMockup"), { ssr: false });

export default function DesktopHeroMockup() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (!isDesktop) return null;
  
  return <HeroMockup />;
}
