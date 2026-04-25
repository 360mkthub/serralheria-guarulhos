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
    absolute: 'Estruturas Metálicas em Guarulhos | Coberturas, Mezaninos e Galpões',
  },
  description:
    'Projetos de estruturas metálicas em Guarulhos para coberturas, mezaninos e galpões. Fabricação sob medida e atendimento rápido.',
  keywords: ['estruturas metálicas Guarulhos', 'galpão metálico', 'mezanino', 'cobertura metálica', 'telhado industrial'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas/' },
  openGraph: {
    title: 'Estruturas Metálicas em Guarulhos | Coberturas, Mezaninos e Galpões',
    description:
      'Projetos de estruturas metálicas em Guarulhos para coberturas, mezaninos e galpões. Fabricação sob medida e atendimento rápido.',
    url: 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas/',
    images: [{ url: 'https://serralheriaemguarulhos.com/images/estruturas-metálicas-coberturas-serralheria-guarulhos.jpeg', width: 1200, height: 630, alt: 'Estruturas metálicas em Guarulhos' }],
    locale: 'pt_BR', 
    type: 'website',
  },
}

const faqs = [
  { id: '1', question: 'Quanto custa estrutura metálica por m² em Guarulhos?', answer: 'Os valores dependem do material escolhido. Entre em contato e solicite um orçamento.' },
  { id: '2', question: 'Qual a diferença entre viga I e viga H?', answer: 'A viga I possui abas estreitas e é indicada para cargas moderadas. A viga H (ou W) tem abas mais largas e espessas, suportando maiores cargas.' },
  { id: '3', question: 'Como calcular o orçamento para um galpão metálico?', answer: 'O orçamento considera: área construída, altura do pé-direito, distância entre pilares e tipo de cobertura.' },
  { id: '4', question: 'Quais as vantagens da estrutura metálica sobre concreto?', answer: 'Maior rapidez de execução (até 50% mais rápido), menor desperdício de material e 100% reciclável.' },
  { id: '5', question: 'Qual o prazo de execução de uma estrutura metálica?', answer: 'O prazo varia de acordo com a complexidade. Entre em contato para uma previsão detalhada do seu projeto.' },
  { id: '6', question: 'É necessário projeto de engenharia para estrutura metálica?', answer: 'Sim, todo projeto estrutural metálico deve ser calculado e assinado por engenheiro conforme normas ABNT.' },
  { id: '7', question: 'Vocês fazem manutenção em estruturas metálicas existentes?', answer: 'Sim, realizamos inspeções, reparos de solda, pintura anticorrosiva e reforço estrutural em Guarulhos.' },
  { id: '8', question: 'Quais bairros de Guarulhos vocês atendem?', answer: 'Atuamos em Vila Galvão, Centro, Macedo, Jardim Maia, Vila Augusta, Cumbica e toda a região.' },
  { id: '9', question: 'É possível ampliar uma estrutura metálica existente?', answer: 'Sim, a modularidade do sistema metálico permite ampliações futuras com mínima interferência na estrutura original.' },
  { id: '10', question: 'Qual a garantia das estruturas metálicas instaladas?', answer: 'Oferecemos garantia de 5 anos na estrutura contra defeitos de fabricação, além de assistência técnica.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://serralheriaemguarulhos.com/servicos/' },
    { '@type': 'ListItem', position: 3, name: 'Estruturas metálicas', item: 'https://serralheriaemguarulhos.com/servicos/estruturas-metalicas/' },
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
      name: 'Estruturas metálicas e coberturas em Guarulhos',
      description: 'Fabricação e montagem de galpões, mezaninos e coberturas metálicas em Guarulhos',
      provider: { '@id': 'https://serralheriaemguarulhos.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Guarulhos' },
      serviceType: ['Estrutura metálica para galpão', 'Mezanino metálico', 'Cobertura metálica'],
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
  const breadcrumbItems = [{ label: 'Serviços', href: '/servicos' }, { label: 'Estruturas metálicas', href: undefined }]

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
            <img src="/images/estruturas-metálicas-coberturas-serralheria-guarulhos.jpeg" alt="Estruturas metálicas em Guarulhos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
          </div>
          <div className="relative z-10 container-custom py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">PROJETOS INDUSTRIAIS E COMERCIAIS</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Estruturas metálicas e coberturas em Guarulhos <span className="text-yellow-400">| Galpões, mezaninos e telhados</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Precisa de estruturas metálicas em Guarulhos para seu projeto comercial, industrial ou residencial? Somos especialistas em fabricação e montagem de galpões, mezaninos, coberturas metálicas e estruturas sob medida.
              </p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
                <Phone size={20} />SOLICITAR ORÇAMENTO GRÁTIS
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluções em estruturas metálicas para Guarulhos</h2></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Estrutura para galpões', desc: 'Projetamos galpões com vãos livres de até 30 metros, utilizando vigas W, H e perfis I. Estruturas calculadas por engenheiros especializados conforme normas ABNT.', items: ['Vãos de até 30m', 'Projeto estrutural'] },
                { title: 'Mezanino metálico', desc: 'Solução mais econômica para duplicar a área útil. Estrutura em perfis de aço carbono com piso em chapa, concreto ou madeira e escadas integradas.', items: ['Ampliação vertical', 'Sem expansão lateral'] },
                { title: 'Coberturas metálicas', desc: 'Telhas de aço galvanizado, galvalume ou termoacústicas. Projetos com calhas, rufos, beirais e estrutura completa. Prazo até 50% menor que concreto.', items: ['Execução rápida', 'Custo-benefício'] },
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
              <p className="text-gray-600 mb-6 leading-relaxed">Trabalhamos com materiais certificados das principais siderúrgicas:</p>
              <ul className="space-y-3">{['Vigas W, H, I e HP - ASTM A572', 'Perfis U, C e Z dobrados - aço carbono SAE 1045', 'Chapas de aço - ASTM A36, cortadas a plasma CNC', 'Tubos estruturais - quadrados, retangulares e redondos', 'Aço galvanizado e galvalume - para coberturas expostas'].map((item, i) => (<li key={i} className="flex items-start gap-3"><Check size={20} className="text-blue-600 flex-shrink-0 mt-1" /><span className="text-gray-700">{item}</span></li>))}</ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl"><img src="/images/mezanino-serralheria-guarulhos.jpeg" alt="Mezanino metálico" className="w-full h-auto" loading="lazy" /></div>
          </div></div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Processos de fabricação de alta precisão</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Corte a plasma CNC - precisão milimétrica', 'Solda MIG, MAG e TIG - soldadores certificados', 'Dobradeiras e calandragem - perfis especiais', 'Pintura eletrostática a pó - fosfatização prévia'].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-3"><Check size={24} className="text-yellow-400 flex-shrink-0" /><span className="text-sm">{item}</span></div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2"><Phone size={20} />SOLICITAR ORÇAMENTO</a>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={faqs} title="Perguntas frequentes sobre estruturas metálicas" />

        <section className="section-padding bg-gray-50">
          <div className="container-custom"><div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Conheça também nossos outros serviços</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Portões automáticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' },
                { title: 'Grades de proteção', desc: 'Segurança para sua família', link: '/servicos/grades-seguranca' },
                { title: 'Escadas e corrimãos', desc: 'Design e segurança para seu projeto', link: '/servicos/escadas-manutencao' },
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
