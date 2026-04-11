export const dynamic = 'force-dynamic';
export const revalidate = 0;

import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { getAllPostSlugs } from '@/lib/wordpress'
import { bairros } from '@/lib/bairros-data'

/** Mesma regra de `generate-sitemap.js`: home com barra final; demais sem barra duplicada. */
function buildUrl(pathStr: string): string {
  const tail = pathStr.startsWith('/') ? pathStr : `/${pathStr}`
  const normalized = tail.replace(/\/+/g, '/')
  if (normalized === '/') {
    return `${SITE_URL}/`
  }
  return `${SITE_URL}${normalized}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: Array<{
    path: string
    changeFrequency: NonNullable<MetadataRoute.Sitemap[0]['changeFrequency']>
    priority: number
  }> = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/quem-somos', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/contato', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/localidades', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/servicos/portoes-automaticos', changeFrequency: 'monthly', priority: 0.88 },
    { path: '/servicos/escadas-manutencao', changeFrequency: 'monthly', priority: 0.88 },
    { path: '/servicos/estruturas-metalicas', changeFrequency: 'monthly', priority: 0.88 },
    { path: '/servicos/grades-seguranca', changeFrequency: 'monthly', priority: 0.88 },
    { path: '/termos', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/privacidade', changeFrequency: 'yearly', priority: 0.3 },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: buildUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  const postSlugs = await getAllPostSlugs()
  const blogEntries: MetadataRoute.Sitemap = postSlugs
    .filter((slug) => typeof slug === 'string' && slug.trim().length > 0)
    .map((slug) => ({
      url: buildUrl(`/blog/${slug.trim()}`),
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    }))

  const localidadeEntries: MetadataRoute.Sitemap = bairros.map((b) => ({
    url: buildUrl(`/localidades/${b.slug}`),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticEntries, ...blogEntries, ...localidadeEntries]
}
