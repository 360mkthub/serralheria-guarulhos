import { Check, Award, Users, Clock } from 'lucide-react'
import { HERO_ABOUT_IMAGE_SRC } from '@/lib/site-images'

const About = () => {
  const differentials = [
    'Mais de 15 anos de experiência no mercado',
    'Equipe de serralheiros qualificados e certificados',
    'Materiais de primeira linha',
    'Atendimento personalizado e humanizado',
    'Orçamento grátis e sem compromisso',
    'Garantia em todos os serviços',
  ]

  const highlights = [
    { icon: Award, value: 'Guarulhos', label: 'e Região' },
    { icon: Users, value: 'Foco', label: 'em Qualidade' },
    { icon: Clock, value: 'Orçamento', label: 'Grátis' },
  ]

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Otimizada */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-square">
              <img
                src={HERO_ABOUT_IMAGE_SRC}
                alt="Equipe de serralheria especializada em Guarulhos"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl z-10">
              <div className="text-lg font-bold">Projetos</div>
              <div className="text-sm opacity-90">sob medida</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              QUEM SOMOS
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por Que Escolher Nossa <span className="text-blue-600">Serralheria em Guarulhos?</span>
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Somos especialistas em <strong>serralheria em Guarulhos</strong> com mais de <strong>15 anos de experiência</strong>. Nossa equipe de serralheiros qualificados está preparada para atender desde pequenos reparos até grandes projetos industriais.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Atendemos <strong>todos os bairros de Guarulhos</strong> e também Arujá, Itaquaquecetuba, Suzano, São Paulo (Zona Leste) e toda Grande São Paulo.
            </p>

            {/* Differentials */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
