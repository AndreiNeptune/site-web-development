export type PortfolioCategory = "Toate" | "Medical & Beauty" | "Business & Imobiliare" | "E-commerce";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  year: number;
  imageSrc: string; // Placeholder for now
  videoSrc?: string; // Placeholder for now
  challenge: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl?: string;
  description: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    slug: "elysia-beauty-lounge",
    title: "Elysia Beauty Lounge",
    category: "Medical & Beauty",
    year: 2023,
    imageSrc: "/previews/elysia_beauty_lounge.png",
    videoSrc: "/previews/elysia_beauty_lounge.webp",
    challenge: "Clientul avea nevoie de o prezență online elegantă, care să reflecte serviciile premium ale salonului și să atragă clienți noi printr-o experiență vizuală impecabilă.",
    solution: "Am creat un website de prezentare cu un design luxos, folosind animații subtile și o paletă de culori rafinată. Am integrat un sistem LLM accessibility pentru a fi ușor de interacționat de către agenții AI.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    highlights: ["LLM Accessibility (llms.txt)", "High-fidelity assets", "Animații de tranziție avansate", "PostHog analytics"],
    liveUrl: "https://elysiabeautylounge.vercel.app/",
    description: "Website de prezentare luxos pentru un salon de înfrumusețare de top."
  },
  {
    slug: "clinica-dr-curt",
    title: "Clinica Dr. Curt",
    category: "Medical & Beauty",
    year: 2023,
    imageSrc: "/previews/clinica_drcurt.png",
    videoSrc: "/previews/clinica_drcurt_scroll.png",
    challenge: "O clinică medicală nouă avea nevoie de o platformă rapidă și de încredere, care să comunice profesionalism și să includă un blog pentru educarea pacienților.",
    solution: "Am dezvoltat o platformă web optimizată extrem de rapid, cu un design curat și sistem de management al conținutului pentru articolele medicale.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    highlights: ["Scor perfect Lighthouse", "Arhitectură de blog SEO-ready", "Autor crediting system"],
    liveUrl: "https://clinica-drcurt.vercel.app/",
    description: "Platformă medicală și blog cu performanțe maxime."
  },
  {
    slug: "emirav-beauty-studio",
    title: "Emirav Beauty Studio",
    category: "Medical & Beauty",
    year: 2023,
    imageSrc: "/previews/emirav_beauty_studio.png",
    videoSrc: "/previews/emirav_beauty_studio_scroll.png",
    challenge: "Salonul dorea un site modern, foarte rapid pe mobile și cu un design care să capteze atenția vizitatorilor instant.",
    solution: "Am implementat un design vibrant, folosind tehnici avansate de optimizare a performanței (module preload) pentru o experiență instantanee.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    highlights: ["Explicit modulepreload", "Optimizare extremă pe mobile", "UI dinamic"],
    liveUrl: "https://site-emiravbeautystudio.vercel.app/",
    description: "Studio de înfrumusețare cu un site ultrarapid și design modern."
  },
  {
    slug: "stomatology-blog",
    title: "Stomatology Blog",
    category: "Medical & Beauty",
    year: 2024,
    imageSrc: "/previews/stomatology_blog.png",
    videoSrc: "/previews/stomatology_blog.webp",
    challenge: "Un medic stomatolog dorea un blog educativ care să includă și content video direct pe site, integrat natural în experiența de lectură.",
    solution: "Am creat un blog cu custom video controls pentru mobil și overlay-uri personalizate de redare, asigurând o experiență multimedia fluidă.",
    technologies: ["Next.js", "Tailwind CSS", "Custom Video Player"],
    highlights: ["Custom play overlay pe mobile", "Video controls optimizate", "SEO medical avansat"],
    liveUrl: "https://site-stomatology-blog.vercel.app/",
    description: "Blog stomatologic cu integrare video custom și experiență de citire premium."
  },
  {
    slug: "hectar-expert",
    title: "Hectar Expert",
    category: "Business & Imobiliare",
    year: 2024,
    imageSrc: "/previews/hectar_expert.png",
    videoSrc: "/previews/hectar_expert.webp",
    challenge: "O agenție imobiliară agricolă avea nevoie de un dashboard de administrare clar și un layout orientat pe prezentarea suprafețelor extinse de teren.",
    solution: "Am optimizat layout-ul pentru dashboard-ul de admin și am creat un design sistematic pentru proprietăți, mărind scannabilitatea ofertelor.",
    technologies: ["Next.js", "Tailwind CSS", "React Admin"],
    highlights: ["Dashboard layout optimizat", "Sistem avansat de filtrare", "Design sistematic pentru oferte"],
    liveUrl: "https://hectarexpert.vercel.app/",
    description: "Platformă imobiliară agricolă cu dashboard custom."
  },
  {
    slug: "it-computer-service",
    title: "IT & Computer Service",
    category: "Business & Imobiliare",
    year: 2024,
    imageSrc: "/previews/it_computer_service.png",
    videoSrc: "/previews/it_computer_service.webp",
    challenge: "Un service IT dorea să atragă clienți prin transparență și servicii clare, având nevoie de un site tehnic dar accesibil.",
    solution: "Am implementat un design tech-focused, integrând PostHog pentru analytics și eliminând preconnect-urile inutile pentru un timp de încărcare redus.",
    technologies: ["Next.js", "Tailwind CSS", "PostHog Analytics"],
    highlights: ["Performanță optimizată", "Integrare PostHog curată", "Design tehnic și transparent"],
    liveUrl: "https://it-and-computer-service.vercel.app/",
    description: "Service IT cu prezență online performantă și analytics integrat."
  },
  {
    slug: "site-broderie",
    title: "Atelier Broderie",
    category: "E-commerce",
    year: 2024,
    imageSrc: "/previews/site_broderie.png",
    videoSrc: "/previews/site_broderie.webp",
    challenge: "Un atelier de broderie avea nevoie de un site tip e-commerce / catalog care să pună în valoare detaliile fine ale creațiilor lor textile.",
    solution: "Am pus accent pe vizual, generând asset-uri de înaltă calitate și integrându-le într-un layout care subliniază măiestria produselor.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: ["High-quality generated assets", "Galerie detaliată", "Focus pe micro-detalii"],
    liveUrl: "https://site-broderie.vercel.app/",
    description: "Catalog vizual pentru un atelier de broderie premium."
  },
  {
    slug: "electroalfa",
    title: "Electroalfa",
    category: "Business & Imobiliare",
    year: 2024,
    imageSrc: "/previews/electroalfa.png",
    videoSrc: "/previews/electroalfa.webp",
    challenge: "O companie corporate dorea o indexare avansată a paginilor și o căutare robustă pentru utilizatori, păstrând un aspect enterprise.",
    solution: "Am îmbunătățit semnificativ funcția de căutare și sistemul de page indexing, reparând problemele anterioare și adăugând un strat de stabilitate.",
    technologies: ["Next.js", "Algolia / Search", "Tailwind CSS"],
    highlights: ["Search and page indexing enhancement", "Design Enterprise", "Arhitectură solidă"],
    liveUrl: "https://electroalfa.vercel.app/",
    description: "Prezență corporate cu sistem avansat de indexare și căutare."
  },
  {
    slug: "alex-social-media",
    title: "Alex Social Media",
    category: "Business & Imobiliare",
    year: 2024,
    imageSrc: "/previews/alex_social_media.png",
    videoSrc: "/previews/alex_social_media_scroll.png",
    challenge: "Un expert în social media avea nevoie de un landing page care să vândă agresiv dar estetic, incluzând un README tehnic high fidelity.",
    solution: "Am creat un site dinamic, orientat spre conversie, cu o prezentare detaliată și documentație high fidelity.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: ["High fidelity README & Docs", "Design orientat pe conversie", "Animații smooth"],
    liveUrl: "https://site-alex-social-media.vercel.app/",
    description: "Landing page pentru servicii de social media management."
  }
];
