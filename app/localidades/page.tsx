import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Check } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BannerTop } from '@/components/Banners'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Localidades Atendidas | Serralheria em Guarulhos - Todos os Bairros',
  description: 'Serralheria em Guarulhos atendendo todos os bairros: Vila Galvao, Macedo, Jardim Maia, Centro e mais. Portoes automaticos, grades e estruturas metalicas com garantia.',
  alternates: { canonical: 'https://serralheriaemguarulhos.com/localidades' },
  openGraph: { 
    title: 'Localidades Atendidas | Serralheria em Guarulhos', 
    description: 'Atendemos todos os bairros de Guarulhos.', 
    url: 'https://serralheriaemguarulhos.com/localidades', 
    locale: 'pt_BR', 
    type: 'website' 
  },
}

const bairros = [
  { nome: 'Vila Galvao', slug: 'vila-galvao' }, 
  { nome: 'Macedo', slug: 'macedo' }, 
  { nome: 'Jardim Maia', slug: 'jardim-maia' }, 
  { nome: 'Vila Augusta', slug: 'vila-augusta' }, 
  { nome: 'Centro', slug: 'centro' }, 
  { nome: 'Jardim Cumbica', slug: 'jardim-cumbica' }, 
  { nome: 'Vila Barros', slug: 'vila-barros' }, 
  { nome: 'Ponte Grande', slug: 'ponte-grande' }, 
  { nome: 'Parque Cecap', slug: 'parque-cecap' }, 
  { nome: 'Vila Endres', slug: 'vila-endres' }, 
  { nome: 'Jardim das Oliveiras', slug: 'jardim-das-oliveiras' }, 
  { nome: 'Vila Cocaia', slug: 'vila-cocaia' }, 
  { nome: 'Vila Rio de Janeiro', slug: 'vila-rio-de-janeiro' },
]

export default function LocalidadesPage() {
  const breadcrumbItems = [{ label: 'Localidades', href: '/localidades' }]
  
  const breadcrumbSchema = { 
    '@context': 'https://schema.org', 
    '@type': 'BreadcrumbList', 
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' }, 
      { '@type': 'ListItem', position: 2, name: 'Localidades', item: 'https://serralheriaemguarulhos.com/localidades' }
    ] 
  }

  const jsonLd = { 
    '@context': 'https://schema.org', 
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://serralheriaemguarulhos.com/#localbusiness',
        name: 'Serralheria em Guarulhos',
        url: 'https://serralheriaemguarulhos.com',
        telephone: '+5551991606477',
        image: 'https://serralheriaemguarulhos.com/images/serralheria-guarulhos.jpeg',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Atendimento em toda Guarulhos',
          addressLocality: 'Guarulhos',
          addressRegion: 'SP',
          postalCode: '07110-000',
          addressCountry: 'BR'
        },
        sameAs: [
          'https://www.facebook.com/serralheriaemguarulhos',
          'https://www.instagram.com/serralheriaemguarulhos'
        ]
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://serralheriaemguarulhos.com/localidades/#collection',
        name: 'Localidades Atendidas - Serralheria em Guarulhos',
        url: 'https://serralheriaemguarulhos.com/localidades',
        mainEntity: { 
          '@type': 'ItemList', 
          itemListElement: bairros.map((b, i) => ({ 
            '@type': 'ListItem', 
            position: i + 1, 
            name: `Serralheria em ${b.nome}`, 
            url: `https://serralheriaemguarulhos.com/localidades/${b.slug}` 
          })) 
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <BannerTop />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />
      <main>
        <section className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">
                <MapPin className="w-4 h-4 inline mr-1" />COBERTURA COMPLETA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Atendemos <span className="text-yellow-400">Todos os Bairros</span> de Guarulhos</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">Nossa serralheria atende em todos os bairros de Guarulhos e regiao metropolitana. Onde voce estiver, levamos qualidade e garantia ate voce com atendimento rapido.</p>
              <a href="https://wa.me/5551991606477?text=Olá! Vim do site e quero um orçamento." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />Solicitar Orcamento Gratis
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bairros de <span className="text-gradient">Guarulhos</span> que Atendemos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Clique no seu bairro para ver informacoes especificas sobre nossos servicos de serralheria na sua regiao.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {bairros.map((b) => (
                <Link key={b.slug} href={`/localidades/${b.slug}`} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all text-center">
                  <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{b.nome}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que Somos a Serralheria Mais Buscada de Guarulhos?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Atendimento Rapido', desc: 'Chegamos em minutos em qualquer bairro' }, 
                { title: 'Orcamento Gratis', desc: 'Sem compromisso em ate 24 horas' }, 
                { title: 'Garantia Total', desc: 'Ate 5 anos em todos os servicos' }, 
                { title: '15 Anos de Experiencia', desc: 'Tradicao em Guarulhos' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Qual e o Seu Bairro em Guarulhos?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Atendemos em todos os bairros de Guarulhos com a mesma qualidade e rapidez. Entre em contato e descubra como podemos ajudar!</p>
            <a href="https://wa.me/5551991606477?text=Olá! Vim do site e quero um orçamento." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
