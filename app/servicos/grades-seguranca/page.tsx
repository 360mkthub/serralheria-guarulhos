import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Check, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceFAQ from '@/components/ServiceFAQ'

export const metadata: Metadata = {
  title: 'Grades de Protecao em Guarulhos | Ferro, Aluminio e Inox',
  description: 'Grades de protecao em Guarulhos. Fabricacao e instalacao de grades de ferro, aluminio e aco inox. Seguranca para sua familia. Orcamento gratis!',
  keywords: ['grades de protecao Guarulhos', 'grade de ferro', 'grade de aluminio', 'grade de inox', 'gradil eletrofundido'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/servicos/grades-seguranca' },
  openGraph: {
    title: 'Grades de Protecao em Guarulhos | Ferro, Aluminio e Inox',
    description: 'Grades de protecao em Guarulhos. Ferro galvanizado, aluminio e aco inox. Seguranca certificada. Solicite orcamento!',
    url: 'https://serralheriaemguarulhos.com/servicos/grades-seguranca',
    images: [{ url: 'https://serralheriaemguarulhos.com/images/grade-proteçao-janela-serralheria-guarulhos.jpeg', width: 1200, height: 630, alt: 'Grades de protecao em Guarulhos' }],
    locale: 'pt_BR', 
    type: 'website',
  },
}

const faqs = [
  { id: '1', question: 'Quanto custa grade de protecao para janela em Guarulhos?', answer: 'Os valores variam de acordo com o tamanho do projeto e material escolhido. Entre em contato e solicite um orcamento que lhe retornaremos o mais breve possivel.' },
  { id: '2', question: 'Qual material e melhor para grade: ferro ou aluminio?', answer: 'O ferro galvanizado oferece maior resistencia mecanica e e mais barato. O aluminio nao enferruja, e mais leve e tem menor manutencao a longo prazo. A escolha depende do orcamento e local de instalacao.' },
  { id: '3', question: 'Como instalar grade de protecao em apartamento?', answer: 'A instalacao requer fixacao com buchas de expansao na alvenaria ou concreto, respeitando as normas do condominio.' },
  { id: '4', question: 'Qual a diferenca entre grade e gradil eletrofundido?', answer: 'A grade e indicada para protecao de janelas e portas em residencias. O gradil eletrofundido e utilizado para cercamentos de grandes areas comerciais e industriais, oferecendo maior robustez estrutural.' },
  { id: '5', question: 'As grades de protecao sao realmente seguras contra invasao?', answer: 'Sim, quando fabricadas com ferro macico ou aco de espessura adequada (minimo 20x20mm) e instaladas com fixacao correta, as grades sao barreiras eficazes contra arrombamentos.' },
  { id: '6', question: 'Posso instalar grade em apartamento alugado?', answer: 'Sim, desde que autorizado pelo proprietario e condominio. Oferecemos opcoes com fixacao reversivel que nao danificam a estrutura.' },
  { id: '7', question: 'Qual a garantia das grades instaladas?', answer: 'Oferecemos garantia de 1 ano contra defeitos de fabricacao e instalacao, alem de manutencao preventiva.' },
  { id: '8', question: 'Voces atendem quais bairros de Guarulhos?', answer: 'Atendemos Centro, Macedo, Vila Galvao, Cumbica, Vila Augusta, Jardim Maia, Ponte Grande, Gopoúva, Picanco e toda a Grande Sao Paulo.' },
  { id: '9', question: 'E necessario pintar grades de ferro galvanizado?', answer: 'O galvanizado a fogo ja oferece protecao anticorrosiva. A pintura e opcional, mas aumenta a durabilidade estetica do produto.' },
  { id: '10', question: 'Qual o prazo de entrega para grades sob medida?', answer: 'O prazo depende da complexidade do projeto e quantidade solicitada. Entre em contato e solicite o seu orcamento.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org', 
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicos', item: 'https://serralheriaemguarulhos.com/servicos' },
    { '@type': 'ListItem', position: 3, name: 'Grades de Seguranca', item: 'https://serralheriaemguarulhos.com/servicos/grades-seguranca' },
  ],
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
      name: 'Grades de Protecao e Seguranca em Guarulhos', 
      description: 'Fabricacao e instalacao de grades de ferro galvanizado, aluminio e aco inox em Guarulhos', 
      provider: { '@id': 'https://serralheriaemguarulhos.com/#localbusiness' }, 
      areaServed: { '@type': 'City', name: 'Guarulhos' }, 
      serviceType: ['Grade de Ferro Galvanizado', 'Grade de Aluminio', 'Grade de Aco Inox', 'Gradil Eletrofundido'] 
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

export default function GradesPage() {
  const breadcrumbItems = [
    { label: 'Servicos', href: '/servicos' }, 
    { label: 'Grades de Seguranca', href: undefined }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />
      <main>
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div className="absolute inset-0 z-0">
            <img src="/images/grade-proteçao-janela-serralheria-guarulhos.jpeg" alt="Grades de protecao em Guarulhos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
          </div>
          <div className="relative z-10 container-custom py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">SEGURANCA PARA SUA FAMILIA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Grades de Protecao e Seguranca em Guarulhos <span className="text-yellow-400">| Ferro, Aluminio e Aco Inox</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Busca por grades de protecao em Guarulhos para garantir a seguranca da sua familia ou empresa? Fabricamos e instalamos grades de ferro galvanizado, aluminio e aco inox, com acabamento profissional e conforme as normas tecnicas.
              </p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg">
                <Phone size={20} className="mr-2" />
                SOLICITAR ORCAMENTO GRATIS
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tipos de Grades de Seguranca que Oferecemos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Grade de Ferro Galvanizado', desc: 'Resistencia maxima contra invasoes. Fabricadas com tubos de aco carbono ou ferro macico, com tratamento anticorrosivo com zinco a fogo.', items: ['Alta resistencia mecanica', 'Protecao anticorrosiva'] },
                { title: 'Grade de Aluminio', desc: 'Leveza e anticorrosao natural. Nao oxida, nao requer pintura frequente e oferece excelente relacao custo-beneficio a longo prazo.', items: ['Nao enferruja', 'Baixa manutencao'] },
                { title: 'Grade de Aco Inox', desc: 'Sofisticacao e durabilidade premium. Resistentes a corrosao com aparencia moderna. Ideais para apartamentos de alto padrao.', items: ['Acabamento impecavel', 'Durabilidade extrema'] },
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gradil Eletrofundido para Areas Industriais</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Composto por barras chatas verticais e arames horizontais unidos por eletrofusao, oferece alta resistencia mecanica.</p>
                <ul className="space-y-3">
                  {['Condominios logisticos e empresariais', 'Estacionamentos e parques', 'Escolas e hospitais', 'Separadores de vias'].map((item, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Instalacao de Grades em Apartamentos e Sacadas</h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-8">Utilizamos fixacoes especificas para cada tipo de parede com buchas de expansao de alta resistencia. Atendemos prazos de ate 48 horas.</p>
            <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg inline-flex items-center gap-2">
              <Phone size={20} />SOLICITAR ORCAMENTO
            </a>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} title="Perguntas Frequentes sobre Grades de Protecao" />

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheca tambem nossos outros servicos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Portoes Automaticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' },
                { title: 'Estruturas Metalicas', desc: 'Galpoes, mezaninos e coberturas', link: '/servicos/estruturas-metalicas' },
                { title: 'Escadas e Corrimaos', desc: 'Design e seguranca para seu projeto', link: '/servicos/escadas-manutencao' },
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
