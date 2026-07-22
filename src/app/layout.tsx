import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

import CookieBanner from "@/components/CookieBanner";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { PostHogProvider } from "@/components/PostHogProvider";
import PostHogPageView from "@/components/PostHogPageView";

const BackToTop = dynamic(() => import("@/components/BackToTop"));
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"));

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
  metadataBase: new URL("https://omnivo.ro"),
  title: "Omnivo | Servicii IT și Web Development",
  description: "Servicii IT complete și web development. Mentenanță și suport tehnic rapid și sigur.",
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
    title: "Omnivo | Servicii IT și Web Development",
    description: "Servicii IT și web development de cea mai înaltă calitate.",
    url: "https://omnivo.ro",
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
        "@id": "https://omnivo.ro/#organization",
        "name": "Omnivo",
        "image": "https://omnivo.ro/logo.png",
        "telephone": "+40770198233",
        "email": "office@omnivo.ro",
        "url": "https://omnivo.ro",
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
        "@id": "https://omnivo.ro/#sector2",
        "name": "Omnivo - Sector 2",
        "telephone": "+40770198233",
        "email": "office@omnivo.ro",
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

