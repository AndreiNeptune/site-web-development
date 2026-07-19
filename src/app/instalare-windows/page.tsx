import { Metadata } from "next";
import WindowsHome from "@/components/WindowsHome";

export const metadata: Metadata = {
  title: "Instalare Windows la Domiciliu București",
  description: "Instalare Windows profesională la domiciliu în București. Include drivere, antivirus, optimizare sistem și back-up de date.",
};

export default function InstalareWindowsPage() {
  return (
    <div className="min-h-screen">
      <WindowsHome />
    </div>
  );
}
