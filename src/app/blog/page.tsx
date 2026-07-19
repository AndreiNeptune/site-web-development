import { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog IT | Service Laptop și Calculatoare București",
  description: "Articole educaționale despre mentenanță laptop, soluționare erori Windows și sfaturi pentru un calculator mai rapid.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Blog />
    </div>
  );
}
