import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BannerTop } from '@/components/Banners'
import Breadcrumbs, { generateBreadcrumbSchema } from '@/components/Breadcrumbs'
import { getPosts } from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog | Serralheria em Guarulhos - Dicas e Novidades',
  description: 'Blog da Serralheria em Guarulhos. Dicas sobre portoes automaticos, grades de protecao, estruturas metalicas e manutencao. Acompanhe nossas novidades!',
  keywords: ['blog serralheria Guarulhos', 'dicas portao automatico', 'manutencao grades', 'estruturas metalicas'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/blog' }, // Corrigido para .com
  openGraph: {
    title: 'Blog | Serralheria em Guarulhos',
    description: 'Dicas e novidades sobre serralheria, portoes automaticos e estruturas metalicas em Guarulhos.',
    url: 'https://serralheriaemguarulhos.com/blog', // Corrigido para .com
    locale: 'pt_BR',
    type: 'website',
  },
}

interface Post {
  id: string
  databaseId: number
  title: string
  slug: string
  excerpt: string
  date: string
  featuredImage?: { node: { sourceUrl: string; altText: string } }
  author?: { node: { name: string } }
  categories?: { nodes: { name: string; slug: string }[] }
}

export default async function BlogPage() {
  const breadcrumbItems = [{ label: 'Blog', href: '/blog' }]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://serralheriaemguarulhos.com/blog/#blog', // ID único adicionado
    name: 'Blog da Serralheria em Guarulhos',
    description: 'Dicas, novidades e informacoes sobre serralheria em Guarulhos.',
    url: 'https://serralheriaemguarulhos.com/blog', // Corrigido para .com
    publisher: { 
      '@type': 'LocalBusiness', 
      '@id': 'https://serralheriaemguarulhos.com/#localbusiness', // Vinculado ao negócio local
      name: 'Serralheria em Guarulhos',
      image: 'https://serralheriaemguarulhos.com/images/serralheria-guarulhos.jpeg',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Atendimento em toda Guarulhos',
        addressLocality: 'Guarulhos',
        addressRegion: 'SP',
        postalCode: '07110-000',
        addressCountry: 'BR'
      }
    },
  }

  let posts: Post[] = []
  let error: string | null = null

  try {
    const data = await getPosts(12)
    posts = data || [] // Ajustado para a estrutura do seu nodes em wordpress.ts
  } catch (e) {
    error = 'Erro ao carregar posts. Tente novamente mais tarde.'
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <BannerTop />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />

      <main className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">CONTEUDO EXCLUSIVO</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Blog da <span className="text-gradient">Serralheria em Guarulhos</span></h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">Dicas, novidades e informacoes sobre portoes automaticos, grades de protecao, estruturas metalicas e muito mais.</p>
          </div>

          {error ? (
            <div className="text-center py-20"><p className="text-gray-600">{error}</p></div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20"><p className="text-gray-600">Nenhum post encontrado no momento.</p></div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/10] bg-gray-100">
                    {post.featuredImage?.node?.sourceUrl ? (
                      <img 
                        src={post.featuredImage.node.sourceUrl} 
                        alt={post.featuredImage.node.altText || post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-blue-400 text-4xl font-bold">B</span>
                      </div>
                    )}
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    {post.categories?.nodes && post.categories.nodes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.nodes.map((cat) => (
                          <span key={cat.slug} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">{cat.name}</span>
                        ))}
                      </div>
                    )}
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2" 
                          dangerouslySetInnerHTML={{ __html: post.title }} />
                    </Link>
                    
                    <div className="text-gray-600 text-sm mb-4 line-clamp-3" 
                         dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        {post.author?.node?.name && (
                          <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author.node.name}</span>
                        )}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Ler mais <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
