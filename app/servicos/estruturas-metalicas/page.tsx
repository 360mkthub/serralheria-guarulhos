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
  title: 'Estruturas Metalicas em Guarulhos | Galpoes, Mezaninos e Coberturas',
  description: 'Estruturas metalicas em Guarulhos. Galpoes, mezaninos, coberturas e telhados industriais. Projetos sob medida com garantia. Orcamento gratis!',
  keywords: ['estruturas metalicas Guarulhos', 'galpao metalico', 'mezanino', 'cobertura metalica', 'telhado industrial'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas' },
  openGraph: {
    title: 'Estruturas Metalicas em Guarulhos | Galpoes e Coberturas',
    description: 'Estruturas metalicas em Guarulhos. Galpoes, mezaninos e coberturas com engenharia certificada. Solicite seu orcamento gratis!',
    url: 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas',
    images: [{ url: 'https://serralheriaemguarulhos.com/images/estruturas-metálicas-coberturas-serralheria-guarulhos.jpeg', width: 1200, height: 630, alt: 'Estruturas metalicas em Guarulhos' }],
    locale: 'pt_BR', 
    type: 'website',
  },
}

const faqs = [
  { id: '1', question: 'Quanto custa estrutura metalica por m2 em Guarulhos?', answer: 'Os valores dependem do material escolhido. Entre em contato e solicite um orcamento.' },
  { id: '2', question: 'Qual a diferenca entre viga I e viga H?', answer: 'A viga I possui abas estreitas e e indicada para cargas moderadas. A viga H (ou W) tem abas mais largas e espessas, suportando maiores cargas.' },
  { id: '3', question: 'Como calcular o orcamento para um galpao metalico?', answer: 'O orcamento considera: area construida, altura do pe-direito, distancia entre pilares e tipo de cobertura.' },
  { id: '4', question: 'Quais as vantagens da estrutura metalica sobre concreto?', answer: 'Maior rapidez de execucao (ate 50% mais rapido), menor desperdicio de material e 100% reciclavel.' },
  { id: '5', question: 'Qual o prazo de execucao de uma estrutura metalica?', answer: 'O prazo varia de acordo com a complexidade. Entre em contato para uma previsao detalhada do seu projeto.' },
  { id: '6', question: 'E necessario projeto de engenharia para estrutura metalica?', answer: 'Sim, todo projeto estrutural metalico deve ser calculado e assinado por engenheiro conforme normas ABNT.' },
  { id: '7', question: 'Voces fazem manutencao em estruturas metalicas existentes?', answer: 'Sim, realizamos inspecoes, reparos de solda, pintura anticorrosiva e reforco estrutural em Guarulhos.' },
  { id: '8', question: 'Quais bairros de Guarulhos voces atendem?', answer: 'Atuamos em Vila Galvao, Centro, Macedo, Jardim Maia, Vila Augusta, Cumbica e toda regiao.' },
  { id: '9', question: 'E possivel ampliar uma estrutura metalica existente?', answer: 'Sim, a modularidade do sistema metalico permite ampliacoes futuras com minima interferencia na estrutura original.' },
  { id: '10', question: 'Qual a garantia das estruturas metalicas instaladas?', answer: 'Oferecemos garantia de 5 anos na estrutura contra defeitos de fabricacao, alem de assistencia tecnica.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicos', item: 'https://serralheriaemguarulhos.com/servicos' },
    { '@type': 'ListItem', position: 3, name: 'Estruturas Metalicas', item: 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas' },
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
      image: 'https://serralheriaemguarulhos.com/images/estruturas-metálicas-coberturas-serralheria-guarulhos.jpeg',
      address: { 
        '@type': 'PostalAddress', 
        streetAddress: 'Atendimento em toda Guarulhos',
        addressLocality: 'Guarulhos', 
        addressRegion: 'SP', 
        postalCode: '07110-000',
        addressCountry: 'BR' 
      },
      openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
      priceRange: '$$',
    },
    {
      '@type': 'Service',
      '@id': 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas/#service',
      name: 'Estruturas Metalicas e Coberturas em Guarulhos',
      description: 'Fabricacao e montagem de galpoes, mezaninos e coberturas metalicas em Guarulhos',
      provider: { '@id': 'https://serralheriaemguarulhos.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Guarulhos' },
      serviceType: ['Estrutura Metalica para Galpao', 'Mezanino Metalico', 'Cobertura Metalica'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas/#faq',
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
    text: 'Cobertura para área de lazer Guarulhos: guia completo',
    href: '/blog/cobertura-para-area-de-lazer-guarulhos-guia-completo-para-escolher-a-melhor-solucao-para-seu-espaco/',
  },
  {
    text: 'Serralheria Jardim Cumbica: soluções completas em metal',
    href: '/blog/serralheria-jardim-cumbica-solucoes-completas-em-metal/',
  },
  {
    text: 'Motor para portão industrial Guarulhos: por que escolher o modelo certo',
    href: '/blog/motor-para-portao-industrial-guarulhos-por-que-escolher-o-modelo-certo/',
  },
]

export default function EstruturasPage() {
  const breadcrumbItems = [{ label: 'Servicos', href: '/servicos' }, { label: 'Estruturas Metalicas', href: undefined }]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />
      <main>
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div className="absolute inset-0 z-0">
            <img src="/images/estruturas-metálicas-coberturas-serralheria-guarulhos.jpeg" alt="Estruturas metalicas em Guarulhos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
          </div>
          <div className="relative z-10 container-custom py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">PROJETOS INDUSTRIAIS E COMERCIAIS</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Estruturas Metalicas e Coberturas em Guarulhos <span className="text-yellow-400">| Galpoes, Mezaninos e Telhados</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Precisa de estruturas metalicas em Guarulhos para seu projeto comercial, industrial ou residencial? Somos especialistas em fabricacao e montagem de galpoes, mezaninos, coberturas metalicas e estruturas sob medida.
              </p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
                <Phone size={20} />SOLICITAR ORCAMENTO GRATIS
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solucoes em Estruturas Metalicas para Guarulhos</h2></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Estrutura para Galpoes', desc: 'Projetamos galpoes com vaos livres de ate 30 metros, utilizando vigas W, H e perfis I. Estruturas calculadas por engenheiros especializados conforme normas ABNT.', items: ['Vaos de ate 30m', 'Projeto estrutural'] },
                { title: 'Mezanino Metalico', desc: 'Solucao mais economica para duplicar a area util. Estrutura em perfis de aco carbono com piso em chapa, concreto ou madeira e escadas integradas.', items: ['Ampliacao vertical', 'Sem expansao lateral'] },
                { title: 'Coberturas Metalicas', desc: 'Telhas de aco galvanizado, galvalume ou termoacusticas. Projetos com calhas, rufos, beirais e estrutura completa. Prazo ate 50% menor que concreto.', items: ['Execucao rapida', 'Custo-beneficio'] },
              ].map((tipo) => (
                <div key={tipo.title} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tipo.title}</h3>
                  <p className="text-gray-600 mb-4">{tipo.desc}</p>
                  <ul className="space-y-2">{tipo.items.map((item) => (<li key={item} className="flex items-center gap-2 text-sm text-gray-600"><Check size={16} className="text-green-500" /> {item}</li>))}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom"><div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Perfis e Materiais Utilizados</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Trabalhamos com materiais certificados das principais siderurgicas:</p>
              <ul className="space-y-3">{['Vigas W, H, I e HP - ASTM A572', 'Perfis U, C e Z dobrados - aco carbono SAE 1045', 'Chapas de aco - ASTM A36, cortadas a plasma CNC', 'Tubos estruturais - quadrados, retangulares e redondos', 'Aco galvanizado e galvalume - para coberturas expostas'].map((item, i) => (<li key={i} className="flex items-start gap-3"><Check size={20} className="text-blue-600 flex-shrink-0 mt-1" /><span className="text-gray-700">{item}</span></li>))}</ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl"><img src="/images/mezanino-serralheria-guarulhos.jpeg" alt="Mezanino metalico" className="w-full h-auto" loading="lazy" /></div>
          </div></div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Processos de Fabricacao de Alta Precisao</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Corte a plasma CNC - precisao milimetrica', 'Solda MIG, MAG e TIG - soldadores certificados', 'Dobradeiras e calandragem - perfis especiais', 'Pintura eletrostatica a po - fosfatizacao previa'].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-3"><Check size={24} className="text-yellow-400 flex-shrink-0" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2"><Phone size={20} />SOLICITAR ORCAMENTO</a>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} title="Perguntas Frequentes sobre Estruturas Metalicas" />

        <section className="section-padding bg-gray-50">
          <div className="container-custom"><div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Conheca tambem nossos outros servicos</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Portoes Automaticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' },
                { title: 'Grades de Protecao', desc: 'Seguranca para sua familia', link: '/servicos/grades-seguranca' },
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
            <RelatedLinks
              items={blogLinks}
              title="Aprenda mais sobre estruturas metálicas no nosso blog"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
