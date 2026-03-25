import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Locations from '@/components/Locations'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import ServiceFAQ, { faqs } from '@/components/ServiceFAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://serralheriaemguarulhos.com/#localbusiness',
  name: 'Serralheria em Guarulhos',
  description: 'Especialistas em serralheria em Guarulhos com mais de 15 anos de experiencia. Portoes automaticos, grades de protecao, estruturas metalicas e coberturas. Orcamento gratis em 24h!',
  url: 'https://serralheriaemguarulhos.com',
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
      name: 'Sao Paulo',
    },
  },
  serviceType: [
    'Serralheria',
    'Portoes Automaticos',
    'Grades de Protecao',
    'Estruturas Metalicas',
    'Coberturas Metalicas',
    'Escadas e Corrimaos',
  ],
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/serralheriaemguarulhos',
    'https://www.instagram.com/serralheriaemguarulhos',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: Array.isArray(faqs) && faqs.length > 0 ? faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })) : [],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        <ServiceFAQ faqs={faqs} title="Dúvidas Frequentes" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
