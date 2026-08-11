import { MetadataRoute } from 'next'
import { portfolioData } from '@/data/portfolio'
import { articles } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omnivoweb.vercel.app';

  // Static routes
  const staticRoutes = [
    '',
    '/web-design',
    '/instalare-windows',
    '/contact',
    '/portofoliu',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Portfolio dynamic routes
  const portfolioRoutes = portfolioData.map((project) => ({
    url: `${baseUrl}/portofoliu/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog dynamic routes
  const blogRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes];
}
