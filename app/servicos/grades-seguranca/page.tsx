import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Check, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceFAQ from '@/components/ServiceFAQ'
import RelatedLinks from '@/components/RelatedLinks'

export const metadata: Metadata = {
  title: {
    absolute: 'Grades de Proteção em Guarulhos | Fabricação Sob Medida',
  },
  description:
    'Grades de proteção em Guarulhos para janelas, portas e sacadas. Fabricação sob medida com instalação e orçamento rápido.',
  keywords: ['grades de proteção Guarulhos', 'grade de ferro', 'grade de alumínio', 'grade de inox', 'gradil eletrofundido'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/servicos/grades-seguranca/' },
  openGraph: {
    title: 'Grades de Proteção em Guarulhos | Fabricação Sob Medida',
    description:
      'Grades de proteção em Guarulhos para janelas, portas e sacadas. Fabricação sob medida com instalação e orçamento rápido.',
    url: 'https://serralheriaemguarulhos.com/servicos/grades-seguranca/',
    images: [{ url: 'https://serralheriaemguarulhos.com/images/grade-proteçao-janela-serralheria-guarulhos.jpeg', width: 1200, height: 630, alt: 'Grades de proteção em Guarulhos' }],
    locale: 'pt_BR', 
    type: 'website',
  },
}

const faqs = [
  { id: '1', question: 'Quanto custa grade de proteção para janela em Guarulhos?', answer: 'Os valores variam de acordo com o tamanho do projeto e material escolhido. Entre em contato e solicite um orçamento que lhe retornaremos o mais breve possível.' },
  { id: '2', question: 'Qual material é melhor para grade: ferro ou alumínio?', answer: 'O ferro galvanizado oferece maior resistência mecânica e é mais barato. O alumínio não enferruja, é mais leve e tem menor manutenção a longo prazo. A escolha depende do orçamento e local de instalação.' },
  { id: '3', question: 'Como instalar grade de proteção em apartamento?', answer: 'A instalação requer fixação com buchas de expansão na alvenaria ou concreto, respeitando as normas do condomínio.' },
  { id: '4', question: 'Qual a diferença entre grade e gradil eletrofundido?', answer: 'A grade é indicada para proteção de janelas e portas em residências. O gradil eletrofundido é utilizado para cercamentos de grandes áreas comerciais e industriais, oferecendo maior robustez estrutural.' },
  { id: '5', question: 'As grades de proteção são realmente seguras contra invasão?', answer: 'Sim, quando fabricadas com ferro maciço ou aço de espessura adequada (mínimo 20x20mm) e instaladas com fixação correta, as grades são barreiras eficazes contra arrombamentos.' },
  { id: '6', question: 'Posso instalar grade em apartamento alugado?', answer: 'Sim, desde que autorizado pelo proprietário e condomínio. Oferecemos opções com fixação reversível que não danificam a estrutura.' },
  { id: '7', question: 'Qual a garantia das grades instaladas?', answer: 'Oferecemos garantia de 1 ano contra defeitos de fabricação e instalação, além de manutenção preventiva.' },
  { id: '8', question: 'Vocês atendem quais bairros de Guarulhos?', answer: 'Atendemos Centro, Macedo, Vila Galvão, Cumbica, Vila Augusta, Jardim Maia, Ponte Grande, Gopoúva, Picanço e toda a Grande São Paulo.' },
  { id: '9', question: 'É necessário pintar grades de ferro galvanizado?', answer: 'O galvanizado a fogo já oferece proteção anticorrosiva. A pintura é opcional, mas aumenta a durabilidade estética do produto.' },
  { id: '10', question: 'Qual o prazo de entrega para grades sob medida?', answer: 'O prazo depende da complexidade do projeto e quantidade solicitada. Entre em contato e solicite o seu orçamento.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org', 
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://serralheriaemguarulhos.com/servicos/' },
    { '@type': 'ListItem', position: 3, name: 'Grades de segurança', item: 'https://serralheriaemguarulhos.com/servicos/grades-seguranca/' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org', 
  '@graph': [
    { 
      '@type': 'LocalBusiness', 
      '@id': 'https://serralheriaemguarulhos.com/#localbusiness', 
      name: 'Serralheria em Guarulhos', 
      url: 'https://serralheriaemguarulhos.com/', 
      telephone: '+5551991606477', 
      image: 'https://serralheriaemguarulhos.com/images/grade-proteçao-janela-serralheria-guarulhos.jpeg',
      address: { 
        '@type': 'PostalAddress', 
        addressLocality: 'Guarulhos', 
        addressRegion: 'SP', 
        postalCode: '07110-000',
        addressCountry: 'BR' 
      }, 
      openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'], 
      priceRange: '$$' 
    },
    { 
      '@type': 'Service', 
      '@id': 'https://serralheriaemguarulhos.com/servicos/grades-seguranca/#service', 
      name: 'Grades de proteção e segurança em Guarulhos', 
      description: 'Fabricação e instalação de grades de ferro galvanizado, alumínio e aço inox em Guarulhos', 
      provider: { '@id': 'https://serralheriaemguarulhos.com/#localbusiness' }, 
      areaServed: { '@type': 'City', name: 'Guarulhos' }, 
      serviceType: ['Grade de ferro galvanizado', 'Grade de alumínio', 'Grade de aço inox', 'Gradil eletrofundido'] 
    },
    { 
      '@type': 'FAQPage', 
      '@id': 'https://serralheriaemguarulhos.com/servicos/grades-seguranca/#faq', 
      mainEntity: faqs.map((faq) => ({ 
        '@type': 'Question', 
        name: faq.question, 
        acceptedAnswer: { '@type': 'Answer', text: faq.answer } 
      })) 
    },
  ],
}

const blogLinks = [
  {
    text: 'Grade de proteção para porta em Guarulhos: guia completo',
    href: '/blog/grade-de-protecao-para-porta-em-guarulhos-guia-completo-para-escolher-comprar-e-instalar/',
  },
  {
    text: 'Serralheria Jardim Cumbica: soluções completas em metal',
    href: '/blog/serralheria-jardim-cumbica-solucoes-completas-em-metal/',
  },
  {
    text: 'Portão de ferro vs alumínio: qual a melhor escolha para sua casa ou empresa?',
    href: '/blog/portao-de-ferro-vs-aluminio-qual-a-melhor-escolha-para-sua-casa-ou-empresa/',
  },
]

export default function GradesPage() {
  const breadcrumbItems = [
    { label: 'Serviços', href: '/servicos' }, 
    { label: 'Grades de segurança', href: undefined }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <div className="pt-20">
        <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />
      </div>
      <main>
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div className="absolute inset-0 z-0">
            <img src="/images/grade-proteçao-janela-serralheria-guarulhos.jpeg" alt="Grades de proteção em Guarulhos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
          </div>
          <div className="relative z-10 container-custom py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">SEGURANÇA PARA SUA FAMÍLIA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Grades de proteção e segurança em Guarulhos <span className="text-yellow-400">| Ferro, alumínio e aço inox</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Busca por grades de proteção em Guarulhos para garantir a segurança da sua família ou empresa? Fabricamos e instalamos grades de ferro galvanizado, alumínio e aço inox, com acabamento profissional e conforme as normas técnicas.
              </p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg">
                <Phone size={20} className="mr-2" />
                SOLICITAR ORÇAMENTO GRÁTIS
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tipos de grades de segurança que oferecemos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Grade de ferro galvanizado', desc: 'Resistência máxima contra invasões. Fabricadas com tubos de aço carbono ou ferro maciço, com tratamento anticorrosivo com zinco a fogo.', items: ['Alta resistência mecânica', 'Proteção anticorrosiva'] },
                { title: 'Grade de alumínio', desc: 'Leveza e anticorrosão natural. Não oxida, não requer pintura frequente e oferece excelente relação custo-benefício a longo prazo.', items: ['Não enferruja', 'Baixa manutenção'] },
                { title: 'Grade de aço inox', desc: 'Sofisticação e durabilidade premium. Resistentes à corrosão com aparência moderna. Ideais para apartamentos de alto padrão.', items: ['Acabamento impecável', 'Durabilidade extrema'] },
              ].map((tipo) => (
                <div key={tipo.title} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tipo.title}</h3>
                  <p className="text-gray-600 mb-4">{tipo.desc}</p>
                  <ul className="space-y-2">
                    {tipo.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={16} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/grades-serralheria-guarulhos.jpeg" alt="Gradil eletrofundido" className="w-full h-auto" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gradil eletrofundido para áreas industriais</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Composto por barras chatas verticais e arames horizontais unidos por eletrofusão, oferece alta resistência mecânica.</p>
                <ul className="space-y-3">
                  {['Condomínios logísticos e empresariais', 'Estacionamentos e parques', 'Escolas e hospitais', 'Separadores de vias'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Instalação de grades em apartamentos e sacadas</h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-8">Utilizamos fixações específicas para cada tipo de parede com buchas de expansão de alta resistência. Atendemos prazos de até 48 horas.</p>
            <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
              <Phone size={20} />SOLICITAR ORÇAMENTO
            </a>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} title="Perguntas frequentes sobre grades de proteção" />

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheça também nossos outros serviços</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Portões automáticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' },
                { title: 'Estruturas metálicas', desc: 'Galpões, mezaninos e coberturas', link: '/servicos/estruturas-metalicas' },
                { title: 'Escadas e corrimãos', desc: 'Design e segurança para seu projeto', link: '/servicos/escadas-manutencao' },
              ].map((s) => (
                <Link key={s.link} href={s.link} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                    Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-custom max-w-4xl">
            <RelatedLinks
              items={blogLinks}
              title="Aprenda mais sobre segurança residencial no nosso blog"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
