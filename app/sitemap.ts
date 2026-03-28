import type { MetadataRoute } from 'next'
import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { bairros } from '@/lib/bairros-data'
import { SITE_URL } from '@/lib/site'
import { fetchAllPostSlugsFromGraphql } from '@/lib/wordpress'

/** Regenera o sitemap a cada hora (slugs do WordPress e contagem de rotas). */
export const revalidate = 3600

function absoluteUrl(path: string): string {
  if (path === '/' || path === '') return `${SITE_URL}/`
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${p.endsWith('/') ? p : `${p}/`}`
}

function servicoSlugsFromAppDir(): string[] {
  const base = join(process.cwd(), 'app', 'servicos')
  if (!existsSync(base)) return []
  return readdirSync(base, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(base, d.name, 'page.tsx')))
    .map((d) => d.name)
    .sort()
}

const ROTAS_ESTATICAS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/quem-somos', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contato', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/localidades', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/termos', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacidade', changeFrequency: 'yearly', priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const estaticas: MetadataRoute.Sitemap = ROTAS_ESTATICAS.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }))

  let servicos: MetadataRoute.Sitemap = []
  try {
    servicos = servicoSlugsFromAppDir().map((slug) => ({
      url: absoluteUrl(`/servicos/${slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.88,
    }))
  } catch (err) {
    console.error('[sitemap] Falha ao montar URLs de serviços (filesystem):', err)
  }

  let localidades: MetadataRoute.Sitemap = []
  try {
    localidades = bairros.map((b) => ({
      url: absoluteUrl(`/localidades/${b.slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  } catch (err) {
    console.error('[sitemap] Falha ao montar URLs de localidades:', err)
  }

  let postsBlog: MetadataRoute.Sitemap = []
  try {
    const wpSlugs = await fetchAllPostSlugsFromGraphql()
    postsBlog = wpSlugs.map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    }))
  } catch (err) {
    console.error('[sitemap] Falha ao buscar slugs de posts no WordPress — sitemap servido sem URLs do blog:', err)
  }

  return [...estaticas, ...servicos, ...localidades, ...postsBlog]
}
