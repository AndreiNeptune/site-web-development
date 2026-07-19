import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galerie Foto | Service Laptop și Calculatoare București",
  description: "Urmăriți poze cu reparațiile noastre din service-ul nostru IT. Exemple de curățare praf, reparații plăci de bază și asamblare sisteme.",
};

export default function GaleriePage() {
  return (
    <div className="min-h-screen">
      <Gallery />
    </div>
  );
}
