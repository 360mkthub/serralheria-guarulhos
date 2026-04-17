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
    absolute: 'Portões Automáticos em Guarulhos | Fabricação, Instalação e Motor',
  },
  description:
    'Fabricação, instalação e manutenção de portões automáticos em Guarulhos. Basculante, deslizante e pivotante com orçamento rápido.',
  keywords: ['portoes automaticos Guarulhos', 'portao basculante', 'portao deslizante', 'portao pivotante', 'motor para portao', 'manutencao de portao'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/servicos/portoes-automaticos/' },
  openGraph: {
    title: 'Portões Automáticos em Guarulhos | Fabricação, Instalação e Motor',
    description:
      'Fabricação, instalação e manutenção de portões automáticos em Guarulhos. Basculante, deslizante e pivotante com orçamento rápido.',
    url: 'https://serralheriaemguarulhos.com/servicos/portoes-automaticos/',
    siteName: 'Serralheria em Guarulhos',
    images: [{ url: 'https://serralheriaemguarulhos.com/images/portao-automatico-serralheria-guarulhos.jpeg', width: 1200, height: 630, alt: 'Portoes automaticos em Guarulhos' }],
    locale: 'pt_BR',
    type: 'website',
  },
}

const faqs = [
  { id: '1', question: 'Quanto custa instalar um portao automatico em Guarulhos?', answer: 'O valor varia de acordo com o tamanho do projeto e inclui motor, instalacao e garantia.' },
  { id: '2', question: 'Qual a diferenca entre portao basculante e deslizante?', answer: 'O basculante sobe verticalmente com contrapesos, ideal para garagens compactas. O deslizante corre lateralmente sobre trilhos, sendo mais economico e facil de manter.' },
  { id: '3', question: 'Quais as melhores marcas de motor para portao automatico?', answer: 'Recomendamos PPA, Garen, Peccinin, Rossi e Nice - marcas com assistencia tecnica consolidada em Guarulhos.' },
  { id: '4', question: 'Como funciona a manutencao preventiva de portao automatico?', answer: 'Inclui lubrificacao de partes moveis, ajuste de foto celulas, verificacao do cabo de aco e teste dos sensores de seguranca a cada 6 meses.' },
  { id: '5', question: 'Posso automatizar meu portao manual existente?', answer: 'Sim, desde que a estrutura esteja em bom estado. Realizamos vistoria tecnica para avaliar a viabilidade e orcamento.' },
  { id: '6', question: 'O que e necessario para instalar portao automatico em condominio?', answer: 'Projeto tecnico conforme NBR 15969, sensores de presenca obrigatorios, e motor com capacidade compativel ao fluxo de uso.' },
  { id: '7', question: 'Quanto tempo dura a instalacao de um portao automatico?', answer: 'De 4 a 8 horas para portoes residenciais, e ate 2 dias para sistemas mais complexos em condominios.' },
  { id: '8', question: 'Voces atendem emergencias de portao quebrado em Guarulhos?', answer: 'Sim, atendemos 24 horas para reparos emergenciais nos bairros de Vila Galvao, Macedo, Cumbica, Jardim Maia e regiao.' },
  { id: '9', question: 'Qual a garantia dos portoes automaticos instalados?', answer: 'Oferecemos garantia de 1 ano no motor e 6 meses na instalacao, alem de assistencia tecnica continua.' },
  { id: '10', question: 'E obrigatorio ter foto celula no portao automatico?', answer: 'Sim, conforme a Norma ABNT NBR 15969, todo portao automatico deve possuir sensores de seguranca para prevenir acidentes.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicos', item: 'https://serralheriaemguarulhos.com/servicos' },
    { '@type': 'ListItem', position: 3, name: 'Portoes Automaticos', item: 'https://serralheriaemguarulhos.com/servicos/portoes-automaticos' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://serralheriaemguarulhos.com/#localbusiness',
      name: 'Serralheria em Guarulhos',
      description: 'Especialistas em portoes automaticos, grades, estruturas metalicas e coberturas em Guarulhos',
      url: 'https://serralheriaemguarulhos.com',
      telephone: '+5551991606477',
      email: 'contato@serralheriaemguarulhos.com',
      image: 'https://serralheriaemguarulhos.com/images/portao-automatico-serralheria-guarulhos.jpeg',
      address: { 
        '@type': 'PostalAddress', 
        streetAddress: 'Atendimento em toda regiao',
        addressLocality: 'Guarulhos', 
        addressRegion: 'SP', 
        postalCode: '07110-000',
        addressCountry: 'BR' 
      },
      geo: { '@type': 'GeoCoordinates', latitude: '-23.4543', longitude: '-46.5339' },
      openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
      priceRange: '$$',
    },
    {
      '@type': 'Service',
      '@id': 'https://serralheriaemguarulhos.com/servicos/portoes-automaticos/#service',
      name: 'Portoes Automaticos e Manuais em Guarulhos',
      description: 'Fabricacao, instalacao e manutencao de portoes automaticos basculantes, deslizantes e pivotantes em Guarulhos',
      provider: { '@id': 'https://serralheriaemguarulhos.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Guarulhos', containedInPlace: { '@type': 'State', name: 'Sao Paulo' } },
      serviceType: ['Portao Automatico Basculante', 'Portao Automatico Deslizante', 'Portao Automatico Pivotante', 'Manutencao de Portoes'],
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'BRL' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://serralheriaemguarulhos.com/servicos/portoes-automaticos/#faq',
      mainEntity: faqs.map((faq) => ({ 
        '@type': 'Question', 
        name: faq.question, 
        acceptedAnswer: { '@type': 'Answer', text: faq.answer } 
      })),
    },
  ],
}

const blogLinks = [
  {
    text: 'Preços e Guia do Portão Basculante em Guarulhos',
    href: '/blog/portao-basculante-automatico-guarulhos-precos-2026-guia/',
  },
  {
    text: 'Quanto custa automatizar um portão deslizante?',
    href: '/blog/portao-automatico-em-guarulhos-preco-e-instalacao-de-motor-deslizante/',
  },
  {
    text: 'Motor PPA vs Garen: Qual é o melhor para sua casa?',
    href: '/blog/motor-ppa-vs-garen-para-portao-qual-e-o-melhor-para-a-sua-casa/',
  },
]

export default function PortoesPage() {
  const breadcrumbItems = [
    { label: 'Servicos', href: '/servicos' },
    { label: 'Portoes Automaticos', href: undefined },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />

      <main>
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div className="absolute inset-0 z-0">
            <img src="/images/portao-automatico-serralheria-guarulhos.jpeg" alt="Portoes automaticos em Guarulhos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
          </div>
          <div className="relative z-10 container-custom py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">SERVICO ESPECIALIZADO</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Portoes Automaticos e Manuais em Guarulhos <span className="text-yellow-400">| Instalacao e Manutencao com Garantia</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Procurando portoes automaticos em Guarulhos que unam seguranca, durabilidade e preco justo? Somos especialistas na fabricacao, instalacao e manutencao de portoes basculantes, deslizantes e pivotantes, atendendo residencias, condominios e industrias em toda a regiao de Guarulhos.
              </p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg">
                <Phone size={20} className="mr-2" />
                SOLICITAR ORCAMENTO GRATIS
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tipos de Portoes Automaticos que Instalamos em Guarulhos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Portao Automatico Basculante', desc: 'Ideal para garagens compactas. Funciona com sistema de contrapesos, guias laterais e cabos de aco. Utilizamos motores PPA, Garen e Peccinin com sensores de presenca conforme Norma ABNT NBR 15969.', items: ['Nao ocupa espaco interno', 'Sistema de parada automatica'] },
                { title: 'Portao Automatico Deslizante', desc: 'O mais economico e versatil. Funciona com trilhos e rolamentos de alta resistencia, suportando de 400kg a 900kg. Cremalheiras em nylon ou aco com controle remoto de longo alcance.', items: ['Manutencao minima', 'Central com Wi-Fi'] },
                { title: 'Portao Automatico Pivotante', desc: 'Elegancia para condominios. Movimento suave sobre pivots reforcados com rolamentos. Atendemos Vila Galvao, Macedo, Ponte Grande e Vila Augusta com solucoes personalizadas.', items: ['Design sofisticado', 'Motores redutores'] },
              ].map((tipo) => (
                <div key={tipo.title} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tipo.title}</h3>
                  <p className="text-gray-600 mb-4">{tipo.desc}</p>
                  <ul className="space-y-2">
                    {tipo.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> {item}</li>
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
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Materiais e Componentes de Alta Qualidade</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Utilizamos aco carbono galvanizado, aluminio e chapa de aco do tipo cartolinha ou meia cana. Nossos projetos incluem:</p>
                <ul className="space-y-3">
                  {['Motores PPA, Garen, Peccinin, Rossi e Nice', 'Centrais eletronicas com Wi-Fi (compativeis com aplicativos)', 'Foto celulas, travas eletromagneticas e sensores de presenca', 'Cremalheiras de nylon reforcado ou aco zincado', 'Cabo de aco de alta resistencia para portoes basculantes'].map((item) => (
                    <li key={item} className="flex items-start gap-3"><Check size={20} className="text-blue-600 flex-shrink-0 mt-1" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/portao-automatico-residencial-serralheria-guarulhos.jpeg" alt="Materiais para portoes automaticos" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Manutencao de Portoes Automaticos em Guarulhos</h2>
              <p className="text-blue-100 max-w-3xl mx-auto">Oferecemos assistencia tecnica especializada com atendimento emergencial</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Troca de cabo de aco arrebentado', 'Substituicao de roldanas e rolamentos desgastados', 'Reparo em placas de centrais eletronicas queimadas', 'Ajuste de fim de curso e porca acionadora', 'Lubrificacao e regulagem de motor', 'Atendimento 24h em toda Guarulhos'].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-3">
                  <Check size={24} className="text-yellow-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Investimento e Orcamento sem Compromisso</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">O preco de portao automatico em Guarulhos varia conforme o modelo. Entre em contato, solicite visita tecnica gratuita e receba orcamento detalhado em ate 24 horas.</p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
                <Phone size={20} /> SOLICITAR ORCAMENTO GRATIS
              </a>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} title="Perguntas Frequentes sobre Portoes Automaticos" />

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conheca tambem nossos outros servicos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Grades de Protecao', desc: 'Seguranca para sua familia e patrimonio', link: '/servicos/grades-seguranca' },
                { title: 'Estruturas Metalicas', desc: 'Galpoes, mezaninos e coberturas', link: '/servicos/estruturas-metalicas' },
                { title: 'Escadas e Corrimaos', desc: 'Design e seguranca para seu projeto', link: '/servicos/escadas-manutencao' },
              ].map((s) => (
                <Link key={s.link} href={s.link} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium">Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-custom max-w-4xl">
            <RelatedLinks items={blogLinks} title="Aprenda mais no nosso blog" />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
