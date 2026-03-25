import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Banners from '@/components/Banners' 
import AuthorBox from '@/components/AuthorBox'
import RelatedLinks from '@/components/RelatedLinks'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getInternalLinksForSlug } from '@/lib/blog-internal-links'
import { getPostBySlug, getAllPostSlugs } from '@/lib/wordpress'

// CONFIGURAÇÃO DE ROTA DINÂMICA
// Permite que posts não gerados no build sejam buscados sob demanda
export const dynamicParams = true 

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug: string) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostBySlug(slug)
    if (!post) return { title: 'Post nao encontrado' }

    const description = post.seo?.metaDesc || post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || ''

    return {
      title: `${post.title} | Blog Serralheria em Guarulhos`,
      description,
      alternates: { canonical: post.seo?.canonical || `https://serralheriaemguarulhos.com/blog/${post.slug}/` },
      openGraph: {
        title: post.title,
        description,
        url: `https://serralheriaemguarulhos.com/blog/${post.slug}/`,
        type: 'article',
        locale: 'pt_BR',
        publishedTime: post.date,
        modifiedTime: post.modified,
        ...(post.featuredImage && { images: [{ url: post.featuredImage.node.sourceUrl }] }),
      },
    }
  } catch {
    return { title: 'Blog | Serralheria em Guarulhos' }
  }
}

interface Post {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  date: string
  modified: string
  featuredImage?: { node: { sourceUrl: string; altText: string } }
  author?: { node: { name: string; description: string } }
  categories?: { nodes: { name: string; slug: string }[] }
  tags?: { nodes: { name: string; slug: string }[] }
  seo?: { title: string; metaDesc: string; canonical: string; schema?: { raw: string }; breadcrumbs?: { text: string; url: string }[] }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post: Post | null = null

  try {
    post = await getPostBySlug(slug)
  } catch {
    // Will show not found
  }

  if (!post) notFound()

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: undefined },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://serralheriaemguarulhos.com/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://serralheriaemguarulhos.com/blog/${post.slug}/` },
    ],
  }

  const readingTime = Math.ceil((post.content || '').replace(/<[^>]*>/g, '').length / 200) || 1
  const internalLinks = getInternalLinksForSlug(slug)

  return (
    <div className="min-h-screen bg-white">
      {post.seo?.schema?.raw && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: post.seo.schema.raw }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <Banners.Top />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />

      <main className="section-padding">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />Voltar para o Blog
          </Link>

          {post.featuredImage && (
            <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8">
              <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText || post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {post.categories && post.categories.nodes.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.nodes.map((cat) => (
                <span key={cat.slug} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance" dangerouslySetInnerHTML={{ __html: post.title }} />

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            {post.author && (
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author.node.name}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime} min de leitura
            </span>
          </div>

          <article className="prose prose-lg prose-blue max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <Banners.Middle />
          <Banners.Bottom />

          {post.tags && post.tags.nodes.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.nodes.map((tag) => (
                  <span key={tag.slug} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <AuthorBox />

          {internalLinks.length > 0 && <RelatedLinks items={internalLinks} />}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
