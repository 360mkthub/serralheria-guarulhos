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
    absolute: 'Escadas e Corrimãos em Guarulhos | Ferro, Inox e Alumínio',
  },
  description:
    'Escadas, corrimãos e guarda-corpos em Guarulhos com fabricação sob medida em ferro, inox e alumínio. Solicite orçamento.',
  keywords: ['escadas metalicas Guarulhos', 'corrimao de inox', 'corrimao de aluminio', 'escada caracol', 'guarda-corpo'],
  alternates: { canonical: 'https://serralheriaemguarulhos.com/servicos/escadas-manutencao' },
  openGraph: {
    title: 'Escadas e Corrimãos em Guarulhos | Ferro, Inox e Alumínio',
    description:
      'Escadas, corrimãos e guarda-corpos em Guarulhos com fabricação sob medida em ferro, inox e alumínio. Solicite orçamento.',
    url: 'https://serralheriaemguarulhos.com/servicos/escadas-manutencao',
    images: [{ url: 'https://serralheriaemguarulhos.com/images/escadas,corrimaos-serralheria-guarulhos.jpeg', width: 1200, height: 630, alt: 'Escadas e corrimaos em Guarulhos' }],
    locale: 'pt_BR', 
    type: 'website',
  },
}

const faqs = [
  { id: '1', question: 'Quanto custa corrimao de inox por metro em Guarulhos?', answer: 'Os valores dependem do material escolhido. Entre em contato e solicite um orcamento.' },
  { id: '2', question: 'Qual a diferenca entre corrimao de aluminio e inox?', answer: 'O aluminio e mais leve e barato, mas menos resistente a impactos. O inox oferece maior durabilidade, resistencia e aparencia premium.' },
  { id: '3', question: 'Como fazer manutencao de corrimao de inox?', answer: 'Limpeza regular com pano macio e agua com sabao neutro. Evite produtos abrasivos. Para manchas, utilize polidor especifico para inox.' },
  { id: '4', question: 'Qual a altura ideal para corrimao segundo a NBR 9050?', answer: 'A norma estabelece duas alturas: 700mm para criancas e pessoas de baixa estatura, e 920mm para adultos.' },
  { id: '5', question: 'Quanto custa escada caracol metalica em Guarulhos?', answer: 'Os valores variam conforme diametro, material dos degraus e acabamentos. Entre em contato para um orcamento.' },
  { id: '6', question: 'E possivel instalar corrimao em escada existente?', answer: 'Sim, realizamos medicao e instalacao de corrimaos em escadas de concreto, madeira ou metalica ja construidas.' },
  { id: '7', question: 'Qual a garantia dos corrimaos instalados?', answer: 'Oferecemos garantia de 2 anos contra defeitos de fabricacao e 1 ano na instalacao.' },
  { id: '8', question: 'Voces atendem quais bairros de Guarulhos?', answer: 'Atuamos em Vila Galvao, Macedo, Jardim Maia, Centro, Vila Augusta, Cumbica e toda a regiao.' },
  { id: '9', question: 'Qual o prazo de entrega para escadas sob medida?', answer: 'O prazo varia de acordo com o tamanho e complexidade do projeto. Solicite seu orcamento gratuito.' },
  { id: '10', question: 'Os corrimaos atendem as exigencias do Corpo de Bombeiros?', answer: 'Sim, nossos guarda-corpos e corrimaos sao projetados conforme normas tecnicas para AVCB.' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serralheriaemguarulhos.com/' },
    { '@type': 'ListItem', position: 2, name: 'Servicos', item: 'https://serralheriaemguarulhos.com/servicos' },
    { '@type': 'ListItem', position: 3, name: 'Escadas e Corrimaos', item: 'https://serralheriaemguarulhos.com/servicos/escadas-manutencao' },
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
      image: 'https://serralheriaemguarulhos.com/images/escadas,corrimaos-serralheria-guarulhos.jpeg',
      address: { 
        '@type': 'PostalAddress', 
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
      '@id': 'https://serralheriaemguarulhos.com/servicos/escadas-manutencao/#service',
      name: 'Escadas, Corrimaos e Manutencao em Guarulhos',
      description: 'Fabricacao de escadas metalicas, corrimaos e guarda-corpos em aco inox, aluminio e ferro em Guarulhos',
      provider: { '@id': 'https://serralheriaemguarulhos.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Guarulhos' },
      serviceType: ['Escada Metalica Caracol', 'Escada com Patamar', 'Corrimao de Aco Inox', 'Guarda-Corpo'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://serralheriaemguarulhos.com/servicos/escadas-manutencao/#faq',
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
    text: 'Serralheria Jardim Cumbica: soluções completas em metal',
    href: '/blog/serralheria-jardim-cumbica-solucoes-completas-em-metal/',
  },
  {
    text: 'Portão de ferro vs alumínio: qual a melhor escolha para sua casa ou empresa?',
    href: '/blog/portao-de-ferro-vs-aluminio-qual-a-melhor-escolha-para-sua-casa-ou-empresa/',
  },
]

export default function EscadasPage() {
  const breadcrumbItems = [
    { label: 'Servicos', href: '/servicos' }, 
    { label: 'Escadas e Corrimaos', href: undefined }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Breadcrumbs items={breadcrumbItems} schema={breadcrumbSchema} />
      <main>
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div className="absolute inset-0 z-0">
            <img src="/images/escadas,corrimaos-serralheria-guarulhos.jpeg" alt="Escadas e corrimaos em Guarulhos" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60" />
          </div>
          <div className="relative z-10 container-custom py-16">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">DESIGN E SEGURANCA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Escadas, Corrimaos e Manutencao em Guarulhos <span className="text-yellow-400">| Aco Inox, Aluminio e Ferro</span></h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">Procura por escadas metalicas e corrimaos em Guarulhos com acabamento profissional e seguranca certificada? Fabricamos escadas caracol, retas e com patamar, alem de corrimaos e guarda-corpos em aco inox, aluminio e ferro.</p>
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg">
                <Phone size={20} className="mr-2" />SOLICITAR ORCAMENTO GRATIS
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Escadas Metalicas para Todos os Projetos</h2></div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Escada Caracol Metalica', desc: 'Ideal para ambientes compactos. Modelos com diametros de 1,20m a 2,00m, degraus em chapa de aco carbono ou inox, e estrutura central em tubo de alta resistencia.', items: ['Economia de espaco', 'Design moderno'] },
                { title: 'Escada com Patamar', desc: 'Para projetos que exigem conformidade com a NBR 9050. Largura minima de 1,20m, degraus antiderrapantes e corrimaos em duas alturas (700mm e 920mm).', items: ['Acessibilidade', 'Conforme normas'] },
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
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Corrimaos e Guarda-Corpos</h2></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Corrimao de Aco Inox', desc: 'Durabilidade e estetica premium. Acabamentos polido brilhante ou escovado (satinado), com tubulacao de 38,10mm conforme NBR 9050.', items: ['Nao enferruja', 'Manutencao zero'] },
                { title: 'Corrimao de Aluminio', desc: 'Custo-beneficio e versatilidade. Resistencia a corrosao, disponivel para fixacao em parede ou com colunas (torres).', items: ['Mais leve', 'Preco acessivel'] },
                { title: 'Guarda-Corpo com Vidro', desc: 'Sofisticacao total. Torres em inox ou aluminio com vidro temperado de 8mm a 12mm. Sistemas com pincas ou canaletas U.', items: ['Visibilidade', 'Alto padrao'] },
              ].map((tipo) => (
                <div key={tipo.title} className="bg-gray-50 rounded-2xl p-8">
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

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Manutencao de Escadas e Corrimaos</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">Realizamos servicos de manutencao preventiva e corretiva:</p>
                <ul className="space-y-3">
                  {['Solda de reparo em degraus e estruturas (MIG e TIG)', 'Substituicao de corrimaos danificados ou oxidados', 'Polimento e revitalizacao de corrimaos de inox', 'Ajuste de fixacoes e reforco estrutural', 'Pintura anticorrosiva em estruturas de ferro'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><Check size={20} className="text-yellow-400 flex-shrink-0 mt-1" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/corrimao-inox-premium-serralheria-guarulhos.jpeg" alt="Corrimao de inox" className="w-full h-auto" loading="lazy" />
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="https://wa.me/5551991606477?text=Ol%C3%A1%20!%20Vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer nofollow" className="btn-secondary text-lg inline-flex items-center gap-2">
                <Phone size={20} />SOLICITAR ORCAMENTO
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom"><div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8"><h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Conformidade com Normas de Acessibilidade</h2><p className="text-gray-600">Todos nossos corrimaos atendem a NBR 9050 (2020)</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Altura dupla: 700mm e 920mm do piso', 'Tubulacao redonda: 38,10mm de diametro', 'Extremidades recurvadas com avanco de 300mm', 'Distancia da parede: 40mm'].map((item, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-4 text-center"><Check size={24} className="text-blue-600 mx-auto mb-2" /><span className="text-sm text-gray-700">{item}</span></div>
              ))}
            </div>
          </div></div>
        </section>

        <ServiceFAQ faqs={faqs} title="Perguntas Frequentes sobre Escadas e Corrimaos" />

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-gray-900 mb-4">Conheca tambem nossos outros servicos</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Portoes Automaticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' },
                { title: 'Grades de Protecao', desc: 'Seguranca para sua familia', link: '/servicos/grades-seguranca' },
                { title: 'Estruturas Metalicas', desc: 'Galpoes e coberturas', link: '/servicos/estruturas-metalicas' },
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
              title="Aprenda mais sobre serralheria no nosso blog"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
