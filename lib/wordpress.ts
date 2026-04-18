import { cache } from 'react'

const WORDPRESS_GRAPHQL_URL_FALLBACK = 'https://api.serralheriaemguarulhos.com/graphql'
const WORDPRESS_GRAPHQL_TIMEOUT_MS = 8000

/** Endpoint GraphQL do WordPress (Headless). Configure `NEXT_PUBLIC_WORDPRESS_API_URL` no deploy. */
export function getWordpressGraphqlUrl(): string {
  return 'https://api.serralheriaemguarulhos.com/graphql'
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

async function graphqlFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const url = getWordpressGraphqlUrl()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), WORDPRESS_GRAPHQL_TIMEOUT_MS)

  let response: Response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    })
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      console.error('[WordPress GraphQL] Timeout:', WORDPRESS_GRAPHQL_TIMEOUT_MS, url)
      throw new Error(`GraphQL timeout após ${WORDPRESS_GRAPHQL_TIMEOUT_MS}ms`)
    }
    throw err
  } finally {
    clearTimeout(timeout)
  }

  let json: { data?: T; errors?: { message?: string }[] }
  try {
    json = await response.json()
  } catch (err) {
    console.error('[WordPress GraphQL] Resposta não é JSON:', response.status, url, err)
    throw new Error(`GraphQL: resposta inválida (HTTP ${response.status})`)
  }

  if (json.errors?.length) {
    console.error('GraphQL errors:', json.errors)
    throw new Error(json.errors[0]?.message || 'GraphQL error')
  }

  if (!response.ok) {
    console.error('[WordPress GraphQL] HTTP', response.status, url, json)
    throw new Error(`GraphQL HTTP ${response.status}`)
  }

  return json.data as T
}

const QUERY_POSTS = `
  query GetPosts($first: Int!) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        databaseId
        title
        slug
        excerpt
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        seo {
          title
          description
          openGraph {
            title
            description
          }
        }
      }
    }
  }
`

const QUERY_POST_BY_SLUG = `
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
      title
      slug
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      seo {
        title
        description
        openGraph {
          title
          description
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
          description
        }
      }
    }
  }
`

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

const QUERY_POST_DATABASE_ID = `
  query GetPostDatabaseId($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
    }
  }
`

const QUERY_RELATED_POSTS = `
  query GetRelatedPosts($first: Int!, $notIn: [ID]) {
    posts(first: $first, where: { notIn: $notIn, orderby: { field: DATE, order: DESC } }) {
      nodes {
        databaseId
        title
        slug
        excerpt
        date
      }
    }
  }
`

function mapFeaturedImage(node: {
  featuredImage?: { node?: { sourceUrl?: string | null; altText?: string | null } | null } | null
}) {
  return node.featuredImage?.node
    ? {
        node: {
          sourceUrl: node.featuredImage.node.sourceUrl ?? '',
          altText: node.featuredImage.node.altText ?? ''
        }
      }
    : null
}

function mapSeo(seo: {
  title?: string | null
  description?: string | null
  openGraph?: { title?: string | null; description?: string | null } | null
} | null) {
  if (!seo) return null
  return {
    title: seo.title ?? null,
    description: seo.description ?? null,
    openGraph: seo.openGraph
      ? {
          title: seo.openGraph.title ?? null,
          description: seo.openGraph.description ?? null
        }
      : null
  }
}

export async function getPosts(perPage = 10) {
  try {
    const data = await graphqlFetch<{
      posts?: { nodes: Array<{
        databaseId: number
        title?: string | null
        slug?: string | null
        excerpt?: string | null
        date?: string | null
        content?: string | null
        featuredImage?: { node?: { sourceUrl?: string | null; altText?: string | null } | null } | null
        seo?: {
          title?: string | null
          description?: string | null
          openGraph?: { title?: string | null; description?: string | null } | null
        } | null
      }> }
    }>(QUERY_POSTS, { first: perPage })

    const nodes = data.posts?.nodes ?? []
    return nodes.map((node) => ({
      id: node.databaseId,
      title: node.title ?? '',
      slug: node.slug ?? '',
      excerpt: stripHtml(node.excerpt ?? ''),
      date: node.date ?? '',
      content: node.content ?? '',
      featuredImage: mapFeaturedImage(node),
      seo: mapSeo(node.seo ?? null)
    }))
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const data = await graphqlFetch<{
      post?: {
        databaseId: number
        title?: string | null
        slug?: string | null
        excerpt?: string | null
        content?: string | null
        date?: string | null
        featuredImage?: { node?: { sourceUrl?: string | null; altText?: string | null } | null } | null
        seo?: {
          title?: string | null
          description?: string | null
          openGraph?: { title?: string | null; description?: string | null } | null
        } | null
        categories?: { nodes: Array<{ name?: string | null; slug?: string | null }> } | null
        tags?: { nodes: Array<{ name?: string | null; slug?: string | null }> } | null
        author?: { node?: { name?: string | null; description?: string | null } | null } | null
      } | null
    }>(QUERY_POST_BY_SLUG, { slug })

    const post = data.post
    if (!post) return null

    return {
      id: post.databaseId,
      title: post.title ?? '',
      slug: post.slug ?? '',
      excerpt: stripHtml(post.excerpt ?? ''),
      content: post.content ?? '',
      date: post.date ?? '',
      featuredImage: mapFeaturedImage(post),
      seo: mapSeo(post.seo ?? null),
      categories: post.categories ?? null,
      tags: post.tags ?? null,
      author: post.author ?? null
    }
  } catch (error) {
    console.error('Erro ao buscar post por slug:', error)
    return null
  }
}

/** Mesma origem que `getPostBySlug`, com deduplicação por slug dentro do mesmo request (metadata + página). */
export const getPostBySlugCached = cache((slug: string) => getPostBySlug(slug))

type PostSlugsPageData = {
  posts?: {
    pageInfo?: { hasNextPage?: boolean | null; endCursor?: string | null }
    nodes: Array<{ slug?: string | null }>
  }
}

/** Busca todos os slugs de posts via GraphQL. Em falha de rede/CMS, lança (útil para try/catch no sitemap). */
export async function fetchAllPostSlugsFromGraphql(): Promise<string[]> {
  const slugs: string[] = []
  let after: string | null = null
  const pageSize = 100

  for (;;) {
    const pageData: PostSlugsPageData = await graphqlFetch<PostSlugsPageData>(
      QUERY_POST_SLUGS_PAGE,
      { first: pageSize, after }
    )

    const connection = pageData.posts
    if (!connection) break

    for (const node of connection.nodes) {
      if (node.slug) slugs.push(node.slug)
    }

    if (!connection.pageInfo?.hasNextPage || !connection.pageInfo.endCursor) break
    after = connection.pageInfo.endCursor
  }

  return slugs
}

export async function getAllPostSlugs() {
  try {
    return await fetchAllPostSlugsFromGraphql()
  } catch (error) {
    console.error('Erro ao buscar slugs:', error)
    return []
  }
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3) {
  try {
    let excludeId: number | null = null
    try {
      const idData = await graphqlFetch<{ post?: { databaseId?: number | null } | null }>(
        QUERY_POST_DATABASE_ID,
        { slug: currentSlug }
      )
      const id = idData.post?.databaseId
      excludeId = typeof id === 'number' ? id : null
    } catch {
      excludeId = null
    }

    const notIn = excludeId != null ? [String(excludeId)] : []
    const fetchFirst = excludeId != null ? limit : limit + 25

    const data = await graphqlFetch<{
      posts?: {
        nodes: Array<{
          databaseId: number
          title?: string | null
          slug?: string | null
          excerpt?: string | null
          date?: string | null
        }>
      }
    }>(QUERY_RELATED_POSTS, { first: fetchFirst, notIn })

    let nodes = data.posts?.nodes ?? []
    if (excludeId == null) {
      nodes = nodes.filter((n) => n.slug !== currentSlug)
    }
    nodes = nodes.slice(0, limit)

    return nodes.map((node) => ({
      id: node.databaseId,
      title: node.title ?? '',
      slug: node.slug ?? '',
      excerpt: stripHtml(node.excerpt ?? ''),
      date: node.date ?? ''
    }))
  } catch (error) {
    console.error('Erro ao buscar posts relacionados:', error)
    return []
  }
}
