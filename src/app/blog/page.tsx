import { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog | Omnivo - Web Design & Instalare Windows",
  description: "Articole educaționale despre crearea unui site web de succes, optimizare SEO, și importanța mentenanței sistemului tău Windows.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Blog />
    </div>
  );
}
