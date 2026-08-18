import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), { ssr: false });
const StickyMobileCTA = dynamic(() => import("@/components/StickyMobileCTA"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), { ssr: false });

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnivoweb.vercel.app"),
  title: "Omnivo | Creare Site Web, Web Design & Servicii IT București",
  description: "Agenție de web design specializată în creare site-uri de prezentare, magazine online și aplicații web ultrarapide. Optimizare SEO și design premium.",
  alternates: {
    canonical: 'https://omnivoweb.vercel.app',
  },
  keywords: [
    "Servicii IT",
    "Web Development",
    "Instalare Windows la domiciliu",
    "Suport tehnic",
    "Creare site-uri web",
    "Mentenanță IT"
  ],
  authors: [{ name: "Omnivo" }],
  openGraph: {
    title: "Omnivo | Creare Site Web, Web Design & Servicii IT",
    description: "Agenție de web design specializată în creare site-uri de prezentare, magazine online și aplicații web.",
    url: "https://omnivoweb.vercel.app",
    siteName: "Omnivo",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnivo | Servicii IT și Web Development",
    description: "Servicii IT și web development de cea mai înaltă calitate.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import SmoothScrolling from "@/components/SmoothScrolling";
import { PostHogProvider } from "@/components/PostHogProvider";
import PostHogPageView from "@/components/PostHogPageView";
import GTMProvider from "@/components/GTMProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://omnivoweb.vercel.app/#organization",
        "name": "Omnivo",
        "image": "https://omnivoweb.vercel.app/logo.png",
        "telephone": "+40750208299",
        "email": "omnivoweb@gmail.com",
        "url": "https://omnivoweb.vercel.app",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bd. C-tin Brâncoveanu nr. 15, Bl. B17, Sc. 2, Apt. 30, parter",
          "addressLocality": "București",
          "addressRegion": "Sector 4",
          "postalCode": "041381",
          "addressCountry": "RO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.388484,
          "longitude": 26.115201
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:30"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://omnivoweb.vercel.app/#sector2",
        "name": "Omnivo - Sector 2",
        "telephone": "+40750208299",
        "email": "omnivoweb@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bulevardul Chișinău nr. 12",
          "addressLocality": "București",
          "addressRegion": "Sector 2",
          "postalCode": "022152",
          "addressCountry": "RO"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:30"
        }
      },
      {
        "@type": "Service",
        "name": "Instalare Windows la Domiciliu",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Omnivo"
        },
        "areaServed": "București și Ilfov",
        "description": "Instalare profesională de Windows (10, 11 etc.) la domiciliu în București și Ilfov. Include instalare drivere, programe esențiale, antivirus, optimizare sistem și backup de date.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "RON",
          "price": "200",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "200",
            "priceCurrency": "RON",
            "valueAddedTaxIncluded": "true"
          }
        }
      }
    ]
  };

  return (
    <html
      lang="ro"
      className={cn("h-full bg-white dark:bg-slate-950 antialiased", outfit.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans">
        <SmoothScrolling>
          <PostHogProvider>
            <GTMProvider />
            <PostHogPageView />
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <div className="relative flex min-h-screen flex-col bg-white dark:bg-slate-950">
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
              <CookieBanner />
              <BackToTop />
              <StickyMobileCTA />
              <WhatsAppWidget />
            </ThemeProvider>
          </PostHogProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}

