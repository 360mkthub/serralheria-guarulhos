import type { MetadataRoute } from 'next'
import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { bairros } from '@/lib/bairros-data'
import { fetchAllPostSlugsFromGraphql } from '@/lib/wordpress'

const BASE_URL = 'https://serralheriaemguarulhos.com'

/** Regenera o sitemap a cada hora (slugs do WordPress e contagem de rotas). */
export const revalidate = 3600

/**
 * Concatenação segura: `${BASE_URL}${path.startsWith('/') ? path : '/' + path}`.
 * Home (`/` ou `''`) → exatamente `https://serralheriaemguarulhos.com/`.
 * Colapsa barras duplicadas no caminho (evita `//` após o host).
 */
function buildUrl(path: string): string {
  const tail = path.startsWith('/') ? path : `/${path}`
  const normalized = tail.replace(/\/+/g, '/')
  if (normalized === '/') {
    return `${BASE_URL}/`
  }
  return `${BASE_URL}${normalized}`
}

function isValidSitemapUrl(url: unknown): boolean {
  if (url == null || typeof url !== 'string') return false
  const trimmed = url.trim()
  if (!trimmed) return false
  try {
    const parsed = new URL(trimmed)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false
    return true
  } catch {
    return false
  }
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
    url: buildUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }))

  let servicos: MetadataRoute.Sitemap = []
  try {
    servicos = servicoSlugsFromAppDir().map((slug) => ({
      url: buildUrl(`/servicos/${slug}`),
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
      url: buildUrl(`/localidades/${b.slug}`),
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
    postsBlog = wpSlugs
      .filter((slug) => typeof slug === 'string' && slug.trim().length > 0)
      .map((slug) => ({
        url: buildUrl(`/blog/${slug.trim()}`),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.65,
      }))
  } catch (err) {
    console.error('[sitemap] Falha ao buscar slugs de posts no WordPress — sitemap servido sem URLs do blog:', err)
  }

  const combined: MetadataRoute.Sitemap = [...estaticas, ...servicos, ...localidades, ...postsBlog]
  return combined.filter((entry) => isValidSitemapUrl(entry.url))
}
