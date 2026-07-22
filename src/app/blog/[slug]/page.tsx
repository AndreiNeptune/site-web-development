import { articles } from "@/data/blog";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Omnivo`,
    description: article.desc,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen pt-14 md:pt-16 bg-slate-50 dark:bg-slate-950">
      {/* Article Hero Header */}
      <section className={`relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${article.gradient} border-b border-slate-200 dark:border-slate-800 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Acasă</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-lg">
              {article.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 bg-white/60 dark:bg-slate-900/60 px-3 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-800/50 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                {article.author.charAt(0)}
              </div>
              <span className="font-semibold text-slate-700 dark:text-slate-300">{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Article Text */}
          <article className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
              {article.content.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                        {block.text}
                      </p>
                    );
                  case "heading":
                    return (
                      <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4 tracking-tight">
                        {block.text}
                      </h2>
                    );
                  case "quote":
                    return (
                      <blockquote key={idx} className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 py-1 my-6 italic text-slate-700 dark:text-slate-200 bg-blue-50/50 dark:bg-blue-950/20 rounded-r-xl">
                        <p className="font-medium">{block.text}</p>
                      </blockquote>
                    );
                  case "list":
                    return (
                      <ul key={idx} className="space-y-3 pl-2 my-6">
                        {block.items?.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Înapoi la Blog
              </Link>
            </div>
          </article>

          {/* Sidebar CTA & Related Posts */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 dark:from-slate-950 dark:to-indigo-950 border border-slate-800 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold mb-4 relative z-10">Ai nevoie de ajutor?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 relative z-10">
                Fie că vrei un site rapid cu design de ultimă generație sau o instalare curată de Windows optimizată pentru gaming, echipa Omnivo este gata să te ajute.
              </p>
              <Link 
                href="/contact" 
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
              >
                Cere o Ofertă <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related Articles */}
            {otherArticles.length > 0 && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-4 pb-3 border-b border-slate-100 dark:border-slate-850">
                  Alte articole interesante
                </h3>
                <div className="space-y-4">
                  {otherArticles.map((art, idx) => (
                    <Link 
                      key={idx} 
                      href={`/blog/${art.slug}`}
                      className="group block"
                    >
                      <h4 className="font-bold text-sm text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1">
                        {art.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                        {art.date} • {art.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>
      </section>
    </main>
  );
}
