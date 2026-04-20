import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Locations from '@/components/Locations'
import Process from '@/components/Process'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import { homeFaqs } from '@/lib/home-faqs'
import WhatsAppButton from '@/components/WhatsAppButton'

/** Code-split de seções client pesadas (Radix/Dialog) para reduzir custo da primeira compilação/resposta da rota `/`. */
const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="min-h-[24rem] bg-gray-50" aria-hidden />,
})
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="min-h-[22rem] bg-white" aria-hidden />,
})
const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <div className="min-h-[20rem] bg-white" aria-hidden />,
})
const ServiceFAQ = dynamic(() => import('@/components/ServiceFAQ'), {
  loading: () => <div className="min-h-[18rem] bg-white" aria-hidden />,
})

export const metadata: Metadata = {
  title: {
    absolute: 'Serralheria em Guarulhos | Portões Sob Medida e Orçamento Rápido',
  },
  description:
    'Portões automáticos, grades e estruturas metálicas em Guarulhos. Atendimento rápido, fabricação sob medida e orçamento por WhatsApp.',
  alternates: { canonical: 'https://serralheriaemguarulhos.com/' },
  openGraph: {
    title: 'Serralheria em Guarulhos | Portões Sob Medida e Orçamento Rápido',
    description:
      'Portões automáticos, grades e estruturas metálicas em Guarulhos. Atendimento rápido, fabricação sob medida e orçamento por WhatsApp.',
    url: 'https://serralheriaemguarulhos.com/',
    locale: 'pt_BR',
    type: 'website',
    siteName: 'Serralheria em Guarulhos',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://serralheriaemguarulhos.com/#localbusiness',
  name: 'Serralheria em Guarulhos',
  description: 'Especialistas em serralheria em Guarulhos com mais de 15 anos de experiência. Portões automáticos, grades de proteção, estruturas metálicas e coberturas. Orçamento grátis em 24h!',
  url: 'https://serralheriaemguarulhos.com/',
  telephone: '+5551991606477',
  email: 'contato@serralheriaemguarulhos.com',
  image: 'https://serralheriaemguarulhos.com/images/serralheria-guarulhos.jpeg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guarulhos',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-23.4543',
    longitude: '-46.5339',
  },
  areaServed: {
    '@type': 'City',
    name: 'Guarulhos',
    containedInPlace: {
      '@type': 'State',
      name: 'São Paulo',
    },
  },
  serviceType: [
    'Serralheria',
    'Portões automáticos',
    'Grades de proteção',
    'Estruturas metálicas',
    'Coberturas metálicas',
    'Escadas e corrimãos',
  ],
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/serralheriaemguarulhos',
    'https://www.instagram.com/serralheriaemguarulhos',
  ],
}

/** FAQPage (schema.org): mainEntity deve vir de dados resolvidos no servidor (não importar de Client Component). */
const faqMainEntity = homeFaqs.map((faq) => ({
  '@type': 'Question',
  name: faq.question,
  acceptedAnswer: {
    '@type': 'Answer',
    text: faq.answer,
  },
}))

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: 'https://serralheriaemguarulhos.com/',
  mainEntity: faqMainEntity,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://serralheriaemguarulhos.com/',
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqMainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Locations />
        <Gallery />
        <Testimonials />
        <Process />
        <CTA />
        <ServiceFAQ faqs={[...homeFaqs]} title="Dúvidas Frequentes" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
