import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BannerTop } from '@/components/Banners'
import Breadcrumbs from '@/components/Breadcrumbs'
import BairroTemplate from '@/components/BairroTemplate'
import { bairros, getBairroBySlug } from '@/lib/bairros-data'

/** Só slugs definidos em generateStaticParams; demais retornam 404 (sem SSR dinâmico inesperado). */
export const dynamicParams = false

export async function generateStaticParams() {
  return bairros.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const bairro = getBairroBySlug(slug)
  if (!bairro) notFound()

  return {
    title: bairro.title,
    description: bairro.metaDescription,
    alternates: { canonical: `https://serralheriaemguarulhos.com/localidades/${bairro.slug}` },
    openGraph: {
      title: bairro.title,
      description: bairro.metaDescription,
      url: `https://serralheriaemguarulhos.com/localidades/${bairro.slug}`,
      locale: 'pt_BR',
      type: 'website',
    },
  }
}

export default async function BairroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const bairro = getBairroBySlug(slug)
  if (!bairro) notFound()

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Serralheria em ${bairro.nome} - Guarulhos`,
    description: bairro.metaDescription,
    "image": "https://serralheriaemguarulhos.com/images/serralheria-guarulhos.jpeg",
    url: `https://serralheriaemguarulhos.com/localidades/${bairro.slug}`,
    telephone: '+5551991606477',
    email: 'contato@serralheriaemguarulhos.com',
    address: { 
      '@type': 'PostalAddress', 
      addressLocality: 'Guarulhos', 
      addressRegion: 'SP', 
      addressCountry: 'BR' 
    },
    geo: { 
      '@type': 'GeoCoordinates', 
      latitude: '-23.4543', 
      longitude: '-46.5339' 
    },
    areaServed: { 
      '@type': 'City', 
      name: `${bairro.nome}, Guarulhos - SP` 
    },
    serviceType: ['Serralheria', 'Portoes Automaticos', 'Grades de Protecao', 'Estruturas Metalicas'],
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
    priceRange: '$$',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
      { '@type': 'ListItem', position: 2, name: 'Localidades', item: 'https://serralheriaemguarulhos.com/localidades' },
      { '@type': 'ListItem', position: 3, name: bairro.nome, item: `https://serralheriaemguarulhos.com/localidades/${bairro.slug}` },
    ],
  }

  const faqSchema =
    bairro.faqs && bairro.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: bairro.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null

  const breadcrumbItems = [
    { label: 'Localidades', href: '/localidades' },
    { label: bairro.nome, href: undefined },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <Header />
      <BannerTop />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />

      <main>
        <BairroTemplate bairro={bairro} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
