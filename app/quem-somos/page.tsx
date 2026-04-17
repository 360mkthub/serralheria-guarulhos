import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Award, Shield, Clock, Phone, MapPin, Star, Users, Wrench } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BannerTop } from '@/components/Banners'
import Breadcrumbs, { generateBreadcrumbSchema } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Quem Somos | Serralheria em Guarulhos - 15 Anos de Experiencia',
  description: 'Conheca a Serralheria em Guarulhos. Mais de 15 anos de experiencia em portoes automaticos, grades de protecao e estruturas metalicas. Qualidade e garantia!',
  alternates: { canonical: 'https://serralheriaemguarulhos.com/quem-somos' },
  openGraph: { 
    title: 'Quem Somos | Serralheria em Guarulhos', 
    description: '15 anos de experiencia em serralheria em Guarulhos.', 
    url: 'https://serralheriaemguarulhos.com/quem-somos', 
    locale: 'pt_BR', 
    type: 'website' 
  },
}

export default function QuemSomosPage() {
  const breadcrumbItems = [{ label: 'Quem Somos', href: '/quem-somos' }]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)
  
  const jsonLd = { 
    '@context': 'https://schema.org', 
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://serralheriaemguarulhos.com/quem-somos/#webpage',
        url: 'https://serralheriaemguarulhos.com/quem-somos',
        name: 'Quem Somos - Serralheria em Guarulhos',
        description: 'Conheca a Serralheria em Guarulhos. Mais de 15 anos de experiencia em portoes, grades e estruturas.',
        mainEntity: {
          '@type': 'LocalBusiness',
          '@id': 'https://serralheriaemguarulhos.com/#localbusiness',
          name: 'Serralheria em Guarulhos',
          description: 'Especialistas em serralheria em Guarulhos com 15 anos de experiencia',
          url: 'https://serralheriaemguarulhos.com',
          telephone: '+5551991606477',
          priceRange: '$$',
          image: 'https://serralheriaemguarulhos.com/images/serralheiro-mario-vargas-serralheria-guarulhos.jpg',
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
        }
      }
    ]
  }

  const differentials = [
    { icon: Award, title: '15 Anos de Experiencia', desc: 'Tradicao em serralheria em Guarulhos' },
    { icon: Shield, title: 'Garantia Total', desc: 'Garantia de ate 5 anos em nossos servicos' },
    { icon: Clock, title: 'Atendimento Rapido', desc: 'Orcamento em ate 24 horas' },
    { icon: Users, title: 'Equipe Especializada', desc: 'Profissionais certificados e experientes' },
    { icon: Star, title: 'Materiais de Qualidade', desc: 'Aco carbono, inox e aluminio premium' },
    { icon: MapPin, title: 'Cobertura Total', desc: 'Todos os bairros de Guarulhos' },
  ]

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
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-6">NOSSA HISTORIA</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Quem Somos <span className="text-yellow-400">{'| Serralheria em Guarulhos'}</span></h1>
              <p className="text-xl text-blue-100 leading-relaxed">Ha mais de 15 anos, a Serralheria em Guarulhos se dedica a oferecer solucoes completas em estruturas metalicas, com foco em qualidade, seguranca e satisfacao dos nossos clientes.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa Trajetoria em <span className="text-gradient">Guarulhos</span></h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>A Serralheria em Guarulhos nasceu da paixao pelo trabalho bem feito e do compromisso com a seguranca das familias e empresas da nossa cidade.</p>
                  <p>Ao longo de mais de 15 anos, conquistamos a confianca de milhares de clientes. De reparos residenciais a projetos industriais, cada trabalho e realizado com dedicacao.</p>
                  <p>Nossa equipe e formada por profissionais altamente qualificados, investindo constantemente em capacitacao e equipamentos modernos.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {differentials.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="mario" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-blue-800 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl mx-auto mb-6">
                      <img src="/images/serralheiro-mario-vargas-serralheria-guarulhos.jpg" alt="Mario Vargas - Serralheiro Especialista em Guarulhos" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">ESPECIALISTA</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">15 ANOS DE EXPERIENCIA</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mario Vargas</h2>
                  <p className="text-xl text-blue-600 font-medium mb-6">Serralheiro Especialista em Guarulhos</p>
                  <div className="prose prose-lg text-gray-600 mb-8">
                    <p>Mario Vargas e o fundador e especialista tecnico da Serralheria em Guarulhos. Com 15 anos de experiencia, ele se tornou referencia em portoes e estruturas metalicas.</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-yellow-500" />Certificacoes</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                        <p className="font-bold text-gray-900">NR-12</p>
                        <p className="text-xs text-gray-600">Seguranca em Maquinas</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
                        <p className="font-bold text-gray-900">NR-18</p>
                        <p className="text-xs text-gray-600">Meio Ambiente de Trabalho</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-orange-500">
                        <p className="font-bold text-gray-900">NR-35</p>
                        <p className="text-xs text-gray-600">Trabalho em Altura</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Wrench className="w-5 h-5 text-blue-600" />Especialidades</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Portoes', 'Grades', 'Estruturas', 'Solda'].map((item) => (
                        <span key={item} className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full flex items-center gap-2">
                          <Check className="w-4 h-4" />{item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href="https://wa.me/5551991606477?text=Olá! Vim do site e quero falar com o Mário." target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    <Phone size={20} className="mr-2" />Falar com o Mario
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para seu Projeto?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Orcamento gratis em ate 24h!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2">
                <Phone size={20} />Solicitar Orcamento
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
