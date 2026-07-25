import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import MacbookMockup from "@/components/MacbookMockup";
import CustomCursor from "@/components/CustomCursor";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Proiect Inexistent | Portofoliu",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-blue-500/30 pb-32 overflow-x-hidden w-full">
      <CustomCursor />

      {/* Navigation */}
      <div className="pt-24 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <Link 
          href="/portofoliu" 
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Înapoi la Portofoliu
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {project.category}
            </span>
            <span className="text-zinc-400 dark:text-zinc-600">•</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">{project.year}</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>

        <div className="mt-12" data-portfolio-card>
          <MacbookMockup
            imageSrc={project.imageSrc}
            videoSrc={project.videoSrc}
            alt={`${project.title} Interface`}
          />
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto mt-20">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Column: Challenge & Solution */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-500 mb-4">
                Provocarea
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-green-600 dark:text-green-500 mb-4">
                Soluția Tehnică
              </h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Right Column: Tech & Highlights */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-500 mb-4">
                Tehnologii Utilizate
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-500 mb-4">
                Highlights (Key Features)
              </h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-8 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-50 dark:hover:text-blue-600 transition-colors"
          >
            Vizitează Site-ul Live
            <ExternalLink className="w-5 h-5" />
          </a>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto h-14 px-8 rounded-full bg-black/5 dark:bg-white/5 text-slate-900 dark:text-white border border-black/10 dark:border-white/10 font-bold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              Vezi Codul
              <Code className="w-5 h-5" />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
