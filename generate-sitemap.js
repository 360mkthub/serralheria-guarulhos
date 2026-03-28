/**
 * Gera public/sitemap.xml estaticamente (rodar localmente antes do deploy).
 * Uso: node generate-sitemap.js
 *
 * Opcional: NEXT_PUBLIC_WORDPRESS_API_URL apontando para o GraphQL do WP.
 */

const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://serralheriaemguarulhos.com'
const WORDPRESS_GRAPHQL_FALLBACK = 'https://api.serralheriaemguarulhos.com/graphql'

const QUERY_POST_SLUGS_PAGE = `
  query GetPostSlugsPage($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
      }
    }
  }
`

function getWordpressGraphqlUrl() {
  const env = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.trim()
  return env && env.length > 0 ? env : WORDPRESS_GRAPHQL_FALLBACK
}

/** Mesma regra do antigo app/sitemap.ts: Home termina em /; demais sem barra duplicada. */
function buildUrl(pathStr) {
  const tail = pathStr.startsWith('/') ? pathStr : `/${pathStr}`
  const normalized = tail.replace(/\/+/g, '/')
  if (normalized === '/') {
    return `${BASE_URL}/`
  }
  return `${BASE_URL}${normalized}`
}

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function getBairroSlugsFromSource() {
  const filePath = path.join(__dirname, 'lib', 'bairros-data.ts')
  const src = fs.readFileSync(filePath, 'utf8')
  const matches = [...src.matchAll(/createBairro\([^,]+,\s*'([^']+)'/g)]
  return [...new Set(matches.map((m) => m[1]))]
}

function getServicoSlugsFromApp() {
  const base = path.join(__dirname, 'app', 'servicos')
  if (!fs.existsSync(base)) return []
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(base, d.name, 'page.tsx')))
    .map((d) => d.name)
    .sort()
}

async function fetchAllPostSlugsFromGraphql() {
  const graphqlUrl = getWordpressGraphqlUrl()
  const slugs = []
  let after = null
  const pageSize = 100

  try {
    for (;;) {
      const res = await fetch(graphqlUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: QUERY_POST_SLUGS_PAGE,
          variables: { first: pageSize, after },
        }),
      })

      let json
      try {
        json = await res.json()
      } catch (e) {
        console.error('[generate-sitemap] Resposta GraphQL não é JSON:', graphqlUrl, e)
        break
      }

      if (json.errors?.length) {
        console.error('[generate-sitemap] GraphQL errors:', json.errors)
        break
      }
      if (!res.ok) {
        console.error('[generate-sitemap] HTTP', res.status, graphqlUrl)
        break
      }

      const connection = json.data?.posts
      if (!connection) break

      for (const node of connection.nodes || []) {
        if (node?.slug) slugs.push(node.slug)
      }

      if (!connection.pageInfo?.hasNextPage || !connection.pageInfo?.endCursor) break
      after = connection.pageInfo.endCursor
    }
  } catch (err) {
    console.error('[generate-sitemap] Falha ao buscar slugs do WordPress:', err)
  }

  return slugs
}

const ROTAS_ESTATICAS = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/quem-somos', changefreq: 'monthly', priority: '0.85' },
  { path: '/contato', changefreq: 'monthly', priority: '0.85' },
  { path: '/localidades', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.85' },
  { path: '/termos', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacidade', changefreq: 'yearly', priority: '0.3' },
]

function isValidHttpUrl(u) {
  if (!u || typeof u !== 'string' || !u.trim()) return false
  try {
    const parsed = new URL(u.trim())
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    return false
  }
}

async function main() {
  const now = new Date().toISOString()

  const entries = []

  for (const { path: p, changefreq, priority } of ROTAS_ESTATICAS) {
    const loc = buildUrl(p)
    if (isValidHttpUrl(loc)) {
      entries.push({ loc, changefreq, priority })
    }
  }

  for (const slug of getServicoSlugsFromApp()) {
    const loc = buildUrl(`/servicos/${slug}`)
    if (isValidHttpUrl(loc)) {
      entries.push({ loc, changefreq: 'monthly', priority: '0.88' })
    }
  }

  for (const slug of getBairroSlugsFromSource()) {
    const loc = buildUrl(`/localidades/${slug}`)
    if (isValidHttpUrl(loc)) {
      entries.push({ loc, changefreq: 'monthly', priority: '0.75' })
    }
  }

  const wpSlugs = await fetchAllPostSlugsFromGraphql()
  for (const slug of wpSlugs) {
    if (typeof slug !== 'string' || !slug.trim()) continue
    const loc = buildUrl(`/blog/${slug.trim()}`)
    if (isValidHttpUrl(loc)) {
      entries.push({ loc, changefreq: 'weekly', priority: '0.65' })
    }
  }

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ]

  for (const { loc, changefreq, priority } of entries) {
    lines.push('  <url>')
    lines.push(`    <loc>${escapeXml(loc)}</loc>`)
    lines.push(`    <lastmod>${now}</lastmod>`)
    lines.push(`    <changefreq>${changefreq}</changefreq>`)
    lines.push(`    <priority>${priority}</priority>`)
    lines.push('  </url>')
  }

  lines.push('</urlset>')
  lines.push('')

  const outDir = path.join(__dirname, 'public')
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  const outFile = path.join(outDir, 'sitemap.xml')
  fs.writeFileSync(outFile, lines.join('\n'), 'utf8')
  console.log(`[generate-sitemap] OK: ${outFile} (${entries.length} URLs)`)
}

main().catch((err) => {
  console.error('[generate-sitemap] Erro fatal:', err)
  process.exit(1)
})
