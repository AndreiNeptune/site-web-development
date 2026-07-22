"use client";

import { useState } from "react";
import WebDesignPackages from "@/components/WebDesignPackages";
import PricingCalculator from "@/components/PricingCalculator";

export type PackageType = "basic" | "pro" | "custom";

export default function WebDesignPricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("basic");

  return (
    <>
      <WebDesignPackages 
        selectedPackage={selectedPackage} 
        onSelectPackage={setSelectedPackage} 
      />
      <div id="calculator-section">
        <PricingCalculator selectedPackage={selectedPackage} />
      </div>
    </>
  );
}
