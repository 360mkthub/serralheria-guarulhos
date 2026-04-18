import type { MetadataRoute } from 'next'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { SITE_URL } from '@/lib/site'
import { getAllPostSlugs } from '@/lib/wordpress'
import { bairros } from '@/lib/bairros-data'

export const revalidate = 86400 // revalidate at most once per day

/** Mesma regra de `generate-sitemap.js`: home com barra final; demais sem barra duplicada. */
function buildUrl(pathStr: string): string {
  const tail = pathStr.startsWith('/') ? pathStr : `/${pathStr}`
  const normalized = tail.replace(/\/+/g, '/')
  if (normalized === '/') {
    return `${SITE_URL}/`
  }
  return `${SITE_URL}${normalized}`
}

function toAppRoute(filePath: string): string {
  const normalized = filePath.replace(/\\/g, '/')
  const withoutAppPrefix = normalized.startsWith('app/') ? normalized.slice(4) : normalized
  const withoutPageFile = withoutAppPrefix.endsWith('/page.tsx')
    ? withoutAppPrefix.slice(0, -'/page.tsx'.length)
    : withoutAppPrefix

  if (!withoutPageFile || withoutPageFile === 'page.tsx') return '/'
  return `/${withoutPageFile}`
}

function isStaticPageRoute(route: string): boolean {
  return !route.includes('[') && !route.startsWith('/api')
}

async function collectPageFiles(dirAbsPath: string, dirRelative = 'app'): Promise<string[]> {
  const entries = await readdir(dirAbsPath, { withFileTypes: true })
  const files: string[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('_')) continue
    const abs = path.join(dirAbsPath, entry.name)
    const rel = `${dirRelative}/${entry.name}`

    if (entry.isDirectory()) {
      files.push(...(await collectPageFiles(abs, rel)))
      continue
    }

    if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(rel)
    }
  }

  return files
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageFiles = await collectPageFiles(path.join(process.cwd(), 'app'))
  const staticRoutes = Array.from(
    new Set(
      pageFiles
        .map(toAppRoute)
        .filter(isStaticPageRoute)
    )
  )

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((routePath) => {
    const isHome = routePath === '/'
    const isLegal = routePath === '/termos' || routePath === '/privacidade'
    const isService = routePath.startsWith('/servicos/')
    const isBlog = routePath === '/blog'
    const isLocalidades = routePath === '/localidades'

    let priority = 0.8
    let changeFrequency: NonNullable<MetadataRoute.Sitemap[0]['changeFrequency']> = 'monthly'

    if (isHome) {
      priority = 1
      changeFrequency = 'weekly'
    } else if (isBlog || isLocalidades) {
      priority = 0.9
      changeFrequency = 'weekly'
    } else if (isService) {
      priority = 0.88
      changeFrequency = 'monthly'
    } else if (isLegal) {
      priority = 0.3
      changeFrequency = 'yearly'
    }

    return {
      url: buildUrl(routePath),
      lastModified: new Date(),
      changeFrequency,
      priority,
    }
  })

  const postSlugs = await getAllPostSlugs()
  const blogEntries: MetadataRoute.Sitemap = postSlugs
    .filter((slug) => typeof slug === 'string' && slug.trim().length > 0)
    .map((slug) => ({
      url: buildUrl(`/blog/${slug.trim()}`),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    }))

  const localidadeEntries: MetadataRoute.Sitemap = bairros.map((b) => ({
    url: buildUrl(`/localidades/${b.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const allEntriesByUrl = new Map<string, MetadataRoute.Sitemap[number]>()
  for (const entry of [...staticEntries, ...blogEntries, ...localidadeEntries]) {
    allEntriesByUrl.set(entry.url, entry)
  }

  return Array.from(allEntriesByUrl.values())
}
