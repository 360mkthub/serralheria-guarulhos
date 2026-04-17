import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, MapPin, Clock, Check, ArrowRight, Phone } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BannerTop } from '@/components/Banners'
import Breadcrumbs, { generateBreadcrumbSchema } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: {
    absolute: 'Contato | Solicite Orçamento de Serralheria em Guarulhos',
  },
  description: 'Fale agora pelo WhatsApp e solicite orçamento para portões, grades e estruturas metálicas em Guarulhos. Atendimento rápido.',
  alternates: { canonical: 'https://serralheriaemguarulhos.com/contato' },
  openGraph: { 
    title: 'Contato | Solicite Orçamento de Serralheria em Guarulhos', 
    description: 'Fale agora pelo WhatsApp e solicite orçamento para portões, grades e estruturas metálicas em Guarulhos. Atendimento rápido.', 
    url: 'https://serralheriaemguarulhos.com/contato', 
    locale: 'pt_BR', 
    type: 'website' 
  },
}

export default function ContatoPage() {
  const breadcrumbItems = [{ label: 'Contato', href: '/contato' }]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)
  
  const jsonLd = { 
    '@context': 'https://schema.org', 
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://serralheriaemguarulhos.com/contato/#webpage',
        url: 'https://serralheriaemguarulhos.com/contato',
        name: 'Contato - Serralheria em Guarulhos',
        description: 'Entre em contato com a Serralheria em Guarulhos para orçamentos rápidos.',
        mainEntity: {
          '@type': 'LocalBusiness',
          '@id': 'https://serralheriaemguarulhos.com/#localbusiness',
          name: 'Serralheria em Guarulhos',
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
          openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00']
        }
      }
    ]
  }

  const benefits = ['Orcamento gratis em ate 24h', 'Atendimento em todos os bairros', 'Garantia em todos os servicos', '15 anos de experiencia']
  const bairros = ['Vila Galvao', 'Macedo', 'Cumbica', 'Jardim Maia', 'Centro', 'Vila Augusta', 'Ponte Grande', 'Gopoúva']

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
                <MapPin className="w-4 h-4 inline mr-1" />ESTAMOS AQUI PARA AJUDAR
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Entre em <span className="text-yellow-400">Contato</span></h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">Precisa de um orcamento para serralheria em Guarulhos? Fale diretamente conosco pelo WhatsApp e receba atendimento personalizado em minutos.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Falar com o Especialista Agora</h2>
                <p className="text-green-100 mb-8 text-lg">Clique no botao abaixo e converse diretamente com a gente pelo WhatsApp. Atendimento rapido em todos os bairros de Guarulhos!</p>
                <a href="https://wa.me/5551991606477?text=Olá! Vim do site e quero mais informações." target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-3 px-8 py-5 bg-white text-green-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                  INICIAR CONVERSA NO WHATSAPP
                </a>
                <div className="mt-6 flex items-center justify-center gap-2 text-green-100">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-sm">Online agora • Resposta em minutos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Horario de Atendimento</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between"><span>Segunda a Sexta</span><span className="font-medium">8h as 18h</span></p>
                  <p className="flex justify-between"><span>Sabado</span><span className="font-medium">8h as 12h</span></p>
                  <p className="flex justify-between text-green-600"><span>Emergencias</span><span className="font-medium">24h</span></p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Onde Atendemos</h3>
                <p className="text-gray-600 mb-4">Atendemos todos os bairros de Guarulhos e regiao metropolitana:</p>
                <div className="flex flex-wrap gap-2">
                  {bairros.map((b) => (
                    <span key={b} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{b}</span>
                  ))}
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">+ todos os bairros</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Check className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Por que Nos Escolher?</h3>
                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Servicos</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Portoes Automaticos', desc: 'Basculante, deslizante e pivotante', link: '/servicos/portoes-automaticos' }, 
                { title: 'Grades de Seguranca', desc: 'Ferro, aluminio e aco inox', link: '/servicos/grades-seguranca' }, 
                { title: 'Estruturas Metalicas', desc: 'Galpoes, mezaninos e coberturas', link: '/servicos/estruturas-metalicas' }, 
                { title: 'Escadas e Corrimaos', desc: 'Design e seguranca', link: '/servicos/escadas-manutencao' }
              ].map((s) => (
                <Link key={s.link} href={s.link} className="group bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium">Saiba mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-blue-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nao Espere Mais!</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Orcamento gratis em ate 24h. Atendimento rapido em todos os bairros de Guarulhos.</p>
            <a href="https://wa.me/5551991606477?text=Olá! Vim do site e quero mais informações." target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              <MessageCircle className="w-5 h-5" />FALAR NO WHATSAPP
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
